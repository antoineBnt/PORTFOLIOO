import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://antoineBnt.github.io/PORTFOLIOO", // URL publique de votre site
  output: "static", // Générer un site statique
  integrations: [mdx(), sitemap(), tailwind()],
});
