import ImagePlaceholder from "./ImagePlaceholder";
import { sendEvent } from "@/config";
import { Plane, Baby, ShoppingBag, Home, Building2 } from "lucide-react";
import dupreeImg from "@/assets/scenari-dupree.jpg";
import maeveImg from "@/assets/scenari-maeve.jpg";
import travelImg from "@/assets/scenari-travel.jpg";
import shellImg from "@/assets/scenari-shell.jpg";
import type { ReactNode } from "react";

interface ScenarioCard {
  name: string;
  scenario: string;
  targetId: string;
  imageLabel: string;
  badge?: string;
  imageSrc?: string;
  icons: ReactNode;
}

const iconClass = "w-5 h-5 text-primary";
const plusClass = "text-muted-foreground text-xs font-bold select-none";

const cards: ScenarioCard[] = [
{ name: "Dupree", scenario: "Auto + Aereo", targetId: "prodotto-dupree", imageLabel: "Foto Dupree 400×300", imageSrc: dupreeImg, icons: <><span className={plusClass}>+</span><Plane className={iconClass} /></> },
{ name: "Maeve™ iso", scenario: "Auto (ISOFIX)", targetId: "prodotto-maeve", imageLabel: "Foto Maeve 400×300", imageSrc: maeveImg, icons: <><Baby className={iconClass} /></> },
{ name: "Travel System", scenario: "Auto + Passeggio", targetId: "prodotto-travel", imageLabel: "Foto Travel System 400×300", badge: "TOP scelta Eleva", imageSrc: travelImg, icons: <><span className={plusClass}>+</span><ShoppingBag className={iconClass} /></> },
{ name: "Shell", scenario: "Casa / Hotel", targetId: "prodotto-shell", imageLabel: "Foto Shell 400×300", imageSrc: shellImg, icons: <><Home className={iconClass} /><span className={plusClass}>/</span><Building2 className={iconClass} /></> }];


interface Props {
  onOpenDrawer?: (productId: string) => void;
}

const ScenariSection = ({ onOpenDrawer }: Props) =>
<section id="scenari" className="section-padding bg-card my-0 py-0">
    <div className="container-custom">
      <h2 className="text-foreground mb-2">Scegli il tuo scenario</h2>
      <p className="text-muted-foreground mb-8">In che situazione ti serve? Seleziona e scopri il prodotto perfetto.</p>

      <div className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {cards.map((card) =>
      <div
        key={card.targetId}
        className="card-hover flex-shrink-0 w-[260px] lg:w-auto snap-start border border-border rounded-2xl p-5 flex flex-col bg-secondary">

            {card.imageSrc ?
        <div className="relative rounded-lg overflow-hidden mb-4" style={{ aspectRatio: "1/1" }}>
                {card.badge &&
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 rounded-full z-10">
                    {card.badge}
                  </span>
          }
                <img src={card.imageSrc} alt={card.name} className="w-full h-full object-cover" />
              </div> :

        <ImagePlaceholder
          aspectRatio="4/3"
          label={card.imageLabel}
          badge={card.badge}
          className="mb-4" />

        }
            <div className="flex items-center gap-1.5 mb-2">{card.icons}</div>
            <h3 className="text-foreground mb-1">{card.name}</h3>
            <p className="text-sm text-micro mb-4">{card.scenario}</p>
            <div className="mt-auto flex flex-col gap-2">
              <a
            href={`#${card.targetId}`}
            className="text-sm font-medium text-primary hover:underline"
            onClick={() => sendEvent("ClickScenario", { scenario: card.name })}>

                Scopri di più →
              </a>
              {onOpenDrawer &&
          <button
            onClick={() => {
              sendEvent("ClickScenario", { scenario: card.name, drawer: true });
              onOpenDrawer(card.targetId);
            }}
            className="cta-outline text-xs py-2">

                  Apri dettagli
                </button>
          }
            </div>
          </div>
      )}
      </div>
    </div>
  </section>;


export default ScenariSection;