import ImagePlaceholder from "./ImagePlaceholder";
import { getWhatsAppUrl } from "@/config";
import { sendEvent } from "@/config";
import dupreeImg from "@/assets/scenari-dupree.jpg";
import maeveImg from "@/assets/scenari-maeve.jpg";
import travelImg from "@/assets/scenari-travel.jpg";
import shellImg from "@/assets/scenari-shell.jpg";
import iconDupree from "@/assets/icons/icon-dupree.png";
import iconMaeve from "@/assets/icons/icon-maeve.png";
import iconTravel from "@/assets/icons/icon-travel.png";
import iconShell from "@/assets/icons/icon-shell.png";

interface ScenarioCard {
  name: string;
  scenario: string;
  description: string;
  targetId: string;
  imageLabel: string;
  badge?: string;
  imageSrc?: string;
  iconSrc: string;
}

const cards: ScenarioCard[] = [
{ name: "Dupree", scenario: "Auto + Aereo", description: "Soluzioni pensate per viaggiare in auto con più stabilità e sicurezza.", targetId: "prodotto-dupree", imageLabel: "Foto Dupree 400×300", imageSrc: dupreeImg, iconSrc: iconDupree },
{ name: "Maeve™ iso", scenario: "Auto (ISOFIX)", description: "Modelli adatti a spostamenti e viaggi, con attenzione a misure e praticità.", targetId: "prodotto-maeve", imageLabel: "Foto Maeve 400×300", imageSrc: maeveImg, iconSrc: iconMaeve },
{ name: "Travel System", scenario: "Auto + Passeggio", description: "Soluzioni comode per uscite frequenti e mobilità quotidiana.", targetId: "prodotto-travel", imageLabel: "Foto Travel System 400×300", badge: "TOP scelta Eleva", imageSrc: travelImg, iconSrc: iconTravel },
{ name: "Shell", scenario: "Casa", description: "Prodotti pensati per il riposo e il comfort a casa.", targetId: "prodotto-shell", imageLabel: "Foto Shell 400×300", imageSrc: shellImg, iconSrc: iconShell }];


interface Props {
  onOpenDrawer?: (productId: string) => void;
}

const ScenariSection = ({ onOpenDrawer }: Props) =>
<section id="scenari" className="section-padding my-0 py-0 bg-[#f7f5f3]">
    <div className="container-custom">
      <h2 className="text-foreground mb-2">Scegli il tuo scenario. Al resto pensiamo noi.</h2>
      <p className="text-muted-foreground mb-8">Seleziona dove ti serve (auto, aereo, passeggiata, casa). Se hai dubbi su taglia o compatibilità, scrivici su WhatsApp: ti guidiamo prima dell'acquisto.</p>

      <div className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {cards.map((card) =>
      <a
        key={card.targetId}
        href={`#${card.targetId}`}
        onClick={() => sendEvent("ClickScenario", { scenario: card.name })}
        className="card-hover flex-shrink-0 w-[260px] lg:w-auto snap-start border border-border rounded-2xl p-5 flex flex-col bg-secondary no-underline cursor-pointer">

            {card.imageSrc ?
        <div className="relative rounded-lg overflow-hidden mb-4" style={{ aspectRatio: "1/1" }}>
                {card.badge &&
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 rounded-full z-10">
                    {card.badge}
                  </span>
          }
                <img src={card.imageSrc} alt={card.name} className={`w-full h-full object-cover ${card.name === "Travel System" ? "-scale-x-100" : ""}`} />
              </div> :

        <ImagePlaceholder
          aspectRatio="4/3"
          label={card.imageLabel}
          badge={card.badge}
          className="mb-4" />

        }
            <div className="flex items-center gap-1.5 mb-2"><img src={card.iconSrc} alt={card.scenario} className="h-6" /></div>
            <h3 className="text-foreground mb-1">{card.name}</h3>
            <p className="text-sm text-micro mb-2">{card.scenario}</p>
            <p className="text-xs text-muted-foreground mb-2 font-semibold">{card.description}</p>
            <div className="mt-auto flex flex-col gap-2">
              {onOpenDrawer &&
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              sendEvent("ClickScenario", { scenario: card.name, drawer: true });
              onOpenDrawer(card.targetId);
            }}
            className="cta-outline text-xs py-2">
                  Vedi dettagli completi
                </button>
          }
            </div>
          </a>
      )}
      </div>
    </div>
  </section>;


export default ScenariSection;