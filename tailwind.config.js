/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
        './node_modules/@rewind-ui/core/dist/theme/styles/Button.styles.js',
        './node_modules/@rewind-ui/core/dist/theme/styles/Text.styles.js'
    ],
    theme: {
        extend: {
            colors: {
                green1: '#1B7895',
                blue2: '#174966',
                blue3: '#24BFCF',
                green1: '#5FB776',
            },
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
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar')({ nocompatible: true }),
        require('@tailwindcss/forms')({
        strategy: 'class' // only generate classes
        })
    ],
}