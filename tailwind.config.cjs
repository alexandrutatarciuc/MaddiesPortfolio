/** @type {import('tailwindcss').Config}*/
const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            fontFamily: {
                'display': ['Clash Display', 'fallback-font', 'sans'],
                'figtree': ['Figtree', 'fallback-font', 'sans'],
                'sans': ['Figtree', 'fallback-font', 'sans']
            },
            colors: {
                primary: '#f7aef8',
                secondary: '#BDE0FE',
                button: '#88a4df',
                gray: {
                    '900': '#111111'
                },
                white: '#FAF9F6'
            }
        }
    },

    plugins: []
};

module.exports = config;