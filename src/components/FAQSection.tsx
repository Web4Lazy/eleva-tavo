import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Come scelgo la taglia giusta?",
    a: "Scrivici su WhatsApp: ci bastano peso e misure principali del tuo pet e ti guidiamo noi.",
  },
  {
    q: "È compatibile con la mia auto/ISOFIX?",
    a: "Dipende dal veicolo. Il nostro Concierge ti aiuta a verificare compatibilità e installazione prima dell'acquisto.",
  },
  {
    q: "Posso usare Dupree in aereo?",
    a: "Dupree è pensato anche per la cabina, ma le regole variano per compagnia aerea. Ti aiutiamo a controllare misure e peso prima di acquistare.",
  },
  {
    q: "In quanto tempo arriva?",
    a: "Spedizione con DHL in circa 10 giorni lavorativi.",
  },
  {
    q: "Resi e garanzia come funzionano?",
    a: "I resi sono gestiti dal partner. Eleva è disponibile come punto di contatto informativo. Scrivici su WhatsApp per qualsiasi dubbio.",
  },
  {
    q: "Quando risponde il Concierge?",
    a: "Lun–ven 9–18. Fuori orario rispondiamo al primo slot disponibile.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-card">
    <div className="container-custom max-w-[800px]">
      <h2 className="text-foreground mb-8 text-center">Domande frequenti</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
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

export default FAQSection;
