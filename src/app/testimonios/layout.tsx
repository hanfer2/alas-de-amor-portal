import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  path: "/testimonios",
  title: "Testimonios",
  description:
    "Experiencias de personas que han tomado terapias holísticas con Liliana Rodas en Alas de Amor.",
  noindex: true,
});

export default function TestimoniosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
