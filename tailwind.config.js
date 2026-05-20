/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          blue: '#0369a1',
          darkblue: '#003265',
          lightgray: '#f8fafc',
          gray: '#e2e8f0'
        }
      },
      backgroundImage: {
        'gradient-cyan-teal': 'linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)',
        'gradient-teal-blue': 'linear-gradient(135deg, #14b8a6 0%, #0369a1 100%)',
        'gradient-deep-teal': 'linear-gradient(135deg, #003265 0%, #14b8a6 100%)'
      }
    }
  },
  plugins: []
}
