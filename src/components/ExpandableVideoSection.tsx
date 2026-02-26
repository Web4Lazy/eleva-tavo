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

          <div className="flex flex-col gap-8">
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              Guarda il video per scoprire tutti i dettagli sul funzionamento
              dei nostri prodotti. Ti mostriamo passo dopo passo come
              utilizzarli al meglio per il comfort e la sicurezza del tuo
              bambino.
            </p>
            











          </div>
        </div>
      </div>
    </section>);

};

export default ExpandableVideoSection;