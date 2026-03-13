const ComeFunzionaSection = () => {
  const steps = [
  { title: "Scegli il prodotto", desc: "Scegli il prodotto con autonomia o con il supporto di un assistente umano." },
  { title: "Completa l'ordine", desc: "Completi l'ordine online in modo semplice." },
  { title: "Spedizione", desc: "Spedizione e gestione logistica sono curate dal partner indicato in pagina." },
  { title: "Assistenza e resi", desc: "In caso di dubbi o necessità, trovi le indicazioni su assistenza e resi nelle FAQ." }];


  return (
    <section id="come-funziona" className="section-padding bg-secondary">
      <div className="container-custom">
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