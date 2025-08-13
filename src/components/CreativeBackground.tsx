import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'

export const CreativeBackground: React.FC = () => {
  const { theme } = useTheme()
  const service = theme
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Service-specific animation objects
  const serviceObjects = {
    music: [
      { type: 'note', icon: '♪', color: '#FF6B6B' },
      { type: 'wave', icon: '~', color: '#4ECDC4' },
      { type: 'beat', icon: '●', color: '#45B7D1' },
      { type: 'harmony', icon: '♫', color: '#96CEB4' }
    ],
    web: [
      { type: 'code', icon: '</>', color: '#7CB342' },
      { type: 'database', icon: '⚡', color: '#4FC3F7' },
      { type: 'network', icon: '🔗', color: '#AB47BC' },
      { type: 'cloud', icon: '☁', color: '#FF9800' }
    ],
    photography: [
      { type: 'camera', icon: '📷', color: '#9C27B0' },
      { type: 'aperture', icon: '◉', color: '#FF5722' },
      { type: 'lens', icon: '🔍', color: '#2196F3' },
      { type: 'frame', icon: '▢', color: '#4CAF50' }
    ],
    video: [
      { type: 'play', icon: '▶', color: '#E91E63' },
      { type: 'film', icon: '🎬', color: '#00BCD4' },
      { type: 'light', icon: '💡', color: '#FFC107' },
      { type: 'story', icon: '📖', color: '#8BC34A' }
    ],
    default: [
      { type: 'creative', icon: '✨', color: '#7CB342' },
      { type: 'innovation', icon: '🚀', color: '#4FC3F7' },
      { type: 'art', icon: '🎨', color: '#AB47BC' },
      { type: 'tech', icon: '💻', color: '#FF9800' }
    ]
  }

  const currentObjects = serviceObjects[service]

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

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw floating objects
      currentObjects.forEach((obj, index) => {
        const time = Date.now() * 0.001
        const x = Math.sin(time + index) * 100 + canvas.width / 2
        const y = Math.cos(time + index * 0.5) * 50 + canvas.height / 2
        
        ctx.fillStyle = obj.color
        ctx.font = '24px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(obj.icon, x, y)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [service, currentObjects])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated background objects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      {/* Floating service icons */}
      <div className="absolute inset-0">
        {currentObjects.map((obj, index) => (
          <motion.div
            key={`${service}-${index}`}
            className="absolute text-4xl opacity-30"
            style={{ color: obj.color }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
          >
            {obj.icon}
          </motion.div>
        ))}
      </div>

      {/* Service-specific particle effects */}
      <div className="absolute inset-0">
        {service === 'music' && (
          <>
            <motion.div
              className="absolute w-2 h-2 bg-red-400 rounded-full"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: '20%',
                top: '80%',
              }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-teal-400 rounded-full"
              animate={{
                y: [0, -80, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{
                left: '80%',
                top: '70%',
              }}
            />
          </>
        )}

        {service === 'web' && (
          <>
            <motion.div
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: '30%',
                top: '60%',
              }}
            />
            <motion.div
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                x: [0, -40, 0],
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                left: '70%',
                top: '40%',
              }}
            />
          </>
        )}

        {service === 'photography' && (
          <>
            <motion.div
              className="absolute w-3 h-3 bg-purple-400 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: '50%',
                top: '30%',
              }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-orange-400 rounded-full"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              style={{
                left: '20%',
                top: '50%',
              }}
            />
          </>
        )}

        {service === 'video' && (
          <>
            <motion.div
              className="absolute w-2 h-2 bg-pink-400 rounded-full"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: '40%',
                top: '80%',
              }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                x: [0, -25, 0],
                y: [0, -15, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                left: '60%',
                top: '20%',
              }}
            />
          </>
        )}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
    </div>
  )
}
