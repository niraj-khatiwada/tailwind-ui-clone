import { Inter as GoogleInter } from 'next/font/google'
import localFont from 'next/font/local'

const CabinetGrotesk = localFont({
  src: './CabinetGrotesk.ttf',
  variable: '--font-CG',
  display: 'swap',
  style: 'normal',
  weight: '100 1000',
})

const Inter = GoogleInter({
  variable: '--font-Inter',
  subsets: ['latin'],
  // display: 'swap',
})

export const fonts = [CabinetGrotesk, Inter]

export const combinedFontVariables = fonts
  .map((font) => `${font.variable}`)
  .join(' ')

export { CabinetGrotesk, Inter }
