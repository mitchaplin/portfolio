const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
    },
    extend: {
      colors: {
        "bg-primary": "#1F1F20",
        "gray-light": "#b2bbcf",
        "gray-medium": "#767c85",
        "gray-darker": "#2a2a2c",
        "gray-dark": "#1F1F20",
        "gray-darkest": "#141414",
        "blue-darker": "#000f2e",
        "blue-darkest": "#000c24",
        "blue-dark": "#192742",
        "blue-light": "#009ac5",
      },
      rotate: {
        360: "360deg",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInAndBounce: "fadeIn 3s ease-out",
      },
      willChange: {
        projectCard: "border-color, opacity, transform",
        footerLink:  "border-color, transform",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
