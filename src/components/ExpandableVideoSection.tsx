import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ExpandableVideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-card border-y border-border">
      <div className="container-custom">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-5 text-left"
        >
          <h3 className="text-foreground">Scopri come funziona</h3>
          <ChevronDown
            className={`h-6 w-6 text-muted-foreground transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[800px] opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Testo a sinistra */}
            <div className="lg:w-2/5 flex flex-col justify-center">
              <p className="text-muted-foreground leading-relaxed">
                Guarda il video per scoprire tutti i dettagli sul funzionamento
                dei nostri prodotti. Ti mostriamo passo dopo passo come
                utilizzarli al meglio per il comfort e la sicurezza del tuo
                bambino.
              </p>
            </div>

            {/* Video placeholder a destra */}
            <div className="lg:w-3/5 w-full">
              <div
                className="relative bg-muted rounded-xl flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="text-sm">Video 4:3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandableVideoSection;
