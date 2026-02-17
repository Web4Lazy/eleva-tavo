import { getWhatsAppFullUrl, sendEvent } from "@/config";

const ConciergeSection = () => {
  const steps = [
  "Ci dici pet + peso + uso (auto/aereo/casa)",
  "Ti consigliamo modello + taglia",
  "Confermi e compri senza dubbi"];


  return (
    <section id="concierge" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <h2 className="mb-3">Assistente Dedicato Prima Classe</h2>
        <p className="text-lg opacity-90 mb-12">Un umano (non un bot) ti aiuta a scegliere modello e taglia.</p>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {steps.map((text, i) =>
          <div key={i} className="flex flex-col items-center">
              <span className="text-5xl font-bold text-secondary mb-3">{i + 1}</span>
              <p className="text-[15px] opacity-90">{text}</p>
            </div>
          )}
        </div>

        <a
          href={getWhatsAppFullUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("ClickWhatsApp", { section: "concierge" })}
          className="cta-white mb-4 inline-flex">

          Parla con il tuo assistente umano
        </a>
        <p className="text-[13px] mt-4 text-secondary">+39 351 841 1304 • lun–ven 9–18</p>
      </div>
    </section>);

};

export default ConciergeSection;