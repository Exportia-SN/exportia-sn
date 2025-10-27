import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteurs d'Activité | ExportiaSN",
  description: "Nos domaines d'expertise en commerce international.",
};

export default function SectorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

