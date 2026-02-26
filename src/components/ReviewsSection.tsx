import { Star, Play, Package } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const videoReviews = [
  { name: "Marco R.", rating: 5, quote: "Il mio cane finalmente viaggia sicuro e comodo." },
  { name: "Giulia T.", rating: 5, quote: "Qualità eccezionale, si vede che è pensato per gli animali." },
  { name: "Alessandro M.", rating: 5, quote: "Montaggio semplicissimo grazie all'ISOFIX." },
  { name: "Francesca L.", rating: 5, quote: "Il design è bellissimo, si integra perfettamente in auto." },
  { name: "Luca B.", rating: 5, quote: "Non tornerei mai indietro, sicurezza al primo posto." },
];

const unboxingVideos = [
  { name: "Sara P.", label: "Unboxing Dupree" },
  { name: "Matteo G.", label: "Unboxing Maeve" },
  { name: "Chiara F.", label: "Unboxing Travel" },
  { name: "Davide S.", label: "Unboxing Shell" },
];

const textReviews = [
  { name: "Elena V.", rating: 5, quote: "Finalmente un prodotto pensato davvero per la sicurezza del mio gatto in auto. Consigliatissimo!" },
  { name: "Roberto D.", rating: 5, quote: "Spedizione veloce, materiali premium. Il mio labrador lo adora." },
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

const VideoPlaceholder = () => (
  <div className="relative w-full rounded-xl bg-muted flex items-center justify-center" style={{ paddingBottom: "56.25%" }}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center">
        <Play className="h-6 w-6 text-primary-foreground ml-0.5" />
      </div>
    </div>
  </div>
);

const ReviewsSection = () => (
  <section id="recensioni" className="section-padding bg-background">
    <div className="container-custom">
      <h2 className="text-foreground mb-10 text-center">Cosa dicono i nostri clienti</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Video Recensioni */}
        <div className="flex-1 min-w-0">
          <h3 className="text-foreground mb-5 text-center lg:text-left">Video Recensioni</h3>
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {videoReviews.map((review, i) => (
                <CarouselItem key={i}>
                  <div className="bg-card border border-border rounded-xl overflow-hidden card-hover h-full flex flex-col">
                    <VideoPlaceholder />
                    <div className="p-4 flex-1 flex flex-col justify-center min-h-[100px]">
                      <StarRating rating={review.rating} />
                      <p className="text-foreground font-semibold mt-2">{review.name}</p>
                      <p className="text-muted-foreground text-sm mt-1">"{review.quote}"</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-5 bg-card border-border" />
            <CarouselNext className="-right-4 lg:-right-5 bg-card border-border" />
          </Carousel>
        </div>

        {/* Unboxing */}
        <div className="flex-1 min-w-0">
          <h3 className="text-foreground mb-5 text-center lg:text-left">Unboxing</h3>
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {unboxingVideos.map((video, i) => (
                <CarouselItem key={i}>
                  <div className="bg-card border border-border rounded-xl overflow-hidden card-hover h-full flex flex-col">
                    <VideoPlaceholder />
                    <div className="p-4 flex-1 flex flex-col justify-center min-h-[100px]">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-primary" />
                        <p className="text-foreground font-semibold">{video.name}</p>
                      </div>
                      <span className="text-muted-foreground text-sm mt-1">— {video.label}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-5 bg-card border-border" />
            <CarouselNext className="-right-4 lg:-right-5 bg-card border-border" />
          </Carousel>
        </div>
      </div>
      {/* Recensioni Scritte */}
      <div className="mt-10">
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
