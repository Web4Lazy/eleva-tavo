import { ShieldCheck, Truck, BadgeCheck, ShoppingCart, MessageCircle } from "lucide-react";

type Variant = "light" | "dark";
type Context = "hero" | "closing";

const CONTENT: Record<Context, { icon: JSX.Element; text: string }[]> = {
  hero: [
    { icon: <ShieldCheck size={16} />, text: "Pagamenti sicuri al 100%" },
    { icon: <Truck size={16} />, text: "Spedizioni gratuite sopra 49€" },
    { icon: <BadgeCheck size={16} />, text: "Consegne affidabili con corrieri selezionati" },
  ],
  closing: [
    { icon: <ShoppingCart size={16} />, text: "Checkout su Eleva" },
    { icon: <Truck size={16} />, text: "Corriere espresso 24–48 ore" },
    { icon: <MessageCircle size={16} />, text: "Consigli personalizzati Eleva" },
  ],
};

const TrustBar = ({
  variant = "light",
  context = "hero",
}: {
  variant?: Variant;
  context?: Context;
}) => {
  const items = CONTENT[context];
  const isDark = variant === "dark";
  const textClass = isDark ? "text-primary-foreground/80" : "text-muted-foreground";

  return (
    <div className={`rounded-xl p-4 ${isDark ? "bg-transparent" : "bg-secondary"}`}>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 lg:gap-x-16">
        {items.map((item) => (
          <div key={item.text} className={`flex items-center gap-2 text-sm ${textClass}`}>
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
      <p className={`text-base font-semibold mt-3 text-center ${textClass}`}>
        Assistenza WhatsApp lun–ven 9–18 — rispondiamo in giornata.
      </p>
    </div>
  );
};

export default TrustBar;
