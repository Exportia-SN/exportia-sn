import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader, Grid } from "@/components/Section";
import { FeatureCard, ServiceCard } from "@/components/Card";

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

// Icon components (placeholder)
function IconExpertise() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      🧠
    </div>
  );
}

function IconNetwork() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      🌐
    </div>
  );
}

function IconReliability() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      🛡️
    </div>
  );
}

function IconLogistics() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      📦
    </div>
  );
}

function IconCommitment() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      🤝
    </div>
  );
}

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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section
        background="gradient"
        padding="xl"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><pattern id=%22grid%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22><path d=%22M 40 0 L 0 0 0 40%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22/></pattern></defs><rect width=%221200%22 height=%22600%22 fill=%22%230d2c54%22/><rect width=%221200%22 height=%22600%22 fill=%22url(%23grid)%22/></svg>')]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Exportia SN
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gold-900">
            Connecter l'Afrique au monde
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100 max-w-2xl mx-auto">
            Basée au Sénégal, Exportia SN est une société spécialisée dans
            l'exportation de produits agricoles, de matériaux de construction,
            de matières premières et de produits de consommation, ainsi que dans
            la consultation en commerce international.
          </p>
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-100 max-w-2xl mx-auto">
            Nous accompagnons nos clients dans la recherche de marchés, la mise
            en relation commerciale et la gestion complète du processus
            d'exportation. Notre mission est claire : promouvoir le savoir-faire
            africain et faciliter l'accès des produits du continent aux marchés
            internationaux.
          </p>
          <Link
            href="/services"
            className="inline-block bg-gold-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            → Découvrez nos services
          </Link>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="white" padding="lg">
        <SectionHeader
          title="Pourquoi choisir Exportia SN ?"
          subtitle="Nos avantages"
          centered
        />
        <Grid columns={2}>
          <FeatureCard
            icon={<IconExpertise />}
            title="Expertise locale et internationale"
            description="Notre équipe combine une connaissance profonde des marchés africains avec une expertise internationale reconnue."
          />
          <FeatureCard
            icon={<IconNetwork />}
            title="Réseau solide de partenaires"
            description="Partenaires fiables sur plusieurs continents pour garantir vos opérations d'exportation."
          />
          <FeatureCard
            icon={<IconReliability />}
            title="Fiabilité et transparence"
            description="Engagement envers la qualité, la fiabilité et la satisfaction client dans chaque transaction."
          />
          <FeatureCard
            icon={<IconLogistics />}
            title="Maîtrise logistique et douanière"
            description="Expertise complète des formalités logistiques et douanières pour un processus sans friction."
          />
          <FeatureCard
            icon={<IconCommitment />}
            title="Accompagnement personnalisé"
            description="Support durable et transparent adapté à vos besoins spécifiques et objectifs commerciaux."
          />
        </Grid>
      </Section>

      {/* Services Summary Section */}
      <Section background="light" padding="lg">
        <SectionHeader
          title="Nos Services"
          subtitle="Ce que nous proposons"
          description="Solutions complètes pour votre développement commercial international"
          centered
        />
        <Grid columns={2}>
          <ServiceCard
            icon={<IconMarketResearch />}
            title="Recherche de marchés et opportunités commerciales"
            items={[
              "Identification des marchés porteurs à l'international",
              "Mise en relation avec acheteurs fiables",
              "Connexion avec distributeurs internationaux",
              "Intelligence commerciale stratégique",
            ]}
          />
          <ServiceCard
            icon={<IconExport />}
            title="Exportation de produits"
            items={[
              "Gestion complète du processus d'exportation",
              "Conditionnement professionnel",
              "Documentation douanière",
              "Logistique et livraison sécurisée",
            ]}
          />
          <ServiceCard
            icon={<IconConsulting />}
            title="Consultation et accompagnement stratégique"
            items={[
              "Structuration des opérations d'exportation",
              "Compréhension des réglementations internationales",
              "Identification de nouveaux débouchés",
              "Stratégie de croissance durable",
            ]}
          />
          <ServiceCard
            icon={<IconIntermediation />}
            title="Intermédiation commerciale"
            items={[
              "Interface sécurisée entre vendeurs et acheteurs",
              "Garantie de transparence",
              "Fluidité des transactions",
              "Gestion des risques commerciaux",
            ]}
          />
        </Grid>
      </Section>

      {/* Sectors Summary Section */}
      <Section background="white" padding="lg">
        <SectionHeader
          title="Nos Secteurs d'Activité"
          subtitle="Domaines d'expertise"
          description="Nous opérons dans des secteurs clés du commerce international"
          centered
        />
        <Grid columns={2}>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
              Produits agricoles
            </h3>
            <p className="text-gray-700">
              Dattes, huile d'olive et autres produits agricoles premium
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
              Matériaux de construction
            </h3>
            <p className="text-gray-700">
              Ciment, clinker, fer et matériaux de qualité
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">⛏️</div>
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
              Matières premières
            </h3>
            <p className="text-gray-700">
              Ressources naturelles et matières premières brutes
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
              Produits de consommation
            </h3>
            <p className="text-gray-700">
              Produits alimentaires et biens de première nécessité
            </p>
          </div>
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section background="navy" padding="lg" className="text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Prêt à développer votre activité ?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Contactez notre équipe pour discuter de vos besoins en exportation et
          commerce international.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Contactez-nous maintenant
        </Link>
      </Section>
    </>
  );
}

