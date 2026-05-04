import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"soft-blue": {
					500: "#14171A",
					400: "#132133",
					300: "#34465C",
					200: "#6E7D8F",
					100: "#A1B0C2",
					50: "#EFF3F6",
				},
				"vibrant-blue": {
					100: "#2691FC",
					200: "#1F79D2",
					300: "#1A65B0",
					400: "#14171A",
				},
			},
			fontFamily: {
				inter: ["var(--font-inter)"],
				"nunito-sans": ["var(--font-nunito-sans)"],
			},
		},
	},
	plugins: [],
} satisfies Config;
