import Link from "next/link";
import { Leaf, MapPin, Heart, Building2, User } from "lucide-react";
import { ContactAccordion } from "@/components/contact-accordion";

export const metadata = {
  title: "Notre Entreprise — Spirulife",
  description:
    "Découvrez l'histoire, les valeurs et les engagements de Spirulife, producteur français de spiruline premium.",
};

const VALUES = [
  {
    icon: Leaf,
    title: "Naturalité",
    description: "Des produits 100% naturels, sans additifs ni OGM",
  },
  {
    icon: MapPin,
    title: "Production Française",
    description:
      "Cultivée et transformée en France avec traçabilité complète",
  },
  {
    icon: Heart,
    title: "Bien-être",
    description: "Votre santé et votre vitalité sont notre priorité",
  },
] as const;

export default function EntreprisePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-100">
            Spirulife — La spiruline française de qualité
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Notre Entreprise
          </h1>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Notre Histoire
          </h2>
          <div className="rounded-2xl bg-teal-50 p-8 ring-1 ring-teal-100">
            <p className="mb-5 text-lg leading-8 text-slate-700">
              Spirulife est née d'une passion profonde pour la nutrition naturelle
              et le bien-être durable. Fondée en France par une équipe de
              passionnés, notre démarche repose sur un principe simple : offrir
              une spiruline d'exception, cultivée localement, dans le respect de
              l'environnement et de la santé humaine.
            </p>
            <p className="text-lg leading-8 text-slate-700">
              Depuis notre création, nous avons choisi de maîtriser chaque étape
              du processus — de la culture en bassins à la transformation finale —
              pour vous garantir un produit pur, traçable et d'une qualité
              irréprochable. Notre engagement : vous donner accès au meilleur de
              la nature française.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Nos Valeurs
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-100"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
                  <Icon className="h-7 w-7 text-teal-600" strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact accordion */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <ContactAccordion />
        </div>
      </section>

      {/* Espaces dédiés */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Espaces Dédiés
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Espace Pro */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                <Building2
                  className="h-6 w-6 text-teal-600"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Espace Professionnel
              </h3>
              <p className="mb-8 flex-1 text-sm leading-7 text-slate-500">
                Vous êtes un professionnel ? Accédez à nos tarifs préférentiels,
                nos conditions de vente en gros et notre catalogue dédié.
              </p>
              <Link
                href="/espace-pro"
                className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
              >
                Accéder à l'Espace Pro
              </Link>
            </div>

            {/* Espace Particulier */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                <User className="h-6 w-6 text-teal-600" strokeWidth={1.75} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Espace Particulier
              </h3>
              <p className="mb-8 flex-1 text-sm leading-7 text-slate-500">
                Découvrez nos produits, passez commande et suivez vos livraisons
                depuis votre espace personnel.
              </p>
              <Link
                href="/espace-particulier"
                className="inline-flex items-center justify-center rounded-xl border-2 border-teal-600 px-5 py-3 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-50"
              >
                Créer mon compte
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
