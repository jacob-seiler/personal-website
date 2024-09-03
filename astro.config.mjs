import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import preact from "@astrojs/preact";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://jacobseiler.com",
    integrations: [tailwind(), sitemap(), preact(), icon()],
});
