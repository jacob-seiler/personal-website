import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import icon from "astro-icon";

export default defineConfig({
    site: "https://jacobseiler.com",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [sitemap(), preact(), icon()],
});