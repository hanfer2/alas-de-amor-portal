import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { servicePages } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

// /testimonios queda fuera mientras no haya testimonios reales (también lleva noindex).
const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/servicios", priority: 0.9 },
  { path: "/agendar", priority: 0.8 },
  { path: "/oraculo", priority: 0.8 },
  { path: "/blog", priority: 0.7 },
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
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...servicePages.map((s) => ({
      url: absoluteUrl(`/servicios/${s.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
