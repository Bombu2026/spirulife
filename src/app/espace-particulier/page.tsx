import { PackageSearch, History, Tag } from "lucide-react";

export default function EspaceParticulierPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-500 py-24 text-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Mon Espace
          </h1>
          <p className="mt-5 text-lg text-teal-100 max-w-xl mx-auto">
            Connectez-vous ou créez votre compte pour suivre vos commandes
          </p>
        </div>
      </section>

      {/* Auth cards */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Login */}
            <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Se connecter</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Adresse email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <button
                type="button"
                className="mt-6 bg-teal-600 text-white rounded-full w-full py-3 font-semibold hover:bg-teal-700 transition"
              >
                Se connecter
              </button>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-sm text-teal-600 hover:text-teal-700 transition"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            {/* Register */}
            <div className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-100 flex flex-col">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Créer un compte</h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                Inscrivez-vous pour passer commande, suivre vos livraisons et profiter d'offres exclusives.
              </p>
              <button
                type="button"
                className="mt-8 bg-[#006D77] text-white rounded-full w-full py-3 font-semibold hover:bg-[#005660] transition"
              >
                Créer mon compte
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-white py-14 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 text-sm text-gray-500">
            {[
              { icon: PackageSearch, label: "Suivi de commande" },
              { icon: History, label: "Historique d'achats" },
              { icon: Tag, label: "Offres exclusives" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={18} className="text-teal-500" />
                <span className="font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
