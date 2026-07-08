const STEPS = [
  { name: "Detergi", note: "con lo Shampoo Delicato — Senza SLS/SLES" },
  { name: "Nutri e districa", note: "con la Maschera Nutriente — Vitamina E + B5" },
  { name: "Proteggi e districa", note: "il pelo asciutto con lo Scioglinodi — Vitamina E + B5" },
  { name: "Spazzola", note: "dopo aver spruzzato lo Scioglinodi" },
];

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-[720px] mx-auto lg:max-w-none lg:grid lg:grid-cols-[1fr_440px] lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-foreground mb-6">Il Metodo Eleva. Routine gentile in 4 step</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Il pelo lungo non ha bisogno di mille prodotti, ha bisogno di un metodo facile da applicare. Per questo, il metodo Eleva si fonda su una routine semplice in 4 step: detergere, nutrire, proteggere e spazzolare.
            </p>
            <h3 className="text-foreground mb-1">I 4 step Eleva</h3>
            <p className="text-sm font-semibold text-muted-foreground mb-4">
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
            <div className="rounded-lg overflow-hidden w-full" style={{ aspectRatio: "4/5" }}>
              <img
                src="/images/brand/routine-flatlay.jpg"
                alt="I prodotti del Metodo Eleva: shampoo, maschera, scioglinodi e spazzola"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
