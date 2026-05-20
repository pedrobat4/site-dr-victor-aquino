/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6edf3',
          100: '#ccdbe8',
          200: '#99b7d1',
          300: '#6693ba',
          400: '#336fa3',
          500: '#00203b',
          600: '#001c34',
          700: '#00182d',
          800: '#001426',
          900: '#00101f',
        },
        silver: {
          50: '#fafafa',
          100: '#f5f5f6',
          200: '#ebebed',
          300: '#e1e1e3',
          400: '#d7d7d9',
          500: '#b8b8ba',
          600: '#939395',
          700: '#6e6e70',
          800: '#49494b',
          900: '#242426',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
