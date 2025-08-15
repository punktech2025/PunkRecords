"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useLocation } from "react-router-dom"

interface ServiceTheme {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  matrixSymbols: string[]
  matrixColor: string
}

interface Service {
  id: string
  name: string
  shortName: string
  path: string
  theme: ServiceTheme
}

// Service themes configuration
const SERVICE_THEMES: Record<string, ServiceTheme> = {
  'web-dev': {
    primary: '#10B981',
    secondary: '#059669',
    accent: '#34D399',
    background: '#064E3B',
    text: '#F0FDF4',
    matrixSymbols: ['</>', '{ }', '[ ]', '()', '=>', '&&', '||', '++', '--'],
    matrixColor: '#10B981'
  },
  'photo-video': {
    primary: '#DC2626',
    secondary: '#B91C1C',
    accent: '#EF4444',
    background: '#450A0A',
    text: '#FEF2F2',
    matrixSymbols: ['📷', '🎥', '📹', '🎬', '🎭', '✨', '🌟', '💫', '⭐'],
    matrixColor: '#DC2626'
  },
  'graphics-editing': {
    primary: '#8B5CF6',
    secondary: '#7C3AED',
    accent: '#A78BFA',
    background: '#2E1065',
    text: '#F3F4F6',
    matrixSymbols: ['🎨', '✏️', '🖌️', '🎭', '🎪', '🎨', '✨', '🌟', '💎'],
    matrixColor: '#8B5CF6'
  },
  'music': {
    primary: '#F97316',
    secondary: '#EA580C',
    accent: '#FB923C',
    background: '#7C2D12',
    text: '#FFF7ED',
    matrixSymbols: ['🎵', '🎶', '🎸', '🎹', '🎺', '🥁', '🎤', '🎧', '🎼'],
    matrixColor: '#F97316'
  },
  'social-marketing': {
    primary: '#3B82F6',
    secondary: '#2563EB',
    accent: '#60A5FA',
    background: '#1E3A8A',
    text: '#EFF6FF',
    matrixSymbols: ['📱', '📊', '📈', '🎯', '🚀', '💡', '📢', '🔗', '📲'],
    matrixColor: '#3B82F6'
  }
}

interface MatrixSymbol {
  x: number
  y: number
  symbol: string
  speed: number
  opacity: number
  shadow: number
  id: number
}

const ServiceMatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const [currentService, setCurrentService] = useState<Service | null>(null)
  const location = useLocation()

  useEffect(() => {
    // Determine current service based on path
    const path = location.pathname
    if (path.startsWith('/services/')) {
      const serviceId = path.split('/')[2] // Extract service ID from path
      const theme = SERVICE_THEMES[serviceId]
      if (theme) {
        setCurrentService({
          id: serviceId,
          name: serviceId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
          shortName: serviceId,
          path: path,
          theme: theme
        })
      } else {
        setCurrentService(null)
      }
    } else {
      setCurrentService(null)
    }
  }, [location.pathname])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix symbols array - reduced for better performance
    const symbols: MatrixSymbol[] = []
    let symbolId = 0

    // Create initial symbols - reduced count for performance
    const createSymbols = () => {
      const service = currentService
      const symbolsArray = service?.theme.matrixSymbols || ['P', 'U', 'N', 'K', 'R', 'E', 'C', 'O', 'R', 'D', 'S']
      
      // Reduced from 50 to 25 symbols for better performance
      for (let i = 0; i < 25; i++) {
        symbols.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          symbol: symbolsArray[Math.floor(Math.random() * symbolsArray.length)],
          speed: 0.3 + Math.random() * 1.5, // Reduced speed for smoother animation
          opacity: 0.1 + Math.random() * 0.9,
          shadow: Math.random() * 0.5,
          id: symbolId++
        })
      }
    }

    // Optimized animation loop
    const animate = () => {
      // Clear canvas with optimized fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw symbols
      symbols.forEach((symbol) => {
        // Update position
        symbol.y += symbol.speed
        
        // Reset symbol if it goes off screen
        if (symbol.y > canvas.height) {
          symbol.y = -20
          symbol.x = Math.random() * canvas.width
          symbol.opacity = 0.1 + Math.random() * 0.9
          symbol.shadow = Math.random() * 0.5
        }

        // Draw shadow trail with optimized opacity
        ctx.save()
        ctx.globalAlpha = symbol.shadow * 0.2
        ctx.fillStyle = currentService?.theme.matrixColor || '#00ff41'
        ctx.font = '14px monospace' // Reduced font size for performance
        ctx.fillText(symbol.symbol, symbol.x + 1, symbol.y + 1)
        ctx.restore()

        // Draw main symbol
        ctx.save()
        ctx.globalAlpha = symbol.opacity
        ctx.fillStyle = currentService?.theme.matrixColor || '#00ff41'
        ctx.font = '14px monospace'
        ctx.fillText(symbol.symbol, symbol.x, symbol.y)
        ctx.restore()
      })

      // Continue animation with optimized frame rate
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize symbols
    createSymbols()

    // Start animation with optimized frame rate
    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [currentService])

  // Only render canvas when service changes
  if (!currentService) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30" // Reduced opacity for better performance
      style={{ 
        willChange: 'transform',
        transform: 'translateZ(0)' // Force hardware acceleration
      }}
    />
  )
}

export default ServiceMatrixBackground
