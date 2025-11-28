/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'os-dark': '#1a1a1a',
        'os-gray': '#2d2d2d',
        'os-light-gray': '#3a3a3a',
        'os-blue': '#3682F4',
        'os-light-blue': '#66A3FF',
      },
      backdropBlur: {
        'os': '20px',
      },
    },
  },
  plugins: [],
}


