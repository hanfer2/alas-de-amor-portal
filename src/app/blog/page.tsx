import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SocialEmbeds from "@/components/SocialEmbeds";
import SocialLinks from "@/components/SocialLinks";
import { formatPostDate, posts, readingMinutes } from "@/lib/posts";
import { absoluteUrl, siteName } from "@/lib/site";

export default function BlogPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `Mensajes de Luz | ${siteName}`,
      url: absoluteUrl("/blog"),
      inLanguage: "es",
      publisher: { "@id": absoluteUrl("/#business") },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: absoluteUrl(`/blog/${p.slug}`),
        datePublished: p.date,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: siteName, item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <JsonLd data={jsonLd} />
      <section className="hero-shell relative pb-4 gradient-hero overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-copy text-center max-w-3xl mx-auto reveal">
            <h1 className="role-h1 mt-0">
              Mensajes de <span className="text-gradient">Luz</span>
            </h1>
            <p className="role-subtitle mt-4 leading-relaxed">
              Guías sencillas sobre Reiki, Barras Access, sesiones en línea y oráculo angelical.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="gradient-card rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="role-metadata rounded-full bg-reiki-50 px-3 py-1">{post.category}</span>
                  <time dateTime={post.date} className="role-metadata text-reiki-700">
                    {formatPostDate(post.date)}
                  </time>
                  <span className="role-metadata text-reiki-700">{readingMinutes(post)} min de lectura</span>
                </div>
                <h2 className="role-card-title mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-reiki-700 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="role-description mb-6 leading-relaxed">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="role-cta inline-flex items-center gap-2 text-reiki-600 hover:text-reiki-800 transition-colors"
                >
                  Leer artículo <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-reiki-100 bg-white/70 p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col gap-6 mb-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="role-h2">Vida en redes</h2>
                <p className="role-subtitle mt-3">
                  Publicaciones de la comunidad y contenido de Liliana.
                </p>
              </div>
              <SocialLinks variant="chip" />
            </div>
            <SocialEmbeds />
          </div>
        </div>
      </section>
    </div>
  );
}
