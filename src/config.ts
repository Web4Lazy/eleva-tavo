export const CONFIG = {
  WHATSAPP_NUMBER: '393518411304',
  WHATSAPP_TEXT: 'Ciao Eleva, vorrei un consiglio sulla selezione Tavo.',
  WHATSAPP_TEXT_FULL: 'Ciao Eleva, vorrei un consiglio sulla selezione Tavo.\nIl mio pet pesa ___kg ed è lungo ___cm.\nLa mia auto è ______(modello/anno).\nMi serve per: Auto / Auto+Aereo / Auto+Passeggio / Casa.\nMi aiutate a scegliere modello e taglia?',
  PIXEL_ID: '[PLACEHOLDER_PIXEL_ID]',
  GA4_ID: '[PLACEHOLDER_GA4_ID]',
  LINKS: {
    DUPREE: 'https://elevapet.com/eleva-x-tavo/48-121-dupree-by-tavo-trasportino-aereo-seggiolino-auto-animali.html#/43-colore_dupree_series-dupree_series_merle/50-taglia_dupree_series-dupree_taglia_i',
    MAEVE: 'https://elevapet.com/eleva-x-tavo/49-125-maeve-iso-5x-travel-system-tavo-seggiolino-auto-isofix-animali.html#/38-colore_maeve_series-maeve_iso_series_onyx/41-colore_roscoe_trek-roscoe_chocolate',
    TRAVEL_5X: 'https://elevapet.com/eleva-x-tavo/49-125-maeve-iso-5x-travel-system-tavo-seggiolino-auto-isofix-animali.html#/38-colore_maeve_series-maeve_iso_series_onyx/41-colore_roscoe_trek-roscoe_chocolate',
    TRAVEL_6X: 'https://elevapet.com/eleva-x-tavo/50-129-maeve-iso-6x-travel-system-tavo-passeggino-seggiolino-auto-animali.html#/38-colore_maeve_series-maeve_iso_series_onyx/41-colore_roscoe_trek-roscoe_chocolate',
    TRAVEL: 'https://elevapet.com/eleva-x-tavo/50-129-maeve-iso-6x-travel-system-tavo-passeggino-seggiolino-auto-animali.html#/38-colore_maeve_series-maeve_iso_series_onyx/41-colore_roscoe_trek-roscoe_chocolate',
    ROSCOE_TREK: 'https://elevapet.com/eleva-x-tavo/46-111-roscoe-trek-by-tavo-telaio-passeggino-animali.html#/41-colore_roscoe_trek-roscoe_chocolate',
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
