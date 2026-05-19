import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import {
  footerLinks,
  footerServices,
  navLinks,
} from "@/lib/data";


export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              ETHIQUE BTP — votre partenaire de confiance en construction,
              rénovation et aménagement. Nous bâtissons avec intégrité et
              excellence.
            </p>
            {/* <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-colors hover:bg-gold-400 hover:text-navy-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Nos services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm transition-colors hover:text-gold-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Liens utiles
            </h4>
            <ul className="mb-8 space-y-3">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-gold-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <form className="flex overflow-hidden rounded-lg border border-white/10">
              <input
                type="email"
                placeholder="Votre email"
                className="min-w-0 flex-1 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-gold-400 px-4 text-navy-900 transition-colors hover:bg-gold-500"
                aria-label="S'inscrire"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ETHIQUE BTP — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
