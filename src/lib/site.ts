// ============================================================
// DADOS DO NEGÓCIO - fonte única usada pelo SEO (metadata, JSON-LD,
// sitemap, robots, llms.txt). Altere aqui e tudo se atualiza.
//
// Domínio: defina NEXT_PUBLIC_SITE_URL (ex: https://mbpinturas.com.br)
// nas variáveis de ambiente da hospedagem.
// ============================================================

import { servicePages } from "./servicePages";

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

export const business = {
  name: "MB Pinturas",
  owner: "Willian da Silva",
  jobTitle: "Pintor profissional",
  headline: "Pintor Profissional em Reserva-PR e Região",
  description:
    "MB Pinturas é uma empresa de pintura residencial e comercial de Willian da Silva, pintor profissional em Reserva, Paraná. Atende Reserva, Imbaú, Cândido de Abreu, Tibagi e região com pintura projetada, pintura lisa, grafiato, textura e massa corrida. Orçamento grátis pelo WhatsApp.",
  phone: "+5542984045089",
  phoneDisplay: "(42) 98404-5089",
  whatsapp: "https://wa.me/5542984045089",
  email: "MBpinturas0329@gmail.com",
  instagram: "https://www.instagram.com/mbpin.turas",
  instagramHandle: "@mbpin.turas",
  city: "Reserva",
  region: "PR",
  regionName: "Paraná",
  country: "BR",
  geo: { latitude: -24.6508, longitude: -50.8467 },
  areaServed: ["Reserva", "Imbaú", "Cândido de Abreu", "Tibagi"],
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysDisplay: "Segunda a sábado",
    opens: "07:00",
    closes: "18:00",
  },
  ogImage: "/imagens/obra/fachada-azul-faixas-varanda.jpg",
};

export const services = servicePages.map((s) => ({
  name: s.name,
  description: s.summary,
  url: `${SITE_URL}/servicos/${s.slug}`,
}));

// Perguntas frequentes: exibidas no site (seção FAQ) e no JSON-LD FAQPage.
// O Google exige que o conteúdo do schema esteja visível na página.
export const faqs = [
  {
    q: "Qual pintor atende em Reserva-PR?",
    a: "A MB Pinturas, do pintor profissional Willian da Silva, atende Reserva-PR com pintura residencial e comercial: pintura projetada, pintura lisa, grafiato, textura e massa corrida. O orçamento é grátis pelo WhatsApp (42) 98404-5089.",
  },
  {
    q: "Quais cidades a MB Pinturas atende?",
    a: "Reserva, Imbaú, Cândido de Abreu, Tibagi e cidades da região, no Paraná.",
  },
  {
    q: "Quais serviços de pintura a MB Pinturas faz?",
    a: "Pintura projetada, pintura lisa, grafiato, textura, massa corrida e pintura completa de residências e comércios — interna e externa, incluindo fachadas, muros, portões, salas comerciais e barracões.",
  },
  {
    q: "Como pedir um orçamento de pintura?",
    a: "Envie uma mensagem pelo WhatsApp (42) 98404-5089, pelo e-mail MBpinturas0329@gmail.com ou pelo formulário de contato do site. O orçamento é gratuito e sem compromisso.",
  },
  {
    q: "A MB Pinturas faz pintura de fachada e de loja comercial?",
    a: "Sim. A galeria do site mostra fachadas residenciais com textura e faixas decorativas, fachadas comerciais, uma loja comercial (antes e depois) e a pintura completa de um barracão.",
  },
  {
    q: "Qual o horário de atendimento?",
    a: "Segunda a sábado, das 7h às 18h.",
  },
  {
    q: "Qual a diferença entre grafiato e textura?",
    a: "O grafiato é um revestimento riscado com desempenadeira, que cria sulcos e um efeito rústico, muito usado em fachadas e muros. A textura é mais ampla: pode ser rolada, batida ou projetada, com acabamentos variados para ambientes internos e externos.",
  },
  {
    q: "Para que serve a massa corrida?",
    a: "A massa corrida nivela e corrige imperfeições da parede antes da pintura, deixando a superfície lisa para um acabamento uniforme. É indicada principalmente para ambientes internos.",
  },
];

export const videos = [
  {
    name: "Barracão em Reserva-PR - antes e depois da pintura",
    description:
      "Vídeo real de obra da MB Pinturas mostrando as paredes de um barracão antes e depois da pintura.",
    file: "/imagens/obra/barracao-antes-e-depois.mp4",
    thumbnail: "/imagens/obra/barracao-antes-e-depois-capa.jpg",
    duration: "PT59S",
    uploadDate: "2026-09-30",
  },
  {
    name: "Barracão com pintura finalizada - MB Pinturas",
    description:
      "Vídeo real de obra mostrando o barracão com as paredes pintadas pela MB Pinturas.",
    file: "/imagens/obra/barracao-pintura-finalizada.mp4",
    thumbnail: "/imagens/obra/barracao-pintura-finalizada-capa.jpg",
    duration: "PT28S",
    uploadDate: "2026-09-30",
  },
];

export const abs = (path: string) => `${SITE_URL}${path}`;
