# Harsh Jangid — Portfolio & CV Website

A production-ready personal portfolio and CV website built with **Next.js 16 (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open **http://localhost:3000**.

## 3. Build for production

```bash
npm run build
npm start
```

`npm run build` requires internet access (it fetches the two Google Fonts used — Instrument Serif and Inter — at build time). This works automatically on Vercel; if you build somewhere fully offline, the font fetch will fail.

---

## 4. Upload to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Harsh Jangid portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

---

## 5. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New → Project** and import the GitHub repository you just pushed.
3. Framework preset: Vercel auto-detects **Next.js** — leave all settings default.
4. Click **Deploy**. No environment variables are required.

Every future `git push` to `main` will redeploy automatically.

---

## 6. Replace the portfolio images

Real project images go in `/public/projects/`, named exactly:

```
project-01.jpg   → Social Media Designs
project-02.jpg   → Instagram Creatives
project-03.jpg   → YouTube Creatives
project-04.jpg   → Carousel Designs
project-05.jpg   → Graphic Design
project-06.jpg   → Digital Content
```

Until a file exists at that path, the card automatically shows a clean placeholder block instead of a broken image — the site never breaks. To add a link on any card, open `components/Portfolio.tsx` and add an `href` to that project's entry.

To change categories, titles, descriptions, or add/remove cards entirely, edit the `projects` array at the top of `components/Portfolio.tsx`.

---

## 7. Replace the CV PDF

Add your resume file to `/public/` named exactly:

```
Harsh_Jangid_CV.pdf
```

The **Download CV** button in the hero section already points to `/Harsh_Jangid_CV.pdf` — no code changes needed.

---

## 8. Edit personal information

| What to change | File |
|---|---|
| Name, tagline, hero buttons | `components/Hero.tsx` |
| About Me text | `components/About.tsx` |
| Work experience timeline | `components/Experience.tsx` |
| Skills list | `components/Skills.tsx` |
| Education entries | `components/Education.tsx` |
| Portfolio categories & cards | `components/Portfolio.tsx` |
| External work links (YouTube/Instagram) | `components/WorkLinks.tsx` |
| Email, phone, location, CTA | `components/Contact.tsx` |
| Footer text & links | `components/Footer.tsx` |
| Site title / meta description / Open Graph | `app/layout.tsx` |
| Colors, fonts, spacing tokens | `tailwind.config.ts` |

All content lives in plain arrays/objects at the top of each component file, so edits don't require touching any markup.

---

## Project structure

```
app/
  layout.tsx        → fonts, global <head> metadata (SEO/OG), wraps every page
  page.tsx           → assembles all sections in order
  globals.css         → base styles, focus states, reduced-motion handling
components/
  Navbar.tsx           → sticky nav, mobile hamburger menu
  Hero.tsx             → name, tagline, CTA buttons, abstract SVG visual
  About.tsx            → About Me
  Experience.tsx       → timeline of the two Hornet Dynamics roles
  Skills.tsx           → skills grid with icons
  Education.tsx        → education cards
  Portfolio.tsx        → portfolio grid (data array + ProjectCard)
  ProjectCard.tsx       → reusable card with automatic image-fallback
  WorkLinks.tsx         → SaveTaxs / Visament external links
  Contact.tsx           → closing CTA, email/call buttons
  Footer.tsx            → footer nav + work links
  Reveal.tsx             → small fade-up-on-scroll wrapper (respects prefers-reduced-motion)
public/
  projects/            → drop project-01.jpg … project-06.jpg here
  Harsh_Jangid_CV.pdf   → add your CV here (not included)
```

---

## Notes

- Colors, layout and content follow the brief exactly — nothing about companies, roles, dates, clients, or achievements was invented.
- Responsive from mobile through desktop; the portfolio grid goes 1 → 2 → 3 columns as the screen widens.
- Keyboard-navigable with visible focus states; animations respect `prefers-reduced-motion`.
- No backend, database, or environment variables required.
