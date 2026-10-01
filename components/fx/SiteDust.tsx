"use client";

import { useEffect, useRef } from "react";

type Mote = { x: number; y: number; s: number; v: number; tw: number; drift: number };

/* Faint 3D-feeling dust that drifts across every page, behind the content. */
export default function SiteDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const mobile = coarse || Math.min(window.innerWidth, window.innerHeight) < 768;

    const COUNT = mobile ? 70 : 150;
    const rnd = Math.random;
    const motes: Mote[] = Array.from({ length: COUNT }, () => ({
      x: rnd(),
      y: rnd(),
      s: 0.6 + rnd() * 1.8,
      v: 0.008 + rnd() * 0.03, // upward drift speed
      tw: rnd() * Math.PI * 2,
      drift: (rnd() - 0.5) * 0.02,
    }));

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let last = performance.now();
    let t = rnd() * 10;

    const draw = (dt: number) => {
      t += dt;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (const m of motes) {
        m.y -= m.v * dt;
        m.x += Math.sin(t * 0.5 + m.tw) * m.drift * dt;
        if (m.y < -0.02) {
          m.y = 1.02;
          m.x = rnd();
        }
        const twk = 0.5 + 0.5 * Math.sin(t * 1.6 + m.tw * 2);
        const a = 0.04 + 0.1 * twk;
        const px = m.x * w;
        const py = m.y * h;
        ctx.fillStyle = `rgba(212,246,37,${a.toFixed(3)})`;
        ctx.fillRect(px, py, m.s, m.s);
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!document.hidden) draw(dt);
      raf = requestAnimationFrame(frame);
    };

    if (reduced) draw(0.5);
    else raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] h-full w-full opacity-70"
    />
  );
}
