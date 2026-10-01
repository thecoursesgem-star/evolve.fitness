"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY } from "@/data/site";

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const step = (dir: 1 | -1) =>
    setSelected((s) =>
      s === null ? s : (s + dir + GALLERY.length) % GALLERY.length
    );

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Take a look inside — the floor, the iron, and the energy of Evolve Fitness."
        image="/images/hero-main.jpg"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5">
          <SectionHeading
            kicker="Inside Evolve"
            title="The floor speaks for itself"
            desc="Tap any photo to view it full-screen."
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {GALLERY.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => setSelected(i)}
                  className={`group relative rounded-2xl overflow-hidden w-full text-left ${
                    i % 3 === 0 ? "row-span-1" : ""
                  }`}
                >
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={src}
                      alt={`Evolve Fitness gallery photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-volt text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                        <Expand className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-volt hover:text-ink transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <button
              aria-label="Previous"
              className="absolute left-3 md:left-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-volt hover:text-ink transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              aria-label="Next"
              className="absolute right-3 md:right-8 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-volt hover:text-ink transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY[selected]}
                alt={`Gallery photo ${selected + 1}`}
                fill
                className="object-contain rounded-2xl"
              />
            </motion.div>
            <p className="absolute bottom-6 text-white/50 text-sm font-display tracking-widest">
              {selected + 1} / {GALLERY.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
