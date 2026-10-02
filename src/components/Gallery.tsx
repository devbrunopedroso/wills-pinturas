"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// ============================================================
// GALERIA DE FOTOS - fotos reais das obras em /public/imagens/obra/
//
// Para adicionar uma foto: coloque o arquivo em /public/imagens/obra/
// e copie um bloco { ... } abaixo, ajustando "image", "title",
// "subtitle" e "category" (Fachadas, Interiores ou Comercial).
// Para remover, apague o bloco inteiro.
// ============================================================
type Category = "Fachadas" | "Interiores" | "Comercial";

const OBRA = "/imagens/obra";

const galleryItems: {
  title: string;
  subtitle: string;
  image: string;
  category: Category;
}[] = [
  { title: "Fachada com Faixas Decorativas", subtitle: "Textura azul com faixas brancas", image: `${OBRA}/fachada-azul-faixas-varanda.jpg`, category: "Fachadas" },
  { title: "Área Gourmet", subtitle: "Pintura amarela com faixas", image: `${OBRA}/area-gourmet-amarela-faixas.jpg`, category: "Interiores" },
  { title: "Casa Turquesa", subtitle: "Fachada e muro com gradil", image: `${OBRA}/casa-turquesa-fachada.jpg`, category: "Fachadas" },
  { title: "Loja Comercial", subtitle: "Pintura interna finalizada", image: `${OBRA}/loja-comercial-depois-iluminada.jpg`, category: "Comercial" },
  { title: "Varanda com Faixas", subtitle: "Pintura azul e acabamento", image: `${OBRA}/varanda-azul-faixas.jpg`, category: "Fachadas" },
  { title: "Cozinha", subtitle: "Teto rebaixado e paredes", image: `${OBRA}/cozinha-teto-rebaixado.jpg`, category: "Interiores" },
  { title: "Fachada Comercial", subtitle: "Pintura grafite", image: `${OBRA}/comercial-fachada-grafite.jpg`, category: "Comercial" },
  { title: "Casa Verde", subtitle: "Fachada e muro", image: `${OBRA}/casa-verde-fachada-frente.jpg`, category: "Fachadas" },
  { title: "Sala de Estar", subtitle: "Pintura verde-água", image: `${OBRA}/sala-estar-verde-agua.jpg`, category: "Interiores" },
  { title: "Casa Bege", subtitle: "Fachada residencial", image: `${OBRA}/casa-bege-fachada.jpg`, category: "Fachadas" },
  { title: "Varanda", subtitle: "Paredes brancas e forro de madeira", image: `${OBRA}/varanda-forro-madeira.jpg`, category: "Fachadas" },
  { title: "Corredor", subtitle: "Pintura lisa branca", image: `${OBRA}/corredor-paredes-brancas.jpg`, category: "Interiores" },
  { title: "Lateral com Faixas", subtitle: "Pintura amarela externa", image: `${OBRA}/lateral-amarela-faixas.jpg`, category: "Fachadas" },
  { title: "Loja Comercial - Antes", subtitle: "Preparação e proteção do piso", image: `${OBRA}/loja-comercial-antes.jpg`, category: "Comercial" },
  { title: "Loja Comercial - Depois", subtitle: "Paredes e teto finalizados", image: `${OBRA}/loja-comercial-depois.jpg`, category: "Comercial" },
  { title: "Casa Cinza", subtitle: "Fachada residencial", image: `${OBRA}/casa-cinza-fachada.jpg`, category: "Fachadas" },
  { title: "Sala", subtitle: "Paredes brancas", image: `${OBRA}/sala-paredes-brancas.jpg`, category: "Interiores" },
  { title: "Casa Verde-Limão", subtitle: "Fachada e varanda", image: `${OBRA}/casa-verde-limao-varanda.jpg`, category: "Fachadas" },
  { title: "Fachada Lateral", subtitle: "Textura azul com faixas", image: `${OBRA}/fachada-azul-faixas-lateral.jpg`, category: "Fachadas" },
  { title: "Sala Ampla", subtitle: "Paredes e forro brancos", image: `${OBRA}/sala-ampla-forro-branco.jpg`, category: "Interiores" },
  { title: "Casa Verde", subtitle: "Fachada com muro", image: `${OBRA}/casa-verde-fachada-muro.jpg`, category: "Fachadas" },
  { title: "Muro e Calçada", subtitle: "Pintura verde e calçada", image: `${OBRA}/casa-verde-muro-calcada.jpg`, category: "Fachadas" },
  { title: "Sala Integrada", subtitle: "Pintura clara", image: `${OBRA}/sala-integrada-pintura-clara.jpg`, category: "Interiores" },
  { title: "Portão com Textura", subtitle: "Grafiato no muro", image: `${OBRA}/portao-textura-grafiato.jpg`, category: "Fachadas" },
  { title: "Fachada com Gradil", subtitle: "Pintura bege", image: `${OBRA}/fachada-bege-gradil.jpg`, category: "Fachadas" },
  { title: "Casa Branca", subtitle: "Pintura externa", image: `${OBRA}/casa-branca-externa.jpg`, category: "Fachadas" },
  { title: "Casa Branca", subtitle: "Lateral finalizada", image: `${OBRA}/casa-branca-lateral.jpg`, category: "Fachadas" },
  { title: "Casa Branca", subtitle: "Fachada e muro", image: `${OBRA}/casa-branca-fachada.jpg`, category: "Fachadas" },
  { title: "Casa Azul", subtitle: "Muro e portão", image: `${OBRA}/casa-azul-portao.jpg`, category: "Fachadas" },
  { title: "Edícula", subtitle: "Pintura azul-acinzentada", image: `${OBRA}/casa-azul-acinzentada.jpg`, category: "Fachadas" },
  { title: "Lateral da Casa", subtitle: "Pintura cinza clara", image: `${OBRA}/lateral-casa-cinza.jpg`, category: "Fachadas" },
  { title: "Casa com Gradil", subtitle: "Muro e fachada cinza", image: `${OBRA}/casa-gradil-cinza.jpg`, category: "Fachadas" },
  { title: "Portão de Garagem", subtitle: "Pintura preta", image: `${OBRA}/portao-garagem-preto.jpg`, category: "Fachadas" },
  { title: "Calçada", subtitle: "Pintura de piso externo", image: `${OBRA}/calcada-pintada.jpg`, category: "Fachadas" },
  { title: "Ambiente Interno", subtitle: "Paredes brancas", image: `${OBRA}/sala-paredes-brancas-piso-cinza.jpg`, category: "Interiores" },
  { title: "Ambiente Interno", subtitle: "Pintura branca", image: `${OBRA}/ambiente-pintura-branca.jpg`, category: "Interiores" },
  { title: "Ambiente Interno", subtitle: "Acabamento finalizado", image: `${OBRA}/ambiente-piso-cinza-brilho.jpg`, category: "Interiores" },
  { title: "Banheiro", subtitle: "Teto branco", image: `${OBRA}/banheiro-teto-branco.jpg`, category: "Interiores" },
];

