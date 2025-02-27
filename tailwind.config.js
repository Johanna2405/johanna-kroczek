/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#1b1b1e",
      light: "#f5f4ed",
      orange: "#f85c32",
      red: "#FF4F47",
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
