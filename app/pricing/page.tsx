import Link from "next/link";
import { Check, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TiltCard from "@/components/fx/TiltCard";
import { PLANS, SITE } from "@/data/site";

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Pricing"
        subtitle="Honest pricing, zero hidden charges. Every plan includes a diet guideline and trainer support."
        image="/images/program-strength.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading
            kicker="Membership Plans"
            title="Choose your commitment"
            desc="One-time admission fee of Rs 1,000 applies to all plans. Couples and student discounts available — ask on WhatsApp."
          />
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1} className="h-full">
                <TiltCard className="h-full">
                <div
                  className={`rounded-[2rem] p-8 border h-full flex flex-col relative overflow-hidden transition-transform hover:-translate-y-2 duration-300 ${
                    p.featured
                      ? "bg-volt text-ink border-volt shadow-2xl shadow-volt/20"
                      : "bg-smoke border-white/10"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute top-5 right-5 bg-ink text-volt text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                  <p className={`text-sm mt-1 mb-6 ${p.featured ? "text-ink/70" : "text-white/50"}`}>
                    {p.desc}
                  </p>
                  <p className="font-display text-5xl mb-8">
                    {p.price}
                    <span className={`block text-base font-body font-normal mt-1 ${p.featured ? "text-ink/60" : "text-white/45"}`}>
                      {p.period}
                    </span>
                  </p>
                  <ul className="space-y-3 mb-9 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${p.featured ? "bg-ink/10" : "bg-volt/15"}`}>
                          <Check className={`w-3.5 h-3.5 ${p.featured ? "text-ink" : "text-volt"}`} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${SITE.whatsapp}?text=${encodeURIComponent(`Assalam-o-Alaikum! I want to join Evolve Fitness on the ${p.name} plan (${p.price}${p.period}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 text-center font-bold uppercase tracking-wider text-sm px-6 py-4 rounded-full transition-colors ${
                      p.featured
                        ? "bg-ink text-volt hover:bg-black"
                        : "bg-volt text-ink hover:bg-white"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" /> Join on WhatsApp
                  </a>
                </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Personal training add-on */}
          <Reveal delay={0.15} className="mt-16">
            <div className="rounded-[2.5rem] border border-volt/30 bg-volt/5 p-10 md:p-14 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-volt font-semibold tracking-[0.25em] uppercase text-xs mb-4">
                  Add-On
                </p>
                <h2 className="font-display text-4xl md:text-5xl uppercase mb-5">
                  Personal Training <span className="text-volt">— Rs 8,000/month</span>
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Add a dedicated personal trainer to any membership: fully
                  customized workout splits, a personalized diet chart, weekly
                  progress check-ins, and priority floor time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`${SITE.whatsapp}?text=${encodeURIComponent("Assalam-o-Alaikum! I want details about Personal Training at Evolve Fitness.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-volt text-ink font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white transition-colors btn-spotlight"
                  >
                    Book Free PT Trial
                  </a>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-2 border border-white/25 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:border-volt hover:text-volt transition-colors"
                  >
                    <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  "1-on-1 sessions, 5 days a week",
                  "Custom workout + diet plan",
                  "Weekly body measurements",
                  "WhatsApp support from your coach",
                  "Guaranteed faster results",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 bg-ink/60 border border-white/10 rounded-2xl px-5 py-4">
                    <Check className="w-5 h-5 text-volt shrink-0" />
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="text-center mt-12">
            <p className="text-white/45 text-sm">
              Have questions? Call us at{" "}
              <a href={SITE.phoneHref} className="text-volt font-semibold hover:underline">
                {SITE.phoneDisplay}
              </a>{" "}
              or visit the gym for a free trial workout.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
