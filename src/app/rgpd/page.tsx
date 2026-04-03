export default function RGPDPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm text-gray-400 mb-6">Dernière mise à jour : mars 2025</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-10">
        Politique de Confidentialité — RGPD
      </h1>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Collecte des données</h2>
      <p className="text-gray-600 leading-relaxed">
        Spirulife SAS collecte des données personnelles lorsque vous passez une commande, créez un compte, vous inscrivez à notre newsletter ou nous contactez. Les données collectées comprennent notamment votre nom, prénom, adresse email, adresse postale et numéro de téléphone. Ces données sont collectées avec votre consentement explicite.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Finalités</h2>
      <p className="text-gray-600 leading-relaxed">
        Vos données personnelles sont utilisées pour les finalités suivantes : traitement et suivi de vos commandes, gestion de votre compte client, envoi de communications commerciales (avec votre consentement), amélioration de nos services et du site, respect de nos obligations légales et réglementaires. Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Durée de conservation</h2>
      <p className="text-gray-600 leading-relaxed">
        Vos données personnelles sont conservées pendant la durée nécessaire à l'accomplissement des finalités pour lesquelles elles ont été collectées. Les données de compte client sont conservées pendant 3 ans à compter de la dernière commande. Les données de facturation sont conservées 10 ans conformément aux obligations légales. Les données de prospection commerciale sont supprimées au bout de 3 ans sans interaction.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Vos droits</h2>
      <p className="text-gray-600 leading-relaxed">
        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants : droit d'accès à vos données, droit de rectification, droit à l'effacement (« droit à l'oubli »), droit à la portabilité, droit d'opposition au traitement, droit de limitation du traitement. Pour exercer ces droits, contactez notre DPO à l'adresse dpo@spirulife.fr.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Cookies</h2>
      <p className="text-gray-600 leading-relaxed">
        Notre site utilise des cookies pour améliorer votre expérience de navigation, mesurer l'audience et proposer des fonctionnalités adaptées. Vous pouvez gérer vos préférences en matière de cookies à tout moment depuis notre page dédiée. Pour plus d'informations, consultez notre <a href="/cookies" className="text-teal-600 hover:underline">Politique de Cookies</a>.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Contact DPO</h2>
      <p className="text-gray-600 leading-relaxed">
        Notre Délégué à la Protection des Données (DPO) est à votre disposition pour toute question relative au traitement de vos données personnelles :<br /><br />
        <strong>Spirulife SAS — DPO</strong><br />
        123 Route de la Spiruline, 13000 Marseille<br />
        Email : <a href="mailto:dpo@spirulife.fr" className="text-teal-600 hover:underline">dpo@spirulife.fr</a><br /><br />
        Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">cnil.fr</a>) si vous estimez que vos droits ne sont pas respectés.
      </p>
    </main>
  );
}
