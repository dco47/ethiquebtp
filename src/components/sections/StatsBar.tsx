"use client";

import { Calendar, HardHat, Trophy, Users } from "lucide-react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

const iconMap = {
  trophy: Trophy,
  users: Users,
  hardhat: HardHat,
  calendar: Calendar,
} as const;

function CountUp({
  target,
  suffix,
  delay,
}: {
  target: number;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const controls = animate(0, target, {
      duration: Math.min(2.4, 1.2 + target / 80),
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, target, delay]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

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
              <p
                className="text-3xl font-extrabold text-white sm:text-4xl"
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  delay={index * 0.12}
                />
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
