import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import VideoFocusCarousel from "@/components/VideoFocusCarousel";

// TODO(cliente): nomi/iniziali reali degli autori e rating verificati (il doc non li fornisce)
const textReviews = [
  { name: "Cliente Eleva", rating: 5, quote: "Abbiamo utilizzato questo kit e devo dire che l'effetto è stato davvero strepitoso. Durante l'asciugatura non ho avuto alcuna difficoltà a districare il pelo grazie allo scioglinodi. Alla fine il mantello della mia piccola era morbidissimo e luminoso." },
  { name: "Cliente Eleva", rating: 5, quote: "Da quando ho provato questo scioglinodi sulla mia cagnolina mi sono totalmente innamorata della sua delicata profumazione di lavanda. Aiuta a districare il pelo facilmente e ha un potere condizionante e idratante." },
  { name: "Cliente Eleva", rating: 5, quote: "Spazzola super, sono riuscita a sciogliere dei nodi molto difficili. Lascia un pelo morbido e lucido, la consiglio!" },
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
