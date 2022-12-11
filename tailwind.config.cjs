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
		extend: {
			colors: {
				primary: "#2BA878",
			}
		},
	},
	plugins: [],
}
