# CHANGES.md — Redesign "Metodo Eleva"

Branch: `redesign/metodo-eleva`. Conversione della landing da **Eleva × Tavo**
(seggiolini/passeggini/trasportini) al **Metodo Eleva** (routine anti-nodi per cani a
pelo lungo). Testi presi **alla lettera** da `docs/Landing_Kit_bozza.docx`.

> ⚠️ ~~Tutte le immagini sono placeholder grigi.~~ **Aggiornamento**: le immagini reali del
> cliente sono state collegate (vedi sezione "Immagini reali collegate" in fondo).
> Restano in `TODO_INPUT_CLIENTE.md` le decisioni aperte (maschera-04, foto Kit).

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

## Immagini reali collegate (2026-06-10)

Asset del cliente estratti in `public/images/` (referenziati con path assoluti `/images/…`,
non importati in `src/assets`). `ImagePlaceholder.tsx` resta come fallback (usato da
`ProductGallery` quando `images` non è valorizzato).

- **Header**: logo `brand/eleva-logo.svg` (h-16 lg:h-20).
- **Footer**: stesso logo. ⚠️ Il brief lo descriveva "su fondo scuro" con `brightness-0 invert`,
  ma il footer è `bg-secondary` (beige chiaro): il logo teal è leggibile così com'è, **niente
  invert** (sarebbe bianco su chiaro = invisibile).
- **Hero**: `brand/kit-banner.jpg` nel riquadro 1:1 esistente con `object-cover`
  (l'originale è verticale 2:3 → crop alto/basso), `fetchpriority="high"` (via spread,
  lowercase: React 18 non supporta la prop camelCase), senza `loading="lazy"`.
- **Manifesto**: `brand/stefania.png` (foto fondatrice, colonna desktop 320px).
- **Vantaggio**: sfondo CSS `brand/about-eleva.webp` + overlay `bg-foreground/60` per
  leggibilità del testo.
- **Scenari (4 card Kit)**: cover `*-01.jpg` di shampoo / maschera / scioglinodi / spazzola;
  badge "-40%" mantenuto sopra l'immagine della Spazzola.
- **Schede prodotto**: nuovo campo `images?: string[]` in `ProductData`, passato a
  `ProductGallery` (gallery reale con frecce + thumbnails) — 3 foto per prodotto.
  `maschera-04.jpg` esclusa (variante Pesca, il Kit è linea Lavanda → decisione cliente).
- **Foto Kit** (`products/kit/kit-01..04.jpg`): nessuna UI mostra il Kit come prodotto a sé
  (il drawer apre solo i 4 singoli) → non collegate, pronte per uso futuro (vedi TODO).
- `loading="lazy"` su tutte le immagini sotto la fold (incluse quelle di `ProductGallery`).

## Palette allineata al brand Eleva (2026-06-10)

**Palette allineata al brand Eleva (#023b38 + caldi fotografici).** Il verde precedente
(#1b3629, hsl 152 33% 16%) non esiste nel brand: sostituito ovunque dal teal del logo
`#023b38` = hsl(177 93% 12%) (lo stesso che elevapet.com usa per body text/bottoni/bordi).
Neutri scaldati verso il set fotografico: `--background` 32 45% 96%, `--secondary`/`--muted`/
`--accent` 32 62% 90% (crema #f5e6d5), `--border`/`--input` 32 25% 82%. `--foreground` ora teal.
Nuovo token accent `--peach` 28 83% 81% (#f7cca7) + colore `peach` in tailwind.config.ts,
usato SOLO per il badge "-40%" (card Scenari + ProductGallery), `bg-peach text-primary`.
Sanatoria hardcoded: `bg-[#f7f5f3]` → `bg-background` (Hero, QuickFAQ, FAQ) o `bg-secondary`
(Scenari, schede shampoo/scioglinodi — alternanza chiaro/crema mantenuta); header `#eae2d6`
→ `bg-secondary`. Invariati: card/popover, micro/muted-foreground, whatsapp, destructive,
radius, sidebar, blocco `.dark`. Il logo SVG ora combacia esattamente con `--primary`.
