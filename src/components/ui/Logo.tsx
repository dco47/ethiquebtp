import { Home } from "lucide-react";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <a href="#accueil" className={`group flex items-center gap-3 ${className}`}>
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-lg transition-transform group-hover:scale-105 ${
          isLight ? "bg-gold-400" : "bg-navy-800"
        }`}
      >
        <Home
          className={`h-6 w-6 ${isLight ? "text-navy-900" : "text-gold-400"}`}
          strokeWidth={2.5}
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`text-lg font-bold tracking-tight ${
            isLight ? "text-white" : "text-navy-900"
          }`}
        >
          ETHIQUE BTP
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-widest ${
            isLight ? "text-gold-400" : "text-slate-500"
          }`}
        >
          l'allié parfait
        </span>
      </div>
    </a>
  );
}
