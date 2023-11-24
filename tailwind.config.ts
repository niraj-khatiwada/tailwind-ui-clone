import type { Config } from 'tailwindcss'

const WIDTHS = Object.freeze({
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1660px',
})

const config: Config = {
  darkMode: 'class',
  plugins: [],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        conicGradient1:
          'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
      },
      boxShadow: {
        xl: '2px 11px 16px rgba(15,23,42,.17),0 1px 6px rgba(15,23,42,.17),3px 23px 24px rgba(15,23,42,.17)',
      },
      colors: {
        primary: '#2563eb',
        secondary: '#3b82f6',
        black1: '#0f172a',
        white1: '#ffffff',
        gray1: '#f1f5f9',
        gray2: '#64748b',
      },
      fontFamily: {
        CG: ['var(--font-CG)'],
        Inter: ['var(--font-Inter)'],
      },
      screens: WIDTHS,
      maxWidth: WIDTHS,
    },
  },
}
export default config
