# CHANGES.md — Redesign "Metodo Eleva"

Branch: `redesign/metodo-eleva`. Conversione della landing da **Eleva × Tavo**
(seggiolini/passeggini/trasportini) al **Metodo Eleva** (routine anti-nodi per cani a
pelo lungo). Testi presi da `docs/Landing_Kit_bozza.docx`.

> ⚠️ **Tutte le immagini e i video sono placeholder grigi.** Servono i media definitivi
> del cliente (vedi `TODO_INPUT_CLIENTE.md`). Il layout (dimensioni, proporzioni) è mantenuto.

## In sintesi
- Eliminato ogni riferimento "x Tavo" (marchio, logo, testi, alt, link, tracking).
- I 4 prodotti Tavo (Dupree, Maeve, Travel System, Shell) diventano i 4 prodotti del
  **Kit Conosciamoci**: Shampoo Delicato, Maschera Nutriente, Scioglinodi Spray, Spazzola Professional.
- Nuova navigazione: **Nodi · Metodo · Kit · Spazzola · FAQ**.

## Sezione per sezione

### Header
- Top strip: "Il Metodo Eleva per un manto lungo più liscio, setoso e luminoso. Supporto WhatsApp lun–ven 9–18."
- Nuove voci nav: Nodi, Metodo, Kit, Spazzola, FAQ (con nuovi anchor).
- Bottone CTA: "Chiedi consiglio".
- Logo → placeholder immagine (serve logo Eleva senza "× Tavo").

### Hero
- Titolo: "Stop ai nodi con il Metodo Eleva".
- Sottotitoli e 3 micro-benefici aggiornati ("Aiuta a districare i nodi", "Routine semplice in 4 step", "Consigli personalizzati su WhatsApp").
- Bottoni: "Scopri il Kit" (verde, → sezione Kit) + "Chiedi consiglio" (chiaro, → WhatsApp).
- Immagine hero → placeholder.

### TrustBar (sotto hero e in chiusura)
- "Checkout su Eleva · Corriere espresso 24-48 ore · Consigli personalizzati Eleva".
- "Assistenza WhatsApp lun–ven 9–18 — rispondiamo in giornata".

### Kit (ex "Scenari") — `#kit`
- Titolo: "Inizia dal Kit Conosciamoci più spazzola Eleva".
- 4 card prodotto (Shampoo / Maschera / Scioglinodi / Spazzola) con badge "Con il Kit: -40%" sulla Spazzola.
- Ogni card apre il drawer di dettaglio del prodotto.

### Metodo (ex "Manifesto") — `#metodo`
- Titolo: "Il Metodo Eleva. Routine gentile in 4 step" + testo introduttivo.
- I 4 step del metodo: Detergi / Nutri e districa / Proteggi e districa / Spazzola.

### Sezione "Da valutare" (ExpandableVideoSection)
- Lasciata **invariata nei testi** (crash test / ECE R129) con marcatore `TODO(cliente)`:
  nel doc è la sezione "??????? Da valutare". Solo i media sono placeholder.

### Consigli WhatsApp (ex "Assistente / Concierge") — `#concierge`
- "Consigli personalizzati su WhatsApp": 3 step di onboarding via WhatsApp.

### Domande veloci — `#nodi`
- 4 card Q&A (Kit adatto? / Aiuta contro i nodi? / Come si usa la maschera? / Lo shampoo va diluito?).
- È la sezione ancorata alla voce nav "Nodi".

### Schede prodotto (Step 1–4) — `#prodotto-shampoo|maschera|scioglinodi|spazzola`
- Per ogni prodotto: tag step, "Ideale per / Formato consigliato / Punto forte / Quando sceglierlo",
  elenco benefici, descrizione e CTA ("Acquista il Kit", "-40% col kit" sulla Spazzola).
- Rimossi i campi non pertinenti dei seggiolini (taglie/dimensioni, manuali, prezzi, Roscoe).

### Recensioni — `#recensioni`
- 3 recensioni testuali dal doc. Carosello video "Unboxing e recensioni" → placeholder video.

### Come iniziare (ex "Come funziona") — `#come-funziona`
- 4 step: Parti dal Kit / Aggiungi la spazzola / Usa i prodotti in ordine / Ricevi supporto Eleva.

### FAQ — `#faq`
- 10 domande frequenti riscritte (Kit, nodi, uso prodotti, spazzola, spedizione, supporto).

### Promo (ex "Vantaggio") — `#vantaggio`
- "Kit + Spazzola: la routine anti-nodi completa" (-40% sulla spazzola col Kit).
- Sfondo immagine rimosso → colore solido (TODO: sfondo definitivo).

### Chiusura — `#chiusura`
- "Inizia la routine anti-nodi Eleva" + bottoni "Scopri il Kit" / "Chiedi consiglio".

### Footer
- Voci nav allineate alla nuova navigazione. Copyright "© ELEVA". Logo → placeholder.

## Tecnica
- Nuovo componente `src/components/VideoPlaceholder.tsx` (gemello di `ImagePlaceholder`).
- Gating cookie/consenso GDPR **invariato**: i video YouTube restano dietro consenso marketing
  (senza consenso → prompt cookie; con consenso → placeholder video al posto del media).
- `config.ts`: testi WhatsApp riscritti per il grooming; link prodotto Tavo → placeholder `[TODO_LINK_…]`.
- Rimossi gli import di immagini/video Tavo non più usati. `npx tsc --noEmit` e `npm run build` verdi.
- File di supporto: `MAPPING.md` (mappatura doc→file), `TODO_INPUT_CLIENTE.md` (input mancanti).
