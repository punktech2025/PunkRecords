import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSrc, setCurrentSrc] = useState<string>()

  useEffect(() => {
    setIsLoading(true)
    setCurrentSrc(undefined)

    const img = new Image()
    img.src = src
    img.onload = () => {
      setIsLoading(false)
      setCurrentSrc(src)
    }
  }, [src])

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="placeholder"
            className="absolute inset-0 bg-gray-200 animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        {currentSrc && (
          <motion.img
            key="image"
            src={currentSrc}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover ${className}`}
            loading={priority ? "eager" : "lazy"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}