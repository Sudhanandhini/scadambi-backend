/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F2A4A',
        secondary: '#FDB913',
        background: '#F9FAFB',
        text: '#333333',
        'accent-preschool': '#87CEEB',
        'accent-primary': '#98FB98',
        'accent-highschool': '#FFA500',
        'accent-college': '#800000',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],   // body
        heading: ['Futura', 'sans-serif'], // headings
      },
    },
  },
  plugins: [],
};
