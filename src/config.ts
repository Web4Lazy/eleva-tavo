export const CONFIG = {
  WHATSAPP_NUMBER: '393518411304',
  WHATSAPP_TEXT: 'Ciao Eleva, vorrei un consiglio sulla selezione Tavo.',
  WHATSAPP_TEXT_FULL: 'Ciao Eleva, vorrei un consiglio sulla selezione Tavo.\nIl mio pet pesa ___kg ed è lungo ___cm.\nLa mia auto è ______(modello/anno).\nMi serve per: Auto / Auto+Aereo / Auto+Passeggio / Casa.\nMi aiutate a scegliere modello e taglia?',
  PIXEL_ID: '[PLACEHOLDER_PIXEL_ID]',
  GA4_ID: '[PLACEHOLDER_GA4_ID]',
  LINKS: {
    DUPREE: '[LINK_ADD_TO_CART_DUPREE]',
    MAEVE: '[LINK_ADD_TO_CART_MAEVE]',
    TRAVEL: '[LINK_ADD_TO_CART_TRAVEL]',
    SHELL: 'https://elevapet.com/eleva-x-tavo/43-98-cuccia-oscillante-shell-tavo.html#/40-colore_shell-latte',
  },
  MANUALS: {
    DUPREE_I: '[LINK_MANUALE_DUPREE_I]',
    DUPREE_II: '[LINK_MANUALE_DUPREE_II]',
    MAEVE_5X: '[LINK_MANUALE_MAEVE_5X]',
    MAEVE_6X: '[LINK_MANUALE_MAEVE_6X]',
    MAEVE_7X: '[LINK_MANUALE_MAEVE_7X]',
    ROSCOE: '[LINK_MANUALE_ROSCOE]',
    SHELL: '[LINK_MANUALE_SHELL]',
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
  console.log('[ELEVA×TAVO Track]', eventName, params);
}
