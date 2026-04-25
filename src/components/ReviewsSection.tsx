import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import VideoFocusCarousel from "@/components/VideoFocusCarousel";

const textReviews = [
  { name: "Elena V.", rating: 5, quote: "Finalmente un prodotto pensato davvero per la sicurezza del mio gatto in auto. Consigliatissimo!" },
  { name: "Roberto D.", rating: 5, quote: "Ho acquistato la cuccia Shell, materiali top! Il mio cocker la adora, si fa certe dormite…" },
  { name: "Valentina S.", rating: 5, quote: "Ho provato altri prodotti ma nessuno si avvicina alla qualità di ELEVA." },
  { name: "Giorgio M.", rating: 5, quote: "Assistenza clienti impeccabile, mi hanno guidato nella scelta perfetta." },
  { name: "Paola C.", rating: 5, quote: "Il sistema ISOFIX dà una sicurezza in più che non ha prezzo." },
  { name: "Simone F.", rating: 4, quote: "Ottimo prodotto, design elegante e funzionale. Lo consiglio." },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const ReviewsSection = () => (
  <section id="recensioni">
    {/* Video Focus Carousel */}
    <VideoFocusCarousel />

    {/* Text Reviews */}
    <div className="section-padding bg-background">
      <div className="container-custom">
        <h3 className="text-foreground mb-5 text-center lg:text-left">Recensioni</h3>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {textReviews.map((review, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-card border border-border rounded-xl p-6 card-hover h-full flex flex-col justify-between min-h-[160px]">
                  <div>
                    <StarRating rating={review.rating} />
                    <p className="text-muted-foreground text-sm mt-3 italic">"{review.quote}"</p>
                  </div>
                  <p className="text-foreground font-semibold text-sm mt-4">— {review.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 lg:-left-5 bg-card border-border" />
          <CarouselNext className="-right-4 lg:-right-5 bg-card border-border" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
