import { getWhatsAppUrl, sendEvent } from "@/config";
import midnightPattern from "@/assets/midnight-pattern.jpg";

const VantaggioSection = () =>
<section
  id="vantaggio"
  className="section-padding relative shadow-2xl"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${midnightPattern})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>

    <div className="container-custom relative z-10">
      <div className="rounded-2xl p-8 max-w-[800px] mx-auto text-center bg-primary">
        <h3 className="mb-3 text-secondary">Vantaggio riservato ai clienti Eleva</h3>
        <p className="mb-2 text-secondary">
          Hai un codice Eleva? Inseriscilo al checkout (facoltativo). Se non lo trovi,{" "}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendEvent("ClickWhatsApp", { section: "vantaggio" })}
            className="underline font-medium text-primary-foreground">
            scrivici su WhatsApp
          </a>.
        </p>
      </div>
    </div>
  </section>;


export default VantaggioSection;