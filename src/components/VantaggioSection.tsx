import { getWhatsAppUrl, sendEvent } from "@/config";

const VantaggioSection = () =>
<section
  id="vantaggio"
  className="section-padding relative shadow-2xl bg-foreground"
  style={{
    backgroundImage: "url('/images/brand/about-eleva.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    {/* Overlay scuro per leggibilità del testo bianco sopra la panoramica gamma */}
    <div className="absolute inset-0 bg-foreground/60" />

    <div className="container-custom relative z-10">
      <div className="rounded-2xl p-8 max-w-[800px] mx-auto text-center bg-primary">
        <h3 className="mb-3" style={{ color: 'white' }}>Kit + Spazzola: la routine anti-nodi completa</h3>
        <p className="mb-2" style={{ color: 'white' }}>
          Acquista il Kit Conosciamoci e aggiungi la Spazzola Professional con il 40% di sconto. Per iniziare subito con tutti gli step del Metodo Eleva.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#scenari" className="cta-white">
            Scopri il Kit
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendEvent("ClickWhatsApp", { section: "vantaggio" })}
            className="underline font-medium self-center" style={{ color: 'white' }}>
            Chiedi consigli
          </a>
        </div>
      </div>
    </div>
  </section>;


export default VantaggioSection;
