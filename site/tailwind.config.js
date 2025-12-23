module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0b1220',
        charcoal: '#121417',
        accent: {
          DEFAULT: '#FFD700',
          dark: '#FFC700',
          light: '#FFE55C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
