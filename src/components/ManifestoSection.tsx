import { useEffect, useRef, useState } from "react";

const ManifestoSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="manifesto" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-[720px] mx-auto lg:max-w-none lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-foreground mb-6">Perché abbiamo scelto Tavo</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Non proponiamo un catalogo generico. Abbiamo selezionato questi prodotti perché uniscono design, comfort e attenzione alla sicurezza, con supporto umano nella scelta.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">✓ Selezione curata</li>
              <li className="flex items-center gap-2">✓ Supporto nella scelta</li>
              <li className="flex items-center gap-2">✓ Prodotti premium per utilizzi reali</li>
            </ul>
          </div>
          <div ref={videoRef} className="hidden lg:block">
            <div className="relative w-full rounded-lg overflow-hidden aspect-[9/16]">
              {isVisible && (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Rx9OpVNWyDw?autoplay=1&mute=1&loop=1&playlist=Rx9OpVNWyDw&controls=0&showinfo=0&modestbranding=1"
                  title="TAVO lifestyle video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;