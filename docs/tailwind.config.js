module.exports = {
    purge: false,
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'display': ['Playfair Display', 'serif'],
                'heading': ['Fira Sans Condensed', 'serif'],
                'sans': ['Overpass', 'sans-serif']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};