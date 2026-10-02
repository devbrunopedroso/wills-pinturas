import { abs, business, faqs, services, SITE_URL, videos } from "./site";
import { galleryItems } from "./gallery";

// Grafo Schema.org (JSON-LD) com entidades ligadas por @id.
// Buscadores e assistentes de IA usam isso para entender quem é a empresa,
// o que faz, onde atende e como contatar.
const ids = {
  business: `${SITE_URL}/#empresa`,
  owner: `${SITE_URL}/#willian-da-silva`,
  website: `${SITE_URL}/#website`,
  webpage: `${SITE_URL}/#webpage`,
  faq: `${SITE_URL}/#perguntas`,
  gallery: `${SITE_URL}/#galeria`,
};

const cities = business.areaServed.map((name) => ({
  "@type": "City",
  name,
  containedInPlace: { "@type": "State", name: business.regionName },
}));

// Entidades globais (layout): empresa, responsável e site.
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HousePainter", "LocalBusiness"],
      "@id": ids.business,
      name: business.name,
      alternateName: ["MB Pinturas Reserva", "Willian Pintor Reserva-PR"],
      description: business.description,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: abs("/logo.png"),
        width: 512,
        height: 512,
      },
      image: [abs(business.ogImage), ...galleryItems.slice(1, 6).map((i) => abs(i.image))],
      telephone: business.phone,
      email: business.email,
      sameAs: [business.instagram],
      founder: { "@id": ids.owner },
      employee: { "@id": ids.owner },
      address: {
        "@type": "PostalAddress",
        addressLocality: business.city,
        addressRegion: business.region,
        addressCountry: business.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      areaServed: cities,
      knowsLanguage: "pt-BR",
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: business.hours.days,
        opens: business.hours.opens,
        closes: business.hours.closes,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Orçamentos",
        telephone: business.phone,
        email: business.email,
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
      potentialAction: {
        "@type": "CommunicateAction",
        name: "Pedir orçamento pelo WhatsApp",
        target: business.whatsapp,
      },
      knowsAbout: [
        ...services.map((s) => s.name),
        "Pintura de fachada",
        "Pintura interna",
        "Pintura externa",
        "Pintura de muro",
        "Pintura de barracão",
        "Pintura de loja comercial",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Pintura",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.description,
            url: s.url,
            serviceType: s.name,
            provider: { "@id": ids.business },
            areaServed: cities,
          },
        })),
      },
      subjectOf: videos.map((v) => ({ "@id": abs(v.file) })),
    },
    {
      "@type": "Person",
      "@id": ids.owner,
      name: business.owner,
      jobTitle: business.jobTitle,
      worksFor: { "@id": ids.business },
      homeLocation: {
        "@type": "City",
        name: business.city,
        containedInPlace: { "@type": "State", name: business.regionName },
      },
      sameAs: [business.instagram],
    },
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: SITE_URL,
      name: business.name,
      inLanguage: "pt-BR",
      publisher: { "@id": ids.business },
    },
  ],
};

// Entidades da página inicial: página, FAQ, galeria e vídeos.
export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": ids.webpage,
      url: SITE_URL,
      name: `${business.name} | ${business.headline}`,
      description: business.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": ids.website },
      about: { "@id": ids.business },
      primaryImageOfPage: abs(business.ogImage),
      hasPart: [{ "@id": ids.faq }, { "@id": ids.gallery }],
    },
    {
      "@type": "FAQPage",
      "@id": ids.faq,
      inLanguage: "pt-BR",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "ImageGallery",
      "@id": ids.gallery,
      name: "Galeria de obras da MB Pinturas",
      description:
        "Fotos reais de obras de pintura residencial e comercial realizadas pela MB Pinturas em Reserva-PR e região.",
      author: { "@id": ids.business },
      image: galleryItems.map((item) => ({
        "@type": "ImageObject",
        contentUrl: abs(item.image),
        name: item.title,
        caption: `${item.title}: ${item.subtitle}`,
        creator: { "@id": ids.business },
        copyrightHolder: { "@id": ids.business },
      })),
    },
    ...videos.map((v) => ({
      "@type": "VideoObject",
      "@id": abs(v.file),
      name: v.name,
      description: v.description,
      contentUrl: abs(v.file),
      thumbnailUrl: abs(v.thumbnail),
      uploadDate: v.uploadDate,
      duration: v.duration,
      inLanguage: "pt-BR",
      publisher: { "@id": ids.business },
    })),
  ],
};
