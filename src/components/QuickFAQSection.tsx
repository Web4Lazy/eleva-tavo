import { getWhatsAppUrl } from "@/config";

const quickFaqs = [
  {
    q: "Come scelgo la taglia giusta?",
    a: "Ti servono peso, lunghezza e altezza al garrese del tuo pet. Con questi dati ti consigliamo la taglia corretta.",
    link: "#faq",
  },
  {
    q: "È compatibile con la mia auto?",
    a: "Gli agganci ISOFIX sono standard, ma le dimensioni del sedile variano. Verifica la compatibilità con noi prima dell'acquisto.",
    link: "#faq",
  },
  {
    q: "Posso usarlo per viaggiare?",
    a: "Dupree è progettato per auto e aereo, ma ogni compagnia ha regole diverse. Ti forniamo le specifiche per verificare.",
    link: "#faq",
  },
  {
    q: "Dubbi? Scrivici prima di acquistare",
    a: "Puoi contattare un assistente umano via WhatsApp prima dell'acquisto per qualsiasi domanda.",
    link: getWhatsAppUrl(),
    external: true,
  },
];

const QuickFAQSection = () => (
  <section className="section-padding bg-[hsl(var(--sfondo-sezione))]">
    <div className="container-custom">
      <h2 className="text-foreground mb-8 text-center">Domande veloci</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickFaqs.map((faq, i) => (
          <a
            key={i}
            href={faq.link}
            target={faq.external ? "_blank" : undefined}
            rel={faq.external ? "noopener noreferrer" : undefined}
            className="group bg-background border border-border rounded-xl p-5 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-md active:scale-[0.98]"
          >
            <h3 className="text-sm font-semibold text-foreground leading-snug">
              {faq.q}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">
              {faq.a}
            </p>
            <span className="text-xs text-primary font-medium group-hover:underline mt-auto">
              {faq.external ? "Scrivi su WhatsApp →" : "Leggi di più →"}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default QuickFAQSection;
