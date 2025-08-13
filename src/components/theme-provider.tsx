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

  // Service-specific color schemes
  const serviceColors = {
    music: {
      primary: '#FF6B6B',      // Vibrant red for music energy
      secondary: '#4ECDC4',    // Teal for creativity
      accent: '#45B7D1',       // Blue for rhythm
      highlight: '#96CEB4'     // Mint for harmony
    },
    web: {
      primary: '#7CB342',      // Green for growth/tech
      secondary: '#4FC3F7',    // Blue for innovation
      accent: '#AB47BC',       // Purple for creativity
      highlight: '#FF9800'     // Orange for energy
    },
    photography: {
      primary: '#9C27B0',      // Purple for artistic vision
      secondary: '#FF5722',    // Deep orange for passion
      accent: '#2196F3',       // Blue for clarity
      highlight: '#4CAF50'     // Green for natural beauty
    },
    video: {
      primary: '#E91E63',      // Pink for cinematic appeal
      secondary: '#00BCD4',    // Cyan for motion
      accent: '#FFC107',       // Amber for lighting
      highlight: '#8BC34A'     // Light green for storytelling
    },
    default: {
      primary: '#7CB342',      // Your brand green
      secondary: '#4FC3F7',    // Your brand blue
      accent: '#AB47BC',       // Your brand purple
      highlight: '#FF9800'     // Your brand orange
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
