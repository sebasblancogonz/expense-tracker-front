/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			lineHeight: {
				'extra-tight': '0.3'
			}
		},
	},
	plugins: [],
	darkMode: 'class'
}
