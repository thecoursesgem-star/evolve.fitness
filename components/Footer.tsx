import Link from "next/link";
import { Dumbbell, Facebook, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, PROGRAMS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-smoke border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-10 h-10 rounded-lg bg-volt flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-ink" strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl uppercase">
              Evolve<span className="text-volt"> Fitness</span>
            </span>
          </div>
          <p className="text-white/55 text-sm leading-relaxed mb-6">
            {SITE.city}&apos;s most energetic fitness club. Modern equipment,
            certified trainers, and a community that pushes you to evolve —
            every single day.
          </p>
          <div className="flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-volt hover:text-ink transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-volt hover:text-ink transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={SITE.phoneHref}
              aria-label="Call us"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-volt hover:text-ink transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display uppercase text-lg mb-5 tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/55 text-sm hover:text-volt transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase text-lg mb-5 tracking-wide">Programs</h4>
          <ul className="space-y-3">
            {PROGRAMS.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link href="/programs" className="text-white/55 text-sm hover:text-volt transition-colors">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase text-lg mb-5 tracking-wide">Visit Us</h4>
          <ul className="space-y-4 text-sm text-white/55">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-volt shrink-0" />
              {SITE.address}
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-volt shrink-0" />
              <a href={SITE.phoneHref} className="hover:text-volt transition-colors">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 text-volt shrink-0" />
              <span>
                Mon – Sat: 6 AM – 10 PM
                <br />
                Sunday: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {SITE.name}, {SITE.city}. All rights reserved.</p>
          <p className="uppercase tracking-widest">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
