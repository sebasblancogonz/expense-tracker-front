/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			lineHeight: {
				'extra-tight': '0.3'
			},
			colors: {
				chestnut: {
					50: '#fcf5f4',
					100: '#fae8e6',
					200: '#f6d5d2',
					300: '#efb7b2',
					400: '#e48d85',
					500: '#d6675d',
					600: '#c4544a',
					700: '#a23c33',
					800: '#86352e',
					900: '#70322c',
					950: '#3c1613'
				}
			}
		}
	},
	plugins: [],
	darkMode: 'class',
	corePlugins: {
		scrollbar: false
	},
	plugins: [require('tailwind-scrollbar-hide')]
}
