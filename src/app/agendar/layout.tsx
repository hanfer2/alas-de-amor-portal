import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  path: "/agendar",
  title: "Agendar cita",
  description:
    "Agenda tu sesión de terapia holística con Liliana Rodas en Cali: Reiki, Barras Access, lectura angelical, meditación guiada y más. Confirmación por WhatsApp.",
});

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
