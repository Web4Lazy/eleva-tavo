const TrustBar = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const items = [
    { icon: "✓", text: "Checkout su Eleva" },
    { icon: "📦", text: "DHL ~10 giorni" },
    { icon: "↩", text: "Resi gestiti dal partner" },
    { icon: "💬", text: "WhatsApp lun–ven 9–18" },
  ];

  const isDark = variant === "dark";

  return (
    <div className={`rounded-xl p-4 grid grid-cols-2 lg:grid-cols-4 gap-3 ${isDark ? "bg-transparent" : "bg-secondary"}`}>
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-2 text-sm">
          <span>{item.icon}</span>
          <span className={isDark ? "text-micro" : "text-foreground"}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBar;
