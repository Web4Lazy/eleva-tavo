import { useState, useEffect, useCallback } from "react";
import { sendEvent } from "@/config";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ScenariSection from "@/components/ScenariSection";
import ExpandableVideoSection from "@/components/ExpandableVideoSection";
import ConciergeSection from "@/components/ConciergeSection";
import VantaggioSection from "@/components/VantaggioSection";
import ProductSection, { PRODUCTS } from "@/components/ProductSection";
import ComeFunzionaSection from "@/components/ComeFunzionaSection";
import FAQSection from "@/components/FAQSection";
import ClosingSection from "@/components/ClosingSection";
import StickyBottomBar from "@/components/StickyBottomBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProductDrawer from "@/components/ProductDrawer";
import Footer from "@/components/Footer";

const SECTION_IDS = [
  "hero",
  "manifesto",
  "scenari",
  "concierge",
  "vantaggio",
  "prodotto-dupree",
  "prodotto-maeve",
  "prodotto-travel",
  "prodotto-shell",
  "come-funziona",
  "faq",
  "chiusura",
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("");
  const [drawerProduct, setDrawerProduct] = useState<string | null>(null);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Scroll depth tracking
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const fired = new Set<number>();

    const onScroll = () => {
      const scrollPct = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );
      thresholds.forEach((t) => {
        if (scrollPct >= t && !fired.has(t)) {
          fired.add(t);
          sendEvent("ScrollDepth", { depth: t });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ViewContent on mount
  useEffect(() => {
    sendEvent("ViewContent");
  }, []);

  const handleOpenDrawer = useCallback((productId: string) => {
    setDrawerProduct(productId);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />

      <main>
        <HeroSection />
        <ScenariSection onOpenDrawer={handleOpenDrawer} />
        <ManifestoSection />
        <ExpandableVideoSection />
        <ConciergeSection />

        {PRODUCTS.map((product) => (
          <ProductSection key={product.id} product={product} />
        ))}

        <VantaggioSection />

        <ComeFunzionaSection />
        <FAQSection />
        <ClosingSection />
        <Footer />
      </main>

      <StickyBottomBar />
      <FloatingWhatsApp />
      <ProductDrawer productId={drawerProduct} onClose={() => setDrawerProduct(null)} />
    </>
  );
};

export default Index;
