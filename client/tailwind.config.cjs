/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#46513A",
        secondary: "#212A2F",
        third: "#006340",
        primaryLight: "#758761",
      },
      fontFamily: {
        ShareTechMono: ["Share Tech Mono", "monospace"],
        Jost: ["Jost", "sans-serif"],
      },
      animation: {
        comeRight: "comeFromRight 0.35s ease-in",
        comeLeft: "comeFromLeft 0.35s ease-in",
        fadeRight: "fadeFromRight 0.35s ease-in",
        fadeLeft: "fadeFromLeft 0.35s ease-in",
        fadeIn: "fadeIn 0.35s ease-in",
        fadeOut: "fadeOut 0.35s ease-in",
      },
      keyframes: {
        comeFromRight: {
          "0%": { transform: "translateX(1000px)" },
          "100%": { transform: "translateX(0px)" },
        },
        fadeFromRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-2000px)" },
        },
        fadeFromLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(2000px)" },
        },
        comeFromLeft: {
          "0%": { transform: "translateX(-1000px)" },
          "100%": { transform: "translateX(0px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
