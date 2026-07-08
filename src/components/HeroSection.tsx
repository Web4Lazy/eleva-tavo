import { Star, Check } from "lucide-react";
import TrustBar from "./TrustBar";
import { getWhatsAppUrl, sendEvent } from "@/config";

const badges = [
  "30 giorni soddisfatti o rimborsati",
  "Spedizione gratuita sopra 49€",
  "Made in Italy",
];

const HeroSection = () => (
  <section id="hero" className="section-padding bg-background">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div
          className="rounded-lg overflow-hidden w-full max-w-[70%] mx-auto order-first lg:order-last"
          style={{ aspectRatio: "1/1" }}
        >
          <img
            src="/images/brand/kit-banner.jpg"
            alt="Kit Conosciamoci Eleva con Spazzola Professional"
            className="w-full h-full object-cover"
            {...{ fetchpriority: "high" }}
          />
        </div>
        <div className="order-last lg:order-first">
          <h1 className="mb-4">
            <span className="block text-primary">Stop ai nodi:</span>
            <span className="block text-teal">Metodo Eleva</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            La routine gentile in 4 step che ti aiuta a districare i nodi, prevenirne la formazione e a mantenere il manto lungo più liscio, setoso e luminoso.
          </p>
          <p className="text-sm text-muted-foreground italic mb-6">
            Non serve spazzolare di più. Servono cosmetici delicati, strumenti corretti e una routine semplice.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a
              href="#kit"
              onClick={() => sendEvent("ClickKitCTA", { section: "hero" })}
              className="cta-primary"
            >
              Inizia con il Kit — 60€
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendEvent("ClickWhatsApp", { section: "hero" })}
              className="cta-outline"
            >
              Chiedi consiglio su WhatsApp
            </a>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4,9/5</span>
            <span className="text-sm text-muted-foreground">· 40 recensioni</span>
          </div>

          {/* Badge */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-6">
            {badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                {b}
              </span>
            ))}
          </div>

          {/* Box garanzia */}
          <div className="bg-secondary border border-border rounded-lg p-4 text-sm text-foreground/80">
            Ci fidiamo dei nostri prodotti perché li usiamo ogni giorno con Eva. Se entro 30 giorni la routine non fa per te, ci rispedisci i cosmetici e ti rimborsiamo.
          </div>
        </div>
      </div>
      <div className="mt-8">
        <TrustBar />
      </div>
    </div>
  </section>
);

export default HeroSection;
