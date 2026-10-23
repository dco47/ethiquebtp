"use client";

import { FileText, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-[90vh] overflow-hidden bg-navy-950 pt-20 lg:min-h-screen"
    >
      <Image
        src="/hero-ethique.jpeg"
        alt="L'équipe ETHIQUE BTP sur un chantier"
        fill
        priority
        className="object-contain object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-950/10" />
      <div className="absolute inset-0 bg-linear-to-r from-navy-950/80 via-navy-900/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950/55 via-transparent to-navy-950/25" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 lg:min-h-[calc(100vh-5rem)] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            <span className="h-px w-8 bg-gold-400" aria-hidden />
            Construction &amp; Rénovation
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Construire avec qualité, rénover avec{" "}
            <span className="text-gold-400">excellence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
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
              variant="outline"
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
