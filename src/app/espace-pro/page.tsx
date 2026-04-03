import Link from "next/link";
import { Building2, Package, Truck, BadgePercent } from "lucide-react";

export default function EspaceProPage() {
  return (
    <>
      {/* Hero */}
      <section className="texture-powder bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-500 py-24 text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-medium mb-8">
            <Building2 size={16} />
            Réservé aux professionnels
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Espace Professionnel
          </h1>
          <p className="mt-5 text-lg text-teal-100 max-w-xl mx-auto">
            Accédez à nos tarifs préférentiels et conditions de vente en gros
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">
            Nos avantages professionnels
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: BadgePercent,
                title: "Tarifs dégressifs",
                text: "Bénéficiez de remises sur volume à partir de 10 unités commandées.",
              },
              {
                icon: Truck,
                title: "Livraison prioritaire",
                text: "Livraison offerte et prioritaire pour toutes les commandes professionnelles.",
              },
              {
                icon: Package,
                title: "Catalogue dédié",
                text: "Accédez à notre gamme complète avec conditionnements spécifiques B2B.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-100 flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 mb-5">
                  <Icon size={32} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="bg-teal-50 rounded-3xl p-10 ring-1 ring-teal-100">
            <h2 className="text-2xl font-bold text-slate-900">
              Contactez notre équipe commerciale
            </h2>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Notre équipe est disponible du lundi au vendredi, de 9h à 18h, pour répondre à toutes vos questions et établir un devis personnalisé.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a
                href="mailto:commercial@spirulife.fr"
                className="flex items-center gap-2 font-semibold text-teal-600 hover:text-teal-700 transition"
              >
                commercial@spirulife.fr
              </a>
              <span className="hidden sm:block text-slate-300">|</span>
              <a
                href="tel:+33491000001"
                className="flex items-center gap-2 font-semibold text-teal-600 hover:text-teal-700 transition"
              >
                04 91 00 00 01
              </a>
            </div>
            <div className="mt-8">
              <Link
                href="mailto:commercial@spirulife.fr"
                className="inline-block bg-[#006D77] hover:bg-[#005660] text-white rounded-full px-8 py-3 font-semibold shadow transition"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
