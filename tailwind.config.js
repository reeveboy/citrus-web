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
      redLight: "#FC364D",
      redDark: "#EC364B",
      purpleLight: "#6898DF",
      purpleDark: "#4586E5",
      yellowLight: "#F1C40F",
      yellowDark: "#E0B710",
      logoColor: "#0E306C",
      sideBarActiveButton: "#E3EDFE",
      sideBarActiveButtonLine: "#0066FF",
    }),
    textColor: {
      logoColor: "#0E306C",
      sideBarButtons: "#C4CDDE",
      sideBarButtonHover: "#999FAB",
      sideBarActiveButton: "#80B2FE",
      sideBarActiveButtonHover: "#5196FF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
