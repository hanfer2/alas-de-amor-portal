import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  path: "/servicios",
  title: "Servicios de terapia holística en Cali",
  description:
    "Reiki, Barras Access, lectura angelical, alineación de chakras, meditación guiada, sanaciones y talleres con Liliana Rodas en Cali. Precios en COP.",
});

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
