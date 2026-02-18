

## Immagine Hero e sfondo bianco

### Modifiche

1. **Copiare l'immagine** caricata in `src/assets/hero.jpg`

2. **Modificare `HeroSection.tsx`**:
   - Importare l'immagine hero
   - Sostituire il componente `ImagePlaceholder` con un tag `<img>` che mostra la foto reale
   - Cambiare la classe di sfondo della sezione da `bg-background` a `bg-white`

### Dettagli tecnici

- L'immagine viene importata come modulo ES6 per ottimizzazione del bundler
- Il placeholder `ImagePlaceholder` verra rimosso e sostituito con un `<img>` con `rounded-lg` e aspect ratio coerente
- Lo sfondo della sezione hero passera a bianco puro (`bg-white`)

