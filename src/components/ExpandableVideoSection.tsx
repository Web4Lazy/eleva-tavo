import { useState } from "react";
import isofixImg from "@/assets/isofix-system.jpg";
import { ChevronDown } from "lucide-react";

const ExpandableVideoSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="bg-card border-y border-border">
      <div className="container-custom">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-8 text-left">

          <h1 className="text-foreground text-2xl text-center">Scopri come proteggiamo i nostri animali</h1>
          <ChevronDown
            className={`h-6 w-6 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""}`
            } />

        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100 pb-8" : "max-h-0 opacity-0"}`
          }>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Testo a sinistra */}
            <div className="lg:w-2/5 flex flex-col">
              <p className="text-muted-foreground leading-relaxed">
                Abbiamo unito decenni di esperienza nello sviluppo di prodotti innovativi, una manifattura di altissima qualità e crash test avanzati per realizzare dei sistemi di trasporto collaudati che soddisfino i requisiti di sicurezza per i seggiolini dei bambini secondo la norma UNECE.
              </p>
              <h3 className="mt-4 text-foreground font-bold text-lg tracking-wide">ISOFIX SYSTEM</h3>
              <div className="mt-2 rounded-xl overflow-hidden flex-1 min-h-0">
                <img src={isofixImg} alt="ISOFIX System" className="w-full h-full object-cover object-bottom rounded-xl" />
              </div>
            </div>

            {/* Video placeholder a destra */}
            <div className="lg:w-3/5 w-full">
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <iframe
                  src="https://player.vimeo.com/video/928229394"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ExpandableVideoSection;