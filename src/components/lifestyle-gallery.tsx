"use client";

import Image from "next/image";

const items = [
  {
    src: "/images/smoothie-1.jpg",
    alt: "Smoothie spiruline matinal",
    label: "Smoothie matinal",
  },
  {
    src: "/images/smoothie-2.jpg",
    alt: "Boisson spiruline au bureau",
    label: "Au bureau",
  },
  {
    src: "/images/smoothie-3.jpg",
    alt: "Gummies dans un sac de sport",
    label: "Sport & fitness",
  },
  {
    src: "/images/smoothie-4.jpg",
    alt: "Sticks spiruline en voyage",
    label: "En déplacement",
  },
] as const;

export function LifestyleGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.src}
          className="group relative rounded-2xl overflow-hidden aspect-square"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 transition-colors duration-300 ease-in-out group-hover:to-black/75" />
          <span className="absolute bottom-4 left-4 text-white font-semibold text-sm">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
