"use client";

import { Calendar, HardHat, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

const iconMap = {
  trophy: Trophy,
  users: Users,
  hardhat: HardHat,
  calendar: Calendar,
} as const;

export function StatsBar() {
  return (
    <section id="pourquoi" className="bg-navy-800 py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 lg:grid-cols-4 lg:gap-12 lg:px-8">
        {stats.map((stat, index) => {
          const Icon = iconMap[stat.icon];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold-400/15">
                <Icon className="h-8 w-8 text-gold-400" strokeWidth={1.5} />
              </div>
              <p className="text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
