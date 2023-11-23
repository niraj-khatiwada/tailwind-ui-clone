import { Inter as GoogleInter } from 'next/font/google'
import localFont from 'next/font/local'

const CabinetGrotesk = localFont({
  src: './CabinetGrotesk.ttf',
  variable: '--font-CG',
})
const Inter = GoogleInter({
  weight: ['400', '500'],
  variable: '--font-Inter',
  subsets: ['latin'],
})

export const fonts = [CabinetGrotesk, Inter]

export const combinedFontVariables = fonts
  .map((font) => `${font.variable}`)
  .join(' ')

export { CabinetGrotesk, Inter }
