import type { MetadataRoute } from "next";
import { servicePages } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

// /testimonios y /blog quedan fuera mientras sus contenidos sean de relleno (también llevan noindex).
const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/servicios", priority: 0.9 },
  { path: "/agendar", priority: 0.8 },
  { path: "/nosotros", priority: 0.7 },
  { path: "/contacto", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...servicePages.map((s) => ({
      url: absoluteUrl(`/servicios/${s.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
