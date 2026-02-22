/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#000000', // Pure Black
                    light: '#0f172a',   // Slate 900
                    dark: '#020617',    // Slate 950
                },
                secondary: {
                    DEFAULT: '#fbbf24', // Neon Gold / Amber 400
                    light: '#fde68a',   // Amber 200
                    dark: '#d97706',    // Amber 600
                },
                accent: {
                    DEFAULT: '#06b6d4', // Cyan 500
                    light: '#67e8f9',   // Cyan 200
                    dark: '#0891b2',    // Cyan 700
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                headings: ['Space Grotesk', 'sans-serif'],
                techno: ['Outfit', 'sans-serif'],
            },
            animation: {
                'blob': 'blob 7s infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'grid-scroll': 'grid-scroll 20s linear infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                glow: {
                    '0%': { opacity: 0.5, transform: 'scale(1)' },
                    '100%': { opacity: 1, transform: 'scale(1.05)' }
                },
                'grid-scroll': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(50px)' }
                }
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            }
        },
    },
    plugins: [],
}
