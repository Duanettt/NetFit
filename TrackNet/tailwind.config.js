/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: {
          DEFAULT: "#31363F",
          100: "#31363F",
          200: "#31363F",
        },
        blue: {
          DEFAULT: "#76ABAE",
          100: "#76ABAE",
          200: "#76ABAE",
        },
        white: {
          100: "#EEEEEE",
        },
        matte: "#1B1B1B",
        black: {
          DEFAULT: "#111111",
          100: "#151515",
        },
        customGray: "#CCCCCC",
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        jblack: ["Jumper-Black", "sans-serif"],
        jbold: ["Jumper-Bold", "sans-serif"],
        jlight: ["Jumper-Light", "sans-serif"],
        jregular: ["Jumper-Regular", "sans-serif"],
        jthin: ["Jumper-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};