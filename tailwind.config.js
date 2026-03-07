/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32',
        secondary: '#808080',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter:['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        // Container max widths
        'container': '1440px',
        'content': '1280px',
        'narrow': '1024px',
      },
      screens: {
        // Custom breakpoints for your responsive design
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px', // Your design width
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'dropdown': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'button': '4px',
        'card': '8px',
        'input': '4px',
      },
      gap: {

      },
      backgroundImage:{
        'gradient-green': 'linear-gradient(180deg, #2E7D32 0%, #005950 100%)',
        'banner-green': 'linear-gradient(90deg, rgba(27, 11, 0, 0.8) 0%, rgba(46, 125, 50, 0.8) 100%)',
      },

    },
  },
  plugins: [

  ],
}