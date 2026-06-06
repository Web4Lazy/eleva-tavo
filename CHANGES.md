# CHANGES.md — Redesign "Metodo Eleva"

Branch: `redesign/metodo-eleva`. Conversione della landing da **Eleva × Tavo**
(seggiolini/passeggini/trasportini) al **Metodo Eleva** (routine anti-nodi per cani a
pelo lungo). Testi presi **alla lettera** da `docs/Landing_Kit_bozza.docx`.

> ⚠️ **Tutte le immagini sono placeholder grigi.** Servono i media definitivi del cliente
> (vedi `TODO_INPUT_CLIENTE.md`). Il layout (dimensioni, proporzioni) è mantenuto.

## Sezioni ELIMINATE (non coperte dal documento)
- **ExpandableVideoSection** (video crash-test / ECE R129): il cliente l'aveva marcata
  "da valutare" e il doc non fornisce contenuto sostitutivo → rimossa.
- **ConciergeSection** ("Assistente dedicato"): nessun testo nel doc → rimossa.
- **VideoFocusCarousel** (carosello "Unboxing e recensioni" dentro le Recensioni):
  non previsto dal doc → rimosso; restano le sole recensioni testuali.
- **AssistanceBanner**: dead code non rendrizzato → rimosso.
- Asset orfani rimossi: `crash-test-cover.png`, `ece-r129.png`.
- I video `public/videos/*.mov` non sono più referenziati (vedi `TODO_INPUT_CLIENTE.md`).

## Sezioni AGGIORNATE (sezione per sezione)

### Header
- Top strip: "Il Metodo Eleva per un manto lungo più liscio, setoso e luminoso. Supporto WhatsApp lun-ven 9-18."
- Nav: **Nodi (#hero) · Metodo (#manifesto) · Kit (#scenari) · Spazzola (#prodotto-spazzola) · FAQ (#faq)**.
- CTA: "Chiedi consigli". Logo → placeholder.

### Hero
- Titolo "Stop ai nodi con il Metodo Eleva" + sottotitoli del doc.
- 3 micro-benefici: "Aiuta a districare i nodi" / "Routine semplice in 4 step" / "Consigli personalizzati su WhatsApp".
- Bottoni: "Scopri il Kit" (→ #scenari) + "Chiedi consigli" (→ WhatsApp). Immagine → placeholder.

### TrustBar (hero + chiusura)
- "Checkout su Eleva · Corriere espresso 24-48 ore · Consigli personalizzati Eleva".
- "Assistenza WhatsApp lun-ven 9-18 — rispondiamo in giornata."

### Kit (ScenariSection, `#scenari`)
- Titolo "Inizia dal Kit Conosciamoci più spazzola Eleva" + sottotitolo.
- 4 card (Shampoo / Maschera / Scioglinodi / Spazzola), badge "Con il Kit: -40%" sulla Spazzola.
- Ogni card linka alla rispettiva sezione prodotto.

### Metodo (ManifestoSection, `#manifesto`)
- "Il Metodo Eleva. Routine gentile in 4 step" + testo.
- Blocco "I 4 step Eleva" + "Segui questi passaggi…": Detergi / Nutri e districa / Proteggi e districa / Spazzola.

### Domande veloci (QuickFAQSection)
- 4 card (Kit adatto? / Aiuta contro i nodi? / Come si usa la maschera? / Lo shampoo va diluito?), "Leggi di più →" a #faq.

### Schede prodotto (Step 1–4)
- Array `PRODUCTS` ristrutturato: tag step, "Ideale per / Formato consigliato (Uso consigliato per la Spazzola) / Punto forte / Quando sceglierlo", benefici, paragrafo, CTA ("Acquista il Kit", "-40% col kit").
- Rimossi i campi seggiolino (taglie/dimensioni, manuali, prezzi, Roscoe). Badge Spazzola "-40% col Kit".

### Recensioni (`#recensioni`)
- 3 recensioni testuali dal doc (nomi non forniti → `TODO(cliente)`, non inventati).

### Come funziona (ComeFunzionaSection, `#come-funziona`)
- 4 step: Parti dal Kit / Aggiungi la spazzola / Usa i prodotti in ordine / Ricevi supporto Eleva.

### FAQ (`#faq`)
- 10 domande frequenti dal doc.

### Promo (VantaggioSection, `#vantaggio`)
- "Kit + Spazzola: la routine anti-nodi completa" (-40% sulla spazzola col Kit).
- Sfondo immagine rimosso → colore solido (TODO: sfondo definitivo).

### Chiusura (`#chiusura`)
- "Inizia la routine anti-nodi Eleva" + "Scopri il Kit" / "Chiedi consiglio" + TrustBar (dark).

### Footer
- Nav allineata; copyright "© ELEVA"; logo → placeholder.

## Tecnica
- `config.ts`: testi WhatsApp riscritti per il grooming (`// TODO(cliente)`); link prodotto → placeholder `[TODO_LINK_…]`.
- Tutte le `<img>` → `ImagePlaceholder`; rimossi gli import asset inutilizzati.
- `getWhatsAppFullUrl` resta esportata (ora inutilizzata, nessun errore).
- `npx tsc --noEmit` e `npm run build` verdi.
- File di supporto: `MAPPING.md`, `TODO_INPUT_CLIENTE.md`.
