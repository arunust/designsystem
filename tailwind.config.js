/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // Enable dark mode with .dark class
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.2' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        md: ['1.125rem', { lineHeight: '1.5' }],
        lg: ['1.25rem', { lineHeight: '1.5' }],
        xl: ['1.5rem', { lineHeight: '1.5' }],
        '2xl': ['1.875rem', { lineHeight: '1.2' }],
        '3xl': ['2.25rem', { lineHeight: '1.2' }],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        muted: 'var(--color-muted)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        danger: 'var(--color-danger)',
        success: 'var(--color-success)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '40px',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '2rem',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT: '0 2px 4px rgba(0,0,0,0.1)',
        md: '0 4px 6px rgba(0,0,0,0.1)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
      },
      // fontSize: {
      //   heading1: ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      //   heading2: ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      //   heading3: ['1.5rem', { lineHeight: '2rem' }], // 24px
      //   heading4: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
      //   heading5: ['1.125rem', { lineHeight: '1.5rem' }], // 18px
      //   heading6: ['1rem', { lineHeight: '1.5rem' }], // 16px
      // },
    },
    
  },
  safelist: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
