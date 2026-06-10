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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {cards.map((card, i) =>
      <div key={card.targetId} className="relative pt-8">
            {/* Il titolo scavalca il bordo della card: il suo bg deve combaciare
                con quello della sezione (bg-secondary) per "interrompere" il bordo */}
            <h3 className="step-outline absolute top-0 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap bg-secondary px-3 font-extrabold uppercase text-[clamp(2.6rem,4.5vw,4rem)]">
              Step {i + 1}
            </h3>
            <a
          href={`#${card.targetId}`}
          onClick={() => sendEvent("ClickKitCard", { product: card.name })}
          className="card-hover h-full border-2 border-primary rounded-sm bg-card px-5 pb-6 pt-10 text-center flex flex-col no-underline cursor-pointer">

              <h4 className="font-bold text-primary text-lg">{card.name}</h4>
              <p className="text-xs text-muted-foreground mb-3">{card.scenario}</p>
              <p className="text-sm text-foreground/90 mb-4">{card.description}</p>
              <div className="relative border border-primary/40 rounded-sm overflow-hidden mb-4" style={{ aspectRatio: "1/1" }}>
                {card.badge &&
            <span className="absolute top-2 right-2 bg-peach text-primary text-[11px] font-semibold px-3 py-1 rounded-full z-20">
                    {card.badge}
                  </span>
            }
                <img
              src={card.image}
              alt={card.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover" />
              </div>
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
          </div>
      )}
      </div>
    </div>
  </section>;


export default ScenariSection;
