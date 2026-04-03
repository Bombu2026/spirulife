import Image from "next/image";
import Link from "next/link";
import { Zap, Shield, Leaf, Heart, Check, ArrowRight } from "lucide-react";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { LifestyleGallery } from "@/components/lifestyle-gallery";
import { NewsletterForm } from "@/components/newsletter-form";

const products = [
  {
    image: "/images/SPIRUENERGY.jpg",
    name: "SPIRU ENERGY",
    price: "2,90€",
    format: "Canette 330 ml",
    description: "Boisson à la spiruline et caféine naturelle (guarana).",
    benefits: ["Contribue à réduire la fatigue (vitamines B)", "Améliore la vigilance (caféine)", "Source d'antioxydants (phycocyanine)"],
  },
  {
    image: "/images/SPIRUSHOT.jpg",
    name: "SPIRU SHOT",
    price: "2,90€",
    format: "Mini-bouteille 60 ml",
    description: "Shot concentré spiruline + gingembre + citron.",
    benefits: ["Effet tonique rapide", "Soutien immunitaire (vitamine C)", "Propriétés anti-inflammatoires naturelles"],
  },
  {
    image: "/images/SPIRUGUMMIES.jpg",
    name: "SPIRU GUMMIES",
    price: "24,90€",
    format: "Pot 60 gummies",
    description: "Gummies à base de spiruline.",
    benefits: ["Source de fer — aide à réduire la fatigue", "Riche en protéines végétales", "Apport en micronutriments essentiels"],
  },
  {
    image: "/images/SPIRUSTICKS.jpg",
    name: "SPIRU STICKS",
    price: "19,90€",
    format: "Boîte 20 sticks",
    description: "Poudre de spiruline à diluer.",
    benefits: ["Apport énergétique naturel", "Favorise l'hydratation + nutriments", "Contient des vitamines B essentielles"],
  },
  {
    image: "/images/SPIRURAW.jpg",
    name: "SPIRU RAW",
    price: "19,90€",
    format: "Sachet 200 g",
    description: "Spiruline pure 100%.",
    benefits: ["~60–70% de protéines", "Riche en fer hautement assimilable", "Contient phycocyanine (antioxydant puissant)"],
  },
  {
    image: "/images/SPIRUCAPS.jpg",
    name: "SPIRU CAPS",
    price: "21,90€",
    format: "Flacon 120 gélules",
    description: "Gélules de spiruline concentrée.",
    benefits: ["Dosage précis", "Contribue à réduire la fatigue (fer)", "Soutien des défenses naturelles"],
  },
] as const;

