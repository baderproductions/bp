/** @type {import('tailwindcss').Config} */
module.exports = {
	jit: true,
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				'bp-light': {
					DEFAULT: '#eceded',
					100: '#9ca9b3',
					200: '#717d86',
				},
				'bp-dark': {
					DEFAULT: '#33363a',
					100: '#25282c',
					200: '#151719',
				},
				'bp-primary': {
					DEFAULT: '#ffb400',
					100: '#ffb400',
					200: '#ffb400',
				},
				'bp-secondary': {
					DEFAULT: '#1cb68b',
					100: '#d2f9ee',
					200: '#73efcc',
					300: '#24e5af',
				},
				'bp-alert': {
					error: '#ff6171',
					warning: '#ffa173',
					success: '#24e5af',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
