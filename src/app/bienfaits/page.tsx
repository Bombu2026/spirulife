import Link from "next/link";
import {
  Zap,
  Shield,
  Droplets,
  Sparkles,
  Flag,
  Check,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Les Bienfaits de la Spiruline — Spirulife",
  description:
    "Découvrez les bienfaits nutritionnels de la spiruline française Spirulife : énergie, immunité, fer naturel et détox douce.",
};

const BENEFITS = [
  {
    icon: Zap,
    title: "Énergie et Endurance",
    description:
      "Ses protéines et vitamines B aident à réduire la fatigue et stimuler votre corps.",
  },
  {
    icon: Shield,
    title: "Soutien du Système Immunitaire",
    description:
      "Riche en antioxydants, elle aide à renforcer vos défenses naturelles.",
  },
  {
    icon: Droplets,
    title: "Source Naturelle de Fer",
    description:
      "Parfaite pour les végétariens, les sportifs ou toute personne souhaitant combattre la fatigue.",
  },
  {
    icon: Sparkles,
    title: "Détox Douce",
    description:
      "Ses pigments naturels contribuent à l'élimination des toxines et métaux lourds.",
  },
] as const;

const QUALITY_POINTS = [
  "Cultivée en eau douce, sous contrôle strict de qualité.",
  "Sans additifs, sans OGM, 100% naturelle.",
  "Garantie fraîcheur et traçabilité de la ferme jusqu'à votre assiette.",
] as const;

export default function BienfaitsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-100">
            Votre Super-Aliment Français
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Les Bienfaits de la Spiruline
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-lg leading-8 text-slate-600">
          La spiruline est une micro-algue bleu-vert naturellement riche en
          protéines, vitamines et minéraux essentiels. Consommée depuis des
          siècles pour ses vertus nutritionnelles, elle est aujourd'hui reconnue
          comme un super-aliment naturel, idéal pour booster votre énergie et
          soutenir votre vitalité au quotidien.
        </p>
      </section>

      {/* Benefits grid */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Pourquoi la spiruline ?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                  <Icon className="h-6 w-6 text-teal-600" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="mb-1.5 text-base font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production locale */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-8">
            <div className="mb-6 flex items-center gap-3">
              <Flag className="h-7 w-7 text-teal-600" strokeWidth={1.75} />
              <h2 className="text-2xl font-bold text-slate-900">
                Production Locale et Responsable
              </h2>
            </div>
            <ul className="flex flex-col gap-4">
              {QUALITY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-600">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Pourquoi Choisir Notre Spiruline ?
          </h2>
          <p className="mb-4 text-lg leading-8 text-slate-600">
            Notre spiruline française est transformée en différents formats —
            poudre, comprimés, paillettes — pour s'adapter facilement à votre
            quotidien.
          </p>
          <p className="mb-10 text-lg leading-8 text-slate-600">
            Que vous soyez sportif, étudiant, professionnel ou simplement
            soucieux de votre santé, notre spiruline française est la solution
            naturelle pour une énergie durable et un bien-être quotidien.
          </p>
          <Link
            href="/produits"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Découvrir nos produits
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
