import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, CalendarDays } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { PROGRAMS, SCHEDULE, SITE } from "@/data/site";

export default function Programs() {
  return (
    <>
      <PageHero
        title="Programs"
        subtitle="Six battle-tested training tracks. Pick your goal — we'll handle the plan."
        image="/images/gym-wide.jpg"
      />

      {/* Program cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-8">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.12}>
              <div className="group bg-smoke border border-white/5 rounded-[2rem] overflow-hidden hover:border-volt/40 transition-colors h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-smoke via-transparent to-transparent" />
                  <span className="absolute top-5 left-5 bg-volt text-ink text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    Program {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl uppercase mb-3 group-hover:text-volt transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-2.5 mb-7">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-white/75">
                        <Check className="w-4 h-4 text-volt shrink-0" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${SITE.whatsapp}?text=${encodeURIComponent(`Assalam-o-Alaikum! I want to join the ${p.title} program at Evolve Fitness.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 text-volt font-bold uppercase tracking-wider text-sm"
                  >
                    Ask about this program
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Weekly schedule */}
      <section className="py-24 bg-smoke">
        <div className="max-w-5xl mx-auto px-5">
          <SectionHeading
            kicker="Weekly Rhythm"
            title="Training schedule"
            desc="A sample week at Evolve. Your personal plan is customized after your fitness assessment."
          />
          <Reveal delay={0.15} className="mt-12">
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <div className="bg-ash px-6 py-4 flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-volt" />
                <p className="font-display uppercase tracking-wide text-lg">This week at Evolve</p>
              </div>
              <div className="divide-y divide-white/5">
                {SCHEDULE.map((s, i) => (
                  <div
                    key={s.day}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-5 transition-colors hover:bg-white/[0.03] ${
                      i % 2 === 0 ? "bg-white/[0.015]" : ""
                    }`}
                  >
                    <p className="font-display uppercase text-lg text-volt">{s.day}</p>
                    <p className="text-white/75 text-sm">{s.focus}</p>
                    <p className="text-white/45 text-sm">{s.group}</p>
                  </div>
                ))}
                <div className="px-6 py-5 bg-volt/5">
                  <p className="text-white/50 text-sm">
                    <span className="font-display uppercase text-white/80">Sunday</span> — Rest & recovery. Muscles grow while you rest.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="text-center mt-12">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-volt text-ink font-bold uppercase tracking-wider px-9 py-4 rounded-full hover:bg-white transition-colors"
            >
              See Membership Plans <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