const blogPosts = [
  { image: "/images/smoothie-1.jpg", title: "Smoothie énergie du matin", excerpt: "Commencez la journée avec un smoothie spiruline-banane plein de vitamines.", category: "Recette" },
  { image: "/images/spirulina-spoon.jpg", title: "Shot spiruline gingembre", excerpt: "Un shot détox puissant pour booster votre immunité en 60 secondes.", category: "Recette" },
  { image: "/images/spirulina-bowl.jpg", title: "Routine beauté spiruline", excerpt: "Découvrez comment la spiruline sublime votre peau et vos cheveux.", category: "Bien-être" },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-accueil.png"
          alt="Gamme Spirulife — spiruline française"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="relative z-10 w-full text-center text-white px-6 py-20">
          <div className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-medium mb-8">
            100% Française | Naturelle | Premium
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Énergie naturelle, made in France
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto">
            Boostez votre vitalité avec notre spiruline 100% française et naturelle.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/produits"
              className="rounded-full bg-[#006D77] hover:bg-[#005660] text-white px-8 py-4 font-semibold shadow-lg transition"
            >
              Découvrir nos produits
            </Link>
            <Link
              href="/bienfaits"
              className="rounded-full border-2 border-white text-white px-8 py-4 hover:bg-white/10 transition"
            >
              En savoir plus sur la spiruline
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Bienfaits */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900">
            Pourquoi choisir la spiruline ?
          </h2>
          <p className="mt-4 text-gray-500 text-center">
            Découvrez les vertus de ce super-aliment reconnu mondialement
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: "Énergie naturelle", description: "Réduit la fatigue, stimule votre vitalité grâce aux protéines et vitamines B." },
              { icon: Shield, title: "Renforce vos défenses", description: "Riche en antioxydants et vitamines pour soutenir votre système immunitaire." },
              { icon: Heart, title: "Source de protéines", description: "Parfaite pour les sportifs et végétariens, riche en protéines végétales." },
              { icon: Leaf, title: "Détox et bien-être", description: "Aide à l'élimination des toxines pour un bien-être quotidien." },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="card-hover bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <Icon size={32} />
                </div>
                <h3 className="mt-5 font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Gamme Produits */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900">
            Notre Gamme Française
          </h2>
          <p className="mt-4 text-gray-500 text-center max-w-2xl mx-auto">
            Découvrez nos formats adaptés à tous les styles de vie : boissons, shots, gummies, sticks, poudre ou gélules.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100"
              >
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 h-56 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 border-t border-slate-100">
                  <h3 className="font-extrabold text-lg text-slate-900 uppercase tracking-wide">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.format}</p>
                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                  <ul className="mt-3 space-y-1.5">
                    {product.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-gray-500">
                        <Check size={14} className="mt-0.5 shrink-0 text-teal-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-teal-600">{product.price}</span>
                    <button
                      type="button"
                      className="bg-[#006D77] text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[#005660] shadow-sm hover:shadow-md transition-all"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/produits"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition"
            >
              Voir toute la gamme
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — Storytelling Production Locale */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <Image
                src="/images/spirulina-green.jpg"
                alt="Production spiruline française"
                width={600}
                height={400}
                className="rounded-3xl shadow-xl object-cover w-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-teal-600 uppercase text-sm font-semibold tracking-wider">
                NOTRE ENGAGEMENT
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Notre spiruline, 100% française
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Cultivée en eau douce dans nos fermes françaises, notre spiruline est naturelle, bio et traçable de la ferme jusqu'à votre assiette. Chaque étape est contrôlée pour garantir fraîcheur et qualité.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Cultivée en eau douce, contrôle strict de qualité",
                  "Sans additifs, sans OGM, 100% naturelle",
                  "Traçabilité garantie de la ferme à l'assiette",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={20} className="text-teal-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/entreprise"
                className="mt-8 inline-block bg-teal-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-teal-700 transition"
              >
                Découvrir notre production
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Lifestyle Gallery */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900">
            La spiruline dans votre quotidien
          </h2>
          <p className="mt-4 text-gray-500 text-center max-w-2xl mx-auto">
            Boostez votre énergie, votre concentration et votre vitalité, que vous soyez au sport, au bureau ou à la maison.
          </p>
          <div className="mt-12">
            <LifestyleGallery />
          </div>
        </div>
      </section>

      {/* Section 6 — Témoignages */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900">
            Ils ont adopté notre spiruline
          </h2>
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Section 7 — Blog / Conseils */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900">
            Nos conseils santé et recettes
          </h2>
          <p className="mt-4 text-gray-500 text-center max-w-2xl mx-auto">
            Découvrez nos recettes et astuces pour intégrer la spiruline facilement dans votre quotidien.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.title}
                className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-teal-600 text-white text-xs rounded-full px-3 py-1">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-slate-900">{post.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{post.excerpt}</p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium mt-4 hover:text-teal-700 transition"
                  >
                    Lire la suite
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition"
            >
              Voir tous les articles
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8 — Newsletter */}
      <section className="texture-powder bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Recevez nos astuces et offres exclusives
          </h2>
          <p className="mt-4 text-teal-100">
            Inscrivez-vous à notre newsletter et profitez de conseils santé, recettes et promotions réservées à nos abonnés.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
          <p className="mt-4 text-xs text-teal-200">
            En vous inscrivant, vous acceptez notre politique de confidentialité.
          </p>
        </div>
      </section>
    </>
  );
}
