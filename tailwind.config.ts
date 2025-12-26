import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			black: '#000000',
    			white: '#ffffff',
    			navy: {
    				'50': '#e6eaf0',
    				'100': '#b3c1d4',
    				'200': '#8098b8',
    				'300': '#4d6f9c',
    				'400': '#1a4680',
    				'500': '#0a192f',
    				'600': '#081426',
    				'700': '#060f1d',
    				'800': '#040a14',
    				'900': '#02050b',
    				DEFAULT: '#0a192f'
    			},
    			gray: {
    				'50': '#f9fafb',
    				'100': '#f3f4f6',
    				'200': '#e5e7eb',
    				'300': '#d1d5db',
    				'400': '#9ca3af',
    				'500': '#6b7280',
    				'600': '#4b5563',
    				'700': '#374151',
    				'800': '#1f2937',
    				'900': '#111827'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			heading: [
    				'Plus Jakarta Sans',
    				'system-ui',
    				'sans-serif'
    			],
    			body: [
    				'Work Sans',
    				'system-ui',
    				'sans-serif'
    			]
    		},
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
