"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-white/95 shadow-md shadow-navy-900/5 backdrop-blur-md"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-navy-800 ${
                i === 0 ? "text-navy-800" : "text-slate-600"
              }`}
            >
              {link.label}
              {i === 0 && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gold-400" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="navy" showArrow>
            Demander un devis
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-navy-800 transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-navy-800"
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
