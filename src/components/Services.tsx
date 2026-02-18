"use client";

import { useEffect, useRef, useState } from "react";
import {
  Paintbrush,
  Layers,
  SprayCan,
  Wallpaper,
  PaintBucket,
  Home,
} from "lucide-react";

const services = [
  {
    icon: SprayCan,
    title: "Pintura Projetada",
    description:
      "Acabamento moderno e uniforme com equipamento profissional de alta pressão. Ideal para grandes áreas com resultado perfeito e agilidade na execução.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Paintbrush,
    title: "Pintura Lisa",
    description:
      "Acabamento clássico e elegante para ambientes internos e externos. Pintura lisa de alta qualidade com tintas premium para maior durabilidade.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Layers,
    title: "Grafiato",
    description:
      "Textura decorativa que transforma suas paredes com efeito tridimensional sofisticado. Diversos padrões e cores disponíveis para seu projeto.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Wallpaper,
    title: "Textura",
    description:
      "Aplicação de texturas decorativas que agregam personalidade e valor ao seu imóvel. Vários estilos para combinar com cada ambiente.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: PaintBucket,
    title: "Massa Corrida",
    description:
      "Preparação e nivelamento perfeito das paredes para um acabamento impecável. Essencial para garantir a qualidade final da pintura.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Home,
    title: "Pintura Residencial e Comercial",
    description:
      "Atendemos residências, apartamentos, comércios e empresas em Reserva e região. Projetos completos do início ao fim com garantia de qualidade.",
    color: "from-teal-500 to-teal-600",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden ${
        visible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="text-xl font-bold text-text-dark mb-3">{service.title}</h3>
      <p className="text-text-light leading-relaxed text-sm">
        {service.description}
      </p>

      <div className="mt-5">
        <a
          href="#contato"
          className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-1 group/link"
        >
          Solicitar Orçamento
          <span className="group-hover/link:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark mt-3">
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Serviços
            </span>
          </h2>
          <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
            Oferecemos soluções completas em pintura para residências e
            comércios em Reserva, Imbaú, Cândido de Abreu, Tibagi e região
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
