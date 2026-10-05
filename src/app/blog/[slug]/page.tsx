import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import config from "@/lib/config";
import { formatPostDate, getPostBySlug, posts, readingMinutes } from "@/lib/posts";
import { getServiceBySlug, getServiceTitle } from "@/lib/services";
import { absoluteUrl, buildPageMetadata, defaultOgImage, siteName } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const metadata = buildPageMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
  });
  return {
    ...metadata,
    // El layout de /blog corta la herencia del template raíz: la marca se añade a mano.
    title: { absolute: `${post.title} | ${siteName}` },
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [siteName],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}`);
  const services = post.serviceSlugs.flatMap((s) => {
    const service = getServiceBySlug(s);
    return service ? [{ slug: s, title: getServiceTitle("es", service) }] : [];
  });
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const whatsappText = `Hola, leí el artículo "${post.title}" y quiero más información.`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#post`,
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "es",
      mainEntityOfPage: url,
      image: absoluteUrl(defaultOgImage),
      author: { "@id": absoluteUrl("/#business") },
      publisher: { "@id": absoluteUrl("/#business") },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: siteName, item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <div className="bg-warm-white">
      <JsonLd data={jsonLd} />
      <section className="gradient-hero pt-28 pb-8 sm:pt-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Ruta de navegación" className="mb-6 text-sm text-reiki-700">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="underline-offset-4 hover:underline">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>
          <h1 className="role-h1">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="role-metadata rounded-full bg-reiki-50 px-3 py-1">{post.category}</span>
            <time dateTime={post.date} className="role-metadata text-reiki-700">
              {formatPostDate(post.date)}
            </time>
            <span className="role-metadata text-reiki-700">{readingMinutes(post)} min de lectura</span>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="role-h2 mt-10 mb-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="my-4 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="role-description flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-reiki-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="role-description my-4 leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      <section className="py-12 bg-reiki-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="role-h2 mb-6">¿Quieres vivirlo?</h2>
          <ul className="space-y-3 mb-8">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="role-description underline underline-offset-4 hover:text-reiki-700"
                >
                  {s.title}: ver detalle y valor
                </Link>
              </li>
            ))}
            {post.linksOraculo && (
              <li>
                <Link href="/oraculo" className="role-description underline underline-offset-4 hover:text-reiki-700">
                  Oráculo Zaquiel: conoce la baraja
                </Link>
              </li>
            )}
          </ul>
          <a
            href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="role-cta inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Escríbenos por WhatsApp
          </a>
          <p className="mt-6 text-sm text-reiki-700">
            Este contenido es informativo y no sustituye la atención de un profesional de la salud.
          </p>
        </div>
      </section>

      {others.length > 0 && (
        <section className="py-10 lg:py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="role-h2 mb-6">Sigue leyendo</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block h-full rounded-2xl border border-reiki-100 bg-white p-6 transition-shadow hover:shadow-lg"
                  >
                    <span className="role-card-title block text-lg">{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
