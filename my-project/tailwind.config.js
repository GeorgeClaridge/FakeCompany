//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'green': '#E3EED2',
      'purple': '#6E61FF',
      'orange': '#FF611E',
      'white': '#fff',
      'black': '#031926',

 
    },
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif']
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}