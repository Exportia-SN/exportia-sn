import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrganization from "@/components/SchemaOrganization";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://exportia-sn.netlify.app";
const SITE_NAME = "ExportiaSN";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0D2C54",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ExportiaSN - Connecter l'Afrique au monde | Exportation & Conseil",
    template: "%s | ExportiaSN",
  },
  description:
    "ExportiaSN est une société sénégalaise spécialisée dans l'exportation de produits agricoles, matériaux de construction, matières premières et consultation en commerce international.",
  keywords: [
    "exportation",
    "commerce international",
    "Sénégal",
    "produits agricoles",
    "matériaux construction",
    "conseil export",
    "logistique",
    "B2B",
    "Afrique",
  ],
  authors: [{ name: "ExportiaSN" }],
  creator: "ExportiaSN",
  publisher: "ExportiaSN",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "ExportiaSN - Connecter l'Afrique au monde",
    description:
      "Spécialiste en exportation et conseil en commerce international. Produits agricoles, matériaux de construction, matières premières.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ExportiaSN - Connecter l'Afrique au monde",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExportiaSN - Connecter l'Afrique au monde",
    description:
      "Spécialiste en exportation et conseil en commerce international",
    images: [`${SITE_URL}/twitter-image.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-SN": `${SITE_URL}/fr`,
      "fr-FR": `${SITE_URL}/fr`,
    },
  },
  verification: {
    google: "google-site-verification-code", // À remplacer
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D2C54" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <SchemaOrganization />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

