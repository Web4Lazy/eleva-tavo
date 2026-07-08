import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Recensioni del Kit Conosciamoci — testi forniti dal cliente.
const textReviews = [
  {
    name: "Laura",
    rating: 5,
    quote:
      "Ho provato i prodotti di Eleva sul mio maltese. Tra i tanti brand eccellenti che ho provato, questi si classificano al primo posto battendoli tutti. Il pelo resta setoso, corposo, morbido, non elettrico e non pesante; non un nodo, il che è importante in razze come queste. Anche dopo giorni il pelo è rimasto veramente bello. Per noi diventeranno un MAI PIÙ SENZA.",
  },
  {
    name: "Cinzia",
    rating: 5,
    quote:
      "Ho provato tanti prodotti ma questi sono veramente top. Il pelo risulta morbidissimo, setoso, facile da spazzolare. Con pochi prodotti riesci a toelettare il tuo maltese con semplicità. Professionalità, simpatia e velocità contraddistinguono questa meravigliosa azienda. Consigliatissimo.",
  },
  {
    name: "Sara",
    rating: 5,
    quote:
      "I prodotti Eleva sono il top. Prodotti delicati, di alta qualità. La spazzola è comodissima, lascia il pelo sempre in ordine al mio cavalier king. Spray scioglinodi perfetto per l'uso quotidiano. Consiglio questi prodotti a tutti.",
  },
  {
    name: "Milena",
    rating: 5,
    quote:
      "Curiosa di provare questi prodotti conosciuti tramite Facebook, li ho testati immediatamente. Hanno una profumazione molto delicata. Pelo bianchissimo e ben nutrito. Sono molto soddisfatta del risultato ottenuto! Ottimo il servizio clienti.",
  },
  {
    name: "Cristina",
    rating: 5,
    quote:
      "Ho provato i prodotti per la mia maltesina, sono ottimi. La profumazione è molto naturale e ho notato che il colore del pelo è molto più bianco e più morbido. Anche lo scioglinodi riesce a districare i nodi più brutti senza strappare il pelo. Sono molto soddisfatta.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} stelle su 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={i < rating ? "h-4 w-4 fill-gold text-gold" : "h-4 w-4 text-border"}
      />
    ))}
  </div>
);

const ReviewsSection = () => (
  <section id="recensioni" className="section-padding bg-background">
    <div className="container-custom">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow mb-3 text-center lg:text-left">
        Chi l'ha provato
      </p>
      <h2 className="text-foreground mb-2 text-center lg:text-left">Recensioni</h2>
      <p className="text-muted-foreground mb-8 text-center lg:text-left">
        4,9/5 su 40 recensioni · ci trovi anche a Quattrozampe in Fiera, Torino e Milano.
      </p>

      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {textReviews.map((review, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <div className="bg-card border border-border rounded-xl p-6 card-hover h-full flex flex-col justify-between min-h-[180px]">
                <div>
                  <StarRating rating={review.rating} />
                  <p className="text-foreground/90 text-sm mt-3 italic">"{review.quote}"</p>
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">— {review.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 lg:-left-5 bg-card border-border" />
        <CarouselNext className="-right-4 lg:-right-5 bg-card border-border" />
      </Carousel>
    </div>
  </section>
);

export default ReviewsSection;
