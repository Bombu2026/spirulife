import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Produits — Spirulife",
  description:
    "Découvrez toute la gamme Spirulife : boissons, shots, gummies, sticks, poudre et gélules de spiruline premium produite en France.",
};

type Product = {
  emoji: string;
  name: string;
  format: string;
  quantity: string;
  price: string;
  description: string;
};

const products: Product[] = [
  {
    emoji: "🧃",
    name: "SPIRU ENERGY",
    format: "Canette",
    quantity: "330 ml",
    price: "2,90€ (unité) / 27€ (x12)",
    description: "Boisson ready-to-drink énergisante à la spiruline",
  },
  {
    emoji: "🥃",
    name: "SPIRU SHOT",
    format: "Mini-bouteille",
    quantity: "60 ml",
    price: "2,90€ (unité) / 17,90€ (x7)",
    description: "Shot concentré de spiruline pour un boost express",
  },
  {
    emoji: "🍬",
    name: "SPIRU GUMMIES",
    format: "Pot (60 gummies)",
    quantity: "~150 g",
    price: "24,90€",
    description: "Gummies clean à la spiruline, saveur naturelle",
  },
  {
    emoji: "🧃",
    name: "SPIRU STICKS",
    format: "Boîte (20 sticks)",
    quantity: "~100 g (5 g / stick)",
    price: "19,90€",
    description: "Sticks à diluer pour une dose quotidienne pratique",
  },
  {
    emoji: "🥄",
    name: "SPIRU RAW",
    format: "Sachet / doypack",
    quantity: "200 g",
    price: "19,90€",
    description: "Poudre de spiruline pure pour smoothies et recettes",
  },
  {
    emoji: "💊",
    name: "SPIRU CAPS",
    format: "Flacon (120 gélules)",
    quantity: "~60 g (500 mg / gélule)",
    price: "21,90€",
    description: "Gélules de spiruline pour une prise simple et précise",
  },
];

export default function ProduitsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Nos Produits
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Toute notre gamme de spiruline premium, cultivée en France, sans
            additifs ni OGM.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              {/* Emoji icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-50 text-4xl">
                {product.emoji}
              </div>

              {/* Info */}
              <h2 className="mt-5 text-lg font-bold text-slate-900">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {product.description}
              </p>

              <div className="mt-3 space-y-1 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-700">Format :</span>{" "}
                  {product.format}
                </p>
                <p>
                  <span className="font-medium text-slate-700">Contenu :</span>{" "}
                  {product.quantity}
                </p>
              </div>

              {/* Price + CTA */}
              <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                <span className="text-xl font-bold text-teal-600">
                  {product.price}
                </span>
                <button
                  type="button"
                  className="rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
