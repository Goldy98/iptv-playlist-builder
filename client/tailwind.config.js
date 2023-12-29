/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montSerrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#5d2e8c",

        secondary: "#ff6666",

        accent: "#2ec4b6",

        neutral: "#010502",

        "base-100": "#fbf8ff",

        info: "#00daff",

        success: "#CCFF66",

        warning: "#fbbf24",

        error: "#dc2626",
      },
    },
  },
  plugins: [],
};
