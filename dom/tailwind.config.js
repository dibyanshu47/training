/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          gry: '#282828',
          sec: '#181818',
          prm: '#121212'
        }
      }
    },
  },
  plugins: [],
}
