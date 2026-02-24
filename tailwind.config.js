/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gradient: {
          start: '#000000',
          mid: '#0f0f1e',
          end: '#1a0a2e',
          accent: '#7c3aed',
          light: '#a78bfa',
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #0f0f1e 40%, #1a0a2e 100%)',
        'gradient-hero': 'linear-gradient(to bottom, #0a0a0a 0%, #0f0f1e 30%, #1a0a2e 100%)',
        'gradient-card': 'linear-gradient(135deg, #0f0f1e 0%, #1a0a2e 100%)',
      },
    },
  },
  plugins: [],
}
