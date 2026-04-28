/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Sveastranda brand palette, sampled from sveastranda.no
        brand: {
          50:  '#eef4fa',
          100: '#d8e6f3',
          200: '#a9c4e1',
          300: '#7aa2cf',
          400: '#3f78b4',
          500: '#004d91',
          600: '#003e7a',
          700: '#003366',
          800: '#002952',
          900: '#001f3d',
          ink: '#212529' // body text
        },
        accent: {
          red: '#c8102e' // sampled from logo
        }
      },
      fontFamily: {
        sans: [
          '"Open Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        display: [
          'Montserrat',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
};
