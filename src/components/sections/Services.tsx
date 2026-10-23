"use client";

import {
  ArrowRight,
  Building2,
  Hammer,
  HardHat,
  Paintbrush,
  Sofa,
} from "lucide-react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

const iconMap = {
  building: Building2,
  renovation: Hammer,
  civil: HardHat,
  interior: Sofa,
  paint: Paintbrush,
} as const;

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 dark:bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Nos services</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl dark:text-white">
              Des solutions complètes pour tous vos{" "}
              <span className="text-gold-500">projets de bâtiment.</span>
            </h2>
          </div>
          <Button
            href="#services"
            variant="secondary"
            showArrow
            className="shrink-0 self-start lg:self-auto"
          >
            Voir tous les services
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/30 hover:shadow-xl hover:shadow-navy-900/5 dark:border-white/10 dark:bg-navy-900 dark:hover:border-gold-400/40"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-400/15 transition-colors group-hover:bg-gold-400/25">
                  <Icon className="h-7 w-7 text-gold-600" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-800 transition-colors group-hover:text-gold-600 dark:text-slate-200 dark:group-hover:text-gold-400"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
