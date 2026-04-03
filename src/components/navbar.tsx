"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Nos Produits", href: "/produits" },
  { label: "Les Bienfaits", href: "/bienfaits" },
  { label: "Notre Entreprise", href: "/entreprise" },
  { label: "Blog", href: "/blog" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-teal-700 hover:text-teal-600 transition-colors"
        >
          <Leaf className="h-6 w-6 text-teal-500" strokeWidth={2.5} />
          <span>Spirulife</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? "text-teal-600"
                      : "text-gray-600 hover:text-teal-600"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal-500" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/espace-pro"
            className="rounded-lg bg-[#006D77] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#005660]"
          >
            Espace Pro
          </Link>
          <Link
            href="/espace-particulier"
            className="rounded-lg border border-[#006D77] px-4 py-2 text-sm font-medium text-[#006D77] transition-colors hover:bg-[#006D77]/10"
          >
            Espace Particulier
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-teal-600 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen ? (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-teal-50 text-teal-700 underline underline-offset-2"
                        : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/espace-pro"
              className="w-full rounded-lg bg-[#006D77] px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#005660]"
            >
              Espace Pro
            </Link>
            <Link
              href="/espace-particulier"
              className="w-full rounded-lg border border-[#006D77] px-4 py-2.5 text-center text-sm font-medium text-[#006D77] transition-colors hover:bg-[#006D77]/10"
            >
              Espace Particulier
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
