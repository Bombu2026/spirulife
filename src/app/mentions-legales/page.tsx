export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm text-gray-400 mb-6">Dernière mise à jour : mars 2025</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-10">Mentions Légales</h1>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Éditeur du site</h2>
      <p className="text-gray-600 leading-relaxed">
        Le site <strong>spirulife.fr</strong> est édité par la société <strong>Spirulife SAS</strong>, société par actions simplifiée au capital de 10 000 €, immatriculée au Registre du Commerce et des Sociétés de Marseille.
      </p>
      <p className="text-gray-600 leading-relaxed mt-4">
        Adresse : 123 Route de la Spiruline, 13000 Marseille, France<br />
        SIRET : 000 000 000 00000<br />
        Email : <a href="mailto:contact@spirulife.fr" className="text-teal-600 hover:underline">contact@spirulife.fr</a>
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Hébergement</h2>
      <p className="text-gray-600 leading-relaxed">
        Le site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, USA.<br />
        Site web : <a href="https://vercel.com" className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a>
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Propriété intellectuelle</h2>
      <p className="text-gray-600 leading-relaxed">
        L'ensemble des contenus présents sur le site spirulife.fr (textes, images, vidéos, logos, graphismes) est protégé par le droit d'auteur et reste la propriété exclusive de Spirulife SAS. Toute reproduction, représentation ou diffusion, en tout ou partie, de ces contenus sur quelque support que ce soit est interdite sans l'autorisation expresse et préalable de Spirulife SAS.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-slate-900">Responsabilité</h2>
      <p className="text-gray-600 leading-relaxed">
        Spirulife SAS s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition et décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site. Spirulife SAS ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site.
      </p>
    </main>
  );
}
