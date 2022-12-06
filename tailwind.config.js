/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#23242a",
      red: "#FF4A59",
      textGray700: "rgb(55 65 81)",
      gray: "rgb(107 114 128)",
      midBlue: "#03C9D7",
      green: "rgb(74 222 128)",
      midGray: "rgb(209 213 219)",
      mainBg: "rgba(0, 0, 0, 0.1)"
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
      md: { max: "720px" },
    },
  },
  plugins: [],
};
