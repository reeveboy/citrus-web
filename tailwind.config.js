module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#FC354C",
      secondary: "#0ABFBC",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      blueLight: "#00ACD3",
      blueDark: "#0098BA",
      emerald: "#0ABFBC",
      emeraldDark: "#0BAAA7",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
