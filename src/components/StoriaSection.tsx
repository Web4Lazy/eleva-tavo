const StoriaSection = () => {
  return (
    <section id="storia" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-[720px] mx-auto lg:max-w-none lg:grid lg:grid-cols-[420px_1fr] lg:gap-16 lg:items-center">
          {/* Immagine fondatori */}
          <div className="mb-8 lg:mb-0">
            <div className="rounded-lg overflow-hidden w-full" style={{ aspectRatio: "4/5" }}>
              <img
                src="/images/brand/stefania.png"
                alt="Stefania, fondatrice di Eleva, con Eva la sua Maltese a pelo lungo"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Testo */}
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow mb-3">
              La nostra storia
            </p>
            <h2 className="text-foreground mb-6">Nato in casa nostra, con Eva</h2>

            <blockquote className="font-serif italic text-[19px] lg:text-[22px] leading-relaxed text-foreground/90 border-l-2 border-tan pl-5 text-left">
              «Il Metodo Eleva nasce con Eva, la nostra Maltese a pelo lungo. Avevamo
              provato di tutto: troppi prodotti, poco metodo, troppi nodi. Poi abbiamo
              capito che servivano meno gesti, fatti meglio. Questo metodo è quello che
              usiamo ogni giorno con lei: detergere, nutrire, proteggere, spazzolare.
              Con calma, un gesto alla volta.»
            </blockquote>

            <p className="mt-5 text-sm font-semibold text-muted-foreground">
              — Stefania &amp; Marcello, fondatori di ELEVA · con Eva, la nostra Maltese
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriaSection;
