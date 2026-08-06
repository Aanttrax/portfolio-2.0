// Static build for GitHub Pages.
// Usage: BASE_PATH=/mi-repo/ bun run build:pages
// Output: dist/ (contenido listo para publicar en GitHub Pages)
import { execSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const basePath = process.env.BASE_PATH ?? "/";
const root = process.cwd();
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });

execSync("vite build", {
  stdio: "inherit",
  env: { ...process.env, GITHUB_PAGES: "1", BASE_PATH: basePath },
});

const client = join(dist, "client");
const shell = join(client, "_shell.html");
if (!existsSync(shell)) {
  throw new Error("No se generó dist/client/_shell.html — el build estático falló.");
}

// index.html + 404.html (fallback SPA para rutas profundas en GitHub Pages)
cpSync(shell, join(client, "index.html"));
cpSync(shell, join(client, "404.html"));
rmSync(shell);
rmSync(join(client, "_headers"), { force: true });
writeFileSync(join(client, ".nojekyll"), "");

// Aplanar: dist/client/* -> dist/*
rmSync(join(dist, "server"), { recursive: true, force: true });
const staged = join(root, ".gh-pages-tmp");
rmSync(staged, { recursive: true, force: true });
renameSync(client, staged);
for (const entry of readdirSync(dist)) rmSync(join(dist, entry), { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(staged, dist, { recursive: true });
rmSync(staged, { recursive: true, force: true });

console.log(`\n✔ Listo: dist/ generado con base "${basePath}"`);
