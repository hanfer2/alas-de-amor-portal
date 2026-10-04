import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import {
  buildFaq,
  getSeoDescription,
  getSeoTitle,
  getServiceBySlug,
  getServiceTitle,
  servicePages,
} from "@/lib/services";
import { absoluteUrl, buildPageMetadata, location, siteName } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const title = getSeoTitle(service);
  const metadata = buildPageMetadata({
    path: `/servicios/${service.slug}`,
    title,
    description: getSeoDescription(service),
    image: service.item.image && !service.item.image.endsWith(".webp") ? service.item.image : undefined,
  });
  // El layout intermedio de /servicios define su propio título y corta la herencia del template raíz.
  return { ...metadata, title: { absolute: `${title} | ${siteName}` } };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = absoluteUrl(`/servicios/${service.slug}`);
  const title = getServiceTitle("es", service);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: title,
      description: getSeoDescription(service),
      url,
      serviceType: title,
      provider: { "@id": absoluteUrl("/#business") },
      areaServed: { "@type": "City", name: location.city },
      ...(service.item.price !== null
        ? {
            offers: {
              "@type": "Offer",
              price: service.item.price,
              priceCurrency: "COP",
              url,
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: buildFaq("es", service).map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: siteName, item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Servicios", item: absoluteUrl("/servicios") },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
        />
      ))}
      <ServiceDetail slug={service.slug} />
    </>
  );
}
