import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Terapias holísticas: Reiki, Barras Access, Lectura Angelical, Alineación de Chakras, Meditación Guiada, Sanaciones y más. Precios en COP. Agenda tu cita con Liliana Rodas.",
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
