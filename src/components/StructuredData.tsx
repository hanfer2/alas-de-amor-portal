export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alas de Amor",
    description:
      "Holistic therapy with Liliana Rodas. Master Reiki, Access Bars Facilitator, Medium and Angelic Coach.",
    image: "https://alas-de-amor.vercel.app/imgs/team/liliana-profile.jpg",
    url: "https://alas-de-amor.vercel.app",
    telephone: "+573043732955",
    email: "contacto@alasdeamor.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
    founder: {
      "@type": "Person",
      name: "Liliana Rodas",
      jobTitle: "Master Reiki & Holistic Therapist",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reiki",
          description: "Canalización de energía universal para sanación integral.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Barras Access",
          description: "Liberación de bloqueos energéticos y creencias limitantes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lectura Angelical",
          description: "Canalización de mensajes de ángeles y guías espirituales.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alineación de Chakras",
          description: "Equilibrio de los 7 centros energéticos.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Meditación Guiada",
          description: "Sesiones personalizadas de meditación profunda.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Facelight Energético",
          description: "Limpieza energética facial para liberar tensiones.",
        },
      },
    ],
    sameAs: [
      "https://www.facebook.com/liliana.rodas.9615",
      "https://instagram.com/alasdeamor",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
