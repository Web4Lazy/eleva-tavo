import { useState, useEffect } from "react";
import { getWhatsAppUrl, sendEvent } from "@/config";

const StickyBottomBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) { setVisible(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-card shadow-[0_-2px_10px_rgba(0,0,0,0.08)] p-3 px-5 flex gap-3 lg:hidden">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => sendEvent("ClickWhatsApp", { section: "sticky-bar" })}
        className="cta-primary flex-1 text-center text-sm py-2.5"
      >
        WhatsApp
      </a>
      <a href="#scenari" className="flex-1 text-center text-sm py-2.5 text-primary font-medium hover:underline">
        Scopri
      </a>
    </div>
  );
};

export default StickyBottomBar;
