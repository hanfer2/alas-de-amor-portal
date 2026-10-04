import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  path: "/contacto",
  title: "Contacto",
  description:
    "Escríbele a Alas de Amor por WhatsApp, correo o redes sociales. Terapias holísticas con Liliana Rodas en Cali, Valle del Cauca, Colombia.",
});

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
