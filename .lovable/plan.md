

# Ingrandire il logo nel footer di 3x

Attualmente il logo ha `maxWidth: 5rem` sul contenitore e altezza `h-16` (4rem) / `h-20` (5rem) su desktop. Per ingrandirlo 3x:

## Modifiche a `src/components/Footer.tsx`

- **Contenitore `<a>`**: cambiare `maxWidth` da `5rem` a `15rem`
- **Immagine `<img>`**: cambiare le classi da `h-16 lg:h-20` a `h-48 lg:h-60` (3x delle dimensioni attuali)

