"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light animate-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Paint drip decoration */}
      <div className="absolute top-0 left-[10%] w-3 h-32 bg-accent/30 rounded-b-full" />
      <div className="absolute top-0 left-[25%] w-2 h-20 bg-accent/20 rounded-b-full" />
      <div className="absolute top-0 right-[15%] w-4 h-40 bg-accent/25 rounded-b-full" />
      <div className="absolute top-0 right-[30%] w-2 h-24 bg-accent/15 rounded-b-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-accent/20 text-accent-light px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-accent/30">
            Pintor Profissional em Reserva-PR
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-fade-in-up animation-delay-200">
          Transformamos Paredes em{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
            Obras de Arte
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
          Especialistas em <strong>pintura projetada</strong>,{" "}
          <strong>grafiato</strong>, <strong>textura</strong>,{" "}
          <strong>massa corrida</strong> e <strong>pintura lisa</strong>.
          Atendemos Reserva, Imbaú, Cândido de Abreu, Tibagi e toda a
          região com qualidade e excelência.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <a
            href="#contato"
            className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/25 animate-pulse-glow"
          >
            Solicitar Orçamento Grátis
          </a>
          <a
            href="#servicos"
            className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10 backdrop-blur-sm"
          >
            Nossos Serviços
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-float"
        aria-label="Rolar para serviços"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
