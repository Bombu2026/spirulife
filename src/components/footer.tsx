import Link from "next/link";
import { Leaf, MapPin, Mail, Phone } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "Spiruline en poudre", href: "/produits/poudre" },
  { label: "Spiruline en comprimés", href: "/produits/comprimes" },
  { label: "Spiruline fraîche", href: "/produits/fraiche" },
  { label: "Packs & offres", href: "/produits/packs" },
] as const;

const NAV_LINKS = [
  { label: "Nos Produits", href: "/produits" },
  { label: "Les Bienfaits", href: "/bienfaits" },
  { label: "Notre Entreprise", href: "/entreprise" },
] as const;

export function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-white hover:text-teal-200 transition-colors"
            >
              <Leaf className="h-6 w-6 text-teal-300" strokeWidth={2.5} />
              <span>Spirulife</span>
            </Link>
            <p className="text-sm leading-relaxed text-teal-200">
              Spiruline cultivée en France, récoltée et conditionnée avec soin
              pour vous offrir le meilleur de la nature.
            </p>
          </div>

          {/* Column 2 — Produits */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
              Produits
            </h3>
            <ul className="flex flex-col gap-2">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-teal-100 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-teal-100 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-300">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-teal-100">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <span>
                  12 Route des Alpilles
                  <br />
                  13660 Orgon, France
                </span>
              </li>
              <li>
                <a
                  href="mailto:contact@spirulife.fr"
                  className="flex items-center gap-2.5 text-sm text-teal-100 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-teal-300" />
                  contact@spirulife.fr
                </a>
              </li>
              <li>
                <a
                  href="tel:+33491000000"
                  className="flex items-center gap-2.5 text-sm text-teal-100 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-teal-300" />
                  +33 4 91 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-teal-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-teal-400">
            &copy; 2025 Spirulife. Tous droits réservés.
          </p>
          <p className="text-xs font-medium text-teal-300">
            Made in France
          </p>
        </div>
      </div>
    </footer>
  );
}
