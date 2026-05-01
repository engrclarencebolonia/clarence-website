# clarence-website

> Portfolio website for **Clarence Gio Bolonia** — UI/UX & Product Designer

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-pink)](https://www.framer.com/motion)

A modern, production-ready portfolio website built from scratch using a premium tech stack — rebuilt from Wix to Next.js with significantly improved performance, UX, and design quality.

---

## ✨ Features

- ⚡ **Next.js 14 App Router** — Server components, static generation, fast navigation
- 🎨 **Premium UI Design** — Playfair Display + DM Sans type pairing, custom color system
- 🌙 **Dark Mode Toggle** — Persisted to localStorage, system preference aware
- 📱 **Mobile-First Responsive** — Fluid across all breakpoints
- 🎞 **Framer Motion Animations** — Scroll reveals, stagger children, page transitions
- ♿ **WCAG Accessible** — Skip links, ARIA labels, focus styles, semantic HTML
- 📊 **Case Study Project Pages** — Full overview → problem → process → solution → outcomes
- 🔍 **Project Filtering** — Tag-based filter with animated transitions
- 📤 **GitHub Pages / Vercel Ready** — Zero config deployment

---

## 🗂 Folder Structure

```
clarence-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + fonts + metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles + CSS variables
│   │   ├── loading.tsx         # Loading skeleton
│   │   ├── not-found.tsx       # 404 page
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx    # Dynamic project case study page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav + dark mode + mobile menu
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── projects/
│   │   │   └── ProjectDetail.tsx  # Full case study layout
│   │   └── ui/
│   │       ├── ThemeProvider.tsx   # Dark mode context
│   │       └── Reveal.tsx          # Scroll animation wrappers
│   ├── data/
│   │   └── index.ts            # All content: personal info, projects, skills
│   └── lib/
│       └── utils.ts            # cn() utility
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/engrclarencebolonia/clarence-website.git
cd clarence-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build & Deploy

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repo directly to [vercel.com](https://vercel.com) — zero config required.

### GitHub Pages (Static Export)

1. Uncomment in `next.config.ts`:
   ```ts
   output: 'export',
   basePath: '/clarence-website',
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy the `out/` folder to GitHub Pages.

### Manual Build

```bash
npm run build
npm run start
```

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-500` | `#5b48fa` | Primary, CTAs, highlights |
| `brand-600` | `#4a2ff1` | Hover states |
| `accent-500` | `#f83155` | Gradient accents |
| `surface-850` | `#141428` | Dark mode card bg |
| `surface-900` | `#0f0f1e` | Dark mode page bg |

### Typography

- **Display**: Playfair Display (headings, hero text)
- **Body**: DM Sans (body copy, UI)
- **Mono**: DM Mono (code, labels, stats)

### Animation Patterns

- `Reveal` — Scroll-triggered fade + slide
- `StaggerChildren` — Stagger item reveals with configurable delay
- Framer Motion `whileHover` — Card lifts and button interactions
- CSS keyframes — Blob background, float indicator, marquee

---

## ✏️ Customizing Content

All content lives in `src/data/index.ts`:

- `personalInfo` — Name, bio, links, stats
- `skills` — Skill categories and items
- `projects` — Full project data including case study content

Add a new project:

```ts
// src/data/index.ts
{
  id: "my-project",           // URL slug
  title: "My Project",
  subtitle: "What it does",
  type: "Category · Platform",
  year: "2024",
  status: "Live",             // "Live" | "Completed" | "In Progress"
  tags: ["Tag 1", "Tag 2"],
  color: "#5b48fa",           // Accent for metrics
  accentColor: "#8077ff",
  emoji: "🚀",
  coverGradient: "from-brand-600 via-brand-700 to-brand-950",
  overview: "...",
  problem: "...",
  process: ["Step 1", "Step 2"],
  solution: "...",
  outcome: "...",
  outcomes: [
    { metric: "Metric Name", value: "42%", description: "What this means" }
  ],
  tools: ["Figma", "React"],
  figmaLink: "https://figma.com/...",  // Optional
}
```

---

## 🧪 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Fonts | Google Fonts via `next/font` |
| Deployment | Vercel / GitHub Pages |

---

## 📋 Accessibility

- Skip navigation link for keyboard users
- All interactive elements have accessible labels
- Focus styles meet WCAG 2.1 AA contrast requirements
- Semantic HTML5 (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`)
- ARIA attributes on interactive state elements (`aria-pressed`, `aria-expanded`, `aria-label`)
- Motion respects `prefers-reduced-motion` via Framer Motion defaults

---

## 📄 License

This project is for personal portfolio use by Clarence Gio Bolonia. Please do not copy or redistribute without permission.

---

Built with ♥ in Bacoor, Cavite, Philippines.
