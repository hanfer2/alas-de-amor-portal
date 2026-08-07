import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "Testimonios reales de pacientes y clientes de las terapias holísticas de Liliana Rodas. Reiki, Barras Access, Lectura Angelical y más.",
};

export default function TestimoniosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
