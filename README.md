# Falahsys — Creative Tech Agency Website

A production-grade Next.js 16 website for **Falahsys**, a creative tech agency specializing in brand identity, web design & development, and digital solutions.

## How to run

No code changes are required. From the project folder:

1. **Use Node.js 24.13.1 (LTS)**  
   - With **nvm:** `nvm use` (or `nvm install 24.13.1` then `nvm use`)  
   - With **fnm:** `fnm use`  
   - Check: `node -v` → should show `v24.13.1`

2. **Install dependencies** (first time only)  
   ```bash
   npm install
   ```

3. **Start the dev server**  
   ```bash
   npm run dev
   ```

4. Open **http://localhost:3000** in your browser.

**Production build (optional):**
```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **TailwindCSS** with custom theme (dark #0A0A0A, accent #00D4FF)
- **Framer Motion** for animations
- **Lucide React** for icons
- **Inter** font via `next/font/google`
- **clsx** + **tailwind-merge** for `cn()` className handling

## Build (production)

```bash
npm run build
npm start
```

## Project Structure

- `app/` — Layout, homepage, About, Contact, 404, robots, sitemap
- `components/ui/` — Button, Badge, Card, SectionHeading, GradientText, AnimatedText, Container, BackToTop
- `components/sections/` — Navbar, Hero, Services, Portfolio, Testimonials, CTABanner, Footer
- `constants/index.ts` — All site data (nav, services, projects, testimonials, contact)
- `lib/utils.ts` — `cn()` helper
- `types/index.ts` — TypeScript interfaces

## Features

- Dark premium theme with glassmorphism cards
- Animated hero with glowing orbs and dot grid (pure CSS)
- Sticky navbar with mobile drawer (Framer Motion)
- Portfolio with filter tabs and layout animation
- Two-row infinite testimonial marquee (pure CSS, pause on hover)
- Contact form with client-side validation and success state
- Back-to-top button (visible after 400px scroll)
- SEO: per-page metadata, `robots.ts`, `sitemap.ts`
- WCAG AA–friendly: semantic HTML, focus rings, aria labels

## Environment

Optional: set `NEXT_PUBLIC_SITE_URL` for absolute URLs in sitemap/robots (e.g. `https://falahsys.com`).

## Security & npm audit

- **Next.js 16** and **ESLint 9** (flat config) are used to address the known high-severity advisories (glob, next).
- Linting runs via the ESLint CLI: `npm run lint` (no longer `next lint`).
