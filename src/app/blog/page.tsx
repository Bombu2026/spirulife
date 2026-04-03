import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "smoothie-energie-matin",
    image: "/images/smoothie-1.jpg",
    title: "Smoothie énergie du matin",
    excerpt:
      "Commencez la journée avec un smoothie spiruline-banane plein de vitamines. Une recette simple et délicieuse pour faire le plein d'énergie dès le réveil.",
    category: "Recette",
    date: "28 mars 2025",
    readTime: "3 min",
  },
  {
    slug: "shot-spiruline-gingembre",
    image: "/images/spirulina-spoon.jpg",
    title: "Shot spiruline gingembre",
    excerpt:
      "Un shot détox puissant pour booster votre immunité en 60 secondes. Découvrez comment préparer ce concentré de bienfaits à la maison.",
    category: "Recette",
    date: "21 mars 2025",
    readTime: "2 min",
  },
  {
    slug: "routine-beaute-spiruline",
    image: "/images/spirulina-bowl.jpg",
    title: "Routine beauté spiruline",
    excerpt:
      "Découvrez comment la spiruline sublime votre peau et vos cheveux. Masques, soins et astuces pour une beauté naturelle au quotidien.",
    category: "Bien-être",
    date: "14 mars 2025",
    readTime: "5 min",
  },
  {
    slug: "spiruline-sport-performance",
    image: "/images/spirulina-lifestyle.jpg",
    title: "Spiruline et sport : le duo gagnant",
    excerpt:
      "Comment intégrer la spiruline dans votre routine sportive pour améliorer vos performances et accélérer la récupération.",
    category: "Sport",
    date: "7 mars 2025",
    readTime: "4 min",
  },
  {
    slug: "bienfaits-spiruline-francaise",
    image: "/images/spirulina-green.jpg",
    title: "Pourquoi choisir une spiruline française ?",
    excerpt:
      "Traçabilité, qualité, fraîcheur : les avantages d'une spiruline cultivée en France par rapport aux imports étrangers.",
    category: "Guide",
    date: "1 mars 2025",
    readTime: "6 min",
  },
  {
    slug: "recette-bowl-spiruline",
    image: "/images/smoothie-3.jpg",
    title: "Bowl spiruline açaï : la recette complète",
    excerpt:
      "Un bowl coloré et nutritif qui combine les bienfaits de la spiruline et de l'açaï. Parfait pour un petit-déjeuner sain.",
    category: "Recette",
    date: "22 février 2025",
    readTime: "3 min",
  },
] as const;

const categories = ["Tous", "Recette", "Bien-être", "Sport", "Guide"] as const;

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="texture-powder bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Nos Conseils Santé & Recettes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100">
            Découvrez nos recettes et astuces pour intégrer la spiruline
            facilement dans votre quotidien.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-6 py-4">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`shrink-0 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition ${
                cat === "Tous"
                  ? "bg-teal-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="card-hover group overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600">
                    Lire la suite
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="texture-powder bg-gradient-to-r from-teal-600 to-emerald-500 py-16 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold">
            Ne manquez aucun article
          </h2>
          <p className="mt-3 text-teal-100">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières
            recettes et conseils santé directement dans votre boîte mail.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-teal-700 shadow transition hover:bg-teal-50"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
