import Link from "next/link";
import Image from "next/image";
import { Target, Globe, Shield, Package, Handshake, Search, Ship, Briefcase, Link2, Wheat, Building2, Cog, ShoppingCart, Lightbulb, ArrowUp } from "lucide-react";
import BackToTop from "@/components/BackToTop";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-cargo-port.jpg"
          alt="Port international avec conteneurs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Connecter l'Afrique au monde
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: "0.2s"}}>
            Basée au Sénégal, <span className="text-gold-400 font-semibold">Exportia SN</span> est une société spécialisée dans l'exportation de produits agricoles, de matériaux de construction, de matières premières et de produits de consommation, ainsi que dans la consultation en commerce international.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-premium-lg hover:shadow-premium-xl hover:scale-105 animate-fade-in-up"
            style={{animationDelay: "0.4s"}}
          >
            Découvrez nos services
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Nous accompagnons nos clients dans la <span className="text-navy-900 font-semibold">recherche de marchés</span>, la <span className="text-navy-900 font-semibold">mise en relation commerciale</span> et la <span className="text-navy-900 font-semibold">gestion complète du processus d'exportation</span>. Notre mission est claire : promouvoir le savoir-faire africain et faciliter l'accès des produits du continent aux marchés internationaux.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gold-600 uppercase tracking-wide mb-2">NOS AVANTAGES</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Pourquoi choisir Exportia SN ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Expertise locale et internationale",
                description: "Notre équipe combine une connaissance profonde des marchés africains avec une expertise internationale reconnue."
              },
              {
                icon: Globe,
                title: "Réseau solide de partenaires",
                description: "Partenaires fiables sur plusieurs continents pour garantir vos opérations d'exportation."
              },
              {
                icon: Shield,
                title: "Fiabilité et transparence",
                description: "Engagement envers la qualité, la fiabilité et la satisfaction client dans chaque transaction."
              },
              {
                icon: Package,
                title: "Maîtrise logistique",
                description: "Expertise complète des formalités logistiques et douanières pour un processus sans friction."
              },
              {
                icon: Handshake,
                title: "Support durable et transparent",
                description: "Support durable et transparent adapté à vos besoins spécifiques et objectifs commerciaux."
              }
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-premium-sm hover:shadow-premium-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-navy-900 to-navy-700 rounded-lg flex items-center justify-center mb-6">
                  <advantage.icon className="w-8 h-8 text-gold-400" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gold-600 uppercase tracking-wide mb-2">CE QUE NOUS PROPOSONS</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solutions complètes pour votre développement commercial international
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Recherche de marchés et opportunités commerciales",
                benefits: [
                  "Identification des marchés porteurs à l'international",
                  "Mise en relation avec acheteurs fiables",
                  "Connexion avec distributeurs internationaux",
                  "Intelligence commerciale stratégique"
                ]
              },
              {
                icon: Ship,
                title: "Exportation de produits",
                benefits: [
                  "Gestion complète du processus d'exportation",
                  "Conditionnement professionnel",
                  "Documentation douanière",
                  "Logistique et livraison sécurisée"
                ]
              },
              {
                icon: Briefcase,
                title: "Consultation et accompagnement stratégique",
                benefits: [
                  "Structuration des opérations d'exportation",
                  "Compréhension des réglementations internationales",
                  "Identification de nouveaux débouchés",
                  "Stratégie de croissance durable"
                ]
              },
              {
                icon: Link2,
                title: "Intermédiation commerciale",
                benefits: [
                  "Interface sécurisée entre vendeurs et acheteurs",
                  "Garantie de transparence",
                  "Fluidité des transactions",
                  "Gestion des risques commerciaux"
                ]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl p-8 hover:border-gold-400 transition-all duration-300 hover:shadow-premium-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 leading-tight">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="text-gold-600 font-bold mt-1">→</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-navy-900 font-semibold text-lg hover:text-gold-600 transition-colors"
            >
              Voir tous nos services
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gold-400 uppercase tracking-wide mb-2">DOMAINES D'EXPERTISE</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Nos Secteurs d'Activité
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous opérons dans des secteurs clés du commerce international
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wheat,
                title: "Produits Agricoles",
                description: "Dattes, huile d'olive, arachides, fruits secs et autres produits agricoles de qualité premium",
                image: "/images/agricultural-products.jpg"
              },
              {
                icon: Building2,
                title: "Matériaux de Construction",
                description: "Ciment, fer à béton, briques, carreaux et matériaux de construction certifiés",
                image: "/images/construction-materials.jpg"
              },
              {
                icon: Cog,
                title: "Matières Premières",
                description: "Minerais, métaux, ressources naturelles et matières premières industrielles",
                image: "/images/raw-materials.jpg"
              },
              {
                icon: ShoppingCart,
                title: "Produits de Consommation",
                description: "Produits du quotidien, biens de consommation et articles divers pour marchés internationaux",
                image: "/images/consumer-products.jpg"
              },
              {
                icon: Lightbulb,
                title: "Services de Conseil",
                description: "Accompagnement stratégique, études de marché et conseil en commerce international",
                image: "/images/consulting-services.jpg"
              }
            ].map((sector, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-xl overflow-hidden shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-2"
              >
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/70 to-navy-900/30 group-hover:from-navy-900/98 group-hover:via-navy-900/85 transition-all duration-300" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center mb-4">
                    <sector.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{sector.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/secteurs"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-gold-400 transition-colors"
            >
              Explorer nos secteurs
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold-600 to-gold-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à développer votre activité ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez notre équipe pour discuter de vos besoins en exportation et commerce international.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-premium-lg hover:shadow-premium-xl hover:scale-105"
          >
            Contactez-nous maintenant
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>

      <BackToTop />
    </main>
  );
}
