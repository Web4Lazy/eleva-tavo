

## Inserimento immagini reali nel carosello Shell

### Cosa faremo

Sostituiremo i placeholder del carosello Shell con le 5 foto reali fornite.

### Ordine immagini nel carosello

| Pos | Immagine |
|-----|----------|
| 1 | Vista frontale (front) |
| 2 | Vista frontale con movimento sway (ghost) |
| 3 | Vista laterale (side) |
| 4 | Vista laterale reclinata (side reclined) |
| 5 | Vista laterale con reclinazione ghost (side recline ghost) |

### Dettagli tecnici

1. **Copiare le 5 immagini** in `src/assets/shell/` con nomi ordinati:
   - `shell-1.png` (tavo-shell-latte-front_web)
   - `shell-2.png` (tavo-shell-latte-front-sway-ghost_web)
   - `shell-3.png` (tavo-shell-latte-side_web)
   - `shell-4.png` (tavo-shell-latte-side-reclined_web)
   - `shell-5.png` (tavo-shell-latte-side-recline-ghost_web)

2. **Modificare `ProductSection.tsx`**:
   - Importare le 5 immagini Shell
   - Creare l'array `SHELL_IMAGES`
   - Aggiungere il caso `"prodotto-shell"` nella funzione `getProductImages()`

Nessuna modifica necessaria a `ProductGallery.tsx` -- il componente gestisce gia le immagini reali tramite la prop `images`.

