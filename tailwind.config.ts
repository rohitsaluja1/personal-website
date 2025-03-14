
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: {
					DEFAULT: 'hsl(var(--border))',
					light: 'hsl(var(--border-light))',
				},
				input: {
					DEFAULT: 'hsl(var(--input))',
					light: 'hsl(var(--input-light))',
				},
				ring: {
					DEFAULT: 'hsl(var(--ring))',
					light: 'hsl(var(--ring-light))',
				},
				background: {
					DEFAULT: 'hsl(var(--background))',
					light: 'hsl(var(--background-light))',
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					light: 'hsl(var(--foreground-light))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					'foreground-light': 'hsl(var(--primary-foreground-light))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))',
					'foreground-light': 'hsl(var(--secondary-foreground-light))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
					light: 'hsl(var(--muted-light))',
					'foreground-light': 'hsl(var(--muted-foreground-light))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))',
					'foreground-light': 'hsl(var(--accent-foreground-light))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
					light: 'hsl(var(--popover-light))',
					'foreground-light': 'hsl(var(--popover-foreground-light))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					light: 'hsl(var(--card-light))',
					'foreground-light': 'hsl(var(--card-foreground-light))',
				},
				// Blog specific colors
				blog: {
					dark: '#111111',
					card: '#1e1e1e',
					hover: '#2a2a2a',
					text: '#f5f5f5',
					muted: '#888888',
					light: {
						background: '#FFFFFF',
						card: '#F1F1F1',
						hover: '#E5E5E5',
						text: '#111111',
						muted: '#777777',
					},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" }
				},
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				"scale-in": {
					"0%": { opacity: "0", transform: "scale(0.98)" },
					"100%": { opacity: "1", transform: "scale(1)" }
				},
				"blur-in": {
					"0%": { opacity: "0", filter: "blur(8px)" },
					"100%": { opacity: "1", filter: "blur(0)" }
				},
				"pulse-soft": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.7s ease-out forwards",
				"fade-up": "fade-up 0.8s ease-out forwards",
				"scale-in": "scale-in 0.7s ease-out forwards",
				"blur-in": "blur-in 0.7s ease-out forwards",
				"pulse-soft": "pulse-soft 3s infinite ease-in-out"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
