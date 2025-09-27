/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./components/*.html",
    "./*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#5bb55b',
          500: '#35452B',
          600: '#2d3a24',
          700: '#252f1f',
          800: '#1f261b',
          900: '#1a2018',
        },
        accent: {
          50: '#faf9f7',
          100: '#f2f0eb',
          200: '#e5e1d7',
          300: '#d4cdb9',
          400: '#C7B090',
          500: '#b8a082',
          600: '#a08a6f',
          700: '#85725d',
          800: '#6d5e4e',
          900: '#584d41',
        },
        secondary: {
          50: '#fefefe',
          100: '#fcfcfc',
          200: '#f8f7f4',
          300: '#f2f0eb',
          400: '#E9E7DE',
          500: '#ddd9ce',
          600: '#c7c1b4',
          700: '#a8a095',
          800: '#8a827a',
          900: '#716b64',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Cabin', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}