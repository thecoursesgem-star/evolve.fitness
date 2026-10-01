"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative h-[42vh] min-h-[320px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 pb-12 w-full">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-volt font-semibold tracking-[0.25em] uppercase text-xs mb-3"
        >
          Evolve Fitness — Pir Mahal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl uppercase leading-none"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/70 mt-4 max-w-xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
