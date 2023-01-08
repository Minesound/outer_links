import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://rxtsel.github.io",
  base: "/",
  integrations: [react(), image(), sitemap(), tailwind()]
});