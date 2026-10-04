import type { Metadata } from "next";

// En Vercel, VERCEL_PROJECT_PRODUCTION_URL ya apunta al dominio propio una vez asignado,
// así que al comprar el dominio no hace falta tocar código. NEXT_PUBLIC_SITE_URL lo sobreescribe.
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelProductionUrl ? `https://${vercelProductionUrl}` : "https://alas-de-amor-portal.vercel.app")
).replace(/\/$/, "");

export const siteName = "Alas de Amor";

export const location = {
  city: "Cali",
  region: "Valle del Cauca",
  country: "Colombia",
  countryCode: "CO",
} as const;

export const defaultOgImage = "/imgs/team/liliana-profile.jpg";

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
};

// Next reemplaza (no fusiona) alternates/openGraph/twitter del layout raíz en cada página,
// por eso cada ruta debe declarar los suyos completos.
export function buildPageMetadata({
  path,
  title,
  description,
  image = defaultOgImage,
  noindex = false,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { es: path, "x-default": path },
    },
    openGraph: {
      type: "website",
      locale: "es_CO",
      url: path,
      siteName,
      title: fullTitle,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
