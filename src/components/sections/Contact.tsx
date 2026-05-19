"use client";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
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
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy-900/92" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <SectionLabel className="text-gold-400">Collaborons ensemble</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Un projet en tête ? Parlons-en !
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
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
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            >
              {submitted ? (
                <div className="rounded-xl bg-gold-400/20 p-8 text-center">
                  <p className="text-lg font-semibold text-white">
                    Merci ! Votre demande a bien été envoyée.
                  </p>
                  <p className="mt-2 text-slate-300">
                    Nous vous recontacterons très prochainement.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
                      placeholder="+225"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="type" className="mb-2 block text-sm font-medium text-slate-200">
                      Type de projet
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
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
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/30"
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
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold-400/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-400/20">
                    <Icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-semibold text-white">
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
