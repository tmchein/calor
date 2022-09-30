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
    },
  },
  plugins: [],
};
