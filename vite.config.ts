import { defineConfig } from "@lovable.dev/vite-tanstack-config";
const isGithubPages = process.env["GITHUB_PAGES"] === "1";
const basePath = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    ...(isGithubPages ? { spa: { enabled: true }, prerender: { enabled: true } } : {}),
  },
  ...(isGithubPages ? { nitro: false as const } : {}),
  vite: isGithubPages ? { base: basePath, build: { outDir: "dist" } } : {},
});
