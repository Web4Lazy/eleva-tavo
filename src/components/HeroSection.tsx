import TrustBar from "./TrustBar";
import ImagePlaceholder from "./ImagePlaceholder";
import { getWhatsAppUrl, sendEvent } from "@/config";

const HeroSection = () =>
<section id="hero" className="section-padding bg-[#f7f5f3]">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* PLACEHOLDER IMMAGINE: hero — cane a pelo lungo / routine Metodo Eleva */}
        <ImagePlaceholder
          aspectRatio="1/1"
          label="IMMAGINE: hero — cane a pelo lungo, Metodo Eleva"
          className="w-full max-w-[70%] mx-auto order-first lg:order-last"
        />
        <div className="order-last lg:order-first">
          <h1 className="text-foreground mb-4">Stop ai nodi con il Metodo Eleva</h1>
          <p className="text-lg text-muted-foreground mb-2">
            La routine gentile in 4 step che ti aiuta a districare i nodi, prevenirne la formazione e a mantenere il manto lungo più liscio, setoso e luminoso.
          </p>
          <p className="text-sm text-micro italic mb-6">
            Non serve spazzolare di più. Servono cosmetici delicati, strumenti corretti e una routine semplice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
            href="#scenari"
            onClick={() => sendEvent("ClickKit", { section: "hero" })}
            className="cta-primary">

              Scopri il Kit
            </a>
            <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendEvent("ClickWhatsApp", { section: "hero" })}
            className="cta-outline">
              Chiedi consigli
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">🪮 Aiuta a districare i nodi</span>
            <span className="flex items-center gap-1.5">🧴 Routine semplice in 4 step</span>
            <span className="flex items-center gap-1.5">💬 Consigli personalizzati su WhatsApp</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <TrustBar />
      </div>
    </div>
  </section>;


export default HeroSection;
