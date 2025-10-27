import Link from 'next/link';
import { Target, Globe, Shield, Package, Handshake, Search, Ship, Briefcase, Link2, Wheat, Building2, Cog, ShoppingCart, Lightbulb } from 'lucide-react';
import SchemaOrganization from '@/components/SchemaOrganization';

export const metadata = {
  title: 'Accueil | ExportiaSN',
  description: 'ExportiaSN - Votre partenaire de confiance pour l\'exportation de produits africains vers les marchés internationaux. Produits agricoles, matériaux de construction, matières premières et conseil en commerce international.',
  openGraph: {
    title: 'ExportiaSN - Connecter l\'Afrique au monde',
    description: 'Exportation de produits africains vers les marchés internationaux',
    url: 'https://exportia-sn.netlify.app',
    siteName: 'ExportiaSN',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <SchemaOrganization />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-cargo-port.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Exportia <span className="text-gold-500">SN</span>
          </h1>
          <p className="text-3xl md:text-4xl font-bold mb-4">
            Connecter l'Afrique au monde
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Basée au Sénégal, Exportia SN est une société spécialisée dans l'exportation de produits agricoles, 
            de matériaux de construction, de matières premières et de produits de consommation, 
            ainsi que dans la consultation en commerce international.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Nous accompagnons nos clients dans la recherche de marchés, la mise en relation commerciale 
            et la gestion complète du processus d'exportation. Notre mission est claire : 
            promouvoir le savoir-faire africain et faciliter l'accès des produits du continent aux marchés internationaux.
          </p>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            → Découvrez nos services
          </Link>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-wide mb-2">NOS AVANTAGES</p>
            <h2 className="text-4xl font-bold text-navy-900 font-serif">
              Pourquoi choisir Exportia SN ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Expertise locale et internationale</h3>
              <p className="text-gray-600 leading-relaxed">Notre équipe combine une connaissance profonde des marchés africains avec une expertise internationale reconnue.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Réseau solide de partenaires</h3>
              <p className="text-gray-600 leading-relaxed">Partenaires fiables sur plusieurs continents pour garantir vos opérations d'exportation.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Fiabilité et transparence</h3>
              <p className="text-gray-600 leading-relaxed">Engagement envers la qualité, la fiabilité et la satisfaction client dans chaque transaction.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Maîtrise logistique</h3>
              <p className="text-gray-600 leading-relaxed">Expertise complète des formalités logistiques et douanières pour un processus sans friction.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                <Handshake className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Support durable et transparent</h3>
              <p className="text-gray-600 leading-relaxed">Support durable et transparent adapté à vos besoins spécifiques et objectifs commerciaux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-wide mb-2">CE QUE NOUS PROPOSONS</p>
            <h2 className="text-4xl font-bold text-navy-900 font-serif mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Solutions complètes pour votre développement commercial international</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-navy-50 to-white p-8 rounded-xl border border-navy-100 hover:border-gold-500 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 flex-1">Recherche de marchés et opportunités commerciales</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Identification des marchés porteurs à l'international</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Mise en relation avec acheteurs fiables</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Connexion avec distributeurs internationaux</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Intelligence commerciale stratégique</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-white p-8 rounded-xl border border-navy-100 hover:border-gold-500 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Ship className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 flex-1">Exportation de produits</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Gestion complète du processus d'exportation</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Conditionnement professionnel</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Documentation douanière</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Logistique et livraison sécurisée</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-white p-8 rounded-xl border border-navy-100 hover:border-gold-500 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 flex-1">Consultation et accompagnement stratégique</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Structuration des opérations d'exportation</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Compréhension des réglementations internationales</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Identification de nouveaux débouchés</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Stratégie de croissance durable</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-navy-50 to-white p-8 rounded-xl border border-navy-100 hover:border-gold-500 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Link2 className="w-7 h-7 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 flex-1">Intermédiation commerciale</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Interface sécurisée entre vendeurs et acheteurs</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Garantie de transparence</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Fluidité des transactions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-gold-500 mt-1">→</span>
                  <span>Gestion des risques commerciaux</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-block bg-navy-900 hover:bg-navy-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Voir tous nos services →
            </Link>
          </div>
        </div>
      </section>

      {/* Secteurs Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-2">DOMAINES D'EXPERTISE</p>
            <h2 className="text-4xl font-bold font-serif mb-4">Nos Secteurs d'Activité</h2>
            <p className="text-xl text-gray-300">Nous opérons dans des secteurs clés du commerce international</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/images/agricultural-products.jpg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
              
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[280px]">
                <div className="w-12 h-12 bg-gold-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                  <Wheat className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Produits Agricoles</h3>
                <p className="text-gray-200 leading-relaxed">Dattes, huile d'olive, arachides, fruits secs et autres produits agricoles de qualité premium</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/images/construction-materials.jpg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
              
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[280px]">
                <div className="w-12 h-12 bg-gold-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                  <Building2 className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Matériaux de Construction</h3>
                <p className="text-gray-200 leading-relaxed">Ciment, fer à béton, briques, carreaux et matériaux de construction certifiés</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/images/raw-materials.jpg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
              
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[280px]">
                <div className="w-12 h-12 bg-gold-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                  <Cog className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Matières Premières</h3>
                <p className="text-gray-200 leading-relaxed">Minerais, métaux, ressources naturelles et matières premières industrielles</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/images/consumer-products.jpg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
              
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[280px]">
                <div className="w-12 h-12 bg-gold-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                  <ShoppingCart className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Produits de Consommation</h3>
                <p className="text-gray-200 leading-relaxed">Produits du quotidien, biens de consommation et articles divers pour marchés internationaux</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(/images/consulting-services.jpg)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
              
              <div className="relative p-6 h-full flex flex-col justify-end min-h-[280px]">
                <div className="w-12 h-12 bg-gold-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                  <Lightbulb className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Services de Conseil</h3>
                <p className="text-gray-200 leading-relaxed">Accompagnement stratégique, études de marché et conseil en commerce international</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/secteurs" 
              className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explorer nos secteurs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">
            Prêt à développer votre activité ?
          </h2>
          <p className="text-xl mb-10 text-gray-200">
            Contactez notre équipe pour discuter de vos besoins en exportation et commerce international.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-10 py-5 rounded-lg transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Contactez-nous maintenant
          </Link>
        </div>
      </section>
    </>
  );
}

