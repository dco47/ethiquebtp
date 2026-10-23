import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <a href="#accueil" className={`group inline-flex items-center ${className}`}>
      <Image
        src="/lobo-ebtp.jpeg"
        alt="ETHIQUE BTP"
        width={220}
        height={170}
        priority
        className={`h-14 w-auto object-contain transition-transform group-hover:scale-105 sm:h-16 ${
          isLight
            ? "rounded-md bg-white p-1"
            : "rounded-md dark:bg-white dark:p-1"
        }`}
      />
    </a>
  );
}
