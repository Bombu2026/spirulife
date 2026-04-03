import Link from "next/link";
import { Zap, Shield, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Énergie Naturelle",
    description:
      "Boostez votre vitalité grâce aux protéines et vitamines B de la spiruline.",
  },
  {
    icon: Shield,
    title: "Immunité Renforcée",
    description:
      "Les antioxydants naturels soutiennent vos défenses immunitaires.",
  },
  {
    icon: Leaf,
    title: "100% Française",
    description:
      "Cultivée en France, sans additifs, sans OGM, traçabilité garantie.",
  },
  {
    icon: Heart,
    title: "Bien-être Quotidien",
    description: "Une solution naturelle adaptée à tous les modes de vie.",
  },
];

const featuredProducts = [
  {
    name: "SPIRU ENERGY",
    format: "Canette 330 ml",
    price: "2,90€",
  },
  {
    name: "SPIRU GUMMIES",
    format: "Pot 60 gummies (~150 g)",
    price: "24,90€",
  },
  {
    name: "SPIRU RAW",
    format: "Sachet poudre 200 g",
    price: "19,90€",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-700 text-white">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl">
            Spirulife
          </h1>
          <p className="mt-4 text-2xl font-semibold text-teal-100 sm:text-3xl">
            La spiruline française qui booste votre quotidien
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-50">
            Boissons, gummies, poudre, gélules — découvrez notre gamme complète
            de spiruline premium produite en France.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/produits"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-teal-700 shadow-md transition hover:bg-teal-50"
            >
              Découvrir nos produits
            </Link>
            <Link
              href="/bienfaits"
              className="rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Les bienfaits
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Pourquoi Spirulife ?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product preview */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Notre Gamme
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {featuredProducts.map(({ name, format, price }) => (
              <div
                key={name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-50 text-3xl">
                  🌿
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{format}</p>
                <p className="mt-3 text-xl font-semibold text-teal-600">
                  {price}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/produits"
              className="inline-block rounded-full bg-teal-600 px-8 py-3 text-sm font-semibold text-white shadow transition hover:bg-teal-700"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-700 py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold">Prêt à essayer la spiruline ?</h2>
          <p className="mt-4 text-teal-100">
            Rejoignez des milliers de personnes qui ont adopté la spiruline
            française Spirulife dans leur quotidien.
          </p>
          <Link
            href="/produits"
            className="mt-8 inline-block rounded-full bg-white px-10 py-3 text-base font-semibold text-teal-700 shadow-md transition hover:bg-teal-50"
          >
            Commander maintenant
          </Link>
        </div>
      </section>
    </>
  );
}
