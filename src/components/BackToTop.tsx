"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gold-600 hover:bg-gold-700 text-white rounded-full shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
}
