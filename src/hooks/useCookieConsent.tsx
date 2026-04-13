import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

const STORAGE_KEY = "eleva_consent_v1";
const POLICY_VERSION = "2026-04-13";

export interface ConsentChoices {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

interface StoredConsent {
  choices: ConsentChoices;
  policyVersion: string;
  timestamp: string;
}

interface CookieConsentContextValue {
  choices: ConsentChoices | null;
  bannerOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePartial: (choices: ConsentChoices) => void;
  reopenBanner: () => void;
  closeBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function loadConsent(): ConsentChoices | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored: StoredConsent = JSON.parse(raw);
    if (stored.policyVersion !== POLICY_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return stored.choices;
  } catch {
    return null;
  }
}

function persistConsent(choices: ConsentChoices) {
  const stored: StoredConsent = {
    choices,
    policyVersion: POLICY_VERSION,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [choices, setChoices] = useState<ConsentChoices | null>(() => loadConsent());
  const [bannerOpen, setBannerOpen] = useState(() => loadConsent() === null);

  const save = useCallback((c: ConsentChoices) => {
    setChoices(c);
    persistConsent(c);
    setBannerOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    save({ necessary: true, analytics: true, marketing: true });
  }, [save]);

  const rejectAll = useCallback(() => {
    save({ necessary: true, analytics: false, marketing: false });
  }, [save]);

  const savePartial = useCallback((c: ConsentChoices) => {
    save(c);
  }, [save]);

  const reopenBanner = useCallback(() => {
    setBannerOpen(true);
  }, []);

  const closeBanner = useCallback(() => {
    setBannerOpen(false);
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{ choices, bannerOpen, acceptAll, rejectAll, savePartial, reopenBanner, closeBanner }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return ctx;
}
