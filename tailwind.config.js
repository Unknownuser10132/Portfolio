import { fontFamily } from "tailwindcss/defaultTheme";


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            textWhite: '#FFFFFF',
            midnight: '#2C3E50',
            vividBlue: '#3498DB',
            vividGreen: '#2ECC71',
            darkerGreen: '#27AE60',
            softGray: '#BDC3C7',
          },
          fontFamily: {
            inter: ["Inter", ...fontFamily.sans],
            montserrat: ["Montserrat", ...fontFamily.sans],
          }
        },
    },
    plugins: [],
};
