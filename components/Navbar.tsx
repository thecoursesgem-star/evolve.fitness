"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Dumbbell, Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="w-10 h-10 rounded-lg bg-volt flex items-center justify-center transition-transform group-hover:rotate-12">
            <Dumbbell className="w-6 h-6 text-ink" strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl uppercase tracking-wide leading-none">
            Evolve<span className="text-volt"> Fitness</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-volt ${
                pathname === l.href ? "text-volt" : "text-white/75"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm text-white/75 hover:text-volt transition-colors"
          >
            <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
          </a>
          <Link
            href="/pricing"
            className="bg-volt text-ink font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white transition-colors"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    className={`block py-3 text-lg font-display uppercase tracking-wide border-b border-white/5 ${
                      pathname === l.href ? "text-volt" : "text-white/80"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/pricing"
                className="mt-4 bg-volt text-ink font-bold uppercase tracking-wider text-center px-6 py-4 rounded-xl"
              >
                Join Now
              </Link>
              <a
                href={SITE.phoneHref}
                className="mt-2 mb-2 flex items-center justify-center gap-2 text-white/70 py-2"
              >
                <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
