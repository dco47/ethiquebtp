import { SectionLabel } from "@/components/ui/SectionLabel";

const news = [
  {
    date: "Novembre 2026",
    title: "Rénovation d'une villa à Bassam",
    excerpt:
      "Renforcement de nos procédures de contrôle pour garantir des livraisons conformes aux délais.",
  },
  {
    date: "Février 2026",
    title: "Inauguration d'un complexe résidentiel à Cocody",
    excerpt:
      "Livraison réussie d'un projet de 24 logements, témoignage de notre savoir-faire.",
  },
  {
    date: "Janvier 2026",
    title: "Partenariat matériaux durables",
    excerpt:
      "Nouveau partenariat pour des solutions éco-responsables sur nos chantiers.",
  },
] as const;

export function News() {
  return (
    <section id="actualites" className="py-20 lg:py-24 dark:bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionLabel>Actualités</SectionLabel>
        <h2 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl dark:text-white">
          Les dernières nouvelles de nos chantiers
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-100 p-6 transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-navy-900"
            >
              <time className="text-xs font-bold uppercase tracking-wider text-gold-600">
                {item.date}
              </time>
              <h3 className="mt-3 text-lg font-bold text-navy-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
