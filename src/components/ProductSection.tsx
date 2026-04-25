import { useState } from "react";
import ProductGallery from "./ProductGallery";
import { getWhatsAppUrl, sendEvent, CONFIG } from "@/config";

import dupree0 from "@/assets/dupree/dupree-0.jpg";
import dupree1 from "@/assets/dupree/dupree-1.png";
import dupree2 from "@/assets/dupree/dupree-2.png";
import dupree3 from "@/assets/dupree/dupree-3.png";
import dupree4 from "@/assets/dupree/dupree-4.png";
import dupree5 from "@/assets/dupree/dupree-5.png";
import dupree6 from "@/assets/dupree/dupree-6.jpg";
import dupree7 from "@/assets/dupree/dupree-7.png";

const DUPREE_IMAGES = [dupree0, dupree1, dupree2, dupree3, dupree4, dupree5, dupree6, dupree7];

import maeve0 from "@/assets/maeve/maeve-0.jpg";
import maeve1 from "@/assets/maeve/maeve-1.png";
import maeve2 from "@/assets/maeve/maeve-2.png";
import maeve3 from "@/assets/maeve/maeve-3.png";
import maeve4 from "@/assets/maeve/maeve-4.png";
import maeve5 from "@/assets/maeve/maeve-5.png";
import maeve6 from "@/assets/maeve/maeve-6.png";
import maeve7 from "@/assets/maeve/maeve-7.png";
import maeve8 from "@/assets/maeve/maeve-8.png";

const MAEVE_IMAGES = [maeve0, maeve1, maeve2, maeve3, maeve4, maeve5, maeve6, maeve7, maeve8];

import shell0 from "@/assets/shell/shell-0.jpg";
import shell1 from "@/assets/shell/shell-1.png";
import shell2 from "@/assets/shell/shell-2.png";
import shell3 from "@/assets/shell/shell-3.png";
import shell4 from "@/assets/shell/shell-4.png";
import shell5 from "@/assets/shell/shell-5.png";

const SHELL_IMAGES = [shell0, shell1, shell2, shell3, shell4, shell5];

import travel0 from "@/assets/travel/travel-0.jpg";
import travel1 from "@/assets/travel/travel-1.png";
import travel2 from "@/assets/travel/travel-2.png";
import travel3 from "@/assets/travel/travel-3.png";
import travel4 from "@/assets/travel/travel-4.png";
import travel5 from "@/assets/travel/travel-5.png";
import travel6 from "@/assets/travel/travel-6.png";

const TRAVEL_IMAGES = [travel0, travel1, travel2, travel3, travel4, travel5, travel6];

const getProductImages = (id: string) => {
  if (id === "prodotto-dupree") return DUPREE_IMAGES;
  if (id === "prodotto-maeve") return MAEVE_IMAGES;
  if (id === "prodotto-shell") return SHELL_IMAGES;
  if (id === "prodotto-travel") return TRAVEL_IMAGES;
  return undefined;
};

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
  startingPrice?: number;
  benefits: string[];
  disclaimer?: string;
  quickSummary?: {
    idealePer: string;
    tagliaPet: string;
    puntoForte: string;
    quandoSceglierlo: string;
  };
  sizes: ProductSize[];
  includes: string;
  manuals: { label: string; url: string }[];
  cartLink: string;
  imageLabel: string;
  bgClass: string;
}

