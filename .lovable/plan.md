
# Aggiungere nuova immagine Maeve iso come prima foto

## Cosa faremo
- Copiare l'immagine caricata (il gatto nel Maeve) nella cartella `src/assets/maeve/`
- Importarla in `ProductSection.tsx` e inserirla come **prima** immagine nell'array `MAEVE_IMAGES`
- L'attuale prima immagine (maeve-1.png) diventa la seconda

## Dettagli tecnici
1. Copiare `user-uploads://T033525_Maeve-iso-wind_Studio-Lifestyle-Photos_09.JPG` in `src/assets/maeve/maeve-0.jpg`
2. In `src/components/ProductSection.tsx`:
   - Aggiungere `import maeve0 from "@/assets/maeve/maeve-0.jpg";`
   - Modificare l'array: `const MAEVE_IMAGES = [maeve0, maeve1, maeve2, maeve3, maeve4, maeve5, maeve6, maeve7, maeve8];` (9 immagini totali)
