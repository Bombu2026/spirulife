"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-teal-700">
        <CheckCircle size={20} className="shrink-0" />
        <p className="text-sm font-medium">
          Merci ! Vous recevrez bientôt nos conseils et offres.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email..."
          className="w-full border border-gray-300 px-4 py-2.5 text-sm rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full sm:w-auto whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 text-sm rounded-full sm:rounded-l-none sm:rounded-r-full transition-colors"
        >
          Je m&apos;inscris
        </button>
      </div>
    </form>
  );
}
