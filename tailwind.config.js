module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                'header': '58px',
                'footer': '111px'
            },
            colors: {
                'poupa': {
                    'purple': '#8E1976',
                    'green': '#84C226',
                    'lightGray': '#C4C4C4',
                    'hardGray': '#575757',
                    'orange': '#DD7B1B'
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}