import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "navy" | "outline";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-400 text-navy-900 hover:bg-gold-500 shadow-lg shadow-gold-400/25",
  secondary:
    "bg-white text-navy-800 border-2 border-navy-800/20 hover:border-navy-800 hover:bg-slate-50",
  navy: "bg-navy-800 text-white hover:bg-navy-700 shadow-lg shadow-navy-800/20",
  outline:
    "bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50",
};

export function Button({
  href = "#contact",
  variant = "primary",
  children,
  icon,
  showArrow = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200";

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (type === "submit") {
    return (
      <button type="submit" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
