# Leo Labs — Systems & Backend Portfolio

Portfolio & project showcase for **[leolabs.com.et](https://leolabs.com.et)** — Backend Architecture, Automated Voice Pipelines, Distributed Systems & Developer Tooling.

Built with **Vite + React 19 + TypeScript + Tailwind CSS 4**, deployed on **Vercel**.

---

## Stack

| Layer            | Technology                                    |
| ---------------- | --------------------------------------------- |
| Framework        | React 19                                      |
| Build tool       | Vite 8                                        |
| Language         | TypeScript 7                                  |
| Styling          | Tailwind CSS 4 (`@tailwindcss/vite`)          |
| Animations       | Motion (Framer Motion successor)              |
| Icons            | Lucide React                                  |
| LLM (optional)   | Google Gemini (`@google/genai`)               |
| Deployment       | Vercel (static SPA)                           |

---

## Project Structure

```
.
├── index.html              # HTML entry
├── vite.config.ts          # Vite + Tailwind plugin config
├── tsconfig.json           # TS config (bundler resolution)
├── vercel.json             # Vercel SPA rewrite rules
├── package.json
├── .env.example            # GEMINI_API_KEY template
└── src/
    ├── main.tsx            # React root mount
    ├── App.tsx             # Top-level layout
    ├── index.css           # Tailwind import + theme tokens
    ├── types.ts
    ├── data/
    │   ├── projects.ts
    │   └── techStack.ts
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── ProjectShowcase.tsx
        ├── ProjectCard.tsx
        ├── ProjectDetailModal.tsx
        ├── AddProjectModal.tsx
        ├── TechStackMatrix.tsx
        ├── TerminalWidget.tsx
        ├── AboutSection.tsx
        ├── ContactSection.tsx
        └── Footer.tsx
```

---

## Local Development

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Production build → dist/
npm run build

# Preview the production build
npm run preview
```

### Environment Variables

If you use the Gemini-powered features, copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then set `GEMINI_API_KEY`. **Never commit `.env.local`.**

For Vercel deployment, set `GEMINI_API_KEY` in **Project Settings → Environment Variables** (Production + Preview).

---

## Deployment (Vercel)

This project auto-detects as **Vite** on Vercel. Just import the GitHub repo.

Build settings (auto):
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

Custom domain `leolabs.com.et` is configured in **Vercel → Project → Settings → Domains**.

---

## Scripts

| Command          | Purpose                                          |
| ---------------- | ------------------------------------------------ |
| `npm run dev`    | Local dev server with HMR                        |
| `npm run build`  | Production build → `dist/`                       |
| `npm run start`  | Preview production build on port 3000            |
| `npm run preview`| Alias for `start`                                |
| `npm run clean`  | Delete `dist/`                                   |
| `npm run typecheck` / `npm run lint` | TypeScript check (`tsc --noEmit`) |

---

## License

© Leo Labs. All rights reserved.