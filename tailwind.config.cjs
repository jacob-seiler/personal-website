const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
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
		boxShadow: {
		  light: '0px 3px 6px 0px rgba(0, 0, 0, 0.3)',
		  dark: '0px 3px 6px 0px rgba(0, 0, 0, 0.8)'
		},
	},
	plugins: [],
}