// Vídeos reais das obras
const videos = [
  {
    title: "Barracão - Antes e Depois",
    src: `${OBRA}/barracao-antes-e-depois.mp4`,
    poster: `${OBRA}/barracao-antes-e-depois-capa.jpg`,
    vertical: true,
  },
  {
    title: "Barracão - Pintura Finalizada",
    src: `${OBRA}/barracao-pintura-finalizada.mp4`,
    poster: `${OBRA}/barracao-pintura-finalizada-capa.jpg`,
    vertical: false,
  },
];

const filters: ("Todos" | Category)[] = ["Todos", "Fachadas", "Interiores", "Comercial"];
const PAGE_SIZE = 9;

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items =
    filter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);
  const shown = items.slice(0, limit);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = items.length;
  const step = (dir: number) =>
    setLightbox((i) => (i === null ? i : (i + dir + count) % count));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (dir) setLightbox((i) => (i === null ? i : (i + dir + count) % count));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, count]);

  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-bg-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nosso Trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark mt-3">
            Galeria de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Projetos
            </span>
          </h2>
          <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
            Fotos reais de obras realizadas pela nossa equipe em Reserva-PR e
            região
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setLimit(PAGE_SIZE);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                filter === f
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text-dark hover:bg-primary/10 border border-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {shown.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer text-left"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.subtitle} | MB Pinturas`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Overlay com título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {limit < items.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setLimit((l) => l + PAGE_SIZE)}
              className="px-8 py-3 rounded-full bg-accent hover:bg-accent-dark text-white font-semibold shadow-md transition-colors cursor-pointer"
            >
              Ver mais fotos ({items.length - limit})
            </button>
          </div>
        )}

        {/* Vídeos */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-text-dark text-center mb-10">
            Vídeos das{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Obras
            </span>
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
            {videos.map((video) => (
              <div
                key={video.src}
                className={`w-full ${video.vertical ? "max-w-xs" : "max-w-2xl"}`}
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  muted
                  playsInline
                  preload="none"
                  className={`w-full rounded-2xl shadow-lg bg-black ${
                    video.vertical ? "aspect-[9/16]" : "aspect-video"
                  }`}
                />
                <p className="mt-3 text-center font-semibold text-text-dark">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Fechar"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            aria-label="Foto anterior"
            className="absolute left-2 sm:left-6 text-white/80 hover:text-white p-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <figure
            className="relative w-full max-w-5xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.image}
              alt={`${current.title} - ${current.subtitle} | MB Pinturas`}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <figcaption className="absolute -bottom-10 inset-x-0 text-center text-white">
              <span className="font-bold">{current.title}</span>
              <span className="text-white/70"> · {current.subtitle}</span>
            </figcaption>
          </figure>
          <button
            aria-label="Próxima foto"
            className="absolute right-2 sm:right-6 text-white/80 hover:text-white p-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
