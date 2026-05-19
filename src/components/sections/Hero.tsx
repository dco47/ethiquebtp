"use client";

import { FileText, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] overflow-hidden pt-20 lg:min-h-screen"
    >
      <Image
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85"
        alt="Chantier de construction avec grue"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/95 to-white/40 sm:via-white/90 sm:to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 lg:min-h-[calc(100vh-5rem)] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            Construction &amp; Rénovation
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Construire avec qualité, rénover avec{" "}
            <span className="text-gold-500">excellence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            ETHIQUE BTP accompagne vos projets de construction et de rénovation
            avec rigueur, transparence et un engagement total pour des ouvrages
            durables et conformes aux plus hauts standards.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#contact"
              variant="primary"
              icon={<FileText className="h-4 w-4" />}
            >
              Demander un devis
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              icon={<Phone className="h-4 w-4" />}
            >
              Nous contacter
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
