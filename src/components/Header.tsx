import { useState, useEffect } from "react";
import { sendEvent } from "@/config";

interface Props {
  activeSection: string;
}

const NAV_ITEMS = [
  { label: "Nodi", href: "#hero" },
  { label: "Metodo", href: "#manifesto" },
  { label: "Kit", href: "#kit" },
  { label: "Spazzola", href: "#prodotto-spazzola" },
  { label: "FAQ", href: "#faq" },
];

const Header = ({ activeSection }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Strip */}
      <div className="bg-primary text-primary-foreground text-[13px] text-center py-2 px-4">
        100% morbidezza, 0% nodi, 0% stress — il Metodo Eleva per il pelo lungo · 30 giorni soddisfatti o rimborsati · Supporto WhatsApp lun–ven 9–18
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-secondary transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}
        style={{ borderBottom: "1px solid hsl(var(--grigio-bordo))" }}
      >
        <div className="container-custom flex items-center justify-between h-14 lg:h-16">
          <a href="#">
            <img
              src="/images/brand/eleva-logo.svg"
              alt="Eleva"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kit"
              onClick={() => sendEvent("ClickKitCTA", { section: "header" })}
              className="cta-primary text-xs py-2 px-4 hidden lg:inline-flex"
            >
              Inizia con il Kit — 60€
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            >
              <span className={`block w-5 h-0.5 bg-primary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-border bg-background px-5 py-4 space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm text-foreground py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kit"
              onClick={() => {
                sendEvent("ClickKitCTA", { section: "header" });
                setMenuOpen(false);
              }}
              className="cta-primary text-sm w-full text-center mt-2"
            >
              Inizia con il Kit — 60€
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
