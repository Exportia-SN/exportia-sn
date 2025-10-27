import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ExportiaSN",
  description:
    "Contactez ExportiaSN pour discuter de vos besoins en exportation et commerce international. Dakar, Sénégal.",
  openGraph: {
    title: "Contact | ExportiaSN",
    description:
      "Envoyez-nous un message ou appelez-nous pour discuter de vos projets d'exportation",
    url: "https://exportia-sn.netlify.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

