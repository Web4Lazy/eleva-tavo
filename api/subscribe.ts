// Serverless function Vercel (runtime Node, NON Edge: serve il modulo dns per il check MX).
// Salva l'email del lead magnet in Supabase. Nessun ESP/automazione: solo storage.
// Env richieste (solo lato server, MAI con prefisso VITE_): SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { promises as dns } from "node:dns";
import { createRequire } from "node:module";

// disposable-email-domains esporta direttamente un index.json (array di domini):
// un import ESM richiederebbe l'attribute `with { type: "json" }`, fragile tra versioni
// Node. createRequire lo carica con semantica CommonJS, che supporta i JSON da sempre.
const require = createRequire(import.meta.url);
const disposableDomains: string[] = require("disposable-email-domains");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DISPOSABLE_SET = new Set<string>(disposableDomains);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  const { email, consent, website } = (req.body ?? {}) as {
    email?: unknown;
    consent?: unknown;
    website?: unknown;
  };

  // Honeypot: gli umani non vedono il campo "website"; se è valorizzato è un bot.
  // Rispondiamo 200 senza inserire, così il bot non capisce di essere stato scartato.
  if (typeof website === "string" && website.trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim()) || consent !== true) {
    return res.status(400).json({ error: "Dati non validi" });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const domain = normalizedEmail.split("@")[1];

  if (DISPOSABLE_SET.has(domain)) {
    return res.status(422).json({ error: "email non valida" });
  }

  try {
    const mxRecords = await dns.resolveMx(domain);
    if (!mxRecords || mxRecords.length === 0) {
      return res.status(422).json({ error: "email non valida" });
    }
  } catch {
    return res.status(422).json({ error: "email non valida" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    console.error("[subscribe] SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY mancanti");
    return res.status(500).json({ error: "Errore interno" });
  }

  // Client creato dentro la funzione: la service_role key vive solo qui.
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("lead_emails").insert({
    email: normalizedEmail,
    consent: true,
    source: "guida-metodo-eleva",
  });

  if (error) {
    if (error.code === "23505") {
      return res.status(409).json({ error: "già registrata" });
    }
    // Niente email in chiaro nei log.
    console.error("[subscribe] insert fallita, codice:", error.code);
    return res.status(500).json({ error: "Errore interno" });
  }

  return res.status(200).json({ ok: true });
}
