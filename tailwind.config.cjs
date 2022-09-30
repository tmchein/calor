/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "hard-orange": "#ff9501",
        "light-sunny-orange": "#f9d773",
      },
      backgroundImage: {
        "food-pattern": "url('/icons/i-like-food.svg')",
        "food-pattern-white": "url('/icons/i-like-food-white.svg')",
      },
    },
  },
  plugins: [],
};
