const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-blue-500": "#039f9d",
        "brand-blue-300": "#33cbc9",
        "brand-gray-100": "#f5f6f9",
        "brand-gray-900": "#393939",
      },
      spacing: {
        "72": "18rem",
        "58": "15rem",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        tiny: "0.625rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    gradients: ["responsive", "hover"],
  },
  fontSize: {
    xss: "0.625rem",
  },
  plugins: [require("@tailwindcss/ui")],
};
