export type CatalogItem = {
  id: string;
  titleKey: string;
  descKey: string;
  durationKey?: string;
  image?: string;
  price: number | null;
};

export type CatalogCategory = {
  id: string;
  titleKey: string;
  items: CatalogItem[];
};

export const catalog: CatalogCategory[] = [
  {
    id: "terapias",
    titleKey: "servicios.categories.terapias",
    items: [
      {
        id: "reiki",
        titleKey: "nosotros.services.reiki",
        descKey: "servicios.reiki.desc",
        durationKey: "servicios.reiki.duration",
        image: "/imgs/services/terapias-reiki-v2.jpg",
        price: 160000,
      },
      {
        id: "access",
        titleKey: "nosotros.services.access",
        descKey: "servicios.barras.desc",
        durationKey: "servicios.barras.duration",
        image: "/imgs/services/terapias-access.jpg",
        price: 230000,
      },
      {
        id: "combo",
        titleKey: "servicios.combo.title",
        descKey: "servicios.combo.desc",
        image: "/imgs/services/gen-servicios-combo.jpg",
        price: 265900,
      },
      {
        id: "chakras",
        titleKey: "nosotros.services.chakras",
        descKey: "servicios.chakras.desc",
        durationKey: "servicios.chakras.duration",
        image: "/imgs/services/terapias-chakras.jpg",
        price: 130000,
      },
      {
        id: "meditacion",
        titleKey: "nosotros.services.meditacion",
        descKey: "servicios.meditacion.desc",
        durationKey: "servicios.meditacion.duration",
        image: "/imgs/services/terapias-meditacion-v2.jpg",
        price: 90000,
      },
      {
        id: "facelight",
        titleKey: "nosotros.services.facelight",
        descKey: "servicios.facelight.desc",
        durationKey: "servicios.facelight.duration",
        image: "/imgs/services/gen-servicios-facelight.jpg",
        price: 110000,
      },
      {
        id: "coaching",
        titleKey: "nosotros.services.coaching",
        descKey: "servicios.coaching.desc",
        durationKey: "servicios.coaching.duration",
        image: "/imgs/services/gen-servicios-coaching.jpg",
        price: 160000,
      },
      {
        id: "oraculos",
        titleKey: "nosotros.services.oraculos",
        descKey: "servicios.oraculos.desc",
        durationKey: "servicios.oraculos.duration",
        image: "/imgs/services/gen-servicios-oraculos-terapia.jpg",
        price: 100000,
      },
      {
        id: "meditacion-online",
        titleKey: "servicios.meditacion-online.title",
        descKey: "servicios.meditacion-online.desc",
        durationKey: "servicios.meditacion-online.duration",
        image: "/imgs/gen-terapias-meditacion-online.jpg",
        price: 70000,
      },
    ],
  },
  {
    id: "talleres",
    titleKey: "servicios.categories.talleres",
    items: [
      {
        id: "medium",
        titleKey: "servicios.talleres.medium.title",
        descKey: "servicios.talleres.medium.desc",
        image: "/imgs/services/gen-talleres-medium.jpg",
        price: 90000,
      },
      {
        id: "reiki-usui",
        titleKey: "servicios.talleres.reiki.title",
        descKey: "servicios.talleres.reiki.desc",
        image: "/imgs/services/talleres-reiki.jpg",
        price: 150000,
      },
      {
        id: "access-taller",
        titleKey: "servicios.talleres.access.title",
        descKey: "servicios.talleres.access.desc",
        image: "/imgs/services/talleres-access.jpg",
        price: 180000,
      },
    ],
  },
  {
    id: "sanaciones",
    titleKey: "servicios.categories.sanaciones",
    items: [
      {
        id: "nina",
        titleKey: "servicios.sanaciones.nina.title",
        descKey: "servicios.sanaciones.nina.desc",
        image: "/imgs/services/gen-sanaciones-icon-nina.webp",
        price: 180000,
      },
      {
        id: "mama",
        titleKey: "servicios.sanaciones.mama.title",
        descKey: "servicios.sanaciones.mama.desc",
        image: "/imgs/services/gen-sanaciones-icon-mama.webp",
        price: 180000,
      },
      {
        id: "papa",
        titleKey: "servicios.sanaciones.papa.title",
        descKey: "servicios.sanaciones.papa.desc",
        image: "/imgs/services/gen-sanaciones-icon-papa.webp",
        price: 180000,
      },
    ],
  },
  {
    id: "lecturaAngelical",
    titleKey: "servicios.categories.lecturaAngelical",
    items: [
      {
        id: "basica",
        titleKey: "servicios.lecturaAngelical.basica.title",
        descKey: "servicios.lecturaAngelical.basica.desc",
        image: "/imgs/services/lectura-basica.jpg",
        price: 50000,
      },
      {
        id: "angelical",
        titleKey: "servicios.lecturaAngelical.angelical.title",
        descKey: "servicios.lecturaAngelical.angelical.desc",
        image: "/imgs/services/lectura-angelical.jpg",
        price: 120000,
      },
      {
        id: "oraculo",
        titleKey: "servicios.lecturaAngelical.oraculo.title",
        descKey: "servicios.lecturaAngelical.oraculo.desc",
        image: "/imgs/oraculo/zaquiel-portada.jpg",
        price: 120000,
      },
    ],
  },
  {
    id: "charlas",
    titleKey: "servicios.categories.charlas",
    items: [
      {
        id: "charla-1",
        titleKey: "servicios.charlas.0.title",
        descKey: "servicios.charlas.0.desc",
        image: "/imgs/services/gen-charlas-1.jpg",
        price: null,
      },
      {
        id: "charla-2",
        titleKey: "servicios.charlas.1.title",
        descKey: "servicios.charlas.1.desc",
        image: "/imgs/services/gen-charlas-2.jpg",
        price: null,
      },
    ],
  },
  {
    id: "retiros",
    titleKey: "servicios.categories.retiros",
    items: [
      {
        id: "retiro-1",
        titleKey: "servicios.retiros.0.title",
        descKey: "servicios.retiros.0.desc",
        image: "/imgs/services/retiros-1.jpg",
        price: null,
      },
      {
        id: "retiro-2",
        titleKey: "servicios.retiros.1.title",
        descKey: "servicios.retiros.1.desc",
        image: "/imgs/services/retiros-2.jpg",
        price: null,
      },
    ],
  },
];

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);
}

