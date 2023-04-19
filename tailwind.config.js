/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pry: {
          100: '#22252D',
          500: '#2A2D35',
          900: '#E2E2E2',
        },
        grey: '#F7F7F7',
        sec: '#26E8C6',
        darkRed: '#ED7777',
        yel: '#d7bb3e',
      },
      boxShadow: {
        dark: '0 5px 15px rgba(0, 0, 0, 0.2)',
        light: ' 0 5px 15px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        md: '1008px',
        tm: '768px',
        im: '558px',
      },
    },
  },
  plugins: [],
}
