import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accueil | ExportiaSN",
  description:
    "ExportiaSN - Connecter l'Afrique au monde. Spécialiste en exportation de produits agricoles, matériaux de construction et consultation en commerce international.",
  openGraph: {
    title: "ExportiaSN - Connecter l'Afrique au monde",
    description:
      "Spécialiste en exportation et conseil en commerce international",
    url: "https://exportia-sn.netlify.app",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section with Real Image */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cargo-port.jpg"
            alt="Port international moderne"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Exportia SN
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gold-500 drop-shadow-md">
            Connecter l'Afrique au monde
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-100 max-w-3xl mx-auto drop-shadow">
            Basée au Sénégal, Exportia SN est une société spécialisée dans
            l'exportation de produits agricoles, de matériaux de construction,
            de matières premières et de produits de consommation, ainsi que dans
            la consultation en commerce international.
          </p>
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-100 max-w-3xl mx-auto drop-shadow">
            Nous accompagnons nos clients dans la recherche de marchés, la mise
            en relation commerciale et la gestion complète du processus
            d'exportation. Notre mission est claire : promouvoir le savoir-faire
            africain et faciliter l'accès des produits du continent aux marchés
            internationaux.
          </p>
          <Link
            href="/services"
            className="inline-block bg-gold-600 hover:bg-gold-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            → Découvrez nos services
          </Link>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gold-700 font-semibold mb-2">
              NOS AVANTAGES
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-950 mb-4">
              Pourquoi choisir Exportia SN ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                Expertise locale et internationale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Notre équipe combine une connaissance profonde des marchés africains avec une expertise internationale reconnue.
              </p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                Réseau solide de partenaires
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Partenaires fiables sur plusieurs continents pour garantir vos opérations d'exportation.
              </p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                Fiabilité et transparence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Engagement envers la qualité, la fiabilité et la satisfaction client dans chaque transaction.
              </p>
            </div>

            {/* Advantage 4 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                Maîtrise logistique et douanière
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Expertise complète des formalités logistiques et douanières pour un processus sans friction.
              </p>
            </div>

            {/* Advantage 5 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                Accompagnement personnalisé
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Support durable et transparent adapté à vos besoins spécifiques et objectifs commerciaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-navy-950 to-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gold-500 font-semibold mb-2">
              CE QUE NOUS PROPOSONS
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solutions complètes pour votre développement commercial international
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Recherche de marchés et opportunités commerciales
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Identification des marchés porteurs à l'international</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Mise en relation avec acheteurs fiables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Connexion avec distributeurs internationaux</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Intelligence commerciale stratégique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Exportation de produits
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Gestion complète du processus d'exportation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Conditionnement professionnel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Documentation douanière</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Logistique et livraison sécurisée</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Consultation et accompagnement stratégique
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Structuration des opérations d'exportation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Compréhension des réglementations internationales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Identification de nouveaux débouchés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Stratégie de croissance durable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/15 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Intermédiation commerciale
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Interface sécurisée entre vendeurs et acheteurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Garantie de transparence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Fluidité des transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">→</span>
                      <span>Gestion des risques commerciaux</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-gold-700 font-semibold mb-2">
              DOMAINES D'EXPERTISE
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-950 mb-4">
              Nos Secteurs d'Activité
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nous opérons dans des secteurs clés du commerce international
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sector 1 */}
            <Link href="/secteurs" className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/agricultural-products.jpg"
                alt="Produits agricoles"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-4xl mb-3">🌾</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Produits agricoles</h3>
                <p className="text-gray-200 text-sm">
                  Dattes, huile d'olive et autres produits agricoles premium
                </p>
              </div>
            </Link>

            {/* Sector 2 */}
            <Link href="/secteurs" className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/construction-materials.jpg"
                alt="Matériaux de construction"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-4xl mb-3">🏗️</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Matériaux de construction</h3>
                <p className="text-gray-200 text-sm">
                  Ciment, clinker, fer et matériaux de qualité
                </p>
              </div>
            </Link>

            {/* Sector 3 */}
            <Link href="/secteurs" className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/raw-materials.jpg"
                alt="Matières premières"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-4xl mb-3">⛏️</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Matières premières</h3>
                <p className="text-gray-200 text-sm">
                  Ressources naturelles et matières premières brutes
                </p>
              </div>
            </Link>

            {/* Sector 4 */}
            <Link href="/secteurs" className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <Image
                src="/images/consumer-products.jpg"
                alt="Produits de consommation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-4xl mb-3">🛒</div>
                <h3 className="font-serif text-2xl font-bold mb-2">Produits de consommation</h3>
                <p className="text-gray-200 text-sm">
                  Produits alimentaires et biens de première nécessité
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-950 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Prêt à développer votre activité ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Contactez notre équipe pour discuter de vos besoins en exportation et commerce international.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-600 hover:bg-gold-700 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contactez-nous maintenant
          </Link>
        </div>
      </section>
    </>
  );
}

