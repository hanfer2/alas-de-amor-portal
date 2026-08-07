import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para agendar tu terapia holística. WhatsApp, email, redes sociales. Liliana Rodas — Alas de Amor, Colombia.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
