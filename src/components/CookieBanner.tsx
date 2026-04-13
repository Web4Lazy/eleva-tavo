import { useState } from "react";
import { Cookie, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useCookieConsent, type ConsentChoices } from "@/hooks/useCookieConsent";

const CookieBanner = () => {
  const { bannerOpen, acceptAll, rejectAll, savePartial, closeBanner } = useCookieConsent();
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (!bannerOpen) return null;

  const handleSavePartial = () => {
    const choices: ConsentChoices = { necessary: true, analytics, marketing };
    savePartial(choices);
  };

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-6"
      role="dialog"
      aria-label="Consenso cookie"
    >
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Cookie className="h-5 w-5 text-primary shrink-0" />
            <h3 className="text-foreground font-semibold text-base">Questo sito utilizza i cookie</h3>
          </div>
          <button
            onClick={closeBanner}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Chiudi banner cookie"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Utilizziamo cookie tecnici necessari e, con il tuo consenso, cookie analitici e di marketing per
          migliorare la tua esperienza. Puoi leggere la nostra{" "}
          <Link to="/cookie-policy" className="text-primary underline hover:no-underline">
            Cookie Policy
          </Link>{" "}
          e la{" "}
          <Link to="/privacy-policy" className="text-primary underline hover:no-underline">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Customize panel */}
        {showCustomize && (
          <div className="border border-border rounded-xl p-4 mb-4 space-y-3">
            {/* Necessary */}
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-0.5 accent-primary"
              />
              <div>
                <span className="text-foreground text-sm font-medium">Necessari</span>
                <p className="text-muted-foreground text-xs">
                  Indispensabili per il funzionamento del sito. Sempre attivi.
                </p>
              </div>
            </label>

            {/* Analytics */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 accent-primary"
              />
              <div>
                <span className="text-foreground text-sm font-medium">Analitici</span>
                <p className="text-muted-foreground text-xs">
                  Ci aiutano a capire come viene utilizzato il sito per migliorarlo.
                </p>
              </div>
            </label>

            {/* Marketing */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 accent-primary"
              />
              <div>
                <span className="text-foreground text-sm font-medium">Marketing</span>
                <p className="text-muted-foreground text-xs">
                  Permettono di mostrare contenuti video di terze parti (YouTube) e tracciare le campagne.
                </p>
              </div>
            </label>

            <button
              onClick={handleSavePartial}
              className="w-full mt-2 py-2 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Salva preferenze
            </button>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={rejectAll}
            className="flex-1 py-2.5 px-4 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
          >
            Rifiuta tutto
          </button>
          <button
            onClick={() => setShowCustomize(!showCustomize)}
            className="flex-1 py-2.5 px-4 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-1.5"
          >
            Personalizza
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${showCustomize ? "rotate-180" : ""}`}
            />
          </button>
          <button
            onClick={acceptAll}
            className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Accetta tutto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
