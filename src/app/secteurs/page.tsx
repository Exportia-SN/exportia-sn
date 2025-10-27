import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Secteurs d'Activité | ExportiaSN",
  description:
    "Découvrez nos domaines d'expertise : produits agricoles, matériaux de construction, matières premières, produits de consommation et services de conseil.",
  openGraph: {
    title: "Secteurs d'Activité | ExportiaSN",
    description:
      "Nos domaines d'expertise en commerce international et exportation",
    url: "https://exportia-sn.netlify.app/secteurs",
  },
};

export default function SectorsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="light" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-navy-900">
            Nos Secteurs d'Activité
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Nous opérons dans des secteurs clés du commerce international,
            combinant expertise locale et portée mondiale pour maximiser vos
            opportunités d'exportation.
          </p>
        </div>
      </Section>

      {/* Sector 1: Agricultural Products */}
      <Section background="white" padding="lg" id="agricole">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl h-80 flex items-center justify-center text-6xl">
                🌾
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                Produits agricoles
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous exportons des produits agricoles premium de haute qualité,
                reconnus pour leur excellence et leur authenticité. Notre
                expertise couvre la sélection, le conditionnement et la
                logistique de produits délicats.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Nos produits :
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">Dattes (Deglet Noor)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">Huile d'olive premium</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Produits agricoles spécialisés
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sector 2: Construction Materials */}
      <Section background="light" padding="lg" id="construction">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl h-80 flex items-center justify-center text-6xl">
                🏗️
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                Matériaux de construction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous sommes spécialisés dans l'exportation de matériaux de
                construction de qualité industrielle, destinés aux marchés
                internationaux. Nos partenaires produisent des matériaux
                conformes aux normes internationales les plus strictes.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Nos produits :
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Ciment en vrac & Clinker
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">Fer de construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">Céramique et briques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Autres matériaux de construction
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sector 3: Raw Materials */}
      <Section background="white" padding="lg" id="matieres-premieres">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl h-80 flex items-center justify-center text-6xl">
                ⛏️
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                Matières premières
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous facilitons l'accès aux matières premières africaines de
                qualité, en assurant une traçabilité complète et une conformité
                aux standards internationaux. Nos opérations couvrent l'extraction,
                le traitement et l'exportation.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Nos domaines :
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">Minerais et métaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Ressources naturelles brutes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Matières premières transformées
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sector 4: Consumer Products */}
      <Section background="light" padding="lg" id="consommation">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl h-80 flex items-center justify-center text-6xl">
                🛒
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                Produits de consommation courante
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous exportons une large gamme de produits de consommation
                courante, des produits alimentaires aux biens de première
                nécessité. Nos partenaires distribuent vers les marchés
                africains, européens et internationaux.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Nos catégories :
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">Produits alimentaires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">Produits ménagers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Biens de première nécessité
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Articles de consommation courante
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sector 5: Consulting Services */}
      <Section background="white" padding="lg" id="conseil">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-80 flex items-center justify-center text-6xl">
                📋
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                Services de conseil et d'accompagnement
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Au-delà de l'exportation, nous offrons des services de conseil
                stratégique pour accompagner votre croissance commerciale
                internationale. Notre expertise couvre tous les aspects du
                commerce international.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Nos services :
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Stratégie d'exportation personnalisée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Conformité réglementaire internationale
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Optimisation de la chaîne logistique
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      Développement de partenariats commerciaux
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg" className="text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Explorez nos opportunités
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Trouvez le secteur qui correspond à vos besoins et découvrez comment
          nous pouvons vous aider à développer votre activité.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gold-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Nous contacter
        </a>
      </Section>
    </>
  );
}

