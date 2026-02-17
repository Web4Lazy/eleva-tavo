interface Props {
  aspectRatio?: string;
  label: string;
  className?: string;
  badge?: string;
}

const ImagePlaceholder = ({ aspectRatio = "4/3", label, className = "", badge }: Props) => (
  <div
    className={`relative bg-[#D9D9D9] rounded-lg flex items-center justify-center overflow-hidden ${className}`}
    style={{ aspectRatio }}
  >
    {badge && (
      <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-semibold px-3 py-1 rounded-full z-10">
        {badge}
      </span>
    )}
    <span className="text-micro text-sm text-center px-4">{label}</span>
  </div>
);

export default ImagePlaceholder;
