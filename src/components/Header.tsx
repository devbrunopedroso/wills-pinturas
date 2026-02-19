"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl transition-colors ${
                scrolled
                  ? "bg-primary text-white"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              W
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              MB{" "}
              <span
                className={scrolled ? "text-accent" : "text-accent-light"}
              >
                Pinturas
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-text-dark" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5542984045089"
              className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              <Phone size={16} />
              Ligar Agora
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <nav className="bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-dark hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5542984045089"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors mt-2"
            >
              <Phone size={16} />
              (42) 98765-4339
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
