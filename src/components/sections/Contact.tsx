"use client";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactInfo } from "@/lib/data";

const infoIcons = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  clock: Clock,
} as const;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-navy-900 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <SectionLabel className="text-gold-600 dark:text-gold-400">Collaborons ensemble</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl dark:text-white">
            Un projet en tête ? Parlons-en !
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Décrivez-nous votre projet et notre équipe vous recontactera dans les
            plus brefs délais pour une étude personnalisée.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-sm"
            >
              {submitted ? (
                <div className="rounded-xl bg-gold-400/20 p-8 text-center">
                  <p className="text-lg font-semibold text-navy-900 dark:text-white">
                    Merci ! Votre demande a bien été envoyée.
                  </p>
                  <p className="mt-2 text-navy-800 dark:text-slate-300">
                    Nous vous recontacterons très prochainement.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy-900 dark:text-slate-200">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-gold-400 dark:focus:ring-gold-400/30"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy-900 dark:text-slate-200">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-gold-400 dark:focus:ring-gold-400/30"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy-900 dark:text-slate-200">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-gold-400 dark:focus:ring-gold-400/30"
                      placeholder="+225"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="type" className="mb-2 block text-sm font-medium text-navy-900 dark:text-slate-200">
                      Type de projet
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 dark:border-white/20 dark:bg-white/10 dark:text-white dark:focus:border-gold-400 dark:focus:ring-gold-400/30"
                    >
                      <option value="construction" className="text-navy-900">
                        Construction
                      </option>
                      <option value="renovation" className="text-navy-900">
                        Rénovation
                      </option>
                      <option value="autre" className="text-navy-900">
                        Autres
                      </option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy-900 dark:text-slate-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-500 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30 dark:border-white/20 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400 dark:focus:border-gold-400 dark:focus:ring-gold-400/30"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      variant="primary"
                      icon={<Send className="h-4 w-4" />}
                      className="w-full py-4 text-base"
                    >
                      Envoyer la demande
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col justify-center gap-6 lg:col-span-5"
          >
            {contactInfo.map((item) => {
              const Icon = infoIcons[item.icon];
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-gold-500/40 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:border-gold-400/30 dark:hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-400/20">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-semibold text-navy-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
