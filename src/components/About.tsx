"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Award, Clock, Shield } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Qualidade Garantida",
    text: "Utilizamos materiais de primeira linha e técnicas profissionais",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    text: "Cumprimos prazos e cronogramas rigorosos em cada projeto",
  },
  {
    icon: Shield,
    title: "Garantia de Serviço",
    text: "Garantia em todos os nossos serviços de pintura",
  },
];

const checkItems = [
  "Experiência comprovada no mercado",
  "Atendimento em toda Reserva-PR e região",
  "Equipe treinada e profissional",
  "Orçamento sem compromisso",
  "Materiais de alta qualidade",
  "Limpeza completa após o serviço",
];

export default function About() {
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

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <div
            className={`relative ${visible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-light p-8 sm:p-12 text-white min-h-[400px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-tr-full" />

              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">
                  MB Pinturas
                </h3>
                <p className="text-white/80 text-lg mb-8">
                  Seu parceiro de confiança em pintura profissional na região de
                  Reserva, Paraná.
                </p>

                <div className="space-y-4">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`${visible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mt-3 mb-6">
              Por que escolher a{" "}
              <span className="text-primary">MB Pinturas</span>?
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Sou <strong>Willian da Silva</strong>, pintor profissional
              especializado em serviços de pintura residencial e comercial.
              Atendo a cidade de{" "}
              <strong>Reserva, Paraná</strong> e região, incluindo{" "}
              <strong>Imbaú</strong>, <strong>Cândido de Abreu</strong> e{" "}
              <strong>Tibagi</strong>,
              sempre com compromisso, qualidade e respeito ao cliente.
            </p>
            <p className="text-text-light leading-relaxed mb-8">
              Na <strong>MB Pinturas</strong>, cada projeto é tratado com
              dedicação e atenção aos detalhes. Trabalhamos com{" "}
              <strong>pintura projetada, pintura lisa, grafiato, textura,
              massa corrida</strong> e muito mais, sempre buscando superar as
              expectativas dos nossos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-accent shrink-0" />
                  <span className="text-sm text-text-dark">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Fale Conosco
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
