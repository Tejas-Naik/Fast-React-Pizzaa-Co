/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Overwrite whole fontFamily provided by tailwind
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    // Keep the values provided by tailwind and add/overwrite these
    extend: {
      height: {
        screen: "100dvh"
      }
    },
  },
  plugins: [],
}

