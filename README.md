# Evolve Fitness — Gym Website

A fast, animated, mobile-friendly multi-page website for **Evolve Fitness** (Pir Mahal, Pakistan), built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Lucide icons**. All pages are statically pre-rendered, so hosting on Vercel is free and lightning fast.

## Pages

| Route        | Description                                              |
|--------------|----------------------------------------------------------|
| `/`          | Home — animated hero, stats counters, programs, trainers, testimonials, pricing teaser, CTA |
| `/about`     | Story, animated stats band, values                        |
| `/programs`  | 6 training programs + weekly schedule                     |
| `/trainers`  | Coach profiles                                            |
| `/pricing`   | Membership plans (PKR) with WhatsApp join buttons + PT add-on |
| `/gallery`   | Photo grid with full-screen lightbox                      |
| `/contact`   | Contact cards, free-trial form (opens WhatsApp), map      |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy free on Vercel (5 minutes)

1. Create a free account at [github.com](https://github.com) and upload this folder as a new repository (web upload works fine).
2. Create a free account at [vercel.com](https://vercel.com) (sign up with GitHub).
3. Click **Add New → Project → Import** your repository → **Deploy**.
4. Done — you get a free live link like `evolve-fitness.vercel.app`.

To use a custom domain later: Vercel dashboard → your project → **Settings → Domains** → add your domain and paste the 2 DNS records Vercel shows into your domain provider. Free SSL included.

## Customize

- Gym info (phone, address, hours, links): `data/site.ts`
- Programs, trainers, prices, testimonials, gallery: `data/site.ts`
- Photos: `public/images/` (replace the JPGs, keep the same file names)
- Colors: `tailwind.config.ts` (`volt`, `ink`, `smoke`, `ash`)
- Fonts: `app/layout.tsx`
- 3D effects: `components/fx/` — `ParticleDumbbell.tsx` (hero + subpage 3D dumbbell),
  `SiteDust.tsx` (floating dust on every page), `TiltCard.tsx` (3D tilt on cards).
  The pulsing ring on Join buttons is the `btn-spotlight` class in `app/globals.css`.
  All effects auto-reduce on mobile and turn off for `prefers-reduced-motion`.

## Notes

- Trainer names/photos and some stats are placeholders — replace with the real gym's staff and photos before going live.
- The contact form opens WhatsApp with a pre-filled message (no backend needed).
