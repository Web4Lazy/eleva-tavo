import TrustBar from "./TrustBar";
import { getWhatsAppUrl, sendEvent } from "@/config";

const ClosingSection = () => (
  <section id="chiusura" className="section-padding bg-primary text-primary-foreground">
    <div className="container-custom text-center">
      <h2 className="mb-3">Inizia la routine anti-nodi Eleva</h2>
      <p className="text-lg opacity-90 mb-10">Kit Conosciamoci, Spazzola Professional e consiglio personalizzato per prenderti cura del manto lungo con metodo.</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
        <a
          href="#kit"
          onClick={() => sendEvent("ClickBundle", { section: "closing" })}
          className="cta-white"
        >
          Inizia con il Kit — 60€
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("ClickWhatsApp", { section: "closing" })}
          className="cta-outline-white"
        >
          Chiedi consiglio su WhatsApp
        </a>
      </div>
      <p className="text-sm font-semibold opacity-90 mb-2">30 giorni soddisfatti o rimborsati sul primo Kit</p>
      <p className="text-xs opacity-70 mb-8">Ti aiutiamo a scegliere la routine più adatta al pelo del tuo cane · Risposta umana su WhatsApp negli orari indicati.</p>

      <TrustBar variant="dark" context="closing" />
    </div>
  </section>
);

export default ClosingSection;
