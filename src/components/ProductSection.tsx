import { useState } from "react";
import ProductGallery from "./ProductGallery";
import { getWhatsAppUrl, sendEvent, CONFIG } from "@/config";

export interface ProductSize {
  label: string;
  specs: { label: string; value: string }[];
}

export interface ProductData {
  id: string;
  tag: string;
  name: string;
  subtitle?: string;
  badge?: string;
  quickSummary?: {
    idealePer: string;
    formato: string;
    /** Etichetta della voce "formato" (default "Formato consigliato", "Uso consigliato" per la spazzola). */
    formatoLabel?: string;
    puntoForte: string;
    quandoSceglierlo: string;
  };
  benefits: string[];
  note?: string;
  noteExtra?: string;
  /** Foto reali della gallery (prima = cover); se assente ProductGallery mostra i placeholder. */
  images?: string[];
  /** Taglie/varianti — non pertinenti per i cosmetici, lasciate vuote. */
  sizes: ProductSize[];
  cartLink: string;
  ctaLabel: string;
  bgClass: string;
}

export const PRODUCTS: ProductData[] = [
  {
    id: "prodotto-shampoo",
    tag: "Step 1 — Detersione delicata",
    name: "Shampoo Delicato",
    subtitle: "il primo step del Metodo Eleva",
    bgClass: "bg-[#f7f5f3]",
    quickSummary: {
      idealePer: "Cani a pelo lungo, cute delicata e lavaggi frequenti",
      formato: "100 ml nel Kit Conosciamoci",
      puntoForte: "Deterge senza seccare il pelo",
      quandoSceglierlo: "Se vuoi iniziare una routine delicata contro nodi, pelo secco e manto difficile da gestire",
    },
    benefits: [
      "Deterge il manto rispettando la cute del cane",
      "Già pronto all'uso: non va diluito",
      "Senza SLS/SLES, con tensioattivi delicati",
      "Prepara il pelo agli step successivi del Metodo Eleva",
    ],
    note: "Lo Shampoo Delicato è il primo passaggio della routine Eleva: pulisce il manto senza aggredirlo e aiuta a preparare il pelo alla Maschera Nutriente.",
    images: [
      "/images/products/shampoo/shampoo-01.jpg",
      "/images/products/shampoo/shampoo-02.jpg",
      "/images/products/shampoo/shampoo-03.jpg",
    ],
    sizes: [],
    cartLink: CONFIG.LINKS.KIT,
    ctaLabel: "Acquista il Kit",
  },
  {
    id: "prodotto-maschera",
    tag: "Step 2 — Nutrimento e districabilità",
    name: "Maschera Nutriente",
    subtitle: "il secondo step del Metodo Eleva",
    bgClass: "bg-background",
    quickSummary: {
      idealePer: "Cani a pelo lungo, manti secchi, annodati o difficili da pettinare",
      formato: "50 ml nel Kit Conosciamoci",
      puntoForte: "Nutre, ammorbidisce e aiuta a districare il pelo",
      quandoSceglierlo: "Dopo lo shampoo, per rendere il manto più morbido, setoso e facile da pettinare",
    },
    benefits: [
      "Nutre il pelo dopo la detersione",
      "Rende il manto più morbido, setoso e pettinabile",
      "Aiuta a districare i nodi e a prevenirne la formazione",
      "Si diluisce e si frulla in acqua calda prima dell'applicazione",
    ],
    note: "La Maschera Nutriente è lo step che fa la differenza nei cani a pelo lungo: dopo lo shampoo aiuta a rendere il manto più morbido, elastico e facile da pettinare.",
    // maschera-04.jpg esclusa: è la variante profumazione Pesca, il Kit è linea Lavanda (vedi TODO_INPUT_CLIENTE.md)
    images: [
      "/images/products/maschera/maschera-01.jpg",
      "/images/products/maschera/maschera-02.jpg",
      "/images/products/maschera/maschera-03.jpg",
    ],
    sizes: [],
    cartLink: CONFIG.LINKS.KIT,
    ctaLabel: "Acquista il Kit",
  },
  {
    id: "prodotto-scioglinodi",
    tag: "Step 3 — Protezione e districabilità",
    name: "Scioglinodi Spray",
    subtitle: "il terzo step del Metodo Eleva",
    bgClass: "bg-[#f7f5f3]",
    quickSummary: {
      idealePer: "Cani a pelo lungo, manti che si annodano facilmente e mantenimento tra un bagno e l'altro",
      formato: "50 ml nel Kit Conosciamoci",
      puntoForte: "Aiuta a districare il pelo asciutto prima della spazzolata",
      quandoSceglierlo: "Tra un bagnetto e l'altro, quando il pelo tende ad annodarsi o diventa più difficile da spazzolare",
    },
    benefits: [
      "Si usa sul pelo asciutto prima della spazzola",
      "Aiuta a districare i nodi e a rendere il pelo più pettinabile",
      "Favorisce una spazzolatura più veloce e meno stressante",
      "Aiuta a mantenere il manto più ordinato tra un lavaggio e l'altro",
    ],
    note: "Lo Scioglinodi Spray è lo step di mantenimento del Metodo Eleva: prepara il pelo alla spazzola e aiuta a gestire i nodi tra un bagno e l'altro.",
    images: [
      "/images/products/scioglinodi/scioglinodi-01.jpg",
      "/images/products/scioglinodi/scioglinodi-02.jpg",
      "/images/products/scioglinodi/scioglinodi-03.jpg",
    ],
    sizes: [],
    cartLink: CONFIG.LINKS.KIT,
    ctaLabel: "Acquista il Kit",
  },
  {
    id: "prodotto-spazzola",
    tag: "Step 4 — Spazzolatura corretta",
    name: "Spazzola Professional",
    subtitle: "completa il Metodo Eleva",
    badge: "-40% col Kit",
    bgClass: "bg-background",
    quickSummary: {
      idealePer: "Cani a pelo lungo, manti annodati o difficili da spazzolare",
      formatoLabel: "Uso consigliato",
      formato: "Dopo lo Scioglinodi sul pelo asciutto, oppure durante l'asciugatura",
      puntoForte: "Aiuta a districare facilmente il pelo senza spezzarlo",
      quandoSceglierlo: "Se vuoi completare il Metodo Eleva con lo strumento corretto per la spazzolata",
    },
    benefits: [
      "Completa la routine anti-nodi Eleva",
      "Da usare dopo lo Scioglinodi, sul pelo asciutto",
      "Da usare dopo il bagnetto in asciugatura",
      "Aiuta a snodare il pelo velocemente",
      "Cuscinetto antistatico",
    ],
    note: "La Spazzola Professional è lo strumento che completa il Metodo Eleva: lo Scioglinodi prepara il pelo, la spazzola aiuta a lavorarlo con più delicatezza e a mantenere il manto ordinato.",
    noteExtra: "Con il Kit Conosciamoci, la Spazzola Professional è riservata a prezzo speciale: -40%.",
    images: [
      "/images/products/spazzola/spazzola-01.jpg",
      "/images/products/spazzola/spazzola-02.jpg",
      "/images/products/spazzola/spazzola-03.jpg",
    ],
    sizes: [],
    cartLink: CONFIG.LINKS.KIT,
    ctaLabel: "-40% col kit",
  },
];