export const PRODUCTS: ProductData[] = [
  {
    id: "prodotto-dupree",
    tag: "Auto + Aereo",
    name: "Dupree",
    startingPrice: 299,
    bgClass: "bg-[#f7f5f3]",
    quickSummary: {
      idealePer: "Viaggi in auto e spostamenti in aereo",
      tagliaPet: "Fino a 9 kg",
      puntoForte: "Leggerezza e versatilità auto/aereo",
      quandoSceglierlo: "Se viaggi spesso in auto o aereo con un pet di piccola taglia",
    },
    benefits: [
      "Pensato anche per la cabina (verifica sempre con la compagnia)",
      "Fissaggio in auto sicuro e integrato",
      "Dimensioni e capienza ottimizzate per il viaggio",
    ],
    disclaimer: "⚠ Le regole cambiano per compagnia aerea: ti aiutiamo a verificare misure e peso prima di acquistare.",
    sizes: [
      {
        label: "Dupree I",
        specs: [
          { label: "Esterno", value: "L 47 × W 29 × H 26 cm" },
          { label: "Interno", value: "L 47 × W 28 × H 23 cm" },
          { label: "Peso", value: "2,33 kg" },
          { label: "Capienza", value: "fino a 9 kg" },
        ],
      },
      {
        label: "Dupree II",
        specs: [
          { label: "Esterno", value: "L 47 × W 29 × H 26 cm" },
          { label: "Interno", value: "L 47 × W 28 × H 22 cm" },
          { label: "Peso", value: "2,72 kg" },
          { label: "Capienza", value: "fino a 9 kg" },
        ],
      },
    ],
    includes: "(1) Trasportino Dupree, (2) materassini imbottiti, (1) tracolla sganciabile, (1) protezione impatti laterali.",
    manuals: [
      { label: "📄 Manuale Dupree I", url: CONFIG.MANUALS.DUPREE_I },
      { label: "📄 Manuale Dupree II", url: CONFIG.MANUALS.DUPREE_II },
    ],
    cartLink: CONFIG.LINKS.DUPREE,
    imageLabel: "Foto Dupree — 480×480",
  },
  {
    id: "prodotto-maeve",
    tag: "Auto (ISOFIX)",
    name: "Maeve™ iso",
    startingPrice: 399,
    bgClass: "bg-background",
    quickSummary: {
      idealePer: "Viaggi in auto con massima stabilità",
      tagliaPet: "Fino a 18 kg",
      puntoForte: "Stabilità ISOFIX e protezione integrata",
      quandoSceglierlo: "Se cerchi la soluzione più sicura e stabile per l'auto",
    },
    benefits: [
      "Agganci ISOFIX integrati per massima stabilità",
      "Progettato per stabilità e protezione in auto (ISOFIX integrato).",
      "Comfort & igiene: capottina + fodere lavabili",
    ],
    sizes: [
      {
        label: "iso 5X",
        specs: [
          { label: "Esterno", value: "60 × 43,5 × 53 cm" },
          { label: "Interno", value: "47 × 32 × 37,5 cm" },
          { label: "Peso", value: "4,45 kg" },
          { label: "Capienza", value: "13,5 kg" },
        ],
      },
      {
        label: "iso 6X",
        specs: [
          { label: "Esterno", value: "74,5 × 46 × 59,6 cm" },
          { label: "Interno", value: "57 × 32 × 42 cm" },
          { label: "Peso", value: "6,34 kg" },
          { label: "Capienza", value: "18 kg" },
        ],
      },
      {
        label: "iso 7X-R",
        specs: [
          { label: "Esterno", value: "84 × 46,8 × 59 cm" },
          { label: "Interno", value: "67 × 32 × 43 cm" },
          { label: "Peso", value: "6,8 kg" },
          { label: "Capienza", value: "18,1 kg" },
        ],
      },
      {
        label: "iso 7X-L",
        specs: [
          { label: "Esterno", value: "84 × 46,8 × 59 cm" },
          { label: "Interno", value: "67 × 32 × 43 cm" },
          { label: "Peso", value: "6,8 kg" },
          { label: "Capienza", value: "18,1 kg" },
        ],
      },
    ],
    includes: "(1) Maeve Car Seat, (1) Side Impact Protection Guard, (1) Durable liner, (1) Plush liner, (2) Mattress pads, (1) Long inlay.",
    manuals: [
      { label: "📄 Manuale iso 5X", url: CONFIG.MANUALS.MAEVE_5X },
      { label: "📄 Manuale iso 6X", url: CONFIG.MANUALS.MAEVE_6X },
      { label: "📄 Manuale iso 7X", url: CONFIG.MANUALS.MAEVE_7X },
    ],
    cartLink: CONFIG.LINKS.MAEVE,
    imageLabel: "Foto Maeve iso — 480×480",
  },
  {
    id: "prodotto-travel",
    tag: "Auto + Passeggio",
    name: "Travel System",
    subtitle: "Maeve iso + Roscoe Stroller Frame",
    badge: "TOP scelta Eleva",
    startingPrice: 700,
    bgClass: "bg-[#f7f5f3]",
    quickSummary: {
      idealePer: "Uso quotidiano auto + passeggiate",
      tagliaPet: "Fino a 18 kg",
      puntoForte: "Praticità e versatilità auto/passeggio",
      quandoSceglierlo: "Se cerchi una soluzione completa per spostamenti frequenti",
    },
    benefits: [
      "Passeggio-trasporto auto senza cambiare setup",
      "Connessione sicura ISOFIX",
      "Telaio passeggino Roscoe incluso",
    ],
    sizes: [
      {
        label: "5X",
        specs: [
          { label: "Esterno", value: "60 × 43,5 × 53 cm" },
          { label: "Interno", value: "47 × 32 × 37,5 cm" },
          { label: "Peso", value: "4,5 kg" },
          { label: "Capienza", value: "13,5 kg" },
        ],
      },
      {
        label: "6X",
        specs: [
          { label: "Esterno", value: "74,5 × 46 × 59,6 cm" },
          { label: "Interno", value: "57 × 32 × 42 cm" },
          { label: "Peso", value: "5,8 kg" },
          { label: "Capienza", value: "18 kg" },
        ],
      },
      {
        label: "7X",
        specs: [
          { label: "Esterno", value: "80 × 47 × 60 cm" },
          { label: "Interno", value: "66 × 29 × 50 cm" },
          { label: "Peso", value: "5,6 kg (con SIP 6,3 kg)" },
        ],
      },
    ],
    includes: "(1) Carrier a scelta, (1) SIP Guard, (1) Durable liner, (1) Plush liner, (2) Mattress pads, (1) Long inlay, (1) Roscoe Stroller Frame + Wheels + Organizer.",
    manuals: [
      { label: "📄 Manuale iso 5X", url: CONFIG.MANUALS.MAEVE_5X },
      { label: "📄 Manuale iso 6X", url: CONFIG.MANUALS.MAEVE_6X },
      { label: "📄 Manuale Roscoe", url: CONFIG.MANUALS.ROSCOE },
    ],
    cartLink: CONFIG.LINKS.TRAVEL,
    imageLabel: "Foto Travel System — 480×480",
  },
  {
    id: "prodotto-shell",
    tag: "Casa / Hotel",
    name: "Shell",
    startingPrice: 299,
    bgClass: "bg-background",
    quickSummary: {
      idealePer: "Riposo e comfort a casa",
      tagliaPet: "Fino a 59 kg",
      puntoForte: "Design rialzato e movimento oscillante",
      quandoSceglierlo: "Se cerchi un prodotto di arredo per il riposo quotidiano del tuo pet",
    },
    benefits: [
      "Design rialzato e basculante",
      "Movimento oscillante + reclinazione",
      "Oggetto di arredo, non accessorio",
    ],
    sizes: [
      {
        label: "Taglia unica",
        specs: [
          { label: "Dimensioni", value: "L 66–73 × W 78,7 × H 43,2–57,2 cm" },
          { label: "Peso", value: "8,5 kg" },
          { label: "Capienza", value: "59 kg" },
          { label: "Altezza dal pavimento", value: "27 cm" },
        ],
      },
    ],
    includes: "",
    manuals: [
      { label: "📄 Manuale Shell", url: CONFIG.MANUALS.SHELL },
    ],
    cartLink: CONFIG.LINKS.SHELL,
    imageLabel: "Foto Shell — 480×480",
  },
];

