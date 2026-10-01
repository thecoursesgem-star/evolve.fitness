"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Facebook, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/data/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", goal: "Muscle Building", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Assalam-o-Alaikum! I'm ${form.name} (${form.phone}). Goal: ${form.goal}. ${form.message}`;
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Questions? Want a free trial? Message us — we reply fast."
        image="/images/program-conditioning.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-5">
              <SectionHeading
                align="left"
                kicker="Get In Touch"
                title="Visit, call, or just say salaam"
              />
              {[
                {
                  icon: MapPin,
                  t: "Gym Address",
                  d: SITE.address,
                  href: "https://maps.google.com/?q=Pir+Mahal,+Punjab,+Pakistan",
                },
                { icon: Phone, t: "Phone", d: SITE.phoneDisplay, href: SITE.phoneHref },
                {
                  icon: Clock,
                  t: "Timings",
                  d: "Mon – Sat: 6 AM – 10 PM · Sun: Closed",
                },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 0.1}>
                  <div className="flex gap-5 bg-smoke border border-white/10 rounded-3xl p-6 hover:border-volt/40 transition-colors">
                    <span className="w-13 h-13 min-w-[52px] min-h-[52px] w-[52px] h-[52px] rounded-2xl bg-volt/15 flex items-center justify-center">
                      <c.icon className="w-6 h-6 text-volt" />
                    </span>
                    <div>
                      <h3 className="font-display uppercase text-lg tracking-wide mb-1">{c.t}</h3>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-volt transition-colors"
                        >
                          {c.d}
                        </a>
                      ) : (
                        <p className="text-white/60">{c.d}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.3}>
                <div className="flex gap-4">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold uppercase tracking-wider text-sm px-6 py-4 rounded-2xl hover:brightness-110 transition"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp
                  </a>
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white font-bold uppercase tracking-wider text-sm px-6 py-4 rounded-2xl hover:brightness-110 transition"
                  >
                    <Facebook className="w-5 h-5" /> Facebook
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={0.15} className="lg:col-span-3">
              <div className="bg-smoke border border-white/10 rounded-[2rem] p-8 md:p-10 h-full">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-16"
                  >
                    <CheckCircle2 className="w-16 h-16 text-volt mb-6" />
                    <h3 className="font-display text-3xl uppercase mb-3">Message sent!</h3>
                    <p className="text-white/60 max-w-sm">
                      We&apos;ve opened WhatsApp with your message — just press
                      send there and we&apos;ll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-8 text-volt font-bold uppercase tracking-wider text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <h3 className="font-display text-3xl uppercase mb-2">
                      Book your <span className="text-volt">free trial</span>
                    </h3>
                    <p className="text-white/55 text-sm mb-6">
                      Fill this in — it opens WhatsApp with your message ready to send.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">
                          Your Name
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Ahmed Raza"
                          className="w-full bg-ink border border-white/15 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:border-volt focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">
                          Phone Number
                        </label>
                        <input
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="03xx xxxxxxx"
                          className="w-full bg-ink border border-white/15 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:border-volt focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">
                        Your Goal
                      </label>
                      <select
                        value={form.goal}
                        onChange={(e) => setForm({ ...form, goal: e.target.value })}
                        className="w-full bg-ink border border-white/15 rounded-2xl px-5 py-4 text-white focus:border-volt focus:outline-none transition-colors"
                      >
                        {["Muscle Building", "Fat Loss", "Strength", "General Fitness", "Personal Training"].map((g) => (
                          <option key={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-white/50 block mb-2">
                        Message (optional)
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Anything you want us to know..."
                        className="w-full bg-ink border border-white/15 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 focus:border-volt focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-volt text-ink font-bold uppercase tracking-wider px-8 py-4 rounded-2xl hover:bg-white transition-colors"
                    >
                      <Send className="w-5 h-5" /> Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <Reveal>
            <div className="rounded-[2rem] overflow-hidden border border-white/10 h-[420px] relative">
              <iframe
                title="Evolve Fitness location — Pir Mahal"
                src="https://maps.google.com/maps?q=Pir%20Mahal,%20Punjab,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale invert-[0.92] contrast-[0.9]"
                loading="lazy"
              />
              <a
                href="https://maps.google.com/?q=Pir+Mahal,+Punjab,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 bg-volt text-ink font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-full hover:bg-white transition-colors"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
