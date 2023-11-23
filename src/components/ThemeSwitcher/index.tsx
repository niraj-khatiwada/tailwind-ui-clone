'use client'

import React from 'react'
import { useTheme } from 'next-themes'

interface ThemeSwitcherChildrenProps {
  theme: string | undefined
  setTheme(theme: string | undefined): void
}

interface ThemeSwitcherProps {
  children?(props: ThemeSwitcherChildrenProps): React.ReactNode
}

function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { children } = props

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return children == null ? (
    <button
      onClick={function () {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    />
  ) : (
    children({ theme, setTheme })
  )
}

export default ThemeSwitcher
