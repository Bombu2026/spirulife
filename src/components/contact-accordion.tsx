"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Mail, Phone, Clock } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "123 Route de la Spiruline, 13000 Marseille, France",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@spirulife.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "04 91 00 00 00",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Ven 9h-18h",
  },
] as const;

export function ContactAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-slate-900">
          Nos Coordonnées
        </span>
        <ChevronDown
          className={`h-5 w-5 text-teal-600 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          strokeWidth={2}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-100 px-6 pb-6 pt-5">
          <ul className="flex flex-col gap-4">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50">
                  <Icon className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-slate-800">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
