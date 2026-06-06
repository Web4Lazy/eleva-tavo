import ImagePlaceholder from "./ImagePlaceholder";

const STEPS = [
  { name: "Detergi", note: "con lo Shampoo Delicato — Senza SLS/SLES" },
  { name: "Nutri e districa", note: "con la Maschera Nutriente — Vitamina E + B5" },
  { name: "Proteggi e districa", note: "il pelo asciutto con lo Scioglinodi — Vitamina E + B5" },
  { name: "Spazzola", note: "dopo aver spruzzato lo Scioglinodi" },
];

const ManifestoSection = () => {
  return (
    <section id="metodo" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-[720px] mx-auto lg:max-w-none lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-foreground mb-6">Il Metodo Eleva. Routine gentile in 4 step</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Il pelo lungo non ha bisogno di mille prodotti, ha bisogno di un metodo facile da applicare. Per questo, il Metodo Eleva si fonda su una routine semplice in 4 step: detergere, nutrire, proteggere e spazzolare.
            </p>
            <p className="text-sm font-semibold text-foreground mb-3">
              Segui questi passaggi per ottenere un manto sano, morbido e luminoso
            </p>
            <ol className="space-y-3 text-left">
              {STEPS.map((step, i) => (
                <li key={step.name} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-foreground">
                    <span className="font-semibold">{step.name}</span>{" "}
                    <span className="text-muted-foreground">{step.note}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="hidden lg:block">
            {/* PLACEHOLDER IMMAGINE: Stefania ed Eva / Metodo Eleva */}
            <ImagePlaceholder
              aspectRatio="1/1"
              label="IMMAGINE: Stefania & Eva — Metodo Eleva"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
