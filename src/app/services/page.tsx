import { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/Card";

export const metadata: Metadata = {
  title: "Services | ExportiaSN",
  description:
    "Découvrez nos services : recherche de marchés, exportation de produits, consultation stratégique et intermédiation commerciale.",
  openGraph: {
    title: "Services | ExportiaSN",
    description:
      "Solutions complètes pour votre développement commercial international",
    url: "https://exportia-sn.netlify.app/services",
  },
};

function IconMarketResearch() {
  return (
    <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center text-white text-2xl">
      🔍
    </div>
  );
}

function IconExport() {
  return (
    <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center text-white text-2xl">
      ✈️
    </div>
  );
}

function IconConsulting() {
  return (
    <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center text-white text-2xl">
      📊
    </div>
  );
}

function IconIntermediation() {
  return (
    <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center text-white text-2xl">
      🤲
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="light" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-navy-900">
            Nos Services
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Solutions complètes et intégrées pour votre développement commercial
            international. Nous mettons à votre disposition notre expertise, nos
            réseaux et nos outils pour assurer votre succès.
          </p>
        </div>
      </Section>

      {/* Service 1: Market Research */}
      <Section background="white" padding="lg" id="recherche">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <IconMarketResearch />
            </div>
            <div className="md:w-2/3">
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                1. Recherche de marchés et opportunités commerciales
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous identifions pour nos clients les marchés les plus porteurs
                à l'international. Grâce à notre réseau de partenaires et à
                notre expertise en intelligence commerciale, nous facilitons la
                mise en relation avec des acheteurs fiables et des distributeurs
                internationaux.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Nos approches :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Analyse approfondie des marchés cibles
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Identification des opportunités commerciales
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Mise en relation avec partenaires qualifiés
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Intelligence commerciale stratégique
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service 2: Export */}
      <Section background="light" padding="lg" id="exportation">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex-shrink-0 md:order-2">
              <IconExport />
            </div>
            <div className="md:w-2/3 md:order-1">
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                2. Exportation de produits
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Exportia SN exporte une large gamme de produits avec une gestion
                complète du processus d'exportation, du conditionnement à la
                livraison, en passant par la documentation douanière et
                logistique.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900 mb-6">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Produits que nous exportons :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      <strong>Produits agricoles :</strong> dattes, huile
                      d'olive, etc.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      <strong>Matériaux de construction :</strong> ciment,
                      clinker, fer, céramique, etc.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">•</span>
                    <span className="text-gray-700">
                      <strong>Produits de consommation :</strong> produits
                      alimentaires, produits ménagers, etc.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Nos services incluent :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Conditionnement professionnel
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Documentation douanière complète
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Gestion logistique intégrée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Livraison sécurisée et suivi
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service 3: Consulting */}
      <Section background="white" padding="lg" id="consultation">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex-shrink-0">
              <IconConsulting />
            </div>
            <div className="md:w-2/3">
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                3. Consultation et accompagnement stratégique
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous offrons un service de consulting personnalisé pour les
                entreprises souhaitant développer ou optimiser leurs opérations
                d'exportation et leur présence sur les marchés internationaux.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Nous vous aidons à :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Structurer vos opérations d'exportation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Comprendre les réglementations internationales
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Identifier de nouveaux débouchés et partenaires
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Élaborer une stratégie de croissance durable
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Optimiser votre chaîne de valeur
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Service 4: Intermediation */}
      <Section background="light" padding="lg" id="intermediation">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex-shrink-0 md:order-2">
              <IconIntermediation />
            </div>
            <div className="md:w-2/3 md:order-1">
              <h2 className="font-serif text-4xl font-bold text-navy-900 mb-4">
                4. Intermédiation commerciale
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous agissons comme interface sécurisée entre vendeurs et
                acheteurs, garantissant la transparence et la fluidité de
                chaque transaction commerciale. Notre rôle est de faciliter les
                échanges et de minimiser les risques pour toutes les parties.
              </p>
              <div className="bg-light rounded-lg p-6 border-l-4 border-gold-900">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Notre valeur ajoutée :
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Vérification et qualification des partenaires
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Négociation équitable et transparente
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Gestion des contrats et des conditions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Suivi et résolution des litiges
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-900 font-bold">→</span>
                    <span className="text-gray-700">
                      Sécurisation des transactions
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
          Prêt à commencer ?
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Contactez notre équipe pour discuter de vos besoins spécifiques et
          découvrir comment nous pouvons vous aider.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gold-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Demander une consultation
        </a>
      </Section>
    </>
  );
}

