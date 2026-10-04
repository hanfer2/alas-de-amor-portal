import type { Metadata } from "next";
import { buildPageMetadata, siteName } from "@/lib/site";

const metadata = buildPageMetadata({
  path: "/oraculo",
  title: "Oráculo Zaquiel: cartas de ángeles",
  description:
    "Conoce el Oráculo Zaquiel, una baraja de cartas de ángeles con mensajes y ejercicios. Pide precio, disponibilidad y envío por WhatsApp.",
  image: "/imgs/oraculo/zaquiel-portada.jpg",
});

export const generateMetadata = (): Metadata => ({
  ...metadata,
  title: { absolute: `Oráculo Zaquiel: cartas de ángeles | ${siteName}` },
});

export default function OraculoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
