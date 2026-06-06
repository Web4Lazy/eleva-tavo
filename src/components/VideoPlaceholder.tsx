import { Play } from "lucide-react";

interface Props {
  label: string;
  /** Se passato, applica un aspect-ratio (es. "16/9"). Altrimenti il box riempie il contenitore. */
  aspectRatio?: string;
  className?: string;
  badge?: string;
}

/**
 * Placeholder grigio per i video, gemello di ImagePlaceholder.
 * Mantiene dimensioni/aspect-ratio per non rompere il layout finché
 * il cliente non fornisce i video definitivi.
 */
const VideoPlaceholder = ({ label, aspectRatio, className = "", badge }: Props) => (
  <div
    className={`relative bg-[#D9D9D9] rounded-lg flex flex-col items-center justify-center overflow-hidden ${className}`}
    style={aspectRatio ? { aspectRatio } : undefined}
  >
    {badge && (
      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 rounded-full z-10">
        {badge}
      </span>
    )}
    <Play className="w-12 h-12 text-white/60 mb-3" />
    <span className="text-micro text-sm text-center px-4">{label}</span>
  </div>
);

export default VideoPlaceholder;
