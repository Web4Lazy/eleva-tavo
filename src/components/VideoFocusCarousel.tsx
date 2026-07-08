import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX, ChevronLeft, ChevronRight, Play, Cookie } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCookieConsent } from "@/hooks/useCookieConsent";

interface VideoSlide {
  id: string;
  label: string;
  color: string;
  videoUrl?: string;
  youtubeId?: string;
}

// Video-recensioni clienti Eleva (public/videos/) — .mp4 web-ottimizzati (H.264/AAC, 720p, faststart).
const slides: VideoSlide[] = [
  { id: "greta", label: "Greta & Josè", color: "hsl(176 93% 12%)", videoUrl: "/videos/greta.mp4" },
  { id: "monica", label: "Monica", color: "hsl(173 75% 16%)", videoUrl: "/videos/monica.mp4" },
  { id: "carla", label: "Carla & Lillo", color: "hsl(34 32% 71%)", videoUrl: "/videos/carla.mp4" },
  { id: "ornella", label: "Ornella", color: "hsl(12 36% 58%)", videoUrl: "/videos/ornella.mp4" },
  { id: "cinzia", label: "Cinzia & Axel", color: "hsl(39 73% 56%)", videoUrl: "/videos/cinzia.mp4" },
];

const CARD_WIDTH = 280;
const ACTIVE_HEIGHT = 500;
const INACTIVE_HEIGHT = 380;
const GAP = 16;

const VideoFocusCarousel = () => {
  const isMobile = useIsMobile();
  const { choices, reopenBanner } = useCookieConsent();
  const marketingAllowed = choices?.marketing ?? false;
  // 5 card su desktop solo se ci sono abbastanza slide, altrimenti 3 (evita duplicati ai bordi con il wrap).
  const visibleCount = isMobile ? 3 : slides.length >= 5 ? 5 : 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  // Se un video non carica (es. .mov non supportato) si degrada al placeholder colorato.
  const [failedIds, setFailedIds] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isDragging = useRef(false);

  // prefers-reduced-motion: niente autoplay né transizioni forzate.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const getWrappedIndex = useCallback(
    (i: number) => ((i % slides.length) + slides.length) % slides.length,
    []
  );

  const goTo = useCallback(
    (index: number) => setActiveIndex(getWrappedIndex(index)),
    [getWrappedIndex]
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Non intercettare le frecce mentre l'utente scrive in un campo o naviga altrove.
      const el = document.activeElement as HTMLElement | null;
      if (
        el &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.tagName === "SELECT" ||
          el.isContentEditable)
      )
        return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  // Touch/swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    isDragging.current = false;
    if (touchDeltaX.current < -40) goNext();
    else if (touchDeltaX.current > 40) goPrev();
    touchDeltaX.current = 0;
  };

  // Build visible indices centered around activeIndex
  const half = Math.floor(visibleCount / 2);
  const visibleIndices: number[] = [];
  for (let i = -half; i <= half; i++) {
    visibleIndices.push(getWrappedIndex(activeIndex + i));
  }

  return (
    <section id="unboxing" className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        <h2 className="text-foreground mb-2 text-center">Unboxing e recensioni</h2>
        <p className="text-muted-foreground text-center mb-10">
          Le clienti Eleva raccontano com'è cambiata la routine anti-nodi del loro cane.
        </p>
      </div>

      <div className="relative">
        {/* Arrow buttons */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center backdrop-blur-sm hover:bg-card transition-colors active:scale-95"
          aria-label="Video precedente"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center backdrop-blur-sm hover:bg-card transition-colors active:scale-95"
          aria-label="Video successivo"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Cards */}
        <div
          ref={containerRef}
          className="flex items-center justify-center"
          style={{ gap: GAP }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {visibleIndices.map((slideIdx, posIdx) => {
            const isCenter = posIdx === half;
            const distFromCenter = Math.abs(posIdx - half);
            const height = isCenter ? ACTIVE_HEIGHT : INACTIVE_HEIGHT;
            const opacity = isCenter ? 1 : distFromCenter === 1 ? 0.85 : 0.7;
            const radius = isCenter ? 16 : 12;
            const scale = isCenter ? 1 : distFromCenter === 1 ? 0.97 : 0.94;
            const slide = slides[slideIdx];

            return (
              <div
                key={`${slide.id}-${posIdx}`}
                onClick={() => {
                  if (!isCenter) {
                    const offset = posIdx - half;
                    goTo(activeIndex + offset);
                  }
                }}
                className="shrink-0 relative overflow-hidden cursor-pointer will-change-transform"
                style={{
                  width: CARD_WIDTH,
                  height,
                  borderRadius: radius,
                  opacity,
                  transform: `scale(${scale})`,
                  transition: reducedMotion
                    ? "none"
                    : "height 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease-out, transform 500ms cubic-bezier(0.16, 1, 0.3, 1), border-radius 400ms ease",
                  boxShadow: isCenter
                    ? "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)"
                    : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {slide.youtubeId ? (
                  marketingAllowed ? (
                    <>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${slide.youtubeId}?autoplay=${isCenter && !reducedMotion ? 1 : 0}&mute=1&loop=1&playlist=${slide.youtubeId}&controls=0&modestbranding=1&playsinline=1&rel=0`}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={slide.label}
                      />
                      {!isCenter && <div className="absolute inset-0 z-10" />}
                    </>
                  ) : (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
                      style={{ backgroundColor: slide.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        reopenBanner();
                      }}
                    >
                      <Cookie className="w-10 h-10 text-white/70 mb-3" />
                      <span className="text-white/90 text-sm font-medium leading-snug">
                        Abilita i cookie marketing per vedere il video
                      </span>
                      <span className="text-white/60 text-xs mt-1.5 underline cursor-pointer">
                        Gestisci preferenze
                      </span>
                    </div>
                  )
                ) : slide.videoUrl && !failedIds.has(slide.id) ? (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={slide.videoUrl}
                    muted={isMuted}
                    loop
                    playsInline
                    autoPlay={isCenter && !reducedMotion}
                    preload="metadata"
                    onError={() => setFailedIds((prev) => new Set(prev).add(slide.id))}
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ backgroundColor: slide.color }}
                  >
                    <Play className="w-12 h-12 text-white/60 mb-3" />
                    <span className="text-white/80 text-sm font-medium">{slide.label}</span>
                  </div>
                )}

                {/* Mute toggle — solo sulla card centrale */}
                {isCenter && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm hover:bg-black/60 transition-colors active:scale-95"
                    aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 text-white" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-white" />
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-primary w-6" : "bg-border w-2 hover:bg-muted-foreground/40"
              }`}
              aria-label={`Vai al video ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoFocusCarousel;
