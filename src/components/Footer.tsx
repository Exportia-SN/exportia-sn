import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À Propos", href: "/a-propos" },
    { label: "Services", href: "/services" },
    { label: "Secteurs", href: "/secteurs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold-900 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-lg">E</span>
              </div>
              <span className="font-serif text-xl font-bold">ExportiaSN</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecter l'Afrique au monde. Spécialiste en exportation et conseil
              en commerce international.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-gold-900 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#recherche"
                  className="text-gray-300 hover:text-gold-900 transition-colors duration-200"
                >
                  Recherche de marchés
                </Link>
              </li>
              <li>
                <Link
                  href="/services#exportation"
                  className="text-gray-300 hover:text-gold-900 transition-colors duration-200"
                >
                  Exportation de produits
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consultation"
                  className="text-gray-300 hover:text-gold-900 transition-colors duration-200"
                >
                  Consultation stratégique
                </Link>
              </li>
              <li>
                <Link
                  href="/services#intermediation"
                  className="text-gray-300 hover:text-gold-900 transition-colors duration-200"
                >
                  Intermédiation commerciale
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold-900 mt-1">📍</span>
                <span className="text-gray-300">Dakar, Sénégal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-900 mt-1">📞</span>
                <span className="text-gray-300">
                  <a
                    href="tel:+221"
                    className="hover:text-gold-900 transition-colors"
                  >
                    +221 [Téléphone]
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-900 mt-1">✉️</span>
                <span className="text-gray-300">
                  <a
                    href="mailto:contact@exportia-sn.com"
                    className="hover:text-gold-900 transition-colors"
                  >
                    contact@exportia-sn.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-900 mt-1">🌐</span>
                <span className="text-gray-300">
                  <a
                    href="https://www.linkedin.com/company/exportia-sn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} ExportiaSN. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <Link
                href="/mentions-legales"
                className="text-gray-400 hover:text-gold-900 text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-gold-900 text-sm transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

