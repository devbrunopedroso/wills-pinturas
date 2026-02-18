"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const serviceOptions = [
  "Pintura Projetada",
  "Pintura Lisa",
  "Grafiato",
  "Textura",
  "Massa Corrida",
  "Pintura Residencial",
  "Pintura Comercial",
  "Pintura de Fachada",
  "Outro",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servicos: [] as string[],
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (formData.servicos.length === 0) {
      setStatus("error");
      setErrorMsg("Selecione pelo menos um serviço desejado.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          telefone: formData.telefone,
          servico: formData.servicos.join(", "),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar mensagem");
      }

      setStatus("success");
      setFormData({ nome: "", telefone: "", servicos: [] });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Erro ao enviar mensagem"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nome */}
      <div>
        <label
          htmlFor="nome"
          className="block text-sm font-semibold text-text-dark mb-2"
        >
          Seu Nome *
        </label>
        <input
          type="text"
          id="nome"
          required
          placeholder="Digite seu nome completo"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-dark placeholder:text-gray-400 bg-white"
        />
      </div>

      {/* Telefone */}
      <div>
        <label
          htmlFor="telefone"
          className="block text-sm font-semibold text-text-dark mb-2"
        >
          Seu Telefone *
        </label>
        <input
          type="tel"
          id="telefone"
          required
          placeholder="(42) 99999-9999"
          value={formData.telefone}
          onChange={(e) =>
            setFormData({ ...formData, telefone: formatPhone(e.target.value) })
          }
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-dark placeholder:text-gray-400 bg-white"
        />
      </div>

      {/* Serviços - Múltipla Escolha */}
      <fieldset>
        <legend className="block text-sm font-semibold text-text-dark mb-3">
          Serviços Desejados * <span className="font-normal text-text-light">(selecione um ou mais)</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {serviceOptions.map((option) => {
            const isChecked = formData.servicos.includes(option);
            return (
              <label
                key={option}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                  isChecked
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    setFormData((prev) => ({
                      ...prev,
                      servicos: isChecked
                        ? prev.servicos.filter((s) => s !== option)
                        : [...prev.servicos, option],
                    }));
                  }}
                  className="sr-only"
                />
                <span
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                    isChecked
                      ? "bg-primary border-primary"
                      : "border-gray-300"
                  }`}
                >
                  {isChecked && (
                    <svg viewBox="0 0 12 12" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  )}
                </span>
                <span className={`text-sm ${isChecked ? "font-semibold text-primary" : "text-text-dark"}`}>
                  {option}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-accent hover:bg-accent-dark disabled:bg-gray-400 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={20} />
            Solicitar Orçamento Grátis
          </>
        )}
      </button>

      {/* Success */}
      {status === "success" && (
        <div className="flex items-center gap-3 bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-200">
          <CheckCircle size={20} className="shrink-0" />
          <p className="text-sm font-medium">
            Solicitação enviada com sucesso! Entraremos em contato em breve.
          </p>
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 text-red-700 p-4 rounded-xl border border-red-200">
          <AlertCircle size={20} className="shrink-0" />
          <p className="text-sm font-medium">{errorMsg}</p>
        </div>
      )}
    </form>
  );
}
