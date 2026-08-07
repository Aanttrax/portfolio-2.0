# Ariel Rodriguez — Portfolio

![Portfolio logo](./screenShot/screenshot1.webp)

Personal portfolio of **Ariel Rodriguez**, Full Stack & DevOps Engineer. A static single-page application built with React that showcases experience, skills, selected projects, work process, and contact information.

Live at [https://aanttrax.github.io/portfolio-2.0/](https://aanttrax.github.io/portfolio-2.0/)

## Quick start

```bash
# 1. Install dependencies (Node 24.18 — see .nvmrc)
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (default http://localhost:5173)
```

## Available scripts

| Script                | Purpose                                         |
| --------------------- | ----------------------------------------------- |
| `npm run dev`         | Start the Vite dev server with HMR              |
| `npm run build`       | Production build                                |
| `npm run build:dev`   | Development-mode build                          |
| `npm run build:pages` | Static build for GitHub Pages (`dist/`)         |
| `npm run preview`     | Preview the production build locally            |
| `npm run lint`        | ESLint over the project                         |
| `npm run format`      | Prettier format (100 cols, semi, double quotes) |

## Tech stack

| Layer          | Technology                                  |
| -------------- | ------------------------------------------- |
| Framework      | TanStack Start (React 19)                   |
| Routing / Data | TanStack Router + TanStack Query            |
| Build tool     | Vite 8                                      |
| Language       | TypeScript 5.8 (strict)                     |
| Styling        | Tailwind CSS 4 + shadcn/ui + tw-animate-css |
| Animation      | framer-motion                               |
| Icons          | lucide-react, react-icons                   |
| Deployment     | GitHub Pages (SPA mode) via GitHub Actions  |

## Project structure

```
src/
├── routes/                  # File-based routes
│   ├── index.tsx            # Home page (hero, projects, experience, process)
│   ├── projects.tsx         # Full projects list
│   └── __root.tsx           # Root layout
├── components/ui/           # Navbar, Contact components
├── data/                    # Content sources (single source of truth)
│   ├── projects.data.tsx
│   ├── experiences.data.tsx
│   ├── skills.data.tsx
│   ├── processes.data.tsx
│   └── contacts.data.tsx
├── assets/                  # Images (hero portrait, project thumbnails)
├── lib/                     # Error handling / reporting utilities
├── router.tsx / start.ts / server.ts   # App wiring
└── styles.css               # Global Tailwind styles
scripts/
└── build-gh-pages.mjs       # Static export for GitHub Pages
.github/workflows/publish.yml # CI/CD deploy on push to main
```

Content is data-driven: edit the files under `src/data/` to update projects, experience, skills, and contact information without touching component code.

## Deployment

Deployment is automatic via GitHub Actions (`.github/workflows/publish.yml`):

1. Push to `main`.
2. The workflow runs `npm ci` and `npm run build:pages` with `BASE_PATH` set.
3. `scripts/build-gh-pages.mjs` generates the static SPA output in `dist/`, including `index.html` and a `404.html` fallback so deep links work on GitHub Pages.
4. The `dist/` folder is deployed by `JamesIves/github-pages-deploy-action@v4`.

> Note: `npm run build:pages` requires the `GITHUB_PAGES`/`BASE_PATH` environment handling baked into `vite.config.ts`; plain `npm run build` does not exercise the SPA/prerender path.

## Quality gates

- `npm run lint` — ESLint 9 (typescript-eslint flat config)
- `npx tsc --noEmit` — strict type checking
- `npm run format` — Prettier

No test runner is configured yet; verification relies on build, lint, and type checking.

## License

Private repository. All content is the work of Ariel Rodriguez.
