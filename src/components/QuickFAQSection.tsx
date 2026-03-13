import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getWhatsAppUrl } from "@/config";

const quickFaqs = [
  {
    q: "Come scelgo la taglia giusta?",
    a: (
      <>
        Ti servono peso, lunghezza e altezza al garrese del tuo pet. Con questi dati ti consigliamo la taglia corretta.{" "}
        <a href="#faq" className="text-primary hover:underline font-medium">Leggi la risposta completa →</a>
      </>
    ),
  },
  {
    q: "È compatibile con la mia auto?",
    a: (
      <>
        Gli agganci ISOFIX sono standard, ma le dimensioni del sedile variano. Verifica la compatibilità con noi prima dell'acquisto.{" "}
        <a href="#faq" className="text-primary hover:underline font-medium">Leggi la risposta completa →</a>
      </>
    ),
  },
  {
    q: "Posso usarlo per viaggiare?",
    a: (
      <>
        Dupree è progettato per auto e aereo, ma ogni compagnia ha regole diverse. Ti forniamo le specifiche per verificare.{" "}
        <a href="#faq" className="text-primary hover:underline font-medium">Leggi la risposta completa →</a>
      </>
    ),
  },
  {
    q: "Se ho dubbi posso scrivere prima di acquistare?",
    a: (
      <>
        Sì, puoi contattare un{" "}
        <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
          assistente umano via WhatsApp
        </a>{" "}
        prima dell'acquisto.
      </>
    ),
  },
];

const QuickFAQSection = () => (
  <section className="section-padding bg-[#f7f5f3]">
    <div className="container-custom max-w-[800px]">
      <h2 className="text-foreground mb-8 text-center">Domande veloci</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {quickFaqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`quick-faq-${i}`}
            className="bg-background border border-border rounded-lg px-5"
          >
            <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default QuickFAQSection;
