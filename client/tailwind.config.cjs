/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006340",
      },
      fontFamily: {
        ShareTechMono: ["Share Tech Mono", "monospace"],
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
