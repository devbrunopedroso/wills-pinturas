"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems, type Category } from "@/lib/gallery";
import { videos } from "@/lib/site";

const galleryVideos = videos.map((video, i) => ({
  ...video,
  // o vídeo de antes e depois é vertical (formato reel)
  vertical: i === 0,
}));

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
                  alt={`${item.title}: ${item.subtitle} - obra da MB Pinturas, Reserva-PR`}
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
            {galleryVideos.map((video) => (
              <div
                key={video.file}
                className={`w-full ${video.vertical ? "max-w-xs" : "max-w-2xl"}`}
              >
                <video
                  src={video.file}
                  poster={video.thumbnail}
                  controls
                  muted
                  playsInline
                  preload="none"
                  className={`w-full rounded-2xl shadow-lg bg-black ${
                    video.vertical ? "aspect-[9/16]" : "aspect-video"
                  }`}
                />
                <p className="mt-3 text-center font-semibold text-text-dark">
                  {video.name}
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
