"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(42) 98765-4339",
    href: "tel:+5542984045089",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(42) 98765-4339",
    href: "https://wa.me/5542984045089?text=Olá! Gostaria de solicitar um orçamento de pintura.",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "MBpinturas0329@gmail.com",
    href: "mailto:MBpinturas0329@gmail.com",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Reserva, Imbaú, Cândido de Abreu, Tibagi e região",
    href: "#",
  },
];

export default function Contact() {
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
    <section
      id="contato"
      className="py-20 sm:py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Solicite seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
              Orçamento Grátis
            </span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            Preencha o formulário abaixo e entraremos em contato rapidamente
            para elaborar seu orçamento sem compromisso
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors shrink-0">
                      <Icon size={22} className="text-accent-light" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-medium">
                        {info.label}
                      </p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5542984045089?text=Olá! Gostaria de solicitar um orçamento de pintura."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all hover:scale-[1.02] hover:shadow-lg mt-6"
            >
              <MessageCircle size={22} />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-text-dark mb-2">
                Solicitar Orçamento
              </h3>
              <p className="text-text-light text-sm mb-6">
                Preencha os dados abaixo e entraremos em contato
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
