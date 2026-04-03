import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Produits — Spirulife",
  description:
    "Découvrez toute la gamme Spirulife : boissons, shots, gummies, sticks, poudre et gélules de spiruline premium produite en France.",
};

type Product = {
  image: string;
  name: string;
  format: string;
  quantity: string;
  price: string;
  description: string;
};

const products: Product[] = [
  {
    image: "/images/SPIRUENERGY.jpg",
    name: "SPIRU ENERGY",
    format: "Canette",
    quantity: "330 ml",
    price: "2,90€ (unité) / 27€ (x12)",
    description: "Boisson ready-to-drink énergisante à la spiruline",
  },
  {
    image: "/images/SPIRUSHOT.jpg",
    name: "SPIRU SHOT",
    format: "Mini-bouteille",
    quantity: "60 ml",
    price: "2,90€ (unité) / 17,90€ (x7)",
    description: "Shot concentré de spiruline pour un boost express",
  },
  {
    image: "/images/SPIRUGUMMIES.jpg",
    name: "SPIRU GUMMIES",
    format: "Pot (60 gummies)",
    quantity: "~150 g",
    price: "24,90€",
    description: "Gummies clean à la spiruline, saveur naturelle",
  },
  {
    image: "/images/SPIRUSTICKS.jpg",
    name: "SPIRU STICKS",
    format: "Boîte (20 sticks)",
    quantity: "~100 g (5 g / stick)",
    price: "19,90€",
    description: "Sticks à diluer pour une dose quotidienne pratique",
  },
  {
    image: "/images/SPIRURAW.jpg",
    name: "SPIRU RAW",
    format: "Sachet / doypack",
    quantity: "200 g",
    price: "19,90€",
    description: "Poudre de spiruline pure pour smoothies et recettes",
  },
  {
    image: "/images/SPIRUCAPS.jpg",
    name: "SPIRU CAPS",
    format: "Flacon (120 gélules)",
    quantity: "~60 g (500 mg / gélule)",
    price: "21,90€",
    description: "Gélules de spiruline pour une prise simple et précise",
  },
];

export default function ProduitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Nos Produits
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-teal-100">
            Toute notre gamme de spiruline premium, cultivée en France, sans
            additifs ni OGM.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="card-hover flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm ring-1 ring-slate-100"
              >
                {/* Image area */}
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 h-56 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-6 border-t border-slate-100">
                  <h2 className="text-lg font-extrabold text-slate-900 uppercase tracking-wide">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {product.format} — {product.quantity}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    {product.description}
                  </p>

                  {/* Price + CTA */}
                  <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                    <span className="text-2xl font-extrabold text-teal-600">
                      {product.price}
                    </span>
                    <button
                      type="button"
                      className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 hover:shadow-md transition-all"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
