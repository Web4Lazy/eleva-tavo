
# Sezione Recensioni con Doppio Carosello

## Panoramica
Aggiungere una nuova sezione "Recensioni" con due colonne affiancate: a sinistra un carosello di video-recensioni e a destra un carosello di video unboxing. I video saranno placeholder Vimeo/YouTube per ora. Lo stile seguira il design system esistente (colori, tipografia, spaziatura).

## Struttura

La sezione sara posizionata dopo `VantaggioSection` e prima di `ComeFunzionaSection` nella pagina Index.

Layout a due colonne su desktop (`lg:flex-row`), colonna singola su mobile.

## Dettagli tecnici

### 1. Creare `src/components/ReviewsSection.tsx`
- Titolo sezione (h2): "Cosa dicono i nostri clienti"
- Due colonne:
  - **Sinistra**: "Video Recensioni" - carosello con card contenenti iframe placeholder (video fittizi) + nome cliente e stella rating
  - **Destra**: "Unboxing" - carosello con card contenenti iframe placeholder + nome cliente
- Ogni carosello usa Embla Carousel (gia installato) tramite i componenti `Carousel`, `CarouselContent`, `CarouselItem` dalla UI library
- Frecce di navigazione e dots indicator sotto ogni carosello
- Dati fittizi: 4-5 recensioni per colonna con nomi italiani, rating 5 stelle, breve citazione

### 2. Dati mock
- Video recensioni: placeholder con sfondo grigio e icona play (no iframe reali per ora), nome, rating, citazione breve
- Video unboxing: stessa struttura, etichetta "Unboxing" invece di stelle

### 3. Aggiornare `src/pages/Index.tsx`
- Importare e inserire `ReviewsSection` tra `VantaggioSection` e `ComeFunzionaSection`
- Aggiungere "recensioni" a `SECTION_IDS` per il tracking scroll

### 4. Stile
- Sfondo `bg-background` (off-white) per contrasto con sezioni adiacenti
- Card con `bg-card`, bordo `border-border`, `rounded-xl`
- Icone stella con colore ambra
- Sezione padding standard `section-padding` + `container-custom`
