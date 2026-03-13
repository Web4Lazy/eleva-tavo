import TrustBar from "./TrustBar";
import { getWhatsAppUrl, sendEvent } from "@/config";

const ClosingSection = () => (
  <section id="chiusura" className="section-padding bg-primary text-primary-foreground">
    <div className="container-custom text-center">
      <h2 className="mb-3">Scegli come vi muovete. Al resto pensiamo noi.</h2>
      <p className="text-lg opacity-90 mb-10">Comfort, protezione e design — con la guida Eleva prima dell'acquisto.</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("ClickWhatsApp", { section: "closing" })}
          className="cta-white"
        >
           Parla con un umano
19:         </a>
20:         <a href="#scenari" className="cta-outline-white">
21:           Scopri la selezione
22:         </a>
23:       </div>
24:       <p className="text-sm opacity-80 mb-2">Ti aiutiamo a scegliere taglia, modello e utilizzo corretto prima dell'acquisto.</p>
25:       <p className="text-xs opacity-60 mb-8">Risposta umana negli orari indicati in pagina.</p>

      <TrustBar variant="dark" />
    </div>
  </section>
);

export default ClosingSection;
