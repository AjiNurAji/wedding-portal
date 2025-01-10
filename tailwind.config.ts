/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				tangerine: ["Tangerine", ...defaultTheme.fontFamily.sans],
				serif: ["PT Serif", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: "#826948",
				secondary: "#82694870",
				"black-transparent": "rgba(0, 0, 0, .15)",
			},
		},
	},
	plugins: [],
};
