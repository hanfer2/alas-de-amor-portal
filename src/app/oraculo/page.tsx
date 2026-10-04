import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import config from "@/lib/config";
import { oraculoZaquiel as product } from "@/lib/products";
import { absoluteUrl, siteName } from "@/lib/site";
import { formatCOP } from "@/lib/catalog";

const steps = [
  "Respira tres veces y piensa en una pregunta abierta.",
  "Elige una carta con calma.",
  "Lee el mensaje del arcángel y la pregunta que te deja.",
  "Practica el pequeño ejercicio de la carta durante el día.",
];

export default function OraculoPage() {
  const url = absoluteUrl("/oraculo");
  const whatsappText = `Hola, quiero información sobre el ${product.name}: precio, disponibilidad y envío a mi ciudad o país.`;
  const whatsappHref = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: siteName, item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: product.name, item: url },
      ],
    },
  ];
  // Solo se publica la oferta cuando el precio está confirmado; sin precio no se inventa ninguno.
  if (product.priceCOP !== null) {
    jsonLd.unshift({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.tagline,
      image: absoluteUrl("/imgs/oraculo/zaquiel-portada.jpg"),
      brand: { "@type": "Brand", name: siteName },
      offers: {
        "@type": "Offer",
        url,
        price: product.priceCOP,
        priceCurrency: "COP",
        ...(product.inStock === null
          ? {}
          : { availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock" }),
      },
    });
  }

  return (
    <div className="bg-warm-white">
      <JsonLd data={jsonLd} />
      <section className="gradient-hero pt-32 pb-16 sm:pt-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <nav aria-label="Ruta de navegación" className="mb-6 text-sm text-reiki-700">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="underline-offset-4 hover:underline">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-semibold">
                  {product.name}
                </li>
              </ol>
            </nav>
            <h1 className="role-h1">{product.name}</h1>
            <p className="role-subtitle mt-4 leading-relaxed">{product.tagline}.</p>
            <p className="role-description mt-4 leading-relaxed">
              Una baraja de cartas de ángeles creada por Liliana Rodas. Cada carta trae un mensaje de un arcángel, una
              pregunta para reflexionar y un ejercicio corto para practicar.
            </p>
            <p className="role-metadata role-metadata-gold mt-6 inline-flex rounded-full px-4 py-2 text-sm">
              {product.priceCOP === null ? "Precio y envío: consúltalos por WhatsApp" : formatCOP(product.priceCOP)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="role-cta inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Pedirlo por WhatsApp
              </a>
              <Link
                href="/servicios/lectura-oraculo-angelical"
                className="role-cta inline-flex items-center gap-2 px-8 py-4 rounded-full border border-reiki-300 text-reiki-800 hover:bg-reiki-50 transition-colors"
              >
                Prefiero una lectura personalizada
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm aspect-[430/670] rounded-3xl overflow-hidden shadow-xl shadow-reiki-300/20">
            <Image
              src="/imgs/oraculo/zaquiel-portada.jpg"
              alt="Portada del Oráculo Zaquiel: alas de ángel en acuarela y el texto Zaquiel Arcángel"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 384px"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative mx-auto w-full max-w-xs aspect-[640/993] rounded-3xl overflow-hidden shadow-xl shadow-reiki-300/20 lg:order-2">
            <Image
              src="/imgs/oraculo/carta-ejemplo.jpg"
              alt="Ejemplo de carta del oráculo: mensaje del arcángel Uriel, una pregunta y un ejercicio de respiración"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 70vw, 320px"
            />
          </div>
          <div>
            <h2 className="role-h2 mb-6">Cómo se usa</h2>
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="role-description flex gap-4 leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-reiki-500 text-sm font-semibold text-white"
                  >
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="role-description mt-6 leading-relaxed">
              Es una herramienta de reflexión y autoconocimiento. No predice el futuro con certeza ni sustituye el consejo
              de un profesional de la salud, legal o financiero. Si quieres entender mejor cómo usarla, lee{" "}
              <Link href="/blog/como-usar-un-oraculo-angelical" className="underline underline-offset-4 hover:text-reiki-700">
                nuestra guía para usar un oráculo angelical
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-reiki-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="role-h2 mb-4">¿Vives fuera de Colombia?</h2>
          <p className="role-description leading-relaxed">
            Escríbenos por WhatsApp con tu ciudad y país y te confirmamos si podemos enviártelo, el costo del envío y el
            medio de pago.
          </p>
        </div>
      </section>
    </div>
  );
}
