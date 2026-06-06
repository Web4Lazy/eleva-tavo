# MAPPING.md — Redesign "Metodo Eleva"

Mappatura tra i blocchi del documento cliente (`docs/Landing_Kit_bozza.docx`) e i file
del progetto. Fonte di verità testi: il docx. Dove il doc non fornisce dati (URL, prezzi,
immagini, video, manuali) → placeholder + `TODO(cliente)` raccolti in `TODO_INPUT_CLIENTE.md`.

## Corrispondenza prodotti (vecchio → nuovo)

La landing vendeva 4 prodotti Eleva × Tavo. Diventano i 4 prodotti del **Kit Conosciamoci**
(le schede "Step 1–4" del doc). L'ordine dell'array `PRODUCTS` combacia con gli Step 1→4.

| Vecchio (Tavo)            | id vecchio          | Nuovo (Metodo Eleva)   | id nuovo               | Step doc |
|---------------------------|---------------------|------------------------|------------------------|----------|
| Dupree                    | `prodotto-dupree`   | Shampoo Delicato 100ml | `prodotto-shampoo`     | Step 1   |
| Maeve™ iso                | `prodotto-maeve`    | Maschera Nutriente 50ml| `prodotto-maschera`    | Step 2   |
| Travel System             | `prodotto-travel`   | Scioglinodi Spray 50ml | `prodotto-scioglinodi` | Step 3   |
| Shell                     | `prodotto-shell`    | Spazzola Professional  | `prodotto-spazzola`    | Step 4   |

## Navigazione (doc: "Nodi · Metodo · Kit · Spazzola · FAQ")

| Voce nav  | href            | Sezione di destinazione                    |
|-----------|-----------------|--------------------------------------------|
| Nodi      | `#nodi`         | QuickFAQSection ("Domande veloci", Q&A nodi/kit) |
| Metodo    | `#metodo`       | ManifestoSection ("Il Metodo Eleva")       |
| Kit       | `#kit`          | ScenariSection (card del Kit Conosciamoci) |
| Spazzola  | `#prodotto-spazzola` | ProductSection Spazzola Professional  |
| FAQ       | `#faq`          | FAQSection                                 |

> Nota: il doc elenca "Nodi" tra le voci nav ma non fornisce una sezione dedicata "Nodi".
> Ancorata alla sezione più pertinente (Domande veloci, tutta su nodi). Vedi TODO cliente
> se si vuole una sezione "Nodi" dedicata.

## Blocco doc → file → azione

| Blocco doc | File | Azione |
|-----------|------|--------|
| Top strip "Il Metodo Eleva … Supporto WhatsApp lun-ven 9-18" | `Header.tsx` | Sostituisci testo strip |
| "Eliminare x Tavo" + nav 5 voci + bottone | `Header.tsx`, `Footer.tsx`, `config.ts` | Rebrand + nuove voci nav + nuovi href |
| Hero "Stop ai nodi…" + sottotitoli + 3 micro-benefici + bottoni | `HeroSection.tsx` | Sostituisci testi; primary "Scopri il Kit"→`#kit`, outline "Chiedi consiglio"→WhatsApp |
| TrustBar (Checkout Eleva / Corriere 24-48 / Consigli personalizzati) | `TrustBar.tsx` | Sostituisci i 3 item |
| "Inizia dal Kit Conosciamoci…" + 4 card prodotto | `ScenariSection.tsx` | Hero + 4 card (Shampoo/Maschera/Scioglinodi/Spazzola), badge "-40%" su Spazzola |
| "Il Metodo Eleva. Routine gentile in 4 step" + "I 4 step Eleva" | `ManifestoSection.tsx` | id `metodo`; titolo + intro + i 4 step (Detergi/Nutri/Proteggi/Spazzola) |
| "??????? Da valutare" (sezione crash-test) | `ExpandableVideoSection.tsx` | **NON decidere**: testo invariato + `TODO(cliente)`; solo media → placeholder |
| "Domande veloci" 4 card | `QuickFAQSection.tsx` | id `nodi`; sostituisci le 4 card |
| Schede "Step 1–4" prodotti | `ProductSection.tsx` (`PRODUCTS`) | Nuovo array 4 prodotti; adatta interfaccia `ProductData` |
| "Recensioni" 3 testi | `ReviewsSection.tsx` | Sostituisci `textReviews` con le 3 recensioni del doc |
| "Parti dal Kit / Aggiungi spazzola / Usa in ordine / Ricevi supporto" | `ComeFunzionaSection.tsx` | I 4 step "come iniziare" |
| "Domande frequenti" (10 Q&A) | `FAQSection.tsx` | Sostituisci array `faqs` |
| "Kit + Spazzola: la routine anti-nodi completa" | `VantaggioSection.tsx` | Sostituisci heading + testo; bg-image → placeholder/token |
| "Inizia la routine anti-nodi Eleva" (chiusura) | `ClosingSection.tsx` | Sostituisci testi + bottoni |
| Sezioni id + anchor | `pages/Index.tsx` | Aggiorna `SECTION_IDS` |
| Link prodotti / WhatsApp text | `config.ts` | LINKS Tavo → placeholder `[TODO_LINK_…]`; testi WhatsApp grooming |

## Collisione "come funziona" (risolta)

Il doc contiene due blocchi a 4 step:
1. **"I 4 step Eleva"** (Detergi / Nutri / Proteggi / Spazzola, con note tecniche) → confluisce
   in **ManifestoSection** (`#metodo`), che diventa la sezione completa del Metodo (intro + 4 step).
2. **"Parti dal Kit / Aggiungi la spazzola / Usa i prodotti in ordine / Ricevi supporto Eleva"**
   (onboarding) → **ComeFunzionaSection** (`#come-funziona`), che mantiene il taglio "come iniziare".

Così entrambi i blocchi hanno una collocazione, senza duplicazioni.

## Media → placeholder (tutti, per ora)

Immagini → `ImagePlaceholder`; video → nuovo `VideoPlaceholder` (mantiene gating cookie GDPR).
Dettaglio in `CHANGES.md` e `TODO_INPUT_CLIENTE.md`.
