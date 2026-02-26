const ComeFunzionaSection = () => {
  const steps = [
    { title: "Checkout su Eleva", desc: "Acquisti sul sito Eleva e applichi il Vantaggio Fedeltà." },
    { title: "Spedizione Partner", desc: "Il partner spedisce con DHL in circa 10 giorni lavorativi." },
    { title: "Resi gestiti dal partner", desc: "I resi sono gestiti dal partner. Eleva resta disponibile per supporto informativo." },
  ];

  return (
    <section id="come-funziona" className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-foreground mb-10 text-center lg:text-left">Come funziona</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComeFunzionaSection;
