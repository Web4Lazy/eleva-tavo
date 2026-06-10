import { sendEvent } from "@/config";

interface ScenarioCard {
  name: string;
  scenario: string;
  description: string;
  targetId: string;
  image: string;
  imageAlt: string;
  badge?: string;
  buttonLabel: string;
}

const cards: ScenarioCard[] = [
  {
    name: "Shampoo Delicato",
    scenario: "100 ml – 100% morbidezza",
    description: "Deterge delicatamente il pelo rispettando la cute del cane. È il primo step della routine. Prepara il pelo ai trattamenti successivi senza appesantirlo.",
    targetId: "prodotto-shampoo",
    image: "/images/products/shampoo/shampoo-01.jpg",
    imageAlt: "Shampoo Delicato Eleva 100 ml",
    buttonLabel: "Scopri lo shampoo",
  },
  {
    name: "Maschera Nutriente",
    scenario: "50 ml – 100% setosità",
    description: "Nutre il pelo rendendolo morbido ed elastico. Aiuta a districare i nodi e ne ritarda la formazione. È lo step fondamentale per favorire la pettinabilità.",
    targetId: "prodotto-maschera",
    image: "/images/products/maschera/maschera-01.jpg",
    imageAlt: "Maschera Nutriente Eleva 50 ml",
    buttonLabel: "Scopri la maschera",
  },
  {
    name: "Scioglinodi",
    scenario: "50 ml – 100% pettinabilità",
    description: "Aiuta a districare i nodi più difficili. Si usa sul pelo asciutto per favorire la spazzolata e mantenere il manto ordinato tra un bagno e l'altro.",
    targetId: "prodotto-scioglinodi",
    image: "/images/products/scioglinodi/scioglinodi-01.jpg",
    imageAlt: "Scioglinodi Spray Eleva 50 ml",
    buttonLabel: "Scopri lo scioglinodi",
  },
  {
    name: "Spazzola Professional",
    scenario: "100% districabilità",
    description: "La spazzola progettata per snodare il pelo con facilità.",
    targetId: "prodotto-spazzola",
    image: "/images/products/spazzola/spazzola-01.jpg",
    imageAlt: "Spazzola Professional Eleva",
    badge: "Con il Kit: -40%",
    buttonLabel: "Scopri la spazzola",
  },
];


interface Props {
  onOpenDrawer?: (productId: string) => void;
}

const ScenariSection = ({ onOpenDrawer }: Props) =>
<section id="scenari" className="section-padding my-0 py-0 bg-secondary">
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

            <div className="relative rounded-lg overflow-hidden mb-4" style={{ aspectRatio: "1/1" }}>
              {card.badge &&
          <span className="absolute top-3 right-3 bg-peach text-primary text-[11px] font-semibold px-3 py-1 rounded-full z-10">
                  {card.badge}
                </span>
          }
              <img
            src={card.image}
            alt={card.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover" />
            </div>

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
