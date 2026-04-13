import { Instagram, Facebook, Youtube, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import logo from "@/assets/eleva.png";

const NAV_ITEMS = [
  { label: "Scenari", href: "#scenari" },
  { label: "Assistente", href: "#concierge" },
  { label: "Selezione", href: "#prodotto-dupree" },
  { label: "Come funziona", href: "#come-funziona" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  { icon: Instagram, href: "https://www.instagram.com/elevapet.official/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/elevapet.official/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@ElevaPetOfficial", label: "YouTube" },
  { icon: Globe, href: "https://elevapet.com/", label: "Sito web" },
];

const SocialIcons = () => (
  <div className="flex items-center gap-4">
    {SOCIALS.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <s.icon size={20} />
      </a>
    ))}
  </div>
);

const Footer = () => {
  const { reopenBanner } = useCookieConsent();

  return (
  <footer className="py-10 lg:py-14 bg-secondary" style={{ borderTop: "1px solid hsl(var(--grigio-bordo))" }}>
    <div className="container-custom">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Logo + socials sotto su mobile */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <a href="#" className="overflow-hidden" style={{ maxWidth: '15rem' }}>
            <img src={logo} alt="ELEVA" className="h-48 lg:h-60 w-auto object-contain" />
          </a>
          <div className="lg:hidden">
            <SocialIcons />
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Socials - solo desktop */}
        <div className="hidden lg:block">
          <SocialIcons />
        </div>
      </div>

      <div className="mt-8 pt-6 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 text-sm text-muted-foreground" style={{ borderTop: "1px solid hsl(var(--grigio-bordo))" }}>
        <span>© {new Date().getFullYear()} ELEVA × TAVO. Tutti i diritti riservati.</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cookie Policy
          </Link>
          <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Button variant="ghost" size="sm" onClick={reopenBanner} className="text-sm text-muted-foreground hover:text-foreground h-auto p-0">
            Preferenze cookie
          </Button>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
