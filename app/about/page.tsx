import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, HeartHandshake, Trophy } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/data/site";

export default function About() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="How a small gym in Pir Mahal became the city's home for serious fitness."
        image="/images/program-group.jpg"
      />

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              align="left"
              kicker="Who We Are"
              title="Built by lifters, for everyone"
            />
            <Reveal delay={0.15}>
              <div className="text-white/60 leading-relaxed space-y-5 mt-5">
                <p>
                  Evolve Fitness started with a simple frustration: people in
                  Pir Mahal who wanted to train seriously had nowhere proper to
                  go. Old machines, no guidance, no atmosphere. So we built the
                  gym we always wished existed.
                </p>
                <p>
                  Today, Evolve is home to students, athletes, working
                  professionals, and mothers — all training side by side. Our
                  coaches don&apos;t just count your reps; they learn your name,
                  your goals, and your struggles.
                </p>
                <p>
                  Whether it&apos;s your first day in a gym or your thousandth,
                  you&apos;ll be treated like family here. That&apos;s the
                  Evolve promise.
                </p>
              </div>
              <Link
                href="/trainers"
                className="group inline-flex items-center gap-2 text-volt font-bold uppercase tracking-wider mt-8"
              >
                Meet our coaches
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Reveal className="grid grid-cols-2 gap-4">
            <Image
              src="/images/program-strength.jpg"
              alt="Deadlift training"
              width={600}
              height={750}
              className="rounded-3xl object-cover h-72 w-full hover:scale-[1.03] transition-transform duration-500"
            />
            <Image
              src="/images/program-muscle.jpg"
              alt="Dumbbell workout"
              width={600}
              height={750}
              className="rounded-3xl object-cover h-72 w-full mt-10 hover:scale-[1.03] transition-transform duration-500"
            />
            <Image
              src="/images/program-fatloss.jpg"
              alt="Dumbbell rack"
              width={600}
              height={750}
              className="rounded-3xl object-cover h-72 w-full hover:scale-[1.03] transition-transform duration-500"
            />
            <Image
              src="/images/program-conditioning.jpg"
              alt="Gym equipment"
              width={600}
              height={750}
              className="rounded-3xl object-cover h-72 w-full mt-10 hover:scale-[1.03] transition-transform duration-500"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-volt text-ink py-16">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { to: 500, suffix: "+", label: "Members Transformed" },
            { to: 15, suffix: "+", label: "Certified Trainers" },
            { to: 40, suffix: "+", label: "Modern Machines" },
            { to: 5, suffix: "+", label: "Years of Trust" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl md:text-6xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest mt-2 text-ink/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading
            kicker="What We Stand For"
            title="Values that lift heavier than weights"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: Target, t: "Results First", d: "Every program is built around measurable progress — not random workouts." },
              { icon: HeartHandshake, t: "Respect For All", d: "Beginners and athletes, men and women — everyone trains with dignity here." },
              { icon: Eye, t: "Honest Coaching", d: "No fake promises. We tell you the truth about what your goal will take." },
              { icon: Trophy, t: "Never Give Up", d: "Plateaus happen. Our job is to push you through them, rep by rep." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.1}>
                <div className="bg-smoke border border-white/5 rounded-3xl p-8 h-full hover:border-volt/40 transition-colors">
                  <span className="w-14 h-14 rounded-2xl bg-volt/15 flex items-center justify-center mb-6">
                    <v.icon className="w-7 h-7 text-volt" />
                  </span>
                  <h3 className="font-display text-xl uppercase mb-3">{v.t}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal>
            <div className="bg-smoke border border-white/10 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-volt/10 rounded-full blur-3xl" />
              <h2 className="font-display text-4xl md:text-6xl uppercase mb-5">
                Come see it <span className="text-volt">yourself</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8">
                Visit {SITE.name} in {SITE.city} for a free trial workout. No
                card required — just bring your energy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-volt text-ink font-bold uppercase tracking-wider px-9 py-4 rounded-full hover:bg-white transition-colors"
                >
                  Plan Your Visit
                </Link>
                <Link
                  href="/pricing"
                  className="border border-white/30 font-bold uppercase tracking-wider px-9 py-4 rounded-full hover:border-volt hover:text-volt transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