export type Rates = { usd: number; eur: number };

function formatInteger(amount: number, lang: string): string {
  return new Intl.NumberFormat(lang === "en" ? "en-US" : "es-CO", { maximumFractionDigits: 0 }).format(
    Math.round(amount)
  );
}

export function formatApprox(amount: number, code: "COP" | "USD" | "EUR", lang: string): string {
  return `${formatInteger(amount, lang)} ${code}`;
}

// El precio base siempre es en COP. En español se muestra COP y el equivalente aproximado en USD y EUR;
// en inglés se muestra USD y el equivalente en EUR y COP. Sin tasas, solo se muestra COP.
export function priceLines(
  price: number,
  lang: string,
  rates: Rates | null
): { primary: string; secondary: string | null } {
  if (lang === "en") {
    return rates
      ? {
          primary: formatUSD(price * rates.usd),
          secondary: `≈ ${formatApprox(price * rates.eur, "EUR", lang)} · ${formatApprox(price, "COP", lang)}`,
        }
      : { primary: formatCOP(price), secondary: null };
  }
  return {
    primary: formatCOP(price),
    secondary: rates
      ? `≈ ${formatApprox(price * rates.usd, "USD", lang)} · ${formatApprox(price * rates.eur, "EUR", lang)}`
      : null,
  };
}
