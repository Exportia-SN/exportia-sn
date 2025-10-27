"use client";

import { useState } from "react";
import { Section } from "@/components/Section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", company: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <Section background="light" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-navy-900">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Vous souhaitez collaborer avec Exportia SN ou en savoir plus sur nos
            services ? Notre équipe est à votre disposition pour étudier vos
            besoins et construire avec vous une relation de confiance et de
            réussite durable.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="white" padding="lg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-900 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Société
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-900 focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-900 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-900 focus:border-transparent resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-navy-900 text-white py-3 rounded-lg font-bold hover:bg-navy-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Merci ! Votre message a été envoyé avec succès. Nous vous
                    répondrons bientôt.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8">
                Nos coordonnées
              </h2>
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">
                      Adresse
                    </h3>
                    <p className="text-gray-700">Dakar, Sénégal</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">
                      Téléphone
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="tel:+221"
                        className="hover:text-gold-900 transition-colors"
                      >
                        +221 [Numéro de téléphone]
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">✉️</div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Email</h3>
                    <p className="text-gray-700">
                      <a
                        href="mailto:exportia.sn@gmail.com"
                        className="hover:text-gold-900 transition-colors"
                      >
                        exportia.sn@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">💼</div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">
                      LinkedIn
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="https://www.linkedin.com/in/exportia-sn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold-900 transition-colors"
                      >
                        linkedin.com/in/exportia-sn
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">💬</div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">
                      WhatsApp Business
                    </h3>
                    <p className="text-gray-700">
                      <a
                        href="https://wa.me/221"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold-900 transition-colors"
                      >
                        +221 [Numéro WhatsApp]
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Placeholder for Google Maps */}
              <div className="mt-12 bg-gray-100 rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <p className="text-gray-600 text-lg mb-2">🗺️</p>
                  <p className="text-gray-600">
                    Carte Google Maps - À intégrer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="light" padding="lg" className="text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-navy-900">
          Temps de réponse rapide
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Notre équipe s'engage à vous répondre dans les 24 heures ouvrables.
          Pour les demandes urgentes, appelez-nous directement.
        </p>
      </Section>
    </>
  );
}

