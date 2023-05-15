/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        table: ["Overpass"],
        header: ["Oswald"],
      },
      fontSize: {
        table: "0.5625rem",
      },
      lineHeight: {
        table: "0.6875",
      },
      colors: {
        table: "#FFFBFB",
        header: "#F4EDED",
      },
    },
  },
  plugins: [],
};