interface Props {
  product: ProductData;
  compact?: boolean;
}

const ProductSection = ({ product, compact = false }: Props) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const currentSpecs = product.sizes[selectedSize]?.specs || [];
  const hasSizeSelector = product.sizes.length > 1;

  const content = (
    <div className="flex-1">
      <span className="inline-block bg-secondary text-foreground text-sm font-medium px-3 py-1 rounded-full mb-3">
        {product.tag}
      </span>
      <div className="flex items-baseline gap-3 mb-1">
        <h2 className="text-foreground">{product.name}</h2>
      </div>
      {product.subtitle && <p className="text-muted-foreground text-sm mb-4">{product.subtitle}</p>}

      {product.quickSummary && (
        <div className="bg-secondary border border-border rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="font-semibold text-foreground">Ideale per:</span>
              <p className="text-muted-foreground">{product.quickSummary.idealePer}</p>
            </div>
            <div>
              <span className="font-semibold text-foreground">{product.quickSummary.formatoLabel || "Formato consigliato"}:</span>
              <p className="text-muted-foreground">{product.quickSummary.formato}</p>
            </div>
            <div>
              <span className="font-semibold text-foreground">Punto forte:</span>
              <p className="text-muted-foreground">{product.quickSummary.puntoForte}</p>
            </div>
            <div>
              <span className="font-semibold text-foreground">Quando sceglierlo:</span>
              <p className="text-muted-foreground">{product.quickSummary.quandoSceglierlo}</p>
            </div>
          </div>
        </div>
      )}

      <ul className="space-y-2 mb-6">
        {product.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[15px] text-foreground">
            <span className="text-primary mt-0.5">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {hasSizeSelector && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-foreground mb-2">Formato</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size, i) => (
              <button
                key={size.label}
                onClick={() => setSelectedSize(i)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  i === selectedSize
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary"
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Specs table — solo se il prodotto ha specifiche dimensionali */}
      {currentSpecs.length > 0 && (
        <div className="bg-secondary rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold text-foreground mb-2">
            Dettagli {hasSizeSelector ? `(${product.sizes[selectedSize].label})` : ""}
          </p>
          <div className="space-y-1">
            {currentSpecs.map((s) => (
              <div key={s.label} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="text-foreground font-medium">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {product.note && (
        <p className="text-sm text-muted-foreground mb-4">{product.note}</p>
      )}

      {product.noteExtra && (
        <div className="bg-secondary border-l-[3px] border-primary rounded-lg p-3 text-sm font-medium text-foreground mb-6">
          {product.noteExtra}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("ClickWhatsApp", { product: product.name, section: "product" })}
          className="cta-primary text-center"
        >
          Chiedi consiglio
        </a>
        <a
          href={product.cartLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("AddToCart", { product: product.name })}
          className="cta-outline text-center"
        >
          {product.ctaLabel}
        </a>
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        Hai dubbi sul pelo del tuo cane? Ti consigliamo la routine giusta su WhatsApp prima dell'acquisto.
      </p>
    </div>
  );

  if (compact) {
    return (
      <div className="space-y-4">
        <ProductGallery productName={product.name} badge={product.badge} imageCount={4} images={product.images} />
        {content}
      </div>
    );
  }

  return (
    <section id={product.id} className={`section-padding ${product.bgClass}`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <ProductGallery productName={product.name} badge={product.badge} imageCount={4} images={product.images} />
          </div>
          {content}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
