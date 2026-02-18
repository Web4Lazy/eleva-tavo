import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  productName: string;
  badge?: string;
  imageCount?: number;
  images?: string[];
}

const ProductGallery = ({ productName, badge, imageCount = 8, images: realImages }: Props) => {
  const count = realImages ? realImages.length : imageCount;
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const placeholders = Array.from({ length: count }, (_, i) => ({
    label: `${productName} — Foto ${i + 1}`,
  }));

  const prev = () => setActiveIndex((i) => (i === 0 ? count - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === count - 1 ? 0 : i + 1));

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div
        className="relative bg-white rounded-lg flex items-center justify-center overflow-hidden cursor-pointer group"
        style={{ aspectRatio: "1/1" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {badge && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 rounded-full z-10">
            {badge}
          </span>
        )}
        {realImages ? (
          <img
            src={realImages[activeIndex]}
            alt={`${productName} — Foto ${activeIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-micro text-sm text-center px-4">
            {placeholders[activeIndex].label}
          </span>
        )}

        {/* Prev arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          aria-label="Foto precedente"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next arrow */}
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          aria-label="Foto successiva"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Thumbnails bar — flex stretch to match main image width */}
      <div className={`grid gap-1.5`} style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`aspect-square rounded-md overflow-hidden flex items-center justify-center text-[9px] text-micro transition-all duration-200 border-2 ${
              i === activeIndex
                ? "border-primary opacity-100"
                : "border-transparent opacity-60 hover:opacity-90"
            } ${!realImages ? "bg-card" : ""}`}
          >
            {realImages ? (
              <img src={realImages[i]} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
            ) : (
              i + 1
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
