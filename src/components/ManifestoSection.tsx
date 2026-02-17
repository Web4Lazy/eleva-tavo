import ImagePlaceholder from "./ImagePlaceholder";

const ManifestoSection = () => (
  <section id="manifesto" className="section-padding bg-background">
    <div className="container-custom">
      <div className="max-w-[720px] mx-auto lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-[1fr_280px] lg:gap-16 lg:items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-foreground mb-6">Creato per Eva. Condiviso con voi.</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Eva ha quattro zampe, una personalità tutta sua, e merita il meglio in ogni momento — in auto, in viaggio, a casa.
            Per questo abbiamo cercato, testato e selezionato ogni prodotto Tavo con la stessa cura che mettiamo nella nostra
            routine quotidiana. Non è un catalogo: è una scelta, fatta con amore e competenza.
          </p>
        </div>
        <div className="hidden lg:block">
          <ImagePlaceholder aspectRatio="1/1" label="Foto Eva / Lifestyle — 280×280" />
        </div>
      </div>
    </div>
  </section>
);

export default ManifestoSection;
