import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ChevronDown, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { abs, business, SITE_URL, videos } from "@/lib/site";
import { getServicePage, servicePages } from "@/lib/servicePages";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  const url = `/servicos/${page.slug}`;
  const image = page.photos[0]?.image ?? business.ogImage;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: business.name,
      title: `${page.metaTitle} | ${business.name}`,
      description: page.metaDescription,
      images: [{ url: image, alt: `${page.name} - ${business.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | ${business.name}`,
      description: page.metaDescription,
      images: [image],
    },
  };
}

const whatsappLink = (service: string) =>
  `${business.whatsapp}?text=${encodeURIComponent(
    `Olá! Gostaria de um orçamento de ${service.toLowerCase()}.`
  )}`;

export default async function ServicePageView({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  const url = `${SITE_URL}/servicos/${page.slug}`;
  const related = page.related
    .map((s) => getServicePage(s))
    .filter((s) => s !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#servico`,
        name: `${page.name} em ${business.city}-${business.region}`,
        serviceType: page.name,
        description: page.intro,
        url,
        provider: { "@id": `${SITE_URL}/#empresa` },
        areaServed: business.areaServed.map((name) => ({
          "@type": "City",
          name,
          containedInPlace: { "@type": "State", name: business.regionName },
        })),
        image: page.photos.map((p) => abs(p.image)),
        offers: {
          "@type": "Offer",
          description: "Orçamento grátis e sem compromisso",
          url: whatsappLink(page.name),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${page.metaTitle} | ${business.name}`,
        description: page.metaDescription,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#servico` },
        primaryImageOfPage: abs(page.photos[0]?.image ?? business.ogImage),
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/servicos` },
          { "@type": "ListItem", position: 3, name: page.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#perguntas`,
        inLanguage: "pt-BR",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
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
        {/* Topo */}
        <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Navegação estrutural" className="text-sm text-white/70 mb-6">
              <ol className="flex flex-wrap gap-2">
                <li><Link href="/" className="hover:text-accent-light">Início</Link> /</li>
                <li><Link href="/servicos" className="hover:text-accent-light">Serviços</Link> /</li>
                <li aria-current="page" className="text-white">{page.name}</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              {page.name} em {business.city}-{business.region}{" "}
              <span className="text-accent-light">e região</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl leading-relaxed">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink(page.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-bold transition-colors"
              >
                <MessageCircle size={20} />
                Orçamento grátis no WhatsApp
              </a>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-full font-semibold transition-colors"
              >
                <Phone size={20} />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Indicado para / vantagens */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-6">
                Quando fazer {page.name.toLowerCase()}
              </h2>
              <ul className="space-y-3">
                {page.idealFor.map((item) => (
                  <li key={item} className="flex gap-3 text-text-light">
                    <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-6">
                Vantagens
              </h2>
              <ul className="space-y-3">
                {page.benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-text-light">
                    <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Como é feito */}
        <section className="py-16 sm:py-20 bg-bg-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-10 text-center">
              Como a MB Pinturas faz {page.name.toLowerCase()}
            </h2>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.steps.map((step, i) => (
                <li key={step.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <span className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-4">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-text-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Fotos de obras */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-3 text-center">
              Obras realizadas
            </h2>
            <p className="text-text-light text-center mb-10">
              Fotos reais de obras da MB Pinturas em {business.city}-{business.region} e região
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.photos.map((photo) => (
                <figure key={photo.image} className="rounded-2xl overflow-hidden shadow-lg bg-bg-light">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={photo.image}
                      alt={`${photo.caption} - ${page.name} pela MB Pinturas, ${business.city}-${business.region}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption className="p-4 text-sm font-semibold text-text-dark">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            {page.showVideos && (
              <div className="mt-12 flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
                {videos.map((video, i) => (
                  <figure key={video.file} className={`w-full ${i === 0 ? "max-w-xs" : "max-w-2xl"}`}>
                    <video
                      src={video.file}
                      poster={video.thumbnail}
                      controls
                      muted
                      playsInline
                      preload="none"
                      className={`w-full rounded-2xl shadow-lg bg-black ${i === 0 ? "aspect-[9/16]" : "aspect-video"}`}
                    />
                    <figcaption className="mt-3 text-center font-semibold text-text-dark">
                      {video.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Perguntas */}
        <section className="py-16 sm:py-20 bg-bg-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-dark mb-8 text-center">
              Perguntas sobre {page.name.toLowerCase()}
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.q}
                  open
                  className="group bg-white rounded-2xl shadow-sm border border-slate-100"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-bold text-text-dark [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base sm:text-lg">{faq.q}</h3>
                    <ChevronDown className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-6 -mt-2 text-text-light leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Área atendida + CTA */}
        <section className="py-16 sm:py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              {page.name} em {business.areaServed.join(", ").replace(/, ([^,]*)$/, " e $1")}
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Atendimento de {business.hours.daysDisplay.toLowerCase()}, das{" "}
              {business.hours.opens.replace(":00", "h")} às{" "}
              {business.hours.closes.replace(":00", "h")}. Orçamento grátis e sem
              compromisso com {business.owner}, da {business.name}.
            </p>
            <a
              href={whatsappLink(page.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-bold transition-colors"
            >
              <MessageCircle size={20} />
              Pedir orçamento de {page.name.toLowerCase()}
            </a>
          </div>
        </section>

        {/* Serviços relacionados */}
        {related.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-text-dark mb-6">
                Serviços relacionados
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicos/${s.slug}`}
                    className="block rounded-2xl border border-slate-200 p-5 hover:border-primary hover:shadow-md transition-all"
                  >
                    <span className="font-bold text-primary">{s.name} →</span>
                    <p className="text-sm text-text-light mt-2">{s.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
