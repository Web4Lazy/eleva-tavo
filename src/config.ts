export const CONFIG = {
  WHATSAPP_NUMBER: '393518411304',
  // TODO(cliente): conferma testo prefill WhatsApp
  WHATSAPP_TEXT: 'Ciao Eleva, vorrei un consiglio sulla routine anti-nodi per il mio cane.',
  WHATSAPP_TEXT_FULL: 'Ciao Eleva, vorrei un consiglio sulla routine anti-nodi Eleva.\nIl mio cane è di razza ______ e ha il pelo ______ (lungo/medio).\nHa nodi? ______\nVorrei capire quale routine / Kit è più adatto al suo pelo. Mi aiutate a scegliere?',
  PIXEL_ID: '[PLACEHOLDER_PIXEL_ID]',
  GA4_ID: '[PLACEHOLDER_GA4_ID]',
  LINKS: {
    KIT: 'https://elevapet.com/home/57-kit-conosciamoci-8056211990106.html',
    SHAMPOO: 'https://elevapet.com/shampoo/20-40-shampoo-delicato-per-cani.html#/26-volume-100_ml',
    MASCHERA: 'https://elevapet.com/conditioner-maschere-scioglinodi/22-51-maschera-per-cani-nutriente.html#/32-volume-50_ml',
    SCIOGLINODI: 'https://elevapet.com/conditioner-maschere-scioglinodi/23-49-scioglinodi-per-cani-8056211990144.html#/32-volume-50_ml',
    SPAZZOLA: 'https://elevapet.com/spazzole/24-spazzola-per-cani-professional-8056211990113.html',
  },
  NOINDEX: false,
};

export const getWhatsAppUrl = (text?: string) => {
  const msg = encodeURIComponent(text || CONFIG.WHATSAPP_TEXT);
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${msg}`;
};

export const getWhatsAppFullUrl = () => {
  const msg = encodeURIComponent(CONFIG.WHATSAPP_TEXT_FULL);
  return `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${msg}`;
};

export function sendEvent(eventName: string, params?: Record<string, unknown>) {
  console.log('[ELEVA Track]', eventName, params);
}
