/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": '#0F1729',
        "blue-2": '#172852',
        "blue-3": '#263E79',

        "red-1": '#D2544A',
        "red-2": '#F4887F',
        "red-3": '#F8B8B3',

        "background": '#FFFFFF',
        "body-text": '#F1F1F1',
        "sub-text": '#8C8C8C',
        "main-text": '#1E1E1E',

        "negative-1": '#FF2424',
        "negative-2": '#FF5555',
        "negative-3": '#FFF6F8',

        "positive-1": '#26B43C',
        "positive-2": '#5ABF69',
        "positive-3": '#263E79',
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      shadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
    },
  },
  plugins: [],
};
