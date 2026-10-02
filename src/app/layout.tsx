import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { business, SITE_URL, videos } from "@/lib/site";
import { siteJsonLd } from "@/lib/jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = `${business.name} | ${business.headline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  applicationName: business.name,
  keywords: [
    "pintor reserva paraná",
    "pintor em reserva pr",
    "pintura residencial reserva pr",
    "pintura comercial reserva",
    "grafiato reserva paraná",
    "textura reserva pr",
    "massa corrida reserva",
    "pintura projetada reserva pr",
    "pintura lisa reserva paraná",
    "pintor profissional reserva",
    "serviço de pintura reserva pr",
    "pintura de fachada reserva pr",
    "pintura de barracão",
    "pintor imbaú",
    "pintor cândido de abreu",
    "pintor tibagi",
    "pintura imbaú paraná",
    "pintura tibagi pr",
    "pintura cândido de abreu pr",
    "MB pinturas",
    "willian da silva pintor",
    "pintura predial reserva",
    "pintura interna reserva pr",
    "pintura externa reserva paraná",
  ],
  authors: [{ name: `${business.name} - ${business.owner}`, url: SITE_URL }],
  creator: business.name,
  publisher: business.name,
  category: "Serviços de pintura",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: business.name,
    title,
    description: business.description,
    images: [
      {
        url: business.ogImage,
        width: 1080,
        height: 936,
        alt: "Fachada com textura azul e faixas brancas pintada pela MB Pinturas em Reserva-PR",
      },
    ],
    videos: videos.map((v) => ({ url: v.file })),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: business.description,
    images: [business.ogImage],
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
  },
  other: {
    "geo.region": "BR-PR",
    "geo.placename": "Reserva, Paraná",
    "geo.position": `${business.geo.latitude};${business.geo.longitude}`,
    ICBM: `${business.geo.latitude}, ${business.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
