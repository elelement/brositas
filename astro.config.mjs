import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE ?? "https://brositas.hackarte.es",
  integrations: [sitemap()],
});
