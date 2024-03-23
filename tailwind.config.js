/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      primary: "#000000 ",
      secondary: "#000000 ",
      accent: "#f25511",
      tertiary: "#f6f6f6",
      fourting: "#b0b0b0",
      fiveting: "#ffffff",
      sixting: "#e8e8e8"},
  },
  plugins: [],
}
}