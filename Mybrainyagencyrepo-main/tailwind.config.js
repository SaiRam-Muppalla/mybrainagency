/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', lg: '2rem' },
      screens: { xl: '1120px' },
    },
    extend: {
      colors: {
        brand: {
          ...colors.red,
        },
        base: colors.black,
        surface: colors.white,
      },
      spacing: {
        3.5: '0.875rem',
        4.5: '1.125rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        20: '5rem',
      },
      maxWidth: {
        prose: '65ch',
      },
      fontSize: {
        'fluid-h1': ['clamp(32px, 4.5vw, 48px)', { lineHeight: '1.1' }],
        'fluid-h2': ['clamp(24px, 3.5vw, 36px)', { lineHeight: '1.2' }],
        'fluid-h3': ['clamp(20px, 2.8vw, 28px)', { lineHeight: '1.3' }],
        'fluid-body': ['clamp(16px, 1.6vw, 18px)', { lineHeight: '1.65' }],
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      gridTemplateColumns: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
