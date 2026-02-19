"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ============================================================
// GALERIA DE FOTOS - Para trocar as imagens, basta alterar
// o campo "image" com o link ou caminho da foto.
//
// Exemplos:
//   image: "/fotos/pintura-projetada.jpg"       (arquivo local em /public/fotos/)
//   image: "https://exemplo.com/minha-foto.jpg"  (link externo)
//
// Para adicionar mais fotos, copie um bloco { ... } e cole abaixo.
// Para remover, apague o bloco inteiro.
// ============================================================
const galleryItems = [
  {
    title: "Pintura Projetada",
    subtitle: "Residência em Reserva-PR",
    image: "", // Coloque aqui o link ou caminho da foto
  },
  {
    title: "Grafiato Decorativo",
    subtitle: "Fachada Comercial",
    image: "",
  },
  {
    title: "Textura Elegante",
    subtitle: "Sala de Estar",
    image: "",
  },
  {
    title: "Massa Corrida",
    subtitle: "Preparação Profissional",
    image: "",
  },
  {
    title: "Pintura Lisa Premium",
    subtitle: "Quarto de Casal",
    image: "",
  },
  {
    title: "Acabamento Perfeito",
    subtitle: "Área Externa",
    image: "",
  },
];

// Cores de placeholder enquanto não tem foto
const placeholderColors = [
  "from-blue-400 to-blue-600",
  "from-purple-400 to-purple-600",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-600",
  "from-rose-400 to-pink-600",
  "from-cyan-400 to-blue-500",
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-bg-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
            Confira alguns dos nossos trabalhos realizados em Reserva-PR e
            região
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] relative">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.subtitle} | MB Pinturas`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  /* Placeholder colorido enquanto não tem foto */
                  <div
                    className={`w-full h-full bg-gradient-to-br ${placeholderColors[index % placeholderColors.length]} flex items-center justify-center`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      className="w-12 h-12 opacity-40"
                    >
                      <rect x="2" y="3" width="16" height="6" rx="1" />
                      <line x1="18" y1="6" x2="20" y2="6" />
                      <line x1="20" y1="6" x2="20" y2="14" />
                      <line x1="12" y1="14" x2="20" y2="14" />
                      <rect x="10" y="14" width="4" height="7" rx="1" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Overlay com título */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
