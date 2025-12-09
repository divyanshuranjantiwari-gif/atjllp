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
                    DEFAULT: '#0f172a', // Slate 900
                    light: '#334155',   // Slate 700
                    dark: '#020617',    // Slate 950
                },
                secondary: {
                    DEFAULT: '#b45309', // Amber 700 (Gold-ish)
                    light: '#d97706',   // Amber 600
                    dark: '#78350f',    // Amber 900
                },
                accent: '#f8fafc',    // Slate 50
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Playfair Display', 'serif'], // Added for headings
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            }
        },
    },
    plugins: [],
}
