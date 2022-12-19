/** @type {import('tailwindcss').Config} */
const theme = {
  fontFamily: {
    sans: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ],
  },
  fontSize: {
    100: "clamp(0.61rem, calc(0.56rem + 0.22vw), 0.72rem)",
    200: "clamp(0.73rem, calc(0.66rem + 0.33vw), 0.90rem)",
    300: "clamp(0.88rem, calc(0.78rem + 0.49vw), 1.13rem)",
    400: "clamp(1.05rem, calc(0.91rem + 0.70vw), 1.41rem)",
    500: "clamp(1.26rem, calc(1.07rem + 0.97vw), 1.76rem)",
    600: "clamp(1.51rem, calc(1.24rem + 1.34vw), 2.20rem)",
    700: "clamp(1.81rem, calc(1.45rem + 1.82vw), 2.75rem)",
    800: "clamp(2.18rem, calc(1.69rem + 2.45vw), 3.43rem)",
    900: "clamp(2.18rem, calc(1.69rem + 2.45vw), 3.43rem)",
  },
  spacing: {
    100: "clamp(0.25rem, calc(0.23rem + 0.12vw), 0.31rem)",
    200: "clamp(0.44rem, calc(0.39rem + 0.24vw), 0.56rem)",
    300: "clamp(0.69rem, calc(0.61rem + 0.37vw), 0.88rem)",
    400: "clamp(0.88rem, calc(0.78rem + 0.49vw), 1.13rem)",
    500: "clamp(1.31rem, calc(1.17rem + 0.73vw), 1.69rem)",
    600: "clamp(1.75rem, calc(1.55rem + 0.98vw), 2.25rem)",
    700: "clamp(2.63rem, calc(2.33rem + 1.46vw), 3.38rem)",
    800: "clamp(3.50rem, calc(3.11rem + 1.95vw), 4.50rem)",
    900: "clamp(5.25rem, calc(4.66rem + 2.93vw), 6.75rem)",
  },
  colors: {
    coral: {
      100: "#E88E9B",
      90: "#EA99A5",
      80: "#EDA5AF",
      70: "#EFB0B9",
      60: "#F1BBC3",
      50: "#F4C6CD",
      40: "#F6D2D7",
      30: "#F8DDE1",
      20: "#FAE8EB",
      10: "#FDF4F5",
      3: "#FEFCFC",
    },
    biscuit: {
      100: "#E79B4F",
      90: "#E9A561",
      80: "#ECAF72",
      70: "#EEB984",
      60: "#F1C395",
      50: "#F3CDA7",
      40: "#F5D7B9",
      30: "#F8E1CA",
      20: "#FAEBDC",
      10: "#FDF5ED",
      3: "#FEFCFA",
    },
  },
  extend: {
    spacing: {
      measure: "60ch",
    },
  },
};

Object.keys(theme.spacing).forEach((key) => {
  theme.spacing[`s-${key}`] = `var(--s-${key})`; // "s-100": "var(--s-100)"
});

Object.keys(theme.fontSize).forEach((key) => {
  theme.fontSize[`fs-${key}`] = `var(--fs-${key})`; // "s-100": "var(--s-100)"
});

Object.entries(theme.colors).forEach(([colorName, nuances]) => {
  Object.keys(nuances).forEach((nuance) => {
    theme.colors[colorName][`c-${nuance}`] = `var(--${colorName}-${nuance})`;
  });
});

console.log(theme);

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  theme: theme,
  plugins: [],
};
