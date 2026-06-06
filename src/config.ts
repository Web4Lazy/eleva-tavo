export const CONFIG = {
  WHATSAPP_NUMBER: '393518411304',
  // TODO(cliente): conferma testo prefill WhatsApp
  WHATSAPP_TEXT: 'Ciao Eleva, vorrei un consiglio sulla routine anti-nodi per il mio cane.',
  WHATSAPP_TEXT_FULL: 'Ciao Eleva, vorrei un consiglio sulla routine anti-nodi Eleva.\nIl mio cane è di razza ______ e ha il pelo ______ (lungo/medio).\nHa nodi? ______\nVorrei capire quale routine / Kit è più adatto al suo pelo. Mi aiutate a scegliere?',
  PIXEL_ID: '[PLACEHOLDER_PIXEL_ID]',
  GA4_ID: '[PLACEHOLDER_GA4_ID]',
  LINKS: {
    // TODO(cliente): URL reali delle pagine prodotto / kit su elevapet.com
    KIT: '[TODO_LINK_KIT_CONOSCIAMOCI]',
    SHAMPOO: '[TODO_LINK_SHAMPOO]',
    MASCHERA: '[TODO_LINK_MASCHERA]',
    SCIOGLINODI: '[TODO_LINK_SCIOGLINODI]',
    SPAZZOLA: '[TODO_LINK_SPAZZOLA]',
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
