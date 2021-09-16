module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#FC354C",
      secondary: "#0ABFBC",
      grad1: "#141E30",
      grad2: "#243B55",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
