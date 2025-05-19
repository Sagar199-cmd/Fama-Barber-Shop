/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#D4AF37',
        tertiary: '#F5F5F5',
        'secondary-light': '#E6C85C',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg')",
      },
    },
  },
  plugins: [],
};