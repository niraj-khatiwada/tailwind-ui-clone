'use client'

import React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
