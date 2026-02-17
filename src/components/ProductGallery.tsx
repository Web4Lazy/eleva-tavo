import { useState } from "react";

interface Props {
  productName: string;
  badge?: string;
  imageCount?: number;
}

const ProductGallery = ({ productName, badge, imageCount = 8 }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = Array.from({ length: imageCount }, (_, i) => ({
    label: `${productName} — Foto ${i + 1}`,
  }));

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div
        className="relative bg-[#D9D9D9] rounded-lg flex items-center justify-center overflow-hidden"
        style={{ aspectRatio: "1/1" }}
      >
        {badge && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 rounded-full z-10">
            {badge}
          </span>
        )}
        <span className="text-micro text-sm text-center px-4">
          {images[activeIndex].label}
        </span>
      </div>

      {/* Thumbnails bar */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-14 h-14 rounded-md bg-[#D9D9D9] flex items-center justify-center text-[9px] text-micro transition-all duration-200 border-2 ${
              i === activeIndex
                ? "border-primary opacity-100"
                : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
