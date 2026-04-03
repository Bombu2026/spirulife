"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Sportive amateur",
    rating: 5,
    text: "Depuis que j'ai découvert Spiru Energy, mes entraînements sont bien plus intenses. L'énergie naturelle sans crash, c'est exactement ce qu'il me fallait !",
  },
  {
    name: "Thomas L.",
    role: "Développeur web",
    rating: 5,
    text: "Les gummies sont parfaites pour le bureau. Pratiques, bon goût, et je sens vraiment la différence sur ma concentration.",
  },
  {
    name: "Marie D.",
    role: "Nutritionniste",
    rating: 5,
    text: "Je recommande la spiruline Spirulife à mes patients. La qualité française et la traçabilité font toute la différence.",
  },
  {
    name: "Lucas R.",
    role: "Étudiant",
    rating: 4,
    text: "Les sticks sont super pratiques entre les cours. Un boost rapide et naturel, sans les effets du café.",
  },
] as const;

function getInitials(name: string): string {
  const parts = name.split(" ");
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((index + testimonials.length) % testimonials.length);
      setVisible(true);
    }, 200);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo(current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const testimonial = testimonials[current];

  return (
    <div className="flex flex-col items-center gap-6 py-8 px-4">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-md p-8 text-center transition-all duration-200"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className={
                i < testimonial.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
            {getInitials(testimonial.name)}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Précédent"
          className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Aller au témoignage ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-teal-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Suivant"
          className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
