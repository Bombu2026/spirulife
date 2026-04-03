export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm text-gray-400 mb-6">Dernière mise à jour : mars 2025</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-10">Politique de Cookies</h1>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Qu'est-ce qu'un cookie ?</h2>
      <p className="text-gray-600 leading-relaxed">
        Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site internet. Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d'autres paramètres, afin de faciliter votre prochaine visite et de rendre le site plus utile.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Cookies utilisés</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Le site spirulife.fr utilise les cookies suivants :
      </p>
      <div className="overflow-x-auto rounded-xl ring-1 ring-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-teal-50 text-slate-700">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Nom</th>
              <th className="px-4 py-3 text-left font-semibold">Finalité</th>
              <th className="px-4 py-3 text-left font-semibold">Durée</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-gray-600">
            <tr className="bg-white">
              <td className="px-4 py-3 font-mono text-xs">session_id</td>
              <td className="px-4 py-3">Maintien de la session utilisateur</td>
              <td className="px-4 py-3">Session</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-mono text-xs">cart_token</td>
              <td className="px-4 py-3">Conservation du panier d'achat</td>
              <td className="px-4 py-3">7 jours</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-mono text-xs">_ga</td>
              <td className="px-4 py-3">Mesure d'audience Google Analytics</td>
              <td className="px-4 py-3">2 ans</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-mono text-xs">_ga_*</td>
              <td className="px-4 py-3">Session Google Analytics</td>
              <td className="px-4 py-3">2 ans</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-3 font-mono text-xs">cookie_consent</td>
              <td className="px-4 py-3">Mémorisation de vos préférences cookies</td>
              <td className="px-4 py-3">1 an</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Gestion des cookies</h2>
      <p className="text-gray-600 leading-relaxed">
        Vous pouvez à tout moment choisir de désactiver ces cookies. Votre navigateur peut également être configuré pour vous signaler les cookies qui sont déposés dans votre terminal et vous demander de les accepter ou non. Vous pouvez accepter ou refuser les cookies au cas par cas ou bien les refuser systématiquement une fois pour toutes.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Attention, le refus de certains cookies peut altérer le bon fonctionnement du site (par exemple, le maintien de votre panier ou de votre session). La gestion des cookies varie selon le navigateur : consultez l'aide de votre navigateur pour connaître la procédure à suivre.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Contact</h2>
      <p className="text-gray-600 leading-relaxed">
        Pour toute question relative à notre utilisation des cookies, vous pouvez nous contacter à l'adresse suivante :{" "}
        <a href="mailto:contact@spirulife.fr" className="text-teal-600 hover:underline">
          contact@spirulife.fr
        </a>
        . Pour en savoir plus sur les cookies et vos droits, vous pouvez également consulter le site de la CNIL :{" "}
        <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">
          cnil.fr
        </a>.
      </p>
    </main>
  );
}
