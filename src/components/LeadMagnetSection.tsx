import { useState } from "react";
import { Link } from "react-router-dom";
import { sendEvent } from "@/config";

const PDF_URL = "/download/guida-metodo-eleva.pdf";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Gate rapido client-side sui disposable più comuni: la blocklist COMPLETA
// e il check MX stanno lato server in /api/subscribe.
const DISPOSABLE_BLOCKLIST = [
  "mailinator.com",
  "guerrillamail.com",
  "yopmail.com",
  "10minutemail.com",
  "tempmail.com",
  "temp-mail.org",
  "getnada.com",
  "trashmail.com",
  "sharklasers.com",
  "maildrop.cc",
  "dispostable.com",
  "fakeinbox.com",
];

const isEmailAllowed = (email: string) => {
  const trimmed = email.trim().toLowerCase();
  if (!EMAIL_REGEX.test(trimmed)) return false;
  const domain = trimmed.split("@")[1];
  return !DISPOSABLE_BLOCKLIST.some((d) => domain === d || domain.endsWith(`.${d}`));
};

type Status = "idle" | "submitting" | "success" | "already" | "error";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot anti-bot
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const canSubmit = isEmailAllowed(email) && consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), consent, website }),
      });
      if (res.ok) {
        sendEvent("LeadMagnetSubmit", { section: "lead-magnet" });
        setStatus("success");
        // Avvia il download della guida senza lasciare la pagina.
        const a = document.createElement("a");
        a.href = PDF_URL;
        a.download = "";
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else if (res.status === 409) {
        setStatus("already");
      } else if (res.status === 422) {
        setStatus("error");
        setErrorMsg("Controlla l'indirizzo email inserito.");
      } else {
        setStatus("error");
        setErrorMsg("Qualcosa è andato storto, riprova.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Qualcosa è andato storto, riprova.");
    }
  };

  const done = status === "success" || status === "already";

  return (
    // Sezione bianca, contenuto in un riquadro CREAM (come .lead-capture del reference).
    <section id="guida" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid items-center gap-8 rounded-[26px] bg-secondary px-8 py-10 sm:px-11 sm:py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-11">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow mb-3">
              Non sei ancora pronto?
            </p>
            <h2 className="text-foreground mb-3">
              Scarica la mini guida: 10 minuti al giorno contro i nodi
            </h2>
            <p className="text-muted-foreground">
              Il metodo che usiamo con Eva, spiegato passo passo: dove si formano i nodi, come
              districare senza tirare e come costruire una routine gentile in 10 minuti al giorno.
              Gratis, nella tua casella email.
            </p>
          </div>

          <div>
            {done ? (
              <div
                role="status"
                aria-live="polite"
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <p className="font-semibold text-foreground mb-1">
                  {status === "already" ? "Risulti già iscritto 👋" : "Grazie! Ecco la tua guida 🎉"}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {status === "already"
                    ? "Questa email è già registrata: puoi scaricare di nuovo la guida qui sotto."
                    : "Il download parte da solo; se non succede, usa il pulsante qui sotto."}
                </p>
                <a href={PDF_URL} download className="cta-primary w-full">
                  Scarica la guida (PDF)
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
                <label htmlFor="lead-email" className="sr-only">
                  La tua email
                </label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email"
                  className="w-full rounded-xl border-[1.5px] border-border bg-card px-[18px] py-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                />

                {/* Honeypot anti-bot: invisibile agli umani, i bot lo compilano */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  aria-hidden="true"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px] h-px w-px opacity-0"
                />

                <label
                  htmlFor="lead-consent"
                  className="flex items-start gap-2.5 text-xs text-muted-foreground text-left cursor-pointer"
                >
                  <input
                    id="lead-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 flex-shrink-0 accent-primary"
                  />
                  <span>
                    Acconsento al trattamento dei miei dati per ricevere la guida e comunicazioni
                    Eleva.{" "}
                    <Link to="/privacy-policy" className="underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!canSubmit || status === "submitting"}
                  className="cta-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  {status === "submitting" ? "Invio in corso…" : "Inviami la guida gratuita"}
                </button>

                {status === "error" && (
                  <p role="status" aria-live="polite" className="text-xs font-medium text-destructive text-center">
                    {errorMsg}
                  </p>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  Niente spam. Puoi disiscriverti quando vuoi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
