import config from "@/lib/config";
import { absoluteUrl, defaultOgImage, location, siteName } from "@/lib/site";

const offeredServices = [
  { name: "Reiki", description: "Canalización de energía universal para sanación integral." },
  { name: "Barras Access", description: "Liberación de bloqueos energéticos y creencias limitantes." },
  { name: "Lectura Angelical", description: "Canalización de mensajes de ángeles y guías espirituales." },
  { name: "Alineación de Chakras", description: "Equilibrio de los 7 centros energéticos." },
  { name: "Meditación Guiada", description: "Sesiones personalizadas de meditación profunda." },
  { name: "Facelight Energético", description: "Limpieza energética facial para liberar tensiones." },
];

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": absoluteUrl("/#business"),
    name: siteName,
    alternateName: "Alas de Amor by Liliana Rodas",
    description:
      "Terapias holísticas con Liliana Rodas en Cali, Colombia: Reiki, Barras Access, lectura angelical, alineación de chakras y meditación guiada.",
    image: absoluteUrl(defaultOgImage),
    url: absoluteUrl("/"),
    telephone: config.contact.phone.replace(/\s/g, ""),
    email: config.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.countryCode,
    },
    areaServed: { "@type": "City", name: location.city },
    founder: {
      "@type": "Person",
      name: "Liliana Rodas",
      jobTitle: "Master Reiki y terapeuta holística",
    },
    makesOffer: offeredServices.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", ...service },
    })),
    sameAs: [config.social.facebook, config.social.instagram, config.social.tiktok],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
