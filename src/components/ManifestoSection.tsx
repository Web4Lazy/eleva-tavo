import stefaniaEva from "@/assets/stefania-eva.jpg";

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-[720px] mx-auto lg:max-w-none lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-foreground mb-6">Perché abbiamo scelto Tavo</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Non proponiamo un catalogo generico. Abbiamo selezionato questi prodotti perché uniscono design, comfort e attenzione alla sicurezza, con supporto umano nella scelta.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-2">
              {["Selezione curata", "Supporto nella scelta", "Prodotti premium"].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                >
                  ✓ {label}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={stefaniaEva}
              alt="Stefania & Eva con passeggino Tavo"
              className="w-full rounded-lg object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;