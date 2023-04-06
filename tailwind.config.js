/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alkatra: ["Alkatra", "cursive"],
        firaSans: ["Fira Sans", "sans-serif"],
      },
      colors: {
        primary_dark: "#6e07f3",
        primary_light: "#1a8cff",
        primary_blackish: "#141c3a",
        secondary: "#5be989",
      },
    },
  },
  plugins: [],
};
