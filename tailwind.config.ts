import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
			  sm: '640px',
			  md: '768px'
			},
		},
		fontFamily: {
			sans: ["Figtree", ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
				primary: "#2BA878",
				github: "#24292E",
				linkedin: "#0B65C2",
			}
		},
	},
	plugins: [],
}
