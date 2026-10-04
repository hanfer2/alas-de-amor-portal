import type { Metadata } from "next";
import { buildPageMetadata, siteName } from "@/lib/site";

// El layout define su propio título y corta la herencia del template raíz: se añade la marca a mano.
const metadata = buildPageMetadata({
  path: "/blog",
  title: "Blog: Mensajes de Luz",
  description:
    "Guías sencillas sobre Reiki, Barras Access, sesiones en línea y oráculo angelical, escritas desde Alas de Amor en Cali, Colombia.",
});

export const generateMetadata = (): Metadata => ({
  ...metadata,
  title: { absolute: `Blog: Mensajes de Luz | ${siteName}` },
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
