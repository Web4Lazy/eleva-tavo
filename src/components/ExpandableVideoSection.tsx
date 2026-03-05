import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import crashTestCover from "@/assets/crash-test-cover.png";
import eceR129 from "@/assets/ece-r129.png";

const ExpandableVideoSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="border-y border-border bg-[#f7f5f3]">
      <div className="container-custom">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-8 text-left">

          <h1 className="text-foreground text-center text-4xl">Scopri come proteggiamo i nostri animali</h1>
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
              <img src={eceR129} alt="Standard ECE R129 / i-Size" className="mt-4 w-56 h-auto" />
            </div>
            <div className="lg:w-3/5">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                {isPlaying ? (
                  <iframe
                    src="https://player.vimeo.com/video/928229394?h=&title=0&byline=0&portrait=0&autoplay=1"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen />
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 w-full h-full group cursor-pointer"
                  >
                    <img
                      src={crashTestCover}
                      alt="Video crash test TAVO"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity group-hover:bg-black/20">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-primary ml-1" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ExpandableVideoSection;