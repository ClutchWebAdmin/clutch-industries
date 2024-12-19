/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clutchBlue: {
          50: "#e1e3f5",
          100: "var(--secondaryBlue)",
          200: "#a0a7e0",
          250: "var(--highlight)",
          300: "#7d88d5",
          400: "#5c6bca",
          500: "#3A4AAA",
          600: "#2e3f8e",
          700: "#253575",
          800: "#1b275b",
          900: "#111940",
          950: "var(--secondaryBlue)",
          1000: "var(--primaryBlue)",
        },
      },
    },
  },
  plugins: [],
};
