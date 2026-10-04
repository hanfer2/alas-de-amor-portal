// Ficha del Oráculo Zaquiel. Precio, disponibilidad y envío están sin definir a propósito:
// mientras sean null la página invita a consultarlos por WhatsApp y no publica datos de oferta.
// Al confirmarlos con Liliana, basta con rellenarlos aquí.

export type OraculoProduct = {
  name: string;
  tagline: string;
  priceCOP: number | null;
  inStock: boolean | null;
  shipping: string | null;
};

export const oraculoZaquiel: OraculoProduct = {
  name: "Oráculo Zaquiel",
  tagline: "Déjate llevar por las energías de las conexiones",
  priceCOP: null,
  inStock: null,
  shipping: null,
};
