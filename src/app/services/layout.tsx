import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | ExportiaSN",
  description: "Découvrez nos services en exportation et commerce international.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

