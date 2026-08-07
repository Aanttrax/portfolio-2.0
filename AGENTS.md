# AGENTS.md — portfolio-2.0

Personal portfolio of Ariel Rodriguez — a static single-page app built with TanStack Start (React 19, TanStack Router/Query) on Vite 8, TypeScript 5.8 strict, Tailwind CSS 4. Deployed to GitHub Pages from `main` via GitHub Actions.

## Content is data-driven

- Content (projects, experience, skills, process, contacts) lives in `src/data/*.tsx`.
- To change content, edit those data files. Do NOT edit route components (`src/routes/*`) for content changes.
- Components under `src/components/ui/` are presentational; keep them free of hardcoded content.

## Verification — no test runner

- There is NO test framework installed (no vitest/jest/playwright). Do not invent or assume one, and do not promise "tests" that cannot run.
- Quality gates: `npm run lint` (ESLint), `npx tsc --noEmit` (strict typecheck), `npm run format` (Prettier, 100 cols).
- Deployment build: `npm run build:pages` — static SPA export to `dist/` (requires `GITHUB_PAGES=1` / `BASE_PATH`, handled by `vite.config.ts` and `scripts/build-gh-pages.mjs`). Plain `npm run build` does NOT exercise the GitHub Pages SPA/prerender path.

## Git and commits

- Conventional commits only (e.g. `feat:`, `fix:`, `chore:`, `ci:`).
- Never add "Co-Authored-By" or AI attribution to commits.
- Pushing to `main` triggers automatic deploy via `.github/workflows/publish.yml`. Do not modify the workflow casually.

## Commands

| Command                                                | Purpose                             |
| ------------------------------------------------------ | ----------------------------------- |
| `npm run dev`                                          | Dev server with HMR                 |
| `npm run build:pages`                                  | GitHub Pages static build (`dist/`) |
| `npm run lint` / `npx tsc --noEmit` / `npm run format` | Quality gates                       |
