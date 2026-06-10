# TODO_INPUT_CLIENTE.md — Input mancanti dal cliente

Elementi che il documento (`docs/Landing_Kit_bozza.docx`) NON fornisce e che servono per
completare la landing. Finché mancano, in pagina restano **placeholder** (immagini grigie)
e link segnaposto `[TODO_LINK_…]`.

## 1. Link / URL (in `src/config.ts` → `CONFIG.LINKS`)
- [ ] `KIT` — URL pagina/checkout del **Kit Conosciamoci** su elevapet.com
- [ ] `SHAMPOO` — URL pagina Shampoo Delicato (se venduto singolarmente)
- [ ] `MASCHERA` — URL pagina Maschera Nutriente
- [ ] `SCIOGLINODI` — URL pagina Scioglinodi Spray
- [ ] `SPAZZOLA` — URL pagina Spazzola Professional
> Oggi tutti i bottoni "Acquista il Kit / -40% col kit" puntano a `KIT`.

## 2. Prefill WhatsApp (in `src/config.ts`)
- [ ] Confermare il testo `WHATSAPP_TEXT` (oggi: "Ciao Eleva, vorrei un consiglio sulla routine
      anti-nodi per il mio cane.") e l'eventuale messaggio esteso `WHATSAPP_TEXT_FULL`.
- [ ] Confermare i testi della **sticky bar** ("Chiedi consigli" / "Scopri il Kit").

## 3. Immagini (collegate il 2026-06-10 da `public/images/`)
- [x] **Logo Eleva** senza "× Tavo" (header + footer) → `brand/eleva-logo.svg`
- [x] Immagine **hero** → `brand/kit-banner.jpg` (lifestyle Kit; è verticale 2:3 dentro un
      riquadro 1:1 con crop — confermare visivamente o fornire scatto quadrato)
- [x] Foto delle **4 card Kit** → cover `*-01.jpg` dei 4 prodotti
- [x] **Gallerie prodotto** → 3 foto per prodotto in `public/images/products/`
- [x] Immagine sezione **Metodo** → `brand/stefania.png` (foto fondatrice)
- [x] Immagine di **sfondo** sezione promo → `brand/about-eleva.webp` + overlay scuro
- [ ] **maschera-04 (variante Pesca) disponibile: includere in gallery? — decisione cliente.**
      Il Kit è linea Lavanda, quindi non è stata inserita di default; il file resta in
      `public/images/products/maschera/maschera-04.jpg`.
- [ ] **Foto Kit Conosciamoci** (`public/images/products/kit/kit-01..04.jpg`): pronte ma non
      collegate — nessuna sezione/drawer mostra oggi il Kit come prodotto a sé con gallery.
      Decidere se/dove usarle (es. scheda Kit dedicata o gallery nella sezione Scenari).

## 4. Recensioni
- [ ] **Nomi/iniziali** dei recensori (il doc dà solo i testi; oggi: `TODO(cliente)`, nessun nome inventato).
- [ ] Confermare i **rating** (oggi 5 stelle per tutte e 3).

## 5. Prezzi
- [ ] Il doc non indica prezzi. **Non inseriti** (niente prezzi inventati). Indicare se mostrarli e con quali importi.

## 6. Video / asset orfani (dopo le eliminazioni)
- I componenti video (carosello recensioni, sezione crash-test) sono stati **rimossi**: il doc
  non li prevedeva. Non resta alcun player video in pagina.
- [ ] I file `public/videos/*.mov` (5 file, ~243 MB) **non sono più referenziati** e **non sono
      tracciati da git**. Possono essere eliminati a mano se non servono altrove
      (non li ho rimossi: la cancellazione sarebbe irreversibile perché fuori da git).
- [ ] Decidere se reintrodurre una sezione video in futuro (e con quale hosting/consenso).

## 7. Pagine legali (decisione del cliente — NON modificate)
- [ ] `src/pages/PrivacyPolicy.tsx` e `src/pages/CookiePolicy.tsx` citano ancora **YouTube/Vimeo**
      come servizi video e il dominio `www.eleva-tavo.it`. Con i video rimossi, valutare se
      aggiornare l'informativa (servizi di terze parti non più caricati). È una **decisione legale**:
      lasciate invariate, da rivedere col cliente/consulente.

## 8. Dominio / brand
- Il dominio resta `www.eleva-tavo.it` (CNAME invariato). Un eventuale dominio senza "tavo"
  è una decisione separata (DNS gestito dal cliente su GoDaddy).

## 9. Discrepanze nel doc (applicato alla lettera; vedi `MAPPING.md`)
- [ ] Nav: il doc dice "le 4 sezioni" ma elenca **5** etichette → applicate tutte e 5. Confermare.
- [ ] TrustBar: "Consigli personalizzati" (hero) vs "Consiglio personalizzato" (chiusura):
      usata la forma plurale ovunque (componente condiviso). Confermare o richiedere testi distinti.

## 10. Font
- [ ] Font: landing in DM Sans, sito ufficiale in Poppins/Montserrat — allineare? (decisione cliente)
