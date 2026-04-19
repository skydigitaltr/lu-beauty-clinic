import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#fffaf8',
        sand: '#f5e9e3',
        blush: '#eecdc6',
        rose: '#d79a98',
        champagne: '#d9c1a3',
        ink: '#463b39',
        taupe: '#9d8a84'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(121, 98, 89, 0.08)',
        card: '0 18px 40px rgba(71, 44, 36, 0.08)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(238,205,198,0.45), transparent 45%), radial-gradient(circle at 85% 20%, rgba(217,193,163,0.26), transparent 30%)'
      }
    }
  },
  plugins: []
};

export default config;
