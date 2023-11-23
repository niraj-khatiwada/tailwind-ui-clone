import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

import { mergeClasses } from '@/utils/tailwind'
import ThemeProvider from '../providers/ThemeProvider'
import { combinedFontVariables, fonts } from '../assets/fonts'
import Head from './(root)/Head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body
        className={mergeClasses([
          `${fonts
            .map((font) => font.className)
            .join(' ')} ${combinedFontVariables}`,
        ])}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

export function generateMetadata(): Metadata {
  return {
    title:
      'Everything Starts as a Square - Get lost in the world of icon design',
    description:
      'A book and video course that teaches you how to design your own icons from scratch.',
  }
}
