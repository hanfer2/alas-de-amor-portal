import type { Metadata } from "next";
import config from "@/lib/config";
import { absoluteUrl, buildPageMetadata, location } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  path: "/nosotros",
  title: "Quiénes somos: Liliana Rodas",
  description:
    "Conoce a Liliana Rodas, Master Reiki, facilitadora de Barras Access, medium y coach angelical en Cali, Colombia. Certificaciones y trayectoria.",
});

const credentials = [
  "Master Reiki",
  "Facilitadora de Barras Access",
  "Facelight Energético",
  "Medium",
  "Coach Angelical",
  "Coach Espiritual",
];

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": absoluteUrl("/nosotros#liliana-rodas"),
  name: "Liliana Rodas",
  jobTitle: "Master Reiki y terapeuta holística",
  description:
    "Fundadora de Alas de Amor. Master Reiki, facilitadora de Barras Access, medium y coach angelical en Cali, Colombia.",
  image: absoluteUrl("/imgs/team/liliana-profile.jpg"),
  url: absoluteUrl("/nosotros"),
  worksFor: { "@id": absoluteUrl("/#business") },
  homeLocation: { "@type": "City", name: location.city },
  knowsAbout: ["Reiki", "Barras Access", "Lectura angelical", "Alineación de chakras", "Meditación guiada"],
  hasCredential: credentials.map((name) => ({
    "@type": "EducationalOccupationalCredential",
    name,
  })),
  sameAs: [config.social.facebook, config.social.instagram, config.social.tiktok],
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
