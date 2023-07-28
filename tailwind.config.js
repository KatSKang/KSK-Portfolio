// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //   animation: {
      //     fadeIn: "fadeIn 2s ease-in forwards",
      //     fadeUp: "fadeUp 1s ease-in-out forwards",
      //     fadeDown: "fadeDown 1s ease-in-out forwards",
      //     fadeOut: "fadeOut 1s ease-in-out forwards",
      //   },
      //   keyframes: {
      //     fadeIn: {
      //       "0%": { opacity: 0 },
      //       "100%": { opacity: 1 },
      //     },
      //     fadeUp: {
      //       "0%": { opacity: 0, transform: "translateY(30px)" },
      //       "100%": { opacity: 1, transform: "translateY(0px)" },
      //     },
      //     fadeDown: {
      //       "0%": { opacity: 0, transform: "translateY(-30px)" },
      //       "100%": { opacity: 1, transform: "translateY(0px)" },
      //     },
      //     fadeOut: {
      //       "0%": { opacity: 1 },
      //       "100%": { opacity: 0 },
      //     },
      //   },
      colors: {
        paz: {
          100: "#fdf3f4",
          200: "#fadcdf",
          300: "#f7c6ca",
          400: "#f4b0b5",
          500: "#f199a0",
          600: "#ee838c",
        },
      },
    },
  },

  // variants: {
  //   animation: ["motion-safe"],
  // },

  plugins: [],
};
