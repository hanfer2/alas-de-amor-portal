import { catalog, formatCOP, type CatalogItem } from "@/lib/catalog";
import { t } from "@/lib/translations";

export type ServicePage = {
  slug: string;
  categoryId: string;
  item: CatalogItem;
  benefitsKey?: string;
};

export type FaqEntry = { q: string; a: string };

// Solo se publican páginas para servicios con contenido real (charlas y retiros siguen "por definir").
const slugById: Record<string, string> = {
  reiki: "reiki",
  access: "barras-access",
  combo: "combo-barras-access-reiki",
  chakras: "alineacion-de-chakras",
  meditacion: "meditacion-guiada",
  facelight: "facelight-energetico",
  coaching: "coaching-espiritual",
  oraculos: "oraculos",
  "meditacion-online": "meditacion-guiada-online",
  medium: "taller-medium",
  "reiki-usui": "taller-reiki-usui",
  "access-taller": "taller-barras-access",
  nina: "sanacion-nino-interior",
  mama: "sanacion-mama",
  papa: "sanacion-papa",
  basica: "lectura-angelical-basica",
  angelical: "lectura-angelical",
  oraculo: "lectura-oraculo-angelical",
};

const benefitsKeyById: Record<string, string> = {
  reiki: "servicios.reiki.benefits",
  access: "servicios.barras.benefits",
  chakras: "servicios.chakras.benefits",
  meditacion: "servicios.meditacion.benefits",
  facelight: "servicios.facelight.benefits",
  coaching: "servicios.coaching.benefits",
  oraculos: "servicios.oraculos.benefits",
  angelical: "servicios.angelical.benefits",
};

export const servicePages: ServicePage[] = catalog.flatMap((category) =>
  category.items.flatMap((item) => {
    const slug = slugById[item.id];
    return slug
      ? [{ slug, categoryId: category.id, item, benefitsKey: benefitsKeyById[item.id] }]
      : [];
  })
);

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export function getServiceSlug(itemId: string): string | undefined {
  return slugById[itemId];
}

export function getRelatedServices(service: ServicePage, limit = 3): ServicePage[] {
  return servicePages
    .filter((s) => s.categoryId === service.categoryId && s.slug !== service.slug)
    .slice(0, limit);
}

function str(lang: string, key: string): string {
  const value = t(lang, key);
  return typeof value === "string" ? value : key;
}

function fill(template: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, v), template);
}

export function getServiceTitle(lang: string, service: ServicePage): string {
  return str(lang, service.item.titleKey);
}

// La meditación online es la única modalidad virtual confirmada; el resto se posiciona por Cali.
export function getSeoTitle(service: ServicePage): string {
  const title = getServiceTitle("es", service);
  return service.item.id === "meditacion-online" ? title : `${title} en Cali`;
}

const MAX_DESCRIPTION = 160;

export function getSeoDescription(service: ServicePage): string {
  const desc = str("es", service.item.descKey);
  const firstSentence = desc.split(/(?<=\.)\s/)[0].replace(/\.$/, "");
  const where = "Con Liliana Rodas en Cali, Colombia.";
  const price = service.item.price !== null ? ` Desde ${formatCOP(service.item.price)}.` : "";

  // Se descarta primero el precio y, si aún no cabe, se recorta la primera frase en un límite de palabra.
  for (const suffix of [`${where}${price}`, where]) {
    const full = `${firstSentence}. ${suffix}`;
    if (full.length <= MAX_DESCRIPTION) return full;
  }
  const room = MAX_DESCRIPTION - ` ${where}`.length - 1;
  const cut = firstSentence.slice(0, room).replace(/\s+\S*$/, "");
  return `${cut}… ${where}`;
}

export function buildFaq(lang: string, service: ServicePage, priceText?: string): FaqEntry[] {
  const title = getServiceTitle(lang, service);
  const faq: FaqEntry[] = [];

  if (service.item.durationKey) {
    faq.push({
      q: str(lang, "servicioDetalle.faq.durationQ"),
      a: fill(str(lang, "servicioDetalle.faq.durationA"), {
        title,
        duration: str(lang, service.item.durationKey),
      }),
    });
  }

  if (service.item.price !== null) {
    faq.push({
      q: str(lang, "servicioDetalle.faq.priceQ"),
      a: fill(str(lang, "servicioDetalle.faq.priceA"), {
        title,
        price: priceText ?? formatCOP(service.item.price),
      }),
    });
  }

  faq.push(
    { q: str(lang, "servicioDetalle.faq.whereQ"), a: str(lang, "servicioDetalle.faq.whereA") },
    { q: str(lang, "servicioDetalle.faq.bookQ"), a: str(lang, "servicioDetalle.faq.bookA") },
    { q: str(lang, "servicioDetalle.faq.medicalQ"), a: str(lang, "servicioDetalle.faq.medicalA") }
  );

  return faq;
}
