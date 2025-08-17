import React, { useState, useRef, useEffect } from 'react'

interface SEOImageProps {
  src: string
  alt: string
  title?: string
  width?: number
  height?: number
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
  sizes?: string
  quality?: number
}

const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  title,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '100vw',
  quality = 85
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!imgRef.current || priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [priority])

  // Generate WebP and fallback sources
  const getOptimizedSrc = (originalSrc: string, format: 'webp' | 'jpg' = 'jpg') => {
    const extension = format === 'webp' ? '.webp' : '.jpg'
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, extension)
  }

  const shouldLoad = priority || isInView

  return (
    <picture className={`block ${className}`}>
      {/* WebP source for modern browsers */}
      <source
        srcSet={shouldLoad ? getOptimizedSrc(src, 'webp') : undefined}
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback JPEG source */}
      <source
        srcSet={shouldLoad ? getOptimizedSrc(src, 'jpg') : undefined}
        type="image/jpeg"
        sizes={sizes}
      />
      
      {/* Main img element */}
      <img
        ref={imgRef}
        src={shouldLoad ? src : undefined}
        alt={alt}
        title={title}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          // Fallback to original src if optimized version fails
          const target = e.target as HTMLImageElement
          if (target.src !== src) {
            target.src = src
          }
        }}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
        // SEO and accessibility attributes
        itemProp="image"
        {...(title && { 'data-title': title })}
      />
      
      {/* Loading placeholder */}
      {!isLoaded && shouldLoad && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined,
          }}
        />
      )}
    </picture>
  )
}

export default SEOImage
