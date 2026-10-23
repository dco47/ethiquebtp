"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutPoints } from "@/lib/data";

export function About() {
  return (
    <section id="apropos" className="bg-slate-50 py-20 lg:py-28 dark:bg-navy-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-2xl shadow-navy-900/10">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
              alt="Maison moderne réalisée par ETHIQUE BTP"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 rounded-xl bg-gold-400 px-6 py-5 shadow-xl sm:left-6">
            <p className="text-3xl font-extrabold text-navy-900">10+</p>
            <p className="text-sm font-semibold text-navy-800">
              Années d&apos;expérience
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>À propos de nous</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl dark:text-white">
            ETHIQUE BTP, bâtir aujourd&apos;hui pour un avenir meilleur.
          </h2>
          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Forte de plus d&apos;une décennie d&apos;expérience, ETHIQUE BTP est
            votre partenaire de confiance pour tous vos projets de construction,
            rénovation et aménagement. Nous mettons l&apos;intégrité, la qualité
            et la satisfaction client au cœur de chaque réalisation.
          </p>
          <ul className="mt-8 space-y-4">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-400/20">
                  <Check className="h-4 w-4 text-gold-600" strokeWidth={3} />
                </span>
                <span className="text-slate-700 dark:text-slate-200">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="#apropos" variant="navy" showArrow>
              En savoir plus
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
