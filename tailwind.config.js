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
            },
        },
    },
    plugins: [],
}