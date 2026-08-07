import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Blog de Alas de Amor — artículos sobre terapias holísticas, Reiki, Barras Access, meditación, sanación energética y crecimiento espiritual por Liliana Rodas.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
