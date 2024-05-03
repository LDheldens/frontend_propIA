/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'

    ],
    theme: {
        extend: {
            spacing: {
                '200': '50rem',
                '160': '40rem',
                '120': '30rem',
                '100': '25rem',
            },
            fontFamily: {
                josefin: ['Josefin Sans'],
                cambay: ['Cambay'],
                merriweather: ['Merriweather'],
                montserrat: ['Montserrat'],
                bebas: ['Bebas Neue', 'sans-serif'],
                urbanist: ['Urbanist'],
                futura: ['Furuta Std', 'sans-serif'],
            },
            gradientColorStops: theme => ({
                'black': '#000',
                'gray-900': '#1a202c',
            })
        },
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/line-clamp'),
    ],
}