import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business, SITE_URL } from "@/lib/site";
import { servicePages } from "@/lib/servicePages";

const description = `Todos os serviços de pintura da MB Pinturas em ${business.areaServed.join(", ")} e região: fachada, grafiato, textura, pintura projetada, pintura lisa, massa corrida, pintura interna, residencial e comercial.`;

export const metadata: Metadata = {
  title: "Serviços de Pintura em Reserva-PR",
  description,
  alternates: { canonical: "/servicos" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/servicos",
    siteName: business.name,
    title: `Serviços de Pintura em Reserva-PR | ${business.name}`,
    description,
    images: [{ url: business.ogImage }],
  },
};

export default function ServicosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços de pintura da MB Pinturas",
    itemListElement: servicePages.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE_URL}/servicos/${s.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Serviços de pintura em {business.city}-{business.region}{" "}
              <span className="text-accent-light">e região</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-3xl leading-relaxed">
              {description} Orçamento grátis pelo WhatsApp {business.phoneDisplay}.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-bg-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={s.photos[0].image}
                    alt={`${s.name} - obra da MB Pinturas em Reserva-PR`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-text-dark">{s.name}</h2>
                  <p className="text-sm text-text-light mt-2 leading-relaxed">{s.summary}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-primary group-hover:text-accent">
                    Ver detalhes e fotos →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
