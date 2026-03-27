import TrustBar from "./TrustBar";
import { getWhatsAppUrl, sendEvent } from "@/config";
import heroImage from "@/assets/hero-new.jpg";

const HeroSection = () =>
<section id="hero" className="section-padding bg-[#f7f5f3]">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <img src={heroImage} alt="Donna con passeggino per cani ELEVA Aero" className="rounded-lg w-full max-w-[85%] mx-auto object-cover order-first lg:order-last" style={{ aspectRatio: "1/1" }} />
        <div className="order-last lg:order-first">
          <h1 className="text-foreground mb-4">Prima classe, per chi ha quattro zampe.</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Ti aiutiamo a scegliere il modello giusto per auto, aereo, passeggio o casa, con assistenza umana prima dell'acquisto.
          </p>
          <p className="text-sm text-micro italic mb-6">
            Ti guidiamo nella scelta del prodotto più adatto, così eviti errori di compatibilità, taglia o utilizzo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendEvent("ClickWhatsApp", { section: "hero" })}
            className="cta-primary">
            
              Chiedi a un assistente
            </a>
            <a href="#scenari" className="cta-outline">
              Vedi dettagli completi
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">💬 Assistenza umana reale</span>
            <span className="flex items-center gap-1.5">📐 Aiuto nella scelta di taglia e modello</span>
            <span className="flex items-center gap-1.5">✨ Selezione premium per viaggio e riposo</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <TrustBar />
      </div>
    </div>
  </section>;


export default HeroSection;