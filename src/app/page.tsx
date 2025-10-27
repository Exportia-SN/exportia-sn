import Link from 'next/link';
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
            {[
              {
                emoji: '🎯',
                title: 'Expertise locale et internationale',
                description: 'Notre équipe combine une connaissance profonde des marchés africains avec une expertise internationale reconnue.',
              },
              {
                emoji: '🌍',
                title: 'Réseau solide de partenaires',
                description: 'Partenaires fiables sur plusieurs continents pour garantir vos opérations d\'exportation.',
              },
              {
                emoji: '✓',
                title: 'Fiabilité et transparence',
                description: 'Engagement envers la qualité, la fiabilité et la satisfaction client dans chaque transaction.',
              },
              {
                emoji: '📦',
                title: 'Maîtrise logistique',
                description: 'Expertise complète des formalités logistiques et douanières pour un processus sans friction.',
              },
              {
                emoji: '🤝',
                title: 'Support durable et transparent',
                description: 'Support durable et transparent adapté à vos besoins spécifiques et objectifs commerciaux.',
              },
            ].map((advantage, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">{advantage.emoji}</div>
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
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-wide mb-2">CE QUE NOUS PROPOSONS</p>
            <h2 className="text-4xl font-bold text-navy-900 font-serif mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">Solutions complètes pour votre développement commercial international</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                emoji: '🔍',
                title: 'Recherche de marchés et opportunités commerciales',
                benefits: [
                  'Identification des marchés porteurs à l\'international',
                  'Mise en relation avec acheteurs fiables',
                  'Connexion avec distributeurs internationaux',
                  'Intelligence commerciale stratégique',
                ],
              },
              {
                emoji: '🚢',
                title: 'Exportation de produits',
                benefits: [
                  'Gestion complète du processus d\'exportation',
                  'Conditionnement professionnel',
                  'Documentation douanière',
                  'Logistique et livraison sécurisée',
                ],
              },
              {
                emoji: '💼',
                title: 'Consultation et accompagnement stratégique',
                benefits: [
                  'Structuration des opérations d\'exportation',
                  'Compréhension des réglementations internationales',
                  'Identification de nouveaux débouchés',
                  'Stratégie de croissance durable',
                ],
              },
              {
                emoji: '🔗',
                title: 'Intermédiation commerciale',
                benefits: [
                  'Interface sécurisée entre vendeurs et acheteurs',
                  'Garantie de transparence',
                  'Fluidité des transactions',
                  'Gestion des risques commerciaux',
                ],
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-navy-50 to-white p-8 rounded-xl border border-navy-100 hover:border-gold-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{service.emoji}</div>
                  <h3 className="text-2xl font-bold text-navy-900 flex-1">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-gold-500 mt-1">→</span>
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
            {[
              {
                title: 'Produits Agricoles',
                image: '/images/agricultural-products.jpg',
                description: 'Dattes, huile d\'olive, arachides, fruits secs et autres produits agricoles de qualité premium',
                emoji: '🌾',
              },
              {
                title: 'Matériaux de Construction',
                image: '/images/construction-materials.jpg',
                description: 'Ciment, fer à béton, briques, carreaux et matériaux de construction certifiés',
                emoji: '🏗️',
              },
              {
                title: 'Matières Premières',
                image: '/images/raw-materials.jpg',
                description: 'Minerais, métaux, ressources naturelles et matières premières industrielles',
                emoji: '⚙️',
              },
              {
                title: 'Produits de Consommation',
                image: '/images/consumer-products.jpg',
                description: 'Produits du quotidien, biens de consommation et articles divers pour marchés internationaux',
                emoji: '🛒',
              },
              {
                title: 'Services de Conseil',
                image: '/images/consulting-services.jpg',
                description: 'Accompagnement stratégique, études de marché et conseil en commerce international',
                emoji: '💡',
              },
            ].map((secteur, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${secteur.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
                
                <div className="relative p-6 h-full flex flex-col justify-end min-h-[280px]">
                  <div className="text-5xl mb-3">{secteur.emoji}</div>
                  <h3 className="text-2xl font-bold mb-2">{secteur.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{secteur.description}</p>
                </div>
              </div>
            ))}
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

