/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        // sm: "412px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
