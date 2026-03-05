import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/eleva.png";

const NAV_ITEMS = [
{ label: "Scenari", href: "#scenari" },
{ label: "Assistente", href: "#concierge" },
{ label: "Selezione", href: "#prodotto-dupree" },
{ label: "Come funziona", href: "#come-funziona" },
{ label: "FAQ", href: "#faq" }];


const SOCIALS = [
{ icon: Instagram, href: "https://www.instagram.com/elevapet.official/", label: "Instagram" },
{ icon: Facebook, href: "https://www.facebook.com/elevapet.official/", label: "Facebook" },
{ icon: Youtube, href: "https://www.youtube.com/@ElevaPetOfficial", label: "YouTube" }];


const Footer = () =>
<footer className="py-10 lg:py-14 bg-secondary" style={{ borderTop: "1px solid hsl(var(--grigio-bordo))" }}>
    <div className="container-custom">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Logo - only ELEVA half */}
        <a href="#" className="overflow-hidden" style={{ maxWidth: '15rem' }}>
          <img src={logo} alt="ELEVA" className="h-48 lg:h-60 w-auto object-contain object-left" />
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_ITEMS.map((item) =>
        <a
          key={item.href}
          href={item.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors">

              {item.label}
            </a>
        )}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {SOCIALS.map((s) =>
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-muted-foreground hover:text-foreground transition-colors">

              <s.icon size={20} />
            </a>
        )}
        </div>
      </div>

      <div className="mt-8 pt-6 text-center text-sm text-muted-foreground" style={{ borderTop: "1px solid hsl(var(--grigio-bordo))" }}>
        © {new Date().getFullYear()} ELEVA × TAVO. Tutti i diritti riservati.
      </div>
    </div>
  </footer>;


export default Footer;