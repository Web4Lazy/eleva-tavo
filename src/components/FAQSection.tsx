import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const faqs = [
{
  q: "Il Kit Conosciamoci è adatto al mio cane?",
  a: "Il Kit è pensato per cani a pelo lungo o con manto che tende ad annodarsi facilmente, come Maltese, Shih Tzu, Yorkshire, Lhasa Apso, Barboncini, Cavalier King, ecc."
},
{
  q: "Cosa contiene il Kit Conosciamoci?",
  a: "Il Kit contiene tre minisize Eleva: Shampoo Delicato 100 ml, Maschera Nutriente 50 ml e Scioglinodi Spray 50 ml. È pensato per provare la routine Eleva prima di passare ai formati più grandi."
},
{
  q: "Il Kit aiuta davvero contro i nodi?",
  a: "Sì. Il Metodo Eleva aiuta a districare il pelo e a ridurre le condizioni che favoriscono la formazione dei nodi: pelo secco, poco nutrito, difficile da spazzolare o mantenuto in modo discontinuo."
},
{
  q: "In che ordine devo usare i prodotti?",
  a: "Durante il bagno usa prima lo Shampoo Delicato, poi la Maschera Nutriente. Tra un bagno e l'altro, usa lo Scioglinodi sul pelo asciutto prima di spazzolare."
},
{
  q: "Lo Shampoo Delicato va diluito?",
  a: "No. Lo Shampoo Delicato Eleva è già pronto all'uso e si applica puro direttamente sul pelo bagnato. L'unico prodotto del Kit da diluire è la Maschera Nutriente, da preparare con acqua calda prima dell'applicazione."
},
{
  q: "Come si usa la Maschera Nutriente?",
  a: "La Maschera Nutriente va diluita in acqua calda e frullata prima dell'applicazione. Sul pelo lungo può essere usata senza risciacquo. Sul pelo corto va risciacquata dopo una posa di qualche minuto."
},
{
  q: "Quando uso lo Scioglinodi?",
  a: "Lo Scioglinodi si usa sul pelo asciutto, tra un bagnetto e l'altro, prima della spazzolata."
},
{
  q: "La Spazzola Professional è necessaria?",
  a: "Per una routine completa è molto consigliata. I cosmetici preparano e nutrono il pelo, ma la spazzola corretta aiuta a lavorare il manto con più facilità e a mantenere il pelo ordinato."
},
{
  q: "Posso chiedere consiglio prima di acquistare?",
  a: "Sì. Puoi scriverci su WhatsApp e raccontarci com'è il pelo del tuo cane: età, razza, lunghezza, presenza di nodi, cute delicata o altre esigenze. Ti aiutiamo a scegliere la routine più adatta."
},
{
  q: "Quali sono i tempi di spedizione?",
  a: "Gli ordini vengono spediti con corriere espresso. In genere la spedizione avviene in 24-48 ore salvo ritardi del corriere."
}];


const FAQSection = () =>
<section id="faq" className="section-padding bg-[#f7f5f3]">
    <div className="container-custom max-w-[800px]">
      <h2 className="text-foreground mb-8 text-center">Domande frequenti</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) =>
      <AccordionItem
        key={i}
        value={`faq-${i}`}
        className="bg-background border border-border rounded-lg px-5">

            <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
      )}
      </Accordion>
    </div>
  </section>;


export default FAQSection;