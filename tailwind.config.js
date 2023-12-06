// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./src/**/*.{html,js,svelte,ts}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/typography'),
//     require("daisyui"),
//   ],
//   daisyui: {
//     themes: ["light"],
//   },
// }

/** @type {import('tailwindcss').Config} */

const konstaConfig = require('konsta/config');

module.exports = konstaConfig({
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	plugins: [require('@tailwindcss/forms')],
	konsta: {
		colors: {
			primary: '#4d6c40',
			secondary: '#bcd7ea',
			accent: '#f1832c'
		}
	}
	// theme: {
	// 	colors: {
	// 		primary: '#4d6c40',
	// 		secondary: '#bcd7ea',
	// 		accent: '#f1832c'
	// 	}
	// },
});
