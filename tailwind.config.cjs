/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      login: "#5b51de",
      "first-content": "#73737B",
      black: "#000000",
      "lift-blue": "#f0f7ff",
      "send-icon": "#0081FE",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
