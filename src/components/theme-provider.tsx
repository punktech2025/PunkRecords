'use client'

import * as React from 'react'
import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react'

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

  // Service-specific color schemes based on Punk Records branding - memoized for performance
  const serviceColors = useMemo(() => ({
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
  }), [])

  // Memoized theme setter to prevent unnecessary re-renders
  const setThemeOptimized = useCallback((newTheme: CreativeTheme) => {
    setTheme(newTheme)
  }, [])

  // Memoized dark mode toggle
  const toggleDark = useCallback(() => setIsDark(prev => !prev), [])

  useEffect(() => {
    // Apply theme colors to CSS variables - optimized to only run when theme changes
    const currentColors = serviceColors[theme]
    const root = document.documentElement
    
    // Batch DOM updates for better performance
    requestAnimationFrame(() => {
      root.style.setProperty('--theme-primary', currentColors.primary)
      root.style.setProperty('--theme-secondary', currentColors.secondary)
      root.style.setProperty('--theme-accent', currentColors.accent)
      root.style.setProperty('--theme-highlight', currentColors.highlight)
    })
    
    // Apply dark/light mode
    root.classList.toggle('dark', isDark)
  }, [theme, isDark, serviceColors])

  const value = useMemo(() => ({
    theme,
    setTheme: setThemeOptimized,
    isDark,
    toggleDark
  }), [theme, setThemeOptimized, isDark, toggleDark])

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

// Memoized theme setters for better performance
export const useMusicTheme = () => {
  const { setTheme } = useThemeContext()
  return useCallback(() => setTheme('music'), [setTheme])
}

export const useWebTheme = () => {
  const { setTheme } = useThemeContext()
  return useCallback(() => setTheme('web'), [setTheme])
}

export const usePhotographyTheme = () => {
  const { setTheme } = useThemeContext()
  return useCallback(() => setTheme('photography'), [setTheme])
}

export const useVideoTheme = () => {
  const { setTheme } = useThemeContext()
  return useCallback(() => setTheme('video'), [setTheme])
}
