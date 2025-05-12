/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // single HTML file
    "./src/**/*.{html,js}",      // all HTML and JS files in src/
    "./components/**/*.{html,js}" // components folder (optional)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
