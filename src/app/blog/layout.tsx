import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  path: "/blog",
  title: "Blog: Mensajes de Luz",
  description:
    "Reflexiones sobre terapias holísticas, Reiki, Barras Access, meditación y crecimiento espiritual por Liliana Rodas.",
  noindex: true,
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
