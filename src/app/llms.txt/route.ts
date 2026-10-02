import { abs, business, faqs, services, SITE_URL, videos } from "@/lib/site";
import { galleryItems } from "@/lib/gallery";
import { servicePages } from "@/lib/servicePages";

// /llms.txt - resumo do negócio em Markdown para assistentes de IA
// (padrão https://llmstxt.org). Gerado a partir de src/lib/site.ts.
export const dynamic = "force-static";

export function GET() {
  // FAQ da home + FAQs de cada serviço, sem perguntas repetidas
  const allFaqs = [...faqs, ...servicePages.flatMap((p) => p.faqs)].filter(
    (f, i, list) => list.findIndex((x) => x.q === f.q) === i
  );

  const body = `# ${business.name}

> ${business.description}

## Resumo

- Empresa: ${business.name}
- Responsável: ${business.owner}, ${business.jobTitle.toLowerCase()}
- Sede: ${business.city}, ${business.regionName} (${business.region}), Brasil
- Cidades atendidas: ${business.areaServed.join(", ")} e região
- Atendimento: ${business.hours.daysDisplay}, das ${business.hours.opens} às ${business.hours.closes}
- Orçamento: grátis e sem compromisso
- WhatsApp / telefone: ${business.phoneDisplay} (${business.whatsapp})
- E-mail: ${business.email}
- Instagram: ${business.instagramHandle} (${business.instagram})
- Site: ${SITE_URL}

## Serviços

${services.map((s) => `- [${s.name}](${s.url}): ${s.description}`).join("\n")}

## Perguntas frequentes

${allFaqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Obras realizadas (fotos reais)

${galleryItems.map((i) => `- [${i.title} - ${i.subtitle}](${abs(i.image)}) (${i.category})`).join("\n")}

## Vídeos de obras

${videos.map((v) => `- [${v.name}](${abs(v.file)}): ${v.description}`).join("\n")}

## Links

- [Página inicial](${SITE_URL}/): serviços, galeria, perguntas frequentes e contato
- [Todos os serviços](${SITE_URL}/servicos)
- [Pedir orçamento pelo WhatsApp](${business.whatsapp})
- [Instagram com mais obras](${business.instagram})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
