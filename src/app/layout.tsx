import type { Metadata } from "next";
import { Inter, Playball } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import StructuredData from "@/components/StructuredData";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Misma letra cursiva del logo: se usa en todos los títulos.
const playball = Playball({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alas de Amor · Terapias holísticas en Cali con Liliana Rodas",
    template: "%s | Alas de Amor",
  },
  description:
    "Reiki, Barras Access, lectura angelical, meditación guiada y más con Liliana Rodas, Master Reiki y terapeuta holística en Cali, Colombia. Agenda tu sesión.",
  keywords: [
    "reiki cali",
    "terapia holística cali",
    "barras access cali",
    "lectura angelical",
    "alineación de chakras",
    "meditación guiada",
    "medium",
    "coach espiritual",
    "facelight energético",
    "oráculos",
    "Liliana Rodas",
    "Alas de Amor",
    "sanación energética",
    "terapias alternativas colombia",
  ],
  authors: [{ name: "Liliana Rodas - Alas de Amor" }],
  creator: "Alas de Amor",
  publisher: "Alas de Amor",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: { es: "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    title: "Alas de Amor · Terapias holísticas en Cali con Liliana Rodas",
    description:
      "Reiki, Barras Access, lectura angelical, alineación de chakras y más terapias holísticas con Liliana Rodas en Cali, Colombia.",
    siteName: "Alas de Amor",
    images: [
      {
        url: "/imgs/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Alas de Amor, terapias holísticas con Liliana Rodas en Cali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alas de Amor · Terapias holísticas en Cali",
    description:
      "Reiki, Barras Access, lectura angelical, alineación de chakras y más con Liliana Rodas.",
    images: ["/imgs/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/imgs/brand/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/imgs/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${playball.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
