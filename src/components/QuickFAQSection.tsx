const quickFaqs = [
  {
    q: "Il Kit è adatto al mio cane?",
    a: "Il Kit Conosciamoci è pensato per cani a pelo lungo o con pelo che si annoda facilmente, come Maltese, Shih Tzu, Yorkshire, Barboncini, Cavalier King…",
    link: "#faq",
  },
  {
    q: "Aiuta davvero contro i nodi?",
    a: "Sì, la routine aiuta a districare il pelo e a ridurre le condizioni che favoriscono la formazione dei nodi: secchezza, scarsa idratazione.",
    link: "#faq",
  },
  {
    q: "Come si usa la maschera nutriente?",
    a: "Dopo lo shampoo, diluisci e frulla la maschera in acqua calda. Applicala su tutto il mantello. Se il tuo cane ha il manto lungo, non risciacquare.",
    link: "#faq",
  },
  {
    q: "Lo shampoo va diluito?",
    a: "No. Lo Shampoo Delicato Eleva è già pronto all'uso: si applica puro direttamente sul pelo bagnato. L'unico prodotto del Kit da diluire è la Maschera Nutriente, da preparare con acqua calda prima dell'applicazione.",
    link: "#faq",
  },
];

const QuickFAQSection = () => (
  <section id="nodi" className="section-padding bg-[#f7f5f3]">
    <div className="container-custom">
      <h2 className="text-foreground mb-8 text-center">Domande veloci</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickFaqs.map((faq, i) => (
          <a
            key={i}
            href={faq.link}
            className="group bg-background border border-border rounded-xl p-5 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-md active:scale-[0.98]"
          >
            <h3 className="text-sm font-semibold text-foreground leading-snug">
              {faq.q}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">
              {faq.a}
            </p>
            <span className="text-xs text-primary font-medium group-hover:underline mt-auto">
              Leggi di più →
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default QuickFAQSection;
