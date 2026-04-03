import Link from "next/link";
import { Leaf, MapPin, Mail, Phone } from "lucide-react";

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconTikTok({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Nos Produits", href: "/produits" },
  { label: "Les Bienfaits", href: "/bienfaits" },
  { label: "Notre Entreprise", href: "/entreprise" },
  { label: "Blog", href: "/blog" },
] as const;

const PRODUCT_LINKS = [
  { label: "Spiru Energy", href: "/produits" },
  { label: "Spiru Shot", href: "/produits" },
  { label: "Spiru Gummies", href: "/produits" },
  { label: "Spiru Sticks", href: "/produits" },
  { label: "Spiru Raw", href: "/produits" },
  { label: "Spiru Caps", href: "/produits" },
] as const;

const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique RGPD", href: "/rgpd" },
  { label: "Politique de cookies", href: "/cookies" },
] as const;

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-white"
            >
              <Leaf className="h-6 w-6" strokeWidth={2.5} />
              <span>Spirulife</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Spiruline française — Naturelle et Premium
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <IconInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <IconFacebook size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <IconTikTok size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href + label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Produits */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Produits
            </h3>
            <ul className="flex flex-col gap-2">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Légal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Légal
            </h3>
            <ul className="flex flex-col gap-2">
              {LEGAL_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal-400" />
                <span>123 Route de la Spiruline, 13000 Marseille</span>
              </li>
              <li>
                <a
                  href="mailto:contact@spirulife.fr"
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-teal-400" />
                  contact@spirulife.fr
                </a>
              </li>
              <li>
                <a
                  href="tel:+33491000000"
                  className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-teal-400" />
                  04 91 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400">
            &copy; 2025 Spirulife. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-400">
            Made with ❤️ in France
          </p>
        </div>
      </div>
    </footer>
  );
}
