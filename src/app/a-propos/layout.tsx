import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | ExportiaSN",
  description: "Découvrez qui nous sommes, notre mission, vision et valeurs.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

