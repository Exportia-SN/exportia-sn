export default function SchemaOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ExportiaSN",
    url: "https://exportia-sn.netlify.app",
    logo: "https://exportia-sn.netlify.app/logo.png",
    description:
      "Société sénégalaise spécialisée dans l'exportation de produits agricoles, matériaux de construction, matières premières et consultation en commerce international.",
    sameAs: [
      "https://www.linkedin.com/in/exportia-sn",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dakar",
      addressLocality: "Dakar",
      addressRegion: "Dakar",
      postalCode: "18000",
      addressCountry: "SN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+221-XXX-XXX-XXXX",
      email: "exportia.sn@gmail.com",
      areaServed: "Worldwide",
      availableLanguage: ["fr", "en"],
    },
    founder: {
      "@type": "Person",
      name: "ExportiaSN Team",
    },
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Dakar, Senegal",
    },
    service: [
      {
        "@type": "Service",
        name: "Recherche de marchés et opportunités commerciales",
        description:
          "Identification des marchés porteurs à l'international et mise en relation avec acheteurs fiables et distributeurs internationaux.",
        areaServed: "Worldwide",
        serviceType: "Market Research",
      },
      {
        "@type": "Service",
        name: "Exportation de produits",
        description:
          "Gestion complète du processus d'exportation : conditionnement, documentation douanière, logistique et livraison.",
        areaServed: "Worldwide",
        serviceType: "Export Services",
      },
      {
        "@type": "Service",
        name: "Consultation et accompagnement stratégique",
        description:
          "Service de consulting personnalisé pour structurer les opérations d'exportation et identifier de nouveaux débouchés.",
        areaServed: "Worldwide",
        serviceType: "Consulting",
      },
      {
        "@type": "Service",
        name: "Intermédiation commerciale",
        description:
          "Interface sécurisée entre vendeurs et acheteurs garantissant la transparence et la fluidité des transactions commerciales.",
        areaServed: "Worldwide",
        serviceType: "Commercial Intermediation",
      },
    ],
    priceRange: "$$",
    knowsAbout: [
      "International Trade",
      "Export Management",
      "Supply Chain",
      "Logistics",
      "Commercial Consulting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