// Roscoe specs for Travel System
const ROSCOE_SPECS = [
  { label: "Aperto", value: "90,1 × 52,3 × 106,5 cm" },
  { label: "Chiuso", value: "30,5 × 52,3 × 61 cm" },
  { label: "Peso", value: "6,6 kg" },
  { label: "Capienza", value: "50 lbs" },
];

interface Props {
  product: ProductData;
  compact?: boolean;
}

const ProductSection = ({ product, compact = false }: Props) => {
  const [selectedSize, setSelectedSize] = useState(0);
  const currentSpecs = product.sizes[selectedSize]?.specs || [];
  const hasSizeSelector = product.sizes.length > 1;
  const isTravel = product.id === "prodotto-travel";

  const content = (
    <div className="flex-1">
      <span className="inline-block bg-secondary text-foreground text-sm font-medium px-3 py-1 rounded-full mb-3">
        {product.tag}
      </span>
      <div className="flex items-baseline gap-3 mb-1">
        <h2 className="text-foreground">{product.name}</h2>
        {product.startingPrice ? (
          <span className="text-[14px] text-muted-foreground whitespace-nowrap">
            a partire da €{product.startingPrice.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
          </span>
        ) : null}
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
              <span className="font-semibold text-foreground">Taglia pet consigliata:</span>
              <p className="text-muted-foreground">{product.quickSummary.tagliaPet}</p>
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

      {product.disclaimer && (
        <div className="bg-[#FFF8E7] border-l-[3px] border-[#D4A843] rounded-lg p-3 text-sm text-foreground mb-6">
          {product.disclaimer}
        </div>
      )}

      {hasSizeSelector && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-foreground mb-2">Taglia</p>
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

      {/* Specs table */}
      <div className="bg-secondary rounded-lg p-4 mb-4">
        <p className="text-sm font-semibold text-foreground mb-2">
          Dimensioni {hasSizeSelector ? `(${product.sizes[selectedSize].label})` : ""}
        </p>
        <div className="space-y-1">
          {currentSpecs.map((s) => (
            <div key={s.label} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="text-foreground font-medium">{s.value}</span>
            </div>
          ))}
        </div>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("ClickWhatsApp", { product: product.name, section: "size-table" })}
          className="text-sm text-primary mt-3 inline-block"
        >
          Chiedi conferma taglia →
        </a>
      </div>

      {isTravel && (
        <div className="bg-secondary rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold text-foreground mb-2">Roscoe Stroller Frame</p>
          <div className="space-y-1">
            {ROSCOE_SPECS.map((s) => (
              <div key={s.label} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="text-foreground font-medium">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {product.includes && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-foreground mb-1">Cosa include</p>
          <p className="text-sm text-muted-foreground">{product.includes}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-3 mb-6">
        {product.manuals.map((m) => (
          <a
            key={m.label}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            {m.label}
          </a>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("ClickWhatsApp", { product: product.name, section: "product" })}
          className="cta-primary text-center"
        >
          Chiedi a un assistente
        </a>
        <a
          href={
            product.id === "prodotto-travel"
              ? (product.sizes[selectedSize]?.label?.startsWith("5X")
                  ? CONFIG.LINKS.TRAVEL_5X
                  : CONFIG.LINKS.TRAVEL_6X)
              : product.cartLink
          }
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sendEvent("AddToCart", { product: product.name, size: product.sizes[selectedSize]?.label })}
          className="cta-outline text-center"
        >
          Aggiungi al carrello
        </a>
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        Dubbi sulla taglia? Te la confermiamo su WhatsApp prima dell'acquisto.
      </p>
    </div>
  );

  if (compact) {
    return (
      <div className="space-y-4">
        <ProductGallery
          productName={product.name}
          badge={product.badge}
          images={getProductImages(product.id)}
        />
        {content}
      </div>
    );
  }

  return (
    <section id={product.id} className={`section-padding ${product.bgClass}`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24">
            <ProductGallery
              productName={product.name}
              badge={product.badge}
              images={getProductImages(product.id)}
            />
          </div>
          {content}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
