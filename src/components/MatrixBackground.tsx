import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useCallback, useRef } from "react"

// Reduced symbols for better performance
const symbols = [
  // Music symbols (reduced)
  "♪", "♫", "♬", "♭", "♮", "♯",
  // Tech symbols (reduced)
  "💻", "📱", "📷", "🎥", "🎧", "🎤", "🎹", "🥁", "🎸",
  // Binary and code symbols (reduced)
  "0", "1", "{", "}", "[", "]", "(", ")", "<", ">", "/", "\\"
]

interface FallingSymbol {
  id: string
  symbol: string
  x: number
  duration: number
  opacity: number
  size: number
  startTime: number
}

const MatrixBackground = () => {
  const [fallingSymbols, setFallingSymbols] = useState<FallingSymbol[]>([])
  const nextIdRef = useRef(0)
  const intervalRef = useRef<NodeJS.Timeout>()
  const animationRef = useRef<number>()

  // Generate a new symbol
  const createSymbol = useCallback((): FallingSymbol => {
    return {
      id: `symbol-${nextIdRef.current++}`,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      x: Math.random() * 100, // Percentage across screen
      duration: 6 + Math.random() * 4, // 6-10 second fall time for smoother effect
      opacity: 0.2 + Math.random() * 0.3, // Reduced opacity for better performance
      size: 0.8 + Math.random() * 0.6, // Reduced size variation
      startTime: Date.now(),
    }
  }, [])

  // Add symbols continuously with performance optimization
  const addSymbol = useCallback(() => {
    setFallingSymbols(prev => {
      const newSymbol = createSymbol()
      // Keep only active symbols (remove old ones to prevent memory leak)
      const activeSymbols = prev.filter(s => Date.now() - s.startTime < s.duration * 1000 + 1000)
      // Limit total symbols for better performance
      if (activeSymbols.length >= 40) return activeSymbols
      return [...activeSymbols, newSymbol]
    })
  }, [createSymbol])

  // Remove completed symbols
  const cleanupSymbols = useCallback(() => {
    setFallingSymbols(prev => 
      prev.filter(s => Date.now() - s.startTime < s.duration * 1000 + 1000)
    )
  }, [])

  useEffect(() => {
    // Initial batch of symbols - reduced count for better performance
    const initialSymbols: FallingSymbol[] = []
    const symbolCount = Math.min(30, Math.max(20, Math.floor(window.innerWidth / 40)))
    
    for (let i = 0; i < symbolCount; i++) {
      const symbol = createSymbol()
      // Stagger initial symbols across time
      symbol.startTime = Date.now() - Math.random() * 3000
      initialSymbols.push(symbol)
    }
    setFallingSymbols(initialSymbols)

    // Continuously add new symbols - reduced frequency for better performance
    intervalRef.current = setInterval(addSymbol, 300) // Increased from 200ms to 300ms

    // Cleanup old symbols periodically
    const cleanupInterval = setInterval(cleanupSymbols, 3000) // Increased from 2000ms to 3000ms

    // Handle window resize with throttling
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        // Don't regenerate all, just adjust the addition rate
        clearInterval(intervalRef.current!)
        const newRate = Math.max(200, Math.min(400, 6000 / window.innerWidth))
        intervalRef.current = setInterval(addSymbol, newRate)
      }, 100)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      clearInterval(cleanupInterval)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [addSymbol, cleanupSymbols, createSymbol])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      <AnimatePresence mode="sync">
        {fallingSymbols.map((symbol) => (
          <motion.div
            key={symbol.id}
            className="absolute text-white select-none"
            style={{
              left: `${symbol.x}%`,
              fontSize: `${symbol.size}rem`,
              opacity: symbol.opacity,
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: `calc(100vh + 50px)`,
              opacity: [0, symbol.opacity, symbol.opacity, 0],
            }}
            transition={{
              duration: symbol.duration,
              ease: "linear",
              times: [0, 0.1, 0.9, 1],
            }}
            onAnimationComplete={() => {
              // Clean up completed animations
              setFallingSymbols(prev => prev.filter(s => s.id !== symbol.id))
            }}
          >
            {symbol.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default MatrixBackground
