import { useRef, useEffect, useMemo } from 'react'

export function useMemoizedValue<T>(value: T, delay: number = 500): T {
  const ref = useRef<T>(value)
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      ref.current = value
    }, delay)
    
    return () => clearTimeout(timeoutId)
  }, [value, delay])
  
  return useMemo(() => ref.current, [ref.current])
}

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    return () => clearTimeout(timeoutId)
  }, [value, delay])
  
  return debouncedValue
}

export function useThrottle<T>(value: T, limit: number = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastRan = useRef(Date.now())
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value)
        lastRan.current = Date.now()
      }
    }, limit - (Date.now() - lastRan.current))
    
    return () => clearTimeout(handler)
  }, [value, limit])
  
  return throttledValue
}
