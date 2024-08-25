/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#141414",
        "crimption": "#DC143C",
        'RubyRed': '#E0115F'
      }
    },
  },
  plugins: [],
}

