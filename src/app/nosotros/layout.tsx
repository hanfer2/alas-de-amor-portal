import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  path: "/nosotros",
  title: "Quiénes somos: Liliana Rodas",
  description:
    "Conoce a Liliana Rodas, Master Reiki, facilitadora de Barras Access, medium y coach angelical en Cali, Colombia. Certificaciones y trayectoria.",
});

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
