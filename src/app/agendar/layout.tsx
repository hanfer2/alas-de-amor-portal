import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agendar Cita",
  description:
    "Agenda tu sesión de terapia holística con Liliana Rodas. Reiki, Barras Access, Lectura Angelical, Meditación Guiada y más. Reserva fácil y rápida.",
};

export default function AgendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
