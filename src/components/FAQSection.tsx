import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const faqs = [
{
  q: "Come scelgo la taglia?",
  a: "Ti servono 3 misure del tuo pet: peso, lunghezza (naso-coda) e altezza al garrese. Con questi dati possiamo consigliarti la taglia corretta.\n\nPer Maeve iso, considera anche le dimensioni del sedile della tua auto. Contattaci su WhatsApp per una consulenza personalizzata."
},
{
  q: "Maeve iso funziona nella mia auto?",
  a: "Gli agganci ISOFIX sono standard, ma le dimensioni del sedile variano per marca e modello. Prima di acquistare, verifica la compatibilità con noi: inviaci marca, modello e anno su WhatsApp."
},
{
  q: "Dupree è approvato per tutti gli aerei?",
  a: "Ogni compagnia ha regole diverse su dimensioni e peso. Dupree è progettato secondo gli standard comuni, ma devi verificare con la tua compagnia prima del volo. Ti forniamo le specifiche complete per facilitare il controllo."
},
{
  q: "Cosa include il Travel System?",
  a: "Include carrier Maeve iso (taglia a scelta) + telaio Roscoe + accessori (SIP Guard, liner, materassini, organizer). Sistema completo per auto e passeggio."
},
{
  q: "Tempi di spedizione?",
  a: "DHL ~10 giorni lavorativi. Tracking via email. Per urgenze, contattaci prima di ordinare."
},
{
  q: "Resi?",
  a: "Gestiti dal partner Tavo. Eleva fornisce supporto informativo e guida nella procedura. Garanzia standard produttore attiva."
},
{
  q: "Come uso il codice Vantaggio Fedeltà?",
  a: "Inserisci il codice ricevuto via email al checkout su elevapet.com. Importo fisso scontato automaticamente. Codice non ricevuto? Recuperalo su WhatsApp."
},
{
  q: "Orari assistenza WhatsApp?",
  a: "Lun–ven 9–18, risposta entro 60 minuti. Assistente umano, non bot. Messaggi fuori orario ricevono risposta alla riapertura."
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