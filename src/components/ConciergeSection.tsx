import { getWhatsAppFullUrl, sendEvent } from "@/config";

const ConciergeSection = () => {
  const steps = [
  "Raccontaci com'è il pelo del tuo cane (razza, lunghezza, nodi)",
  "Ti consigliamo la routine e il Kit più adatti",
  "Acquisti con sicurezza e inizi il Metodo Eleva"];


  return (
    <section id="concierge" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <h2 className="mb-3">Consigli personalizzati su WhatsApp</h2>
        <p className="text-lg opacity-90 mb-12">Un umano (non un bot) ti aiuta a costruire la routine anti-nodi giusta per il tuo cane.</p>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {steps.map((text, i) =>
          <div key={i} className="flex flex-col items-center">
              <span className="w-16 h-16 rounded-full border-2 border-secondary flex items-center justify-center text-3xl font-bold text-secondary mb-4">{i + 1}</span>
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

          Chiedi consiglio
        </a>
        <p className="text-[13px] mt-4 text-secondary">+39 351 841 1304 • lun–ven 9–18</p>
      </div>
    </section>);

};

export default ConciergeSection;