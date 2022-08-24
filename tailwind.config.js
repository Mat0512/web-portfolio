/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            green: "#505F1C",
            "light-grey": "#F7F8F2",
            black: "#484848",
            white: "#FFFFFF",
            "main-bg": "#F7F8F2",
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
        },
    },
    plugins: [],
};
