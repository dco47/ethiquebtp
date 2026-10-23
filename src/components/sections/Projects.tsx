"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="realisations" className="bg-slate-50 py-20 lg:py-28 dark:bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Nos réalisations</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl dark:text-white">
              Quelques réalisations qui parlent de notre{" "}
              <span className="text-gold-500">savoir-faire.</span>
            </h2>
          </div>
          <Button
            href="#realisations"
            variant="secondary"
            showArrow
            className="shrink-0 self-start lg:self-auto"
          >
            Voir toutes nos réalisations
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-navy-800 dark:shadow-black/20"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  {project.category}
                </span>
                <h3 className="mt-1 font-bold text-navy-900 dark:text-white">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
