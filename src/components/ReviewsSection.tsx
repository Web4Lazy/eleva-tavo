import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// TODO(cliente): nome recensore per ciascuna recensione (il doc non li fornisce) + rating reali
const textReviews = [
  { rating: 5, quote: "Abbiamo utilizzato questo kit e devo dire che l'effetto è stato davvero strepitoso. Durante l'asciugatura non ho avuto alcuna difficoltà a districare il pelo grazie allo scioglinodi. Alla fine il mantello della mia piccola era morbidissimo e luminoso." },
  { rating: 5, quote: "Da quando ho provato questo scioglinodi sulla mia cagnolina mi sono totalmente innamorata della sua delicata profumazione di lavanda. Aiuta a districare il pelo facilmente e ha un potere condizionante e idratante." },
  { rating: 5, quote: "Spazzola super, sono riuscita a sciogliere dei nodi molto difficili. Lascia un pelo morbido e lucido, la consiglio!" },
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
                  {/* TODO(cliente): nome recensore */}
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
