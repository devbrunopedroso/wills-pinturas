import { logoDataUri } from "@/lib/logo";

// Logo completo: ícone + nome. "light" = texto branco (fundo escuro).
export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const light = variant === "light";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoDataUri}
        alt=""
        width={44}
        height={44}
        className="w-11 h-11 shrink-0 drop-shadow-sm"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-xl font-extrabold tracking-tight transition-colors ${
            light ? "text-white" : "text-primary"
          }`}
        >
          MB{" "}
          <span className={light ? "text-accent-light" : "text-accent"}>
            Pinturas
          </span>
        </span>
        <span
          className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] mt-1 transition-colors ${
            light ? "text-white/70" : "text-text-light"
          }`}
        >
          Reserva · PR
        </span>
      </span>
    </span>
  );
}
