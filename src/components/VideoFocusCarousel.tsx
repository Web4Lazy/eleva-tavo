import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoSlide {
  id: string;
  label: string;
  color: string;
  videoUrl?: string;
  youtubeId?: string;
}

const slides: VideoSlide[] = [
  { id: "v1", label: "Video 1", color: "hsl(152 33% 16%)", youtubeId: "iYa7epx4oPc" },
  { id: "v2", label: "Video 2", color: "hsl(36 33% 50%)", youtubeId: "JnNXKKN5V4I" },
  { id: "v3", label: "Maeve Montato", color: "hsl(0 0% 30%)", videoUrl: "/videos/maeve-montato.mov" },
  { id: "v-rosco", label: "Rosco Montato", color: "hsl(0 0% 25%)", videoUrl: "/videos/rosco-montato.mov" },
  { id: "v4", label: "Video 4", color: "hsl(152 33% 30%)", youtubeId: "SU2Ap0Zt3JU" },
  { id: "v5", label: "Video 5", color: "hsl(34 14% 50%)", youtubeId: "HaOCDcYP78M" },
  { id: "v6", label: "Video 6", color: "hsl(0 0% 20%)", youtubeId: "CT9A_FFL9fM" },
  { id: "v7", label: "Video 7", color: "hsl(152 33% 25%)", youtubeId: "4EbxKOkjb0o" },
];

const CARD_WIDTH = 280;
const ACTIVE_HEIGHT = 500;
const INACTIVE_HEIGHT = 380;
const GAP = 16;

const VideoFocusCarousel = () => {
  const isMobile = useIsMobile();
  const visibleCount = isMobile ? 3 : 5;
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isDragging = useRef(false);

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
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <h2 className="text-foreground mb-10 text-center">Unboxing e recensioni</h2>
      </div>

      <div className="relative">
        {/* Arrow buttons */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center backdrop-blur-sm hover:bg-card transition-colors active:scale-95"
          aria-label="Precedente"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center backdrop-blur-sm hover:bg-card transition-colors active:scale-95"
          aria-label="Successivo"
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
                  transition: "height 500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease-out, transform 500ms cubic-bezier(0.16, 1, 0.3, 1), border-radius 400ms ease",
                  boxShadow: isCenter
                    ? "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)"
                    : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {slide.youtubeId ? (
                  <>
                    <iframe
                      src={`https://www.youtube.com/embed/${slide.youtubeId}?autoplay=${isCenter ? 1 : 0}&mute=1&loop=1&playlist=${slide.youtubeId}&controls=0&modestbranding=1&playsinline=1`}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={slide.label}
                    />
                    {!isCenter && (
                      <div className="absolute inset-0 z-10" />
                    )}
                  </>
                ) : slide.videoUrl ? (
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src={slide.videoUrl}
                    muted={isMuted}
                    loop
                    playsInline
                    autoPlay={isCenter}
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

                {/* Mute toggle — only on center */}
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-primary w-6"
                  : "bg-border hover:bg-muted-foreground/40"
              }`}
              aria-label={`Vai al video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoFocusCarousel;
