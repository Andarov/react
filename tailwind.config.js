/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tintBlue: '#1C1E53'
      },
      maxWidth:{
        base: '1320px'
      },
      fontFamily:{
        'poppins': ['Poppins', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}