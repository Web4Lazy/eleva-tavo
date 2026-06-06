import TrustBar from "./TrustBar";
import { getWhatsAppUrl, sendEvent } from "@/config";

const ClosingSection = () => (
  <section id="chiusura" className="section-padding bg-primary text-primary-foreground">
    <div className="container-custom text-center">
      <h2 className="mb-3">Inizia la routine anti-nodi Eleva</h2>
      <p className="text-lg opacity-90 mb-10">Kit Conosciamoci, Spazzola Professional e consiglio personalizzato per prenderti cura del manto lungo con metodo.</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        <a href="#scenari" className="cta-white">
          Scopri il Kit
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("ClickWhatsApp", { section: "closing" })}
          className="cta-outline-white"
        >
          Chiedi consiglio
        </a>
      </div>
      <p className="text-sm opacity-80 mb-2">Ti aiutiamo a scegliere la routine più adatta al pelo del tuo cane.</p>
      <p className="text-xs opacity-60 mb-8">Risposta umana su WhatsApp negli orari indicati.</p>

      <TrustBar variant="dark" />
    </div>
  </section>
);

export default ClosingSection;
