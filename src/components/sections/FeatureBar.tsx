import { Award, Clock, FolderKanban, Users } from "lucide-react";
import { features } from "@/lib/data";

const iconMap = {
  projects: FolderKanban,
  team: Users,
  quality: Award,
  deadline: Clock,
} as const;

export function FeatureBar() {
  return (
    <section className="relative z-10 -mt-1 bg-navy-800 shadow-xl dark:bg-navy-900 dark:border-y dark:border-white/5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <div
              key={feature.title}
              className="flex items-center gap-4 px-6 py-6 lg:px-8 lg:py-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-400/15">
                <Icon className="h-6 w-6 text-gold-400" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-bold text-white">{feature.title}</p>
                <p className="text-sm text-slate-300">{feature.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
