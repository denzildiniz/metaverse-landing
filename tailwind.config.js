/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'sans': ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        'navy': {
          'primary': '#0f1419',
          'secondary': '#1a2332',
          'tertiary': '#243447',
          'accent': '#4fc3f7',
          'border': '#2c3e50',
        },
        'text': {
          'primary': '#ffffff',
          'secondary': '#b8c5d1',
          'accent': '#4fc3f7',
        }
      },
      boxShadow: {
        'navy': '0 10px 25px -3px rgba(79, 195, 247, 0.15), 0 4px 6px -2px rgba(79, 195, 247, 0.1)',
        'navy-lg': '0 25px 50px -12px rgba(79, 195, 247, 0.2)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #4fc3f7, 0 0 10px #4fc3f7, 0 0 15px #4fc3f7' },
          '100%': { boxShadow: '0 0 10px #4fc3f7, 0 0 20px #4fc3f7, 0 0 30px #4fc3f7' },
        }
      }
    },
  },
  plugins: [],
}
