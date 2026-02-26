import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ExpandableVideoSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="bg-card border-y border-border">
      <div className="container-custom">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-8 text-left">

          <h1 className="text-foreground text-2xl text-center">Scopri come proteggiamo i nostri animali – clicca qui per vedere il video</h1>
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
            <div className="lg:w-2/5 flex flex-col">
              <p className="text-muted-foreground leading-relaxed">
                Testiamo il nostro sistema di protezione per animali domestici in strutture di prova dinamiche, dotate di apparecchiature e tecnologie all'avanguardia. Le prestazioni del nostro sistema rispondono ai più recenti standard ECE delle Nazioni Unite in materia di sicurezza dei bambini (R129).
              </p>
            </div>
            <div className="lg:w-3/5">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/928229394?h=&title=0&byline=0&portrait=0"
                  className="absolute inset-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ExpandableVideoSection;