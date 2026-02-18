"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda S.",
    location: "Reserva, PR",
    text: "O Willian fez um trabalho incrível na minha casa! A pintura ficou perfeita, sem nenhuma falha. Super recomendo a Wills Pinturas para quem busca qualidade e profissionalismo.",
    service: "Pintura Lisa",
    rating: 5,
  },
  {
    name: "Carlos Eduardo M.",
    location: "Reserva, PR",
    text: "Contratei para fazer o grafiato da fachada da minha empresa e o resultado superou minhas expectativas. Trabalho limpo, organizado e entregue no prazo combinado.",
    service: "Grafiato",
    rating: 5,
  },
  {
    name: "Ana Paula R.",
    location: "Região de Reserva",
    text: "Excelente profissional! Fez a textura e massa corrida em toda a minha casa. O acabamento ficou impecável. Preço justo e atendimento nota 10.",
    service: "Textura e Massa Corrida",
    rating: 5,
  },
  {
    name: "Roberto L.",
    location: "Reserva, PR",
    text: "A pintura projetada que o Willian fez no meu apartamento ficou espetacular. Rápido, eficiente e muito profissional. Já indiquei para vários amigos.",
    service: "Pintura Projetada",
    rating: 5,
  },
];

export default function Testimonials() {
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
    <section id="depoimentos" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark mt-3">
            O que nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Clientes Dizem
            </span>
          </h2>
          <p className="mt-4 text-text-light max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é o nosso maior orgulho
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-bg-light rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote
                size={40}
                className="text-primary/10 absolute top-6 right-6"
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-text-dark leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-text-light text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
