import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

// Perguntas frequentes - edite em src/lib/site.ts.
// Componente de servidor com <details>: o texto fica no HTML mesmo sem
// JavaScript, o que ajuda buscadores e assistentes de IA a lerem as respostas.
export default function FAQ() {
  return (
    <section id="perguntas" className="py-20 sm:py-28 bg-bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-dark mt-3">
            Perguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              Frequentes
            </span>
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Tudo o que você precisa saber sobre os serviços de pintura da MB
            Pinturas em Reserva-PR e região
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              open={index === 0}
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-bold text-text-dark [&::-webkit-details-marker]:hidden">
                <h3 className="text-base sm:text-lg">{faq.q}</h3>
                <ChevronDown className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 -mt-2 text-text-light leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
