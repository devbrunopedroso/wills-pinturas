import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MB Pinturas | Pintor Profissional em Reserva-PR e Região",
  description:
    "Serviços profissionais de pintura em Reserva, Imbaú, Cândido de Abreu, Tibagi e região. Pintura projetada, pintura lisa, grafiato, textura, massa corrida e mais. Orçamento grátis!",
  keywords: [
    "pintor reserva paraná",
    "pintura residencial reserva pr",
    "pintura comercial reserva",
    "grafiato reserva paraná",
    "textura reserva pr",
    "massa corrida reserva",
    "pintura projetada reserva pr",
    "pintura lisa reserva paraná",
    "pintor profissional reserva",
    "serviço de pintura reserva pr",
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
  authors: [{ name: "MB Pinturas - Willian da Silva" }],
  creator: "MB Pinturas",
  publisher: "MB Pinturas",
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
    siteName: "MB Pinturas",
    title: "MB Pinturas | Pintor Profissional em Reserva-PR e Região",
    description:
      "Serviços profissionais de pintura em Reserva, Imbaú, Cândido de Abreu, Tibagi e região. Pintura projetada, grafiato, textura, massa corrida. Orçamento grátis!",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MB Pinturas",
  description:
    "Serviços profissionais de pintura em Reserva, Imbaú, Cândido de Abreu, Tibagi e região. Pintura projetada, pintura lisa, grafiato, textura, massa corrida.",
  telephone: "+5542984045089",
  email: "MBpinturas0329@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Reserva",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -24.6508,
      longitude: -50.8467,
    },
    geoRadius: "50000",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Pintura",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pintura Projetada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pintura Lisa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Grafiato",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Textura",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Massa Corrida",
        },
      },
    ],
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
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Reserva, Paraná" />
        <meta name="geo.position" content="-24.6508;-50.8467" />
        <meta name="ICBM" content="-24.6508, -50.8467" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
