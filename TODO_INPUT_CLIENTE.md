# TODO_INPUT_CLIENTE.md — Input mancanti dal cliente

Elementi che il documento (`docs/Landing_Kit_bozza.docx`) NON fornisce e che servono per
completare la landing. Finché mancano, in pagina restano **placeholder** (immagini/video grigi)
e link segnaposto `[TODO_LINK_…]`.

## 1. Link / URL (in `src/config.ts` → `CONFIG.LINKS`)
- [ ] `KIT` — URL pagina/checkout del **Kit Conosciamoci** su elevapet.com
- [ ] `SHAMPOO` — URL pagina Shampoo Delicato (se venduto singolarmente)
- [ ] `MASCHERA` — URL pagina Maschera Nutriente
- [ ] `SCIOGLINODI` — URL pagina Scioglinodi Spray
- [ ] `SPAZZOLA` — URL pagina Spazzola Professional
> Nota: oggi tutti i bottoni "Acquista il Kit / -40% col kit" puntano a `KIT`.
> Indicare se i singoli prodotti devono avere link propri.

## 2. Immagini (oggi tutte placeholder)
- [ ] **Logo Eleva** senza "× Tavo" (header + footer)
- [ ] Immagine **hero** (cane a pelo lungo / routine)
- [ ] Foto delle **4 card Kit** (Shampoo, Maschera, Scioglinodi, Spazzola)
- [ ] **Gallerie prodotto** (foto multiple per ciascuno dei 4 prodotti)
- [ ] Immagine sezione **Metodo** (es. Stefania & Eva / ambientata)
- [ ] Immagine **standard ECE R129 / i-Size** (sezione "da valutare")
- [ ] Immagine di **sfondo** della sezione promo (ex midnight-pattern)

## 3. Video (oggi tutti placeholder, gating cookie mantenuto)
- [ ] Video del **carosello "Unboxing e recensioni"** (9 slot) — definire quali/quanti
- [ ] Video **crash test / sicurezza** (sezione "da valutare", ex Vimeo)
> Indicare hosting (YouTube/Vimeo/self-host). La logica di consenso marketing è già pronta.

## 4. Decisioni di contenuto
- [ ] **Sezione "??????? Da valutare"** (oggi `ExpandableVideoSection`, tema crash test):
      decidere se mantenerla, riconvertirla al tema nodi/pelo o rimuoverla. Testo lasciato invariato.
- [ ] Voce nav **"Nodi"**: oggi ancorata alla sezione "Domande veloci" (l'unica tutta sui nodi).
      Confermare o indicare se serve una **sezione "Nodi" dedicata**.
- [ ] **Recensioni**: il doc non fornisce nomi/iniziali degli autori né i rating.
      Oggi: autore generico "Cliente Eleva" e 5 stelle. Fornire attribuzioni e voti reali.
- [ ] **Prezzi**: il doc non indica prezzi. Non inseriti (niente prezzi inventati).
      Indicare se mostrarli e con quali importi.
- [ ] **Numero WhatsApp**: confermato `+39 351 841 1304` (invariato dal sito esistente).

## 5. Note GDPR / dominio
- Le pagine `cookie-policy` e `privacy-policy` citano ancora YouTube/Vimeo come servizi video:
  coerente, perché il gating resta e i video torneranno. Rivedere se cambia l'hosting video.
- Il dominio resta `www.eleva-tavo.it` (CNAME invariato). Se il brand vuole un dominio
  senza "tavo", è una decisione separata (DNS gestito dal cliente su GoDaddy).
