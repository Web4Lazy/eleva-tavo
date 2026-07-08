const ComeFunzionaSection = () => {
  const steps = [
  { title: "Parti dal Kit", desc: "Tre minisize per iniziare subito la routine anti-nodi Eleva." },
  { title: "Aggiungi la spazzola", desc: "Con la Spazzola Professional completi il metodo e rendi la routine più efficace." },
  { title: "Usa i prodotti in ordine", desc: "Shampoo, maschera, scioglinodi e spazzola: ogni step ha una funzione precisa." },
  { title: "Ricevi supporto Eleva", desc: "Ti seguiamo su WhatsApp per aiutarti a costruire la routine giusta per il tuo cane." }];


  return (
    <section id="come-funziona" className="section-padding bg-secondary">
      <div className="container-custom">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow mb-3 text-center lg:text-left">SEMPLICE DAVVERO</p>
        <h2 className="text-foreground mb-10 text-center lg:text-left">Come funziona</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) =>
          <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ComeFunzionaSection;