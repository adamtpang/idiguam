import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#00254a',
                    50: '#e6f0f7',
                    100: '#b3d1e8',
                    200: '#80b2d9',
                    300: '#4d93ca',
                    400: '#1a74bb',
                    500: '#00254a',
                    600: '#001e3d',
                    700: '#001730',
                    800: '#001023',
                    900: '#000916',
                },
                gold: {
                    DEFAULT: '#b3b995',
                    50: '#f7f8f3',
                    100: '#e8eadc',
                    200: '#d9dcc5',
                    300: '#c9ceae',
                    400: '#bac097',
                    500: '#b3b995',
                    600: '#9a9f7e',
                    700: '#7a7f64',
                    800: '#5b5f4b',
                    900: '#3b3f31',
                },
                cyan: {
                    DEFAULT: '#55c1d5',
                    50: '#ebf8fa',
                    100: '#c2ecf2',
                    200: '#99e0ea',
                    300: '#70d4e2',
                    400: '#55c1d5',
                    500: '#3ba8bc',
                    600: '#2e8494',
                    700: '#22606c',
                    800: '#153c44',
                    900: '#09181c',
                },
            },
            fontFamily: {
                heading: ['EB Garamond', 'Georgia', 'serif'],
                body: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
                accent: ['Krona One', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

export default config;
