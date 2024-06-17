/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E50914",
        secondary: "#FFFFFF",
        background: "#000000",
        accent: "#FFD700",
        neutral: "#808080",
        NeonBlue: "#3A86FF",
      },
      fontFamily: {
        header: ["Audiowide", "sans-serif"],
        body: ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [],
};
