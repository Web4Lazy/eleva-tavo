import { getWhatsAppUrl, sendEvent } from "@/config";
import midnightPattern from "@/assets/midnight-pattern.jpg";

const VantaggioSection = () =>
<section
  id="vantaggio"
  className="section-padding relative"
  style={{
    backgroundImage: `url(${midnightPattern})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>

    <div className="container-custom relative z-10">
      <div className="rounded-2xl p-8 max-w-[800px] mx-auto text-center bg-primary">
        <h3 className="mb-3 text-secondary">Vantaggio riservato ai clienti Eleva</h3>
        <p className="mb-2 text-secondary">
          Hai ricevuto via email un codice vantaggio a importo fisso. Inseriscilo al checkout su Eleva.
        </p>
        <p className="text-sm text-secondary">
          Se non lo trovi,{" "}
          <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("ClickWhatsApp", { section: "vantaggio" })}
          className="underline font-medium text-secondary">

            scrivici su WhatsApp
          </a>
          .
        </p>
      </div>
    </div>
  </section>;


export default VantaggioSection;