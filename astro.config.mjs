import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/antoineBnt/PORTFOLIOO.git ",
  integrations: [mdx(), sitemap(), tailwind()],
});
