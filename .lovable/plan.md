

## Inserimento immagini reali nel carosello Dupree

### Cosa faremo

Sostituiremo i 7 placeholder grigi del carosello Dupree con le 7 foto reali del prodotto, nell'ordine corretto (da destra a sinistra come indicato).

### Ordine immagini nel carosello

| Posizione | Immagine |
|-----------|----------|
| 1 | Vista frontale (front) |
| 2 | Angolo frontale aperto (angle front open durable) |
| 3 | Angolo posteriore aperto (angle back open comfort) |
| 4 | Angolo posteriore con SIP e ancoraggi |
| 5 | Sul sedile auto (on seat SIP) |
| 6 | Dettaglio ancoraggi sul sedile |
| 7 | Su valigia (on suitcase) |

### Dettagli tecnici

1. **Copiare le 7 immagini** nella cartella `src/assets/dupree/` con nomi ordinati (dupree-1.png ... dupree-7.jpg/png)

2. **Modificare `ProductGallery.tsx`**: aggiungere una prop opzionale `images?: string[]` con URL reali. Quando presente, mostrare `<img>` al posto del div placeholder grigio. Mantenere il fallback placeholder per i prodotti senza immagini.

3. **Modificare `ProductSection.tsx`**: nel componente Dupree, importare le 7 immagini e passarle come prop `images` a `ProductGallery`. Aggiornare `imageCount` a 7. Gli altri prodotti (Maeve, Travel, Shell) restano con placeholder.

4. **Aggiungere `object-cover`** sulle immagini reali per mantenere l'aspect-ratio 1:1 senza distorsioni.

