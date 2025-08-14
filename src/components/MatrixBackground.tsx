import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useCallback, useRef } from "react"

// Music and tech symbols for the Matrix effect
const symbols = [
  // Music symbols
  "♪", "♫", "♬", "♭", "♮", "♯", "𝄞", "𝄢", "𝄡", "𝅘𝅥", "𝅘𝅥𝅮", "𝅘𝅥𝅯", "𝅘𝅥𝅰",
  // Tech symbols  
  "💻", "📱", "📷", "🎥", "⌚", "🖥️", "📺", "📡", "🎧", "🎤", "🎹", "🥁", "🎸",
  // Additional tech characters
  "⌘", "⌥", "⌃", "⇧", "⏎", "⌫", "⌦", "⇥", "⇤", "↑", "↓", "←", "→",
  // Binary and code symbols
  "0", "1", "{", "}", "[", "]", "(", ")", "<", ">", "/", "\\", "|", "&", "@", "#"
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
      duration: 4 + Math.random() * 6, // 4-10 second fall time for smoother effect
      opacity: 0.3 + Math.random() * 0.4, // 0.3-0.7 opacity
      size: 0.8 + Math.random() * 0.8, // 0.8-1.6rem font size
      startTime: Date.now(),
    }
  }, [])

  // Add symbols continuously
  const addSymbol = useCallback(() => {
    setFallingSymbols(prev => {
      const newSymbol = createSymbol()
      // Keep only active symbols (remove old ones to prevent memory leak)
      const activeSymbols = prev.filter(s => Date.now() - s.startTime < s.duration * 1000 + 1000)
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
    // Initial batch of symbols
    const initialSymbols: FallingSymbol[] = []
    const symbolCount = Math.min(80, Math.max(40, Math.floor(window.innerWidth / 20)))
    
    for (let i = 0; i < symbolCount; i++) {
      const symbol = createSymbol()
      // Stagger initial symbols across time
      symbol.startTime = Date.now() - Math.random() * 5000
      initialSymbols.push(symbol)
    }
    setFallingSymbols(initialSymbols)

    // Continuously add new symbols
    intervalRef.current = setInterval(addSymbol, 200) // Add symbol every 200ms

    // Cleanup old symbols periodically
    const cleanupInterval = setInterval(cleanupSymbols, 2000)

    // Handle window resize
    const handleResize = () => {
      // Don't regenerate all, just adjust the addition rate
      clearInterval(intervalRef.current!)
      const newRate = Math.max(100, Math.min(300, 5000 / window.innerWidth))
      intervalRef.current = setInterval(addSymbol, newRate)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      clearInterval(cleanupInterval)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [addSymbol, cleanupSymbols, createSymbol])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence mode="sync">
        {fallingSymbols.map((item) => (
          <div key={item.id} className="absolute" style={{ left: `${item.x}%` }}>
            {/* Shadow trail effect */}
            <motion.div
              className="absolute text-avocado-green/20 matrix-symbol matrix-trail select-none"
              style={{
                fontSize: `${item.size}rem`,
                filter: `blur(2px)`,
              }}
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: window.innerHeight + 50,
                opacity: [0, item.opacity * 0.3, item.opacity * 0.2, 0],
              }}
              transition={{
                duration: item.duration,
                ease: "linear",
                times: [0, 0.1, 0.8, 1],
              }}
            >
              {item.symbol}
            </motion.div>
            
            {/* Second trail for more depth */}
            <motion.div
              className="absolute text-avocado-green/30 matrix-symbol matrix-trail select-none"
              style={{
                fontSize: `${item.size}rem`,
                filter: `blur(1px)`,
                transform: `translateY(-15px)`,
              }}
              initial={{ y: -35, opacity: 0 }}
              animate={{
                y: window.innerHeight + 35,
                opacity: [0, item.opacity * 0.4, item.opacity * 0.3, 0],
              }}
              transition={{
                duration: item.duration,
                ease: "linear",
                times: [0, 0.1, 0.8, 1],
              }}
            >
              {item.symbol}
            </motion.div>
            
            {/* Third trail for even more depth */}
            <motion.div
              className="absolute text-avocado-green/10 matrix-symbol matrix-trail select-none"
              style={{
                fontSize: `${item.size}rem`,
                filter: `blur(3px)`,
                transform: `translateY(-30px)`,
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: window.innerHeight + 20,
                opacity: [0, item.opacity * 0.2, item.opacity * 0.1, 0],
              }}
              transition={{
                duration: item.duration,
                ease: "linear",
                times: [0, 0.1, 0.8, 1],
              }}
            >
              {item.symbol}
            </motion.div>
            
            {/* Main symbol */}
            <motion.div
              className="absolute text-avocado-green matrix-symbol matrix-glow matrix-container select-none"
              style={{
                fontSize: `${item.size}rem`,
                opacity: item.opacity,
                filter: `blur(${Math.random() * 0.2}px)`,
                textShadow: `
                  0 0 5px currentColor,
                  0 0 10px currentColor,
                  0 0 15px currentColor,
                  0 -20px 10px rgba(124, 179, 66, 0.3),
                  0 -40px 20px rgba(124, 179, 66, 0.2),
                  0 -60px 30px rgba(124, 179, 66, 0.1)
                `,
              }}
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: window.innerHeight + 50,
                opacity: [0, item.opacity, item.opacity * 0.9, 0],
              }}
              transition={{
                duration: item.duration,
                ease: "linear",
                times: [0, 0.05, 0.85, 1],
              }}
              onAnimationComplete={() => {
                // Remove symbol after animation completes
                setFallingSymbols(prev => prev.filter(s => s.id !== item.id))
              }}
            >
              {item.symbol}
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
      
      {/* Gradient overlay to fade symbols at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30 pointer-events-none" />
      
      {/* Additional atmospheric effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-avocado-green/5 to-transparent pointer-events-none" />
    </div>
  )
}

export default MatrixBackground
