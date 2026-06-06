# MAPPING.md — Redesign "Metodo Eleva"

Mappatura tra i blocchi del documento cliente (`docs/Landing_Kit_bozza.docx`) e i file
del progetto. Fonte di verità testi: il docx, applicato **alla lettera**.

> **Regola globale applicata:** le sezioni di contenuto per cui il doc NON fornisce testo
> sono state **eliminate** (file + import + uso), non reinterpretate. Restano gli elementi
> strutturali/funzionali (Footer, ProductDrawer, StickyBottomBar, FloatingWhatsApp),
> rebrandizzati. Tutto è reversibile via git (branch `redesign/metodo-eleva`).

## Corrispondenza prodotti (vecchio → nuovo)

| Vecchio (Tavo)  | id vecchio          | Nuovo (Metodo Eleva)    | id nuovo               | Step |
|-----------------|---------------------|-------------------------|------------------------|------|
| Dupree          | `prodotto-dupree`   | Shampoo Delicato 100ml  | `prodotto-shampoo`     | 1    |
| Maeve™ iso      | `prodotto-maeve`    | Maschera Nutriente 50ml | `prodotto-maschera`    | 2    |
| Travel System   | `prodotto-travel`   | Scioglinodi Spray 50ml  | `prodotto-scioglinodi` | 3    |
| Shell           | `prodotto-shell`    | Spazzola Professional   | `prodotto-spazzola`    | 4    |

## Navigazione

Il doc dice "le **4** sezioni" ma elenca **5** etichette → applicate tutte e 5 (discrepanza segnalata).

| Voce nav | href                  | Sezione |
|----------|-----------------------|---------|
| Nodi     | `#hero`               | HeroSection |
| Metodo   | `#manifesto`          | ManifestoSection |
| Kit      | `#scenari`            | ScenariSection (card del Kit) |
| Spazzola | `#prodotto-spazzola`  | ProductSection Spazzola |
| FAQ      | `#faq`                | FAQSection |

## Blocco doc → file → azione

| Blocco doc | File | Azione |
|-----------|------|--------|
| Top strip "Il Metodo Eleva…" | `Header.tsx` | Sostituito testo strip |
| Eliminare "x Tavo" | tutti i componenti | Rebrand globale (testi + alt) |
| Nav 5 voci | `Header.tsx`, `Footer.tsx` | Nuove etichette + anchor |
| Bottone header "Chiedi consigli" | `Header.tsx` | Sostituito |
| Hero + 3 micro-benefici | `HeroSection.tsx` | Testi + bottoni (Scopri il Kit→`#scenari`, Chiedi consigli→WhatsApp) |
| Trust row | `TrustBar.tsx` | 3 voci aggiornate |
| "Inizia dal Kit" + 4 card | `ScenariSection.tsx` | Titolo/sub + 4 card prodotto, badge "Con il Kit: -40%" |
| "Il Metodo Eleva" + "I 4 step Eleva" | `ManifestoSection.tsx` | Titolo + intro + 4 step |
| **Sezione "??????" crash-test** | `ExpandableVideoSection.tsx` | **ELIMINATA** (non coperta dal doc) |
| "Domande veloci" 4 card | `QuickFAQSection.tsx` | 4 card sostituite, link "Leggi di più →" a `#faq` |
| Schede prodotto Step 1-4 | `ProductSection.tsx` (`PRODUCTS`) | Cambio strutturale dell'array + interfaccia |
| "Recensioni" (3) | `ReviewsSection.tsx` | 3 recensioni; **VideoFocusCarousel ELIMINATO** |
| **ConciergeSection** (no testo nel doc) | `ConciergeSection.tsx` | **ELIMINATA** |
| "Parti dal Kit" 1-4 | `ComeFunzionaSection.tsx` | 4 step sostituiti |
| FAQ "Domande frequenti" | `FAQSection.tsx` | 10 Q&A sostituite |
| Banner "Kit + Spazzola -40%" | `VantaggioSection.tsx` | Testo + CTA; sfondo immagine → colore solido |
| Chiusura "Inizia la routine" | `ClosingSection.tsx` | Testi + bottoni |
| (non rendrizzata, dead code) | `AssistanceBanner.tsx` | **ELIMINATA** |
| id sezioni | `pages/Index.tsx` | `SECTION_IDS` aggiornato; rimossi `concierge` e sezioni eliminate |
| Link prodotti / testi WhatsApp | `config.ts` | LINKS Tavo → placeholder `[TODO_LINK_…]`; prefill WhatsApp grooming |

## Componenti eliminati (riassunto)
- `ExpandableVideoSection.tsx` — sezione crash-test "da valutare", nessun testo nel doc.
- `ConciergeSection.tsx` — nessun testo nel doc.
- `VideoFocusCarousel.tsx` — carosello video dentro le recensioni, non previsto dal doc.
- `VideoPlaceholder.tsx` — non più necessario (nessun player video residuo).
- `AssistanceBanner.tsx` — dead code, non rendrizzato e non coperto dal doc.
- Asset orfani rimossi: `src/assets/crash-test-cover.png`, `src/assets/ece-r129.png`.

## Discrepanze segnalate (testi del doc applicati alla lettera)
1. **Nav**: il doc scrive "le 4 sezioni" ma elenca 5 etichette → applicate tutte e 5.
2. **TrustBar condivisa**: il doc usa "Consigli personalizzati Eleva" (hero) e "Consiglio
   personalizzato Eleva" (chiusura). Essendo `TrustBar` un componente condiviso, usata la
   forma plurale "Consigli personalizzati Eleva" ovunque. Vedi `TODO_INPUT_CLIENTE.md`.
3. **Bottoni WhatsApp**: il doc alterna "Chiedi consigli" (header/hero/sticky) e "Chiedi
   consiglio" (chiusura). Rispettate entrambe le forme alla lettera dove indicate.

## Media → placeholder
Tutte le immagini → `ImagePlaceholder`. Nessun player video residuo dopo le eliminazioni.
Dettaglio in `CHANGES.md` e `TODO_INPUT_CLIENTE.md`.
