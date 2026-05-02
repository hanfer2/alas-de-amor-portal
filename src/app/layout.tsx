import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alas de Amor | Holistic Therapy - Reiki, Access Bars, Angelic Reading",
    template: "%s | Alas de Amor",
  },
  description:
    "Alas de Amor - Holistic Therapy with Liliana Rodas. Master Reiki, Access Bars Facilitator, Medium and Angelic Coach.",
  keywords: [
    "reiki colombia",
    "holistic therapy",
    "access bars",
    "angelic reading",
    "chakra alignment",
    "guided meditation",
    "medium",
    "spiritual coach",
    "facelight energetic",
    "oracles",
    "Liliana Rodas",
    "Alas de Amor",
    "energy healing",
    "alternative therapies colombia",
  ],
  authors: [{ name: "Liliana Rodas - Alas de Amor" }],
  creator: "Alas de Amor",
  publisher: "Alas de Amor",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://alas-de-amor.vercel.app"
  ),
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    title: "Alas de Amor | Holistic Therapy",
    description:
      "Reiki, Access Bars, Angelic Reading, Chakra Alignment and more holistic therapies with Liliana Rodas.",
    siteName: "Alas de Amor",
    images: [
      {
        url: "/imgs/team/liliana-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Alas de Amor - Holistic Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alas de Amor | Holistic Therapy",
    description:
      "Reiki, Access Bars, Angelic Reading, Chakra Alignment and more.",
    images: ["/imgs/image7.jpeg"],
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
    icon: "/favicon.ico",
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
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
