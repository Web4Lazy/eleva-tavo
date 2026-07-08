import { CONFIG, sendEvent } from "@/config";

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
    buttonLabel: "Scopri la spazzola",
  },
];


interface Props {
  onOpenDrawer?: (productId: string) => void;
}

const ScenariSection = ({ onOpenDrawer }: Props) =>
<section id="kit" className="section-padding bg-secondary">
    <div className="container-custom">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow mb-3">Da dove iniziare</p>
      <h2 className="text-foreground mb-2">Inizia dal Kit Conosciamoci più spazzola Eleva</h2>
      <p className="text-muted-foreground mb-8">Tre minisize per provare la routine Eleva e capire come risponde il pelo del tuo cane. Aggiungi la Spazzola Professional per completare il metodo fin dal primo utilizzo.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {cards.map((card, i) =>
      <div key={card.targetId} className="flex flex-col">
            <a
          href={`#${card.targetId}`}
          onClick={() => sendEvent("ClickKitCard", { product: card.name })}
          className="card-hover flex-1 border-2 border-primary rounded-sm bg-card px-5 pb-6 pt-6 text-center flex flex-col no-underline cursor-pointer">

              {/* Pill STEP verde piena (niente header in outline che scavalca il bordo) */}
              <span className="mx-auto mb-3 inline-block rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground">
                Step {i + 1}
              </span>
              <h4 className="font-bold text-primary text-lg">{card.name}</h4>
              <p className="text-xs text-muted-foreground mb-3">{card.scenario}</p>
              <p className="text-sm text-foreground/90 mb-4">{card.description}</p>
              <div className="relative border border-primary/40 rounded-sm overflow-hidden" style={{ aspectRatio: "1/1" }}>
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
            </a>
            {/* Il bottone drawer è fratello dell'anchor (niente interattivo annidato) */}
            {onOpenDrawer &&
          <button
            onClick={() => {
              sendEvent("ClickKitCard", { product: card.name, drawer: true });
              onOpenDrawer(card.targetId);
            }}
            className="cta-outline text-xs py-2 mt-3">
                {card.buttonLabel}
              </button>
          }
          </div>
      )}
      </div>

      {/* Box prezzi — la routine anti-nodi completa */}
      <div className="mt-14 rounded-2xl bg-primary text-primary-foreground p-8 lg:p-10">
        <h3 className="text-primary-foreground text-center mb-8">La routine anti-nodi completa</h3>
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/15 p-5 text-center">
            <p className="text-sm text-primary-foreground/80 mb-1">Cosmetici Eleva</p>
            <p className="text-3xl font-extrabold">38€</p>
            <p className="text-xs text-primary-foreground/70 mt-2">Shampoo, Maschera e Scioglinodi insieme</p>
          </div>
          <div className="rounded-xl bg-primary-foreground/5 border border-primary-foreground/15 p-5 text-center">
            <p className="text-sm text-primary-foreground/80 mb-1">Spazzola Professional</p>
            <p className="text-3xl font-extrabold">42€</p>
            <p className="text-xs text-primary-foreground/70 mt-2">Corpo in legno di faggio</p>
          </div>
          <div className="relative rounded-xl bg-tan/20 border-2 border-tan p-5 text-center">
            <span className="absolute top-3 right-3 rounded-full bg-peach px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              −25%
            </span>
            <p className="text-sm text-primary-foreground/90 mb-1 font-semibold">Kit Conosciamoci</p>
            <p className="text-3xl font-extrabold">
              60€ <span className="text-base font-normal line-through text-primary-foreground/50">80€</span>
            </p>
            <p className="text-xs text-primary-foreground/80 mt-2">Il metodo completo, dal primo giorno</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <a
            href={CONFIG.LINKS.KIT}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendEvent("ClickBundle", { section: "kit-prezzi" })}
            className="cta-white"
          >
            Inizia con il Kit — 60€
          </a>
          <p className="text-xs text-primary-foreground/70 text-center">
            30 giorni soddisfatti o rimborsati · Spedizione gratuita sopra 49€ · Consegna in 24–48 ore
          </p>
        </div>
      </div>
    </div>
  </section>;


export default ScenariSection;
