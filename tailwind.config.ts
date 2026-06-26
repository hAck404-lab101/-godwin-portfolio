import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Space Grotesk', 'Manrope', 'sans-serif'],
      },
      colors: {
        premium: {
          obsidian: '#05040A',
          ink: '#0A0812',
          gold: '#D8B76A',
          champagne: '#F3E7C8',
          ivory: '#F7F2E8',
          violet: '#6D5DF6',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0, 0, 0, 0.28)',
        lift: '0 30px 100px rgba(0, 0, 0, 0.42)',
      },
    },
  },
  plugins: [],
};

export default config;
