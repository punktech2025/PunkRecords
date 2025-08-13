'use client'

import * as React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

// Creative service themes
type CreativeTheme = 'music' | 'web' | 'photography' | 'video' | 'default'

interface ThemeContextType {
  theme: CreativeTheme
  setTheme: (theme: CreativeTheme) => void
  isDark: boolean
  toggleDark: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<CreativeTheme>('default')
  const [isDark, setIsDark] = useState(true)

  // Service-specific color schemes based on Punk Records branding
  const serviceColors = {
    music: {
      primary: '#FFD700',      // Gold - brand color
      secondary: '#1A1A1A',    // Dark gray - headphones
      accent: '#FFC107',       // Amber - musical accents
      highlight: '#FFE57F'     // Light gold - highlights
    },
    web: {
      primary: '#FFD700',      // Gold
      secondary: '#212121',    // Darker gray
      accent: '#FFA000',       // Dark amber
      highlight: '#FFECB3'     // Light gold
    },
    photography: {
      primary: '#FFD700',      // Gold
      secondary: '#1A1A1A',    // Dark gray
      accent: '#FFB300',       // Medium amber
      highlight: '#FFF3E0'     // Very light gold
    },
    video: {
      primary: '#FFD700',      // Gold
      secondary: '#000000',    // Pure black
      accent: '#FFD740',       // Bright gold
      highlight: '#FFAB00'     // Dark amber
    },
    default: {
      primary: '#FFD700',      // Gold - main brand color
      secondary: '#1A1A1A',    // Dark gray - from logo
      accent: '#FFC107',       // Amber - complementary
      highlight: '#FFE57F'     // Light gold - highlights
    }
  }

  useEffect(() => {
    // Apply theme colors to CSS variables
    const currentColors = serviceColors[theme]
    document.documentElement.style.setProperty('--theme-primary', currentColors.primary)
    document.documentElement.style.setProperty('--theme-secondary', currentColors.secondary)
    document.documentElement.style.setProperty('--theme-accent', currentColors.accent)
    document.documentElement.style.setProperty('--theme-highlight', currentColors.highlight)
    
    // Apply dark/light mode
    document.documentElement.classList.toggle('dark', isDark)
  }, [theme, isDark])

  const toggleDark = React.useCallback(() => setIsDark(prev => !prev), [])

  const value = React.useMemo(() => ({
    theme,
    setTheme,
    isDark,
    toggleDark
  }), [theme, isDark])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Theme hooks
const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const useTheme = useThemeContext

export const useMusicTheme = () => {
  const { setTheme } = useThemeContext()
  return React.useCallback(() => setTheme('music'), [setTheme])
}

export const useWebTheme = () => {
  const { setTheme } = useThemeContext()
  return React.useCallback(() => setTheme('web'), [setTheme])
}

export const usePhotographyTheme = () => {
  const { setTheme } = useThemeContext()
  return React.useCallback(() => setTheme('photography'), [setTheme])
}

export const useVideoTheme = () => {
  const { setTheme } = useThemeContext()
  return React.useCallback(() => setTheme('video'), [setTheme])
}
