import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/fx/TiltCard";
import { TRAINERS } from "@/data/site";

export default function Trainers() {
  return (
    <>
      <PageHero
        title="Trainers"
        subtitle="Certified coaches who've transformed hundreds of bodies — including, soon, yours."
        image="/images/program-personal.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading
            kicker="The Dream Team"
            title="Train with the best in Pir Mahal"
            desc="Every Evolve coach is certified, experienced, and obsessed with your progress."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {TRAINERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <TiltCard className="h-full">
                <div className="group rounded-3xl overflow-hidden bg-smoke border border-white/5 hover:border-volt/50 transition-all hover:-translate-y-2 duration-300 h-full">
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
                    <div className="absolute top-4 right-4 bg-volt text-ink rounded-full p-2">
                      <BadgeCheck className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-0 p-6 w-full">
                      <h3 className="font-display text-2xl uppercase">{t.name}</h3>
                      <p className="text-volt text-xs font-semibold uppercase tracking-widest mt-1">
                        {t.role}
                      </p>
                      <p className="text-white/55 text-sm mt-2">{t.specialty}</p>
                    </div>
                  </div>
                </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <div className="bg-smoke border border-white/10 rounded-[2.5rem] p-10 md:p-14 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl uppercase mb-4">
                Want 1-on-1 <span className="text-volt">coaching?</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Book a personal trainer for fully customized workouts, diet
                plans, and faster transformations.
              </p>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2 bg-volt text-ink font-bold uppercase tracking-wider px-9 py-4 rounded-full hover:bg-white transition-colors btn-spotlight"
              >
                View PT Packages
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
