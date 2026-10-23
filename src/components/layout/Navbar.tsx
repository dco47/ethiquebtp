"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md shadow-navy-900/5 backdrop-blur-md dark:bg-navy-900/95 dark:shadow-black/30"
          : "bg-white dark:bg-navy-950"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-1 xl:flex"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(i)}
              onFocus={() => setHoveredIndex(i)}
              onBlur={() => setHoveredIndex(null)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-navy-800 dark:hover:text-white ${
                i === activeIndex
                  ? "text-navy-800 dark:text-white"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.label}
              {i === activeIndex && (
                <motion.span
                  layoutId="navbar-active-underline"
                  transition={{ type: "spring", stiffness: 500, damping: 38 }}
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gold-400"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button href="#contact" variant="navy" showArrow>
              Demander un devis
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-navy-800 transition-colors hover:bg-slate-100 lg:hidden dark:text-white dark:hover:bg-white/10"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-6 lg:hidden dark:border-white/10 dark:bg-navy-950">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-navy-800 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <Button href="#contact" variant="navy" showArrow className="w-full">
              Demander un devis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
