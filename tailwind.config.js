/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Syne-Regular', 'sans-serif'],
        'syne-bold': ['Syne-Bold', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      fontFamily: ['responsive'],
    },
  },
  plugins: [],
}
