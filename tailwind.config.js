/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '1.5rem',
			},
		},
		extend: {},
	},
	plugins: [require('daisyui')],
};
