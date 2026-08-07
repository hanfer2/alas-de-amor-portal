import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conoce a Liliana Rodas, Master Reiki, Facilitadora de Barras Access, Medium y Coach Angelical. Certificaciones profesionales y experiencia en terapias holísticas.",
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
