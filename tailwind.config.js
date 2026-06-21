/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Indigo → violet primary
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                },
                // Cyan accent / glow
                accent: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                },
                // Deep, premium dark scale
                dark: {
                    50: '#f6f7fb',
                    100: '#eceef6',
                    200: '#d5d8e8',
                    300: '#aeb3cf',
                    400: '#7f86ad',
                    500: '#5b6390',
                    600: '#454b73',
                    700: '#2c3154',
                    800: '#161a33',
                    900: '#0b0e1f',
                    950: '#06070f',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                display: ['var(--font-sora)', 'Sora', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                glow: '0 0 40px -8px rgba(99, 102, 241, 0.45)',
                'glow-accent': '0 0 40px -8px rgba(34, 211, 238, 0.45)',
                premium: '0 24px 60px -18px rgba(20, 20, 60, 0.45)',
            },
            backgroundImage: {
                'grid-fade':
                    'linear-gradient(to right, rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.06) 1px, transparent 1px)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'spin-slow': 'spin 14s linear infinite',
                aurora: 'aurora 18s ease-in-out infinite',
                float: 'floatY 7s ease-in-out infinite',
                shimmer: 'shimmer 2.5s linear infinite',
                'gradient-pan': 'gradientPan 6s ease infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(24px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                aurora: {
                    '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
                    '50%': { transform: 'translate3d(0,-4%,0) scale(1.1)' },
                },
                floatY: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-18px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                gradientPan: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
