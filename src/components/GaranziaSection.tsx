// Sezione Garanzia = ".gband" del reference: riquadro bianco con bordo teal e
// cerchio verde "30 giorni" in linea (NON banda verde full-bleed).
const GaranziaSection = () => (
  <section id="garanzia" className="section-padding bg-background">
    <div className="container-custom">
      <div className="grid gap-6 rounded-[24px] border-[1.5px] border-teal bg-card p-8 text-center md:grid-cols-[auto_1fr] md:items-center md:gap-9 md:p-[38px_40px] md:text-left">
        {/* Cerchio verde "30 giorni" */}
        <div className="mx-auto flex h-[118px] w-[118px] flex-none flex-col items-center justify-center rounded-full bg-primary text-primary-foreground md:mx-0">
          <span className="text-[34px] font-extrabold leading-none">30</span>
          <span className="text-[13px] tracking-wide">giorni</span>
        </div>

        {/* Testo */}
        <div>
          <h3 className="mb-3.5 text-[23px] font-extrabold text-primary md:text-[29px]">
            Provalo con calma. Soddisfatti o rimborsati.
          </h3>
          <p className="mb-2.5 text-[15px] text-muted-foreground">
            <b className="text-primary">Ci fidiamo dei nostri prodotti perché li usiamo ogni giorno con Eva.</b>{" "}
            Se entro 30 giorni la routine non fa per te, ci rispedisci i cosmetici e ti rimborsiamo
            il loro importo. Ti chiediamo solo di raccontarci cosa non ha funzionato: ci aiuta a
            fare meglio.
          </p>
          <p className="text-[13.5px] italic" style={{ color: "hsl(var(--micro))" }}>
            Valida entro 30 giorni dalla consegna. Il rimborso riguarda i soli prodotti cosmetici
            (Shampoo, Maschera, Scioglinodi): la Spazzola Professional non rientra nel reso. Le
            spese di spedizione del reso, pari a 12€, sono a carico del cliente e non vengono
            detratte dal rimborso.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GaranziaSection;
