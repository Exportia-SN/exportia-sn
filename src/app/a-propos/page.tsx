import { Metadata } from "next";
import { Section, SectionHeader, Grid } from "@/components/Section";
import { FeatureCard } from "@/components/Card";

export const metadata: Metadata = {
  title: "À Propos | ExportiaSN",
  description:
    "Découvrez qui nous sommes, notre mission, vision et valeurs. ExportiaSN, spécialiste en exportation et conseil en commerce international.",
  openGraph: {
    title: "À Propos | ExportiaSN",
    description:
      "Qui sommes-nous ? Notre mission, vision et valeurs fondamentales.",
    url: "https://exportia-sn.netlify.app/a-propos",
  },
};

function IconIntegrity() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      ⚖️
    </div>
  );
}

function IconProfessionalism() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      💼
    </div>
  );
}

function IconInnovation() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      💡
    </div>
  );
}

function IconEngagement() {
  return (
    <div className="w-16 h-16 bg-gold-900 rounded-full flex items-center justify-center text-white text-2xl">
      🎯
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="light" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-navy-900">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Exportia SN est une entreprise sénégalaise d'exportation et de
            conseil qui œuvre pour la valorisation des produits africains à
            l'échelle mondiale. Nous intervenons comme partenaire stratégique
            pour les producteurs, industriels et entrepreneurs souhaitant
            développer leurs activités au-delà des frontières.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6">
            Notre Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Faciliter et sécuriser l'accès des produits africains aux marchés
            internationaux grâce à une approche intégrée : sourcing, négociation,
            logistique et conseil stratégique.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous croyons que les produits africains méritent une place de choix
            sur les marchés mondiaux, et nous nous engageons à faire de cela une
            réalité pour nos partenaires.
          </p>
        </div>
      </Section>

      {/* Vision Section */}
      <Section background="light" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6">
            Notre Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Devenir une référence panafricaine dans l'exportation et le
            consulting, en contribuant à faire du Sénégal un pôle majeur du
            commerce international.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nous aspirons à créer un écosystème d'exportation dynamique qui
            bénéficie à tous les acteurs : producteurs, entreprises et
            consommateurs mondiaux.
          </p>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="white" padding="lg">
        <SectionHeader
          title="Nos Valeurs"
          subtitle="Principes fondamentaux"
          description="Les valeurs qui guident chacune de nos actions et décisions"
          centered
        />
        <Grid columns={2}>
          <FeatureCard
            icon={<IconIntegrity />}
            title="Intégrité"
            description="Transparence et confiance dans chaque partenariat. Nous opérons avec honnêteté et respect des engagements."
          />
          <FeatureCard
            icon={<IconProfessionalism />}
            title="Professionnalisme"
            description="Respect des normes internationales et des délais. Excellence dans chaque aspect de nos opérations."
          />
          <FeatureCard
            icon={<IconInnovation />}
            title="Innovation"
            description="Solutions adaptées aux évolutions du marché. Nous nous adaptons et évoluons constamment."
          />
          <FeatureCard
            icon={<IconEngagement />}
            title="Engagement"
            description="Accompagnement durable de nos clients et partenaires. Votre succès est notre succès."
          />
        </Grid>
      </Section>

      {/* Team Placeholder Section */}
      <Section background="light" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-navy-900 mb-6">
            Notre Équipe
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Composée de professionnels expérimentés en commerce international,
            logistique et développement commercial, notre équipe est dédiée à
            votre succès.
          </p>
          <div className="bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl p-12 border-2 border-dashed border-navy-300">
            <p className="text-gray-600 italic">
              Section "Notre Équipe" - À compléter avec photos et biographies
              (V2)
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" padding="lg" className="text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Devenez notre partenaire
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Explorez comment nous pouvons vous aider à développer votre activité
          sur les marchés internationaux.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gold-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Contactez-nous
        </a>
      </Section>
    </>
  );
}

