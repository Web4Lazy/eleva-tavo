import ImagePlaceholder from "./ImagePlaceholder";
import { sendEvent } from "@/config";

interface ScenarioCard {
  name: string;
  scenario: string;
  description: string;
  targetId: string;
  imageLabel: string;
  badge?: string;
  buttonLabel: string;
}

const cards: ScenarioCard[] = [
  {
    name: "Shampoo Delicato",
    scenario: "100 ml – 100% morbidezza",
    description: "Deterge delicatamente il pelo rispettando la cute del cane. È il primo step della routine. Prepara il pelo ai trattamenti successivi senza appesantirlo.",
    targetId: "prodotto-shampoo",
    imageLabel: "IMMAGINE: Shampoo Delicato 100 ml",
    buttonLabel: "Scopri lo shampoo",
  },
  {
    name: "Maschera Nutriente",
    scenario: "50 ml – 100% setosità",
    description: "Nutre il pelo rendendolo morbido ed elastico. Aiuta a districare i nodi e ne ritarda la formazione. È lo step fondamentale per favorire la pettinabilità.",
    targetId: "prodotto-maschera",
    imageLabel: "IMMAGINE: Maschera Nutriente 50 ml",
    buttonLabel: "Scopri la maschera",
  },
  {
    name: "Scioglinodi",
    scenario: "50 ml – 100% pettinabilità",
    description: "Aiuta a districare i nodi più difficili. Si usa sul pelo asciutto per favorire la spazzolata e mantenere il manto ordinato tra un bagno e l'altro.",
    targetId: "prodotto-scioglinodi",
    imageLabel: "IMMAGINE: Scioglinodi Spray 50 ml",
    buttonLabel: "Scopri lo scioglinodi",
  },
  {
    name: "Spazzola Professional",
    scenario: "100% districabilità",
    description: "La spazzola progettata per snodare il pelo con facilità.",
    targetId: "prodotto-spazzola",
    imageLabel: "IMMAGINE: Spazzola Professional",
    badge: "Con il Kit: -40%",
    buttonLabel: "Scopri la spazzola",
  },
];


interface Props {
  onOpenDrawer?: (productId: string) => void;
}

const ScenariSection = ({ onOpenDrawer }: Props) =>
<section id="scenari" className="section-padding my-0 py-0 bg-[#f7f5f3]">
    <div className="container-custom">
      <h2 className="text-foreground mb-2">Inizia dal Kit Conosciamoci più spazzola Eleva</h2>
      <p className="text-muted-foreground mb-8">Tre minisize per provare la routine Eleva e capire come risponde il pelo del tuo cane. Aggiungi la Spazzola Professional per completare il metodo fin dal primo utilizzo.</p>

      <div className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {cards.map((card) =>
      <a
        key={card.targetId}
        href={`#${card.targetId}`}
        onClick={() => sendEvent("ClickKitCard", { product: card.name })}
        className="card-hover flex-shrink-0 w-[260px] lg:w-auto snap-start border border-border rounded-2xl p-5 flex flex-col bg-secondary no-underline cursor-pointer">

            {/* PLACEHOLDER IMMAGINE: card prodotto Kit */}
            <ImagePlaceholder
          aspectRatio="1/1"
          label={card.imageLabel}
          badge={card.badge}
          className="mb-4" />

            <h3 className="text-foreground mb-1">{card.name}</h3>
            <p className="text-sm text-micro mb-2">{card.scenario}</p>
            <p className="text-xs text-muted-foreground mb-2 font-semibold">{card.description}</p>
            <div className="mt-auto flex flex-col gap-2">
              {onOpenDrawer &&
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              sendEvent("ClickKitCard", { product: card.name, drawer: true });
              onOpenDrawer(card.targetId);
            }}
            className="cta-outline text-xs py-2">
                  {card.buttonLabel}
                </button>
          }
            </div>
          </a>
      )}
      </div>
    </div>
  </section>;


export default ScenariSection;
