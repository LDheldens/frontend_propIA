/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'

    ],
    theme: {
        extend: {
            spacing: {
                '160': '40rem', // Ajusta este valor según sea necesario
            },
        },
    },
    plugins: [],
}