import { ShoppingCart } from "lucide-react";

const TrustBar = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const items = [
    { icon: <ShoppingCart size={16} />, text: "Checkout su Eleva" },
    { icon: "📦", text: "Corriere Espresso ~ 10 giorni" },
    { icon: "↩", text: "Resi gestiti dal partner" },
  ];

  const isDark = variant === "dark";

  return (
    <div className={`rounded-xl p-4 ${isDark ? "bg-transparent" : "bg-secondary"}`}>
      <div className="flex flex-wrap justify-center gap-16">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2 text-sm">
            <span>{item.icon}</span>
            <span className={isDark ? "text-primary-foreground/80" : "text-muted-foreground"}>{item.text}</span>
          </div>
        ))}
      </div>
      <p className={`text-base font-semibold mt-3 text-center ${isDark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        Assistenza WhatsApp lun–ven 9–18 — rispondiamo in giornata.
      </p>
    </div>
  );
};

export default TrustBar;
