/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif'],
        opensans: ['"Open Sans", sans-serif'],
        roboto: ['"Roboto", sans-serif'],
      },
    },
  },
  plugins: [],
};
