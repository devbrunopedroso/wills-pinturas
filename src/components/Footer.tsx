import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-bold text-xl text-white">
                W
              </div>
              <span className="text-xl font-bold">
                MB <span className="text-accent">Pinturas</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Serviços profissionais de pintura em Reserva, Imbaú, Cândido
              de Abreu, Tibagi e região. Qualidade, pontualidade e compromisso
              em cada projeto.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Pintura Projetada
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Pintura Lisa
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Grafiato
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Textura
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Massa Corrida
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors">
                  Pintura Residencial e Comercial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href="tel:+5542984045089"
                  className="hover:text-accent transition-colors"
                >
                  (42) 98765-4339
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:MBpinturas0329@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  MBpinturas0329@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Reserva, Imbaú, Cândido de Abreu, Tibagi e região</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO rich text */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-white/30 text-xs text-center leading-relaxed max-w-3xl mx-auto">
            MB Pinturas - Pintor Profissional em Reserva, Paraná. Serviços
            de pintura projetada, pintura lisa, grafiato, textura, massa
            corrida, pintura residencial e comercial. Atendemos Reserva-PR e
            Imbaú, Cândido de Abreu, Tibagi e toda a região.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} MB Pinturas - Willian da Silva. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
