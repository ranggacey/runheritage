/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        navy: '#052132',       /* Primary Deep Navy */
        teal: '#085C55',       /* Vibrant Teal Green */
        amber: '#774805',      /* Heritage Amber Brown */
        cream: '#FDF4E3',      /* Warm Cream Canvas */
        'navy-card': 'rgba(5, 33, 50, 0.75)',
        'teal-glow': 'rgba(8, 92, 85, 0.35)',
        'amber-glow': 'rgba(119, 72, 5, 0.35)',
        'cream-surface': '#F8ECC9'
      },
      fontFamily: {
        sans: ['MontserratCustom', 'Montserrat', 'sans-serif'],
        montserrat: ['MontserratCustom', 'Montserrat', 'sans-serif'],
        display: ['ImpactCustom', 'Impact', 'sans-serif'],
        impact: ['ImpactCustom', 'Impact', 'sans-serif']
      },
      backgroundImage: {
        'noise-pattern': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.04\"/%3E%3C/svg%3E')",
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(8, 92, 85, 0.3) 0%, rgba(5, 33, 50, 0) 70%)'
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.02)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite'
      }
    }
  },
  plugins: [],
}
