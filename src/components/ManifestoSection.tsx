const ManifestoSection = () =>
<section id="manifesto" className="section-padding bg-secondary">
    <div className="container-custom">
      <div className="max-w-[720px] mx-auto text-center lg:text-left">
        <h2 className="text-foreground mb-6">Perché abbiamo scelto Tavo</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          Non proponiamo un catalogo generico. Abbiamo selezionato questi prodotti perché uniscono design, comfort e attenzione alla sicurezza, con supporto umano nella scelta.
        </p>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li className="flex items-center gap-2">✓ Selezione curata</li>
          <li className="flex items-center gap-2">✓ Supporto nella scelta</li>
          <li className="flex items-center gap-2">✓ Prodotti premium per utilizzi reali</li>
        </ul>
      </div>
    </div>
  </section>;

export default ManifestoSection;