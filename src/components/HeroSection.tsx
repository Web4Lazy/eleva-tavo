import ImagePlaceholder from "./ImagePlaceholder";
import TrustBar from "./TrustBar";
import { getWhatsAppUrl, sendEvent } from "@/config";

const HeroSection = () => (
  <section id="hero" className="section-padding bg-background">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h1 className="text-foreground mb-4">Prima classe, per chi ha quattro zampe.</h1>
          <p className="text-lg text-muted-foreground mb-2">
            La selezione Tavo firmata Eleva: viaggio e riposo premium, con Concierge Prima Classe su WhatsApp prima dell'acquisto.
          </p>
          <p className="text-sm text-micro italic mb-8">
            Acquisto importante? Normalissimo voler essere sicuri al 100%.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendEvent("ClickWhatsApp", { section: "hero" })}
              className="cta-primary"
            >
              Parla con il tuo assistente umano
            </a>
            <a href="#scenari" className="cta-outline">
              Scopri la selezione
            </a>
          </div>
        </div>
        <ImagePlaceholder aspectRatio="4/3" label="Foto Hero — Travel System 800×600" />
      </div>
      <div className="mt-8">
        <TrustBar />
      </div>
    </div>
  </section>
);

export default HeroSection;
