const defaultTheme = require("tailwindcss/defaultTheme");
const windmill = require("@windmill/react-ui/config");

module.exports = windmill({
  purge: ["src/**/*.{js, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bottom:
          "0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)",
      },
      flex: {
        2: "0.2",
        3: "0.3",
        4: "0.4",
        5: "0.5",
        6: "0.6",
        7: "0.7",
        8: "0.8",
        9: "0.9",
      },
    },
  },
});
