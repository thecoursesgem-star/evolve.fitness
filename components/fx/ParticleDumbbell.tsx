"use client";

import { useEffect, useRef } from "react";

type Pt = { x: number; y: number; z: number; s: number; tw: number; c: number };

/* Sample points on the surface of a dumbbell lying along the X axis. */
function buildDumbbell(count: number): Pt[] {
  const pts: Pt[] = [];
  const rnd = Math.random;
  const push = (x: number, y: number, z: number) =>
    pts.push({ x, y, z, s: 0.7 + rnd() * 1.1, tw: rnd() * Math.PI * 2, c: rnd() });

  // Handle bar — thicker point cloud so it reads clearly
  const nBar = Math.floor(count * 0.28);
  for (let i = 0; i < nBar; i++) {
    const x = (rnd() * 2 - 1) * 0.7;
    const a = rnd() * Math.PI * 2;
    const rr = 0.07 * Math.sqrt(rnd());
    push(x, Math.cos(a) * rr, Math.sin(a) * rr);
  }

  // Weight plates: two per side, kept compact so the silhouette stays tight
  const plates = [
    { x: 0.82, r: 0.5, t: 0.15 },
    { x: 0.96, r: 0.41, t: 0.12 },
  ];
  const nPlate = Math.floor((count * 0.72) / 4);
  for (const side of [-1, 1]) {
    for (const pl of plates) {
      for (let i = 0; i < nPlate; i++) {
        const kind = rnd();
        const a = rnd() * Math.PI * 2;
        if (kind < 0.35) {
          // plate faces
          const rr = pl.r * Math.sqrt(rnd());
          const x = side * (pl.x + (rnd() < 0.5 ? -pl.t / 2 : pl.t / 2));
          push(x, Math.cos(a) * rr, Math.sin(a) * rr);
        } else if (kind < 0.85) {
          // rims — these draw the dumbbell silhouette
          const x = side * (pl.x + (rnd() * 2 - 1) * pl.t * 0.5);
          push(x, Math.cos(a) * pl.r, Math.sin(a) * pl.r);
        } else {
          // sparse inner fill so it reads solid
          const rr = pl.r * Math.sqrt(rnd());
          const x = side * (pl.x + (rnd() * 2 - 1) * pl.t * 0.5);
          push(x, Math.cos(a) * rr, Math.sin(a) * rr);
        }
      }
    }
  }
  return pts;
}

export default function ParticleDumbbell({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "mini";
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const mobile = coarse || Math.min(window.innerWidth, window.innerHeight) < 768;

    const COUNT =
      variant === "hero" ? (mobile ? 1400 : 3200) : mobile ? 380 : 750;
    const pts = buildDumbbell(COUNT);

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      const r = wrap.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // Mouse influence (desktop only — phones use scroll instead)
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    const onMouse = (e: MouseEvent) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!mobile) window.addEventListener("mousemove", onMouse, { passive: true });

    let visible = true;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    let raf = 0;
    let last = performance.now();
    let t = Math.random() * 10;

    const draw = (dt: number) => {
      t += dt;
      if (w === 0 || h === 0) return;

      // Fade out as the hero scrolls away (hero variant only)
      if (variant === "hero") {
        const r = canvas.getBoundingClientRect();
        const fade = Math.max(0, Math.min(1, r.bottom / (r.height * 1.15)));
        canvas.style.opacity = fade.toFixed(3);
        if (fade <= 0.01) return;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      mx += (tmx - mx) * 0.045;
      my += (tmy - my) * 0.045;
      // Gentle oscillation around a side-on view — the dumbbell
      // silhouette stays readable at all times (never spins edge-on).
      const rotY = Math.sin(t * 0.3) * 0.45 + mx * 0.6;
      const rotX = 0.18 + Math.sin(t * 0.4) * 0.1 + my * 0.3;
      const rotZ = -0.16; // slight artistic slant
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);
      const cx = Math.cos(rotX);
      const sx = Math.sin(rotX);
      const cz = Math.cos(rotZ);
      const sz_ = Math.sin(rotZ);
      const cam = 3.6;
      const S = Math.min(w, h) * (variant === "hero" ? 0.44 : 0.5);
      const ox = w * 0.5;
      const oy = h * 0.5;
      const sizeK = S / 380;

      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // slant around Z, then rotate around Y, then X
        const x0 = p.x * cz - p.y * sz_;
        const y0 = p.x * sz_ + p.y * cz;
        const x1 = x0 * cy + p.z * sy;
        const z1 = -x0 * sy + p.z * cy;
        const y1 = y0 * cx - z1 * sx;
        const z2 = y0 * sx + z1 * cx;
        const pers = cam / (cam - z2 * 0.85);
        const px = ox + x1 * S * pers;
        const py = oy + (y1 + Math.sin(t * 1.4 + p.tw) * 0.022) * S * pers;
        if (px < -8 || px > w + 8 || py < -8 || py > h + 8) continue;
        const depth = (z2 + 1.5) / 3; // ~0..1
        const twk = 0.55 + 0.45 * Math.sin(t * 2.1 + p.tw * 3);
        const a = Math.max(0, (0.34 + 0.66 * depth) * twk);
        const sz = Math.max(0.7, p.s * (0.95 + 1.0 * depth) * sizeK);
        ctx.fillStyle =
          p.c < 0.84
            ? `rgba(212,246,37,${a.toFixed(3)})`
            : `rgba(242,255,205,${(a * 0.9).toFixed(3)})`;
        ctx.fillRect(px, py, sz, sz);
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (visible && !document.hidden) draw(dt);
      raf = requestAnimationFrame(frame);
    };

    if (reduced) {
      draw(0.7); // single static frame, no animation
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMouse);
    };
  }, [variant]);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
