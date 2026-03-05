const TrustBar = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const items = [
    { icon: "✓", text: "Checkout su Eleva" },
    { icon: "📦", text: "DHL ~10 giorni" },
    { icon: "↩", text: "Resi gestiti dal partner" },
    { icon: "💬", text: "WhatsApp lun–ven 9–18" },
  ];

  const isDark = variant === "dark";

  return (
    <div className={`rounded-xl p-4 ${isDark ? "bg-transparent" : "bg-secondary"}`}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2 text-sm">
            <span>{item.icon}</span>
            <span className={isDark ? "text-primary-foreground/80" : "text-muted-foreground"}>{item.text}</span>
          </div>
        ))}
      </div>
      <p className={`text-base font-semibold mt-3 ${isDark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        Assistenza WhatsApp lun–ven 9–18 — rispondiamo in giornata.
      </p>
    </div>
  );
};

export default TrustBar;
