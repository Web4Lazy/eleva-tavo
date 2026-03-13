import { useState, useEffect } from "react";
import { getWhatsAppUrl } from "@/config";
import { sendEvent } from "@/config";
import logo from "@/assets/logo.png";

interface Props {
  activeSection: string;
}

const NAV_ITEMS = [
  { label: "Scenari", href: "#scenari" },
  { label: "Assistente", href: "#concierge" },
  { label: "Selezione", href: "#prodotto-dupree" },
  { label: "Come funziona", href: "#come-funziona" },
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
        Scelto da Eleva per chi si prende cura davvero. Supporto WhatsApp lun–ven 9–18.
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}
        style={{ borderBottom: "1px solid hsl(var(--grigio-bordo))", backgroundColor: "#eae2d6" }}
        style={{ borderBottom: "1px solid hsl(var(--grigio-bordo))" }}
      >
        <div className="container-custom flex items-center justify-between h-14 lg:h-16">
          <a href="#">
            <img src={logo} alt="ELEVA × TAVO" className="h-16 lg:h-20 w-auto object-contain" />
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
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendEvent("ClickWhatsApp", { section: "header" })}
              className="cta-outline text-xs py-2 px-4 hidden lg:inline-flex"
            >
              Chiedi a un assistente
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-primary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-primary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background px-5 py-4 space-y-3">
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
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sendEvent("ClickWhatsApp", { section: "mobile-menu" })}
              className="cta-primary text-sm w-full text-center mt-2"
            >
              Chiedi a un assistente
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
