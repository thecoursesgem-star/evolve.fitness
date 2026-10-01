"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Dumbbell,
  Flame,
  HeartPulse,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import SectionHeading from "@/components/SectionHeading";
import ParticleDumbbell from "@/components/fx/ParticleDumbbell";
import TiltCard from "@/components/fx/TiltCard";
import { PROGRAMS, TRAINERS, TESTIMONIALS, PLANS, SITE } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-main.jpg"
            alt="Evolve Fitness gym floor"
            fill
            priority
            className="object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        </div>

        {/* 3D particle dumbbell — behind the headline, never over text/buttons */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[62%] bg-[radial-gradient(ellipse_at_center,rgba(10,10,11,0.62),transparent_70%)] pointer-events-none z-[4]" />
        <ParticleDumbbell
          variant="hero"
          className="absolute inset-y-0 right-0 w-full md:w-[62%] opacity-70 md:opacity-95 pointer-events-none z-[5]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 pt-32 pb-20 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-volt/15 border border-volt/40 rounded-full px-4 py-2 mb-7">
              <Flame className="w-4 h-4 text-volt" />
              <span className="text-volt text-xs font-semibold uppercase tracking-[0.2em]">
                Pir Mahal&apos;s #1 Fitness Club
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display uppercase leading-[0.95] text-6xl md:text-8xl mb-6"
            >
              Evolve Your
              <br />
              <span className="text-volt">Body.</span>{" "}
              <span className="text-outline">Evolve</span>
              <br />
              Your Life.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-white/70 text-lg max-w-xl mb-9 leading-relaxed"
            >
              Modern machines, certified trainers, personal diet plans and an
              atmosphere that never lets you quit. Your transformation starts
              the day you walk in.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="group bg-volt text-ink font-bold uppercase tracking-wider px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white transition-colors btn-spotlight"
              >
                Join Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/programs"
                className="border border-white/30 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:border-volt hover:text-volt transition-colors"
              >
                Explore Programs
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="grid grid-cols-3 gap-6 mt-14 max-w-lg"
            >
              {[
                { to: 500, suffix: "+", label: "Happy Members" },
                { to: 15, suffix: "+", label: "Expert Trainers" },
                { to: 40, suffix: "+", label: "Modern Machines" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl md:text-5xl text-volt">
                    <Counter to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="text-white/55 text-xs uppercase tracking-widest mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#welcome"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-volt transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </section>

      <Marquee
        items={["Strength", "Cardio", "Muscle Gain", "Fat Loss", "Personal Training", "Group Classes"]}
      />

      {/* ============ WELCOME ============ */}
      <section id="welcome" className="py-24">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="relative">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/images/program-personal.jpg"
                alt="Training at Evolve Fitness"
                width={800}
                height={1000}
                className="object-cover w-full h-[520px] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute -bottom-6 -right-2 md:right-8 bg-volt text-ink rounded-2xl px-7 py-5 shadow-2xl"
            >
              <p className="font-display text-4xl">5+ Years</p>
              <p className="text-sm font-semibold uppercase tracking-widest">of transforming lives</p>
            </motion.div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              kicker="Welcome to Evolve"
              title="More than a gym — a brotherhood of iron"
            />
            <Reveal delay={0.15}>
              <p className="text-white/60 leading-relaxed mt-5 mb-5">
                Located in the heart of Pir Mahal, Evolve Fitness was built with
                one mission: give our city a world-class place to train. No
                broken machines, no crowded floors — just serious equipment,
                honest coaching, and people who want to see you win.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Imported strength & cardio equipment",
                  "Certified trainers on the floor at all times",
                  "Separate ladies timing with female coach",
                  "Diet plans included with every membership",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/80">
                    <span className="w-6 h-6 rounded-full bg-volt/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-volt" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-volt font-bold uppercase tracking-wider"
              >
                Our full story
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS PREVIEW ============ */}
      <section className="py-24 bg-smoke">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading
            kicker="Train Your Way"
            title="Programs built for every goal"
            desc="Whether you want to lose fat, build muscle, or just feel stronger — there's a program waiting for you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {PROGRAMS.slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.1}>
                <TiltCard className="h-full">
                <Link href="/programs" className="group block rounded-3xl overflow-hidden bg-ash border border-white/5 hover:border-volt/50 transition-colors h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ash to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl uppercase mb-2 group-hover:text-volt transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading
            kicker="Why Evolve"
            title="Everything you need. Nothing you don't."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: Dumbbell, t: "Modern Equipment", d: "Imported machines, free weights and a dedicated functional zone." },
              { icon: Users, t: "Certified Trainers", d: "Experienced coaches on the floor — form correction guaranteed." },
              { icon: HeartPulse, t: "Diet & Nutrition", d: "Custom diet plans with every membership. No extra charge." },
              { icon: ShieldCheck, t: "Safe & Clean", d: "Hygienic washrooms, sanitized equipment, secure lockers." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.1}>
                <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-smoke border border-white/5 rounded-3xl p-8 h-full hover:border-volt/40 transition-colors"
                >
                  <span className="w-14 h-14 rounded-2xl bg-volt/15 flex items-center justify-center mb-6">
                    <f.icon className="w-7 h-7 text-volt" />
                  </span>
                  <h3 className="font-display text-xl uppercase mb-3">{f.t}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.d}</p>
                </motion.div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRAINERS PREVIEW ============ */}
      <section className="py-24 bg-smoke">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <SectionHeading
              align="left"
              kicker="Meet The Team"
              title="Coaches who care about your progress"
            />
            <Reveal delay={0.1}>
              <Link
                href="/trainers"
                className="group inline-flex items-center gap-2 border border-white/25 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:border-volt hover:text-volt transition-colors"
              >
                All trainers <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <TiltCard className="h-full">
                <motion.div whileHover={{ y: -8 }} className="group rounded-3xl overflow-hidden bg-ash border border-white/5 h-full">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="font-display text-2xl uppercase">{t.name}</h3>
                      <p className="text-volt text-xs font-semibold uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading
            kicker="Success Stories"
            title="Real people. Real results."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.12}>
                <div className="bg-smoke border border-white/5 rounded-3xl p-8 h-full flex flex-col hover:border-volt/40 transition-colors">
                  <Quote className="w-9 h-9 text-volt mb-5" />
                  <p className="text-white/70 leading-relaxed flex-1 mb-6">“{t.text}”</p>
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-volt/20 flex items-center justify-center font-display text-volt text-lg">
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-white/45 text-xs uppercase tracking-widest flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-volt" /> Verified member
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING TEASER ============ */}
      <section className="py-24 bg-smoke">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading
            kicker="Membership"
            title="Simple pricing, serious value"
            desc="No hidden charges. No lock-in traps. Just honest pricing for honest training."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`rounded-3xl p-8 border h-full flex flex-col ${
                    p.featured
                      ? "bg-volt text-ink border-volt shadow-2xl shadow-volt/20"
                      : "bg-ash border-white/10"
                  }`}
                >
                  {p.featured && (
                    <span className="self-start bg-ink text-volt text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                  <p className={`text-sm mt-1 mb-5 ${p.featured ? "text-ink/70" : "text-white/50"}`}>{p.desc}</p>
                  <p className="font-display text-4xl mb-6">
                    {p.price}
                    <span className={`text-base font-body font-normal ${p.featured ? "text-ink/60" : "text-white/45"}`}>{p.period}</span>
                  </p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm">
                        <Check className={`w-4 h-4 ${p.featured ? "text-ink" : "text-volt"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pricing"
                    className={`text-center font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-full transition-colors ${
                      p.featured
                        ? "bg-ink text-volt hover:bg-black"
                        : "border border-white/25 hover:border-volt hover:text-volt"
                    }`}
                  >
                    View Details
                  </Link>
                </motion.div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="/images/gym-wide.jpg"
          alt="Train at Evolve Fitness"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none mb-6">
              Stop waiting.
              <br />
              <span className="text-volt">Start evolving.</span>
            </h2>
            <p className="text-white/65 text-lg mb-9 max-w-xl mx-auto">
              First visit is on us — come train free for a day, meet the
              coaches, and feel the energy yourself.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-volt text-ink font-bold uppercase tracking-wider px-9 py-4 rounded-full hover:bg-white transition-colors btn-spotlight"
              >
                WhatsApp Us
              </a>
              <a
                href={SITE.phoneHref}
                className="border border-white/30 font-bold uppercase tracking-wider px-9 py-4 rounded-full hover:border-volt hover:text-volt transition-colors"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
