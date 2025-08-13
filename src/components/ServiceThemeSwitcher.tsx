import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'

type Service = {
  id: 'default' | 'music' | 'web' | 'photography' | 'video'
  name: string
  icon: string
  description: string
  color: string
}

const ServiceThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [previousTheme, setPreviousTheme] = React.useState(theme)
  const [isOpen, setIsOpen] = React.useState(false)

  // Handle click outside
  const switcherRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle theme change with animation
  const handleThemeChange = (newTheme: Service['id']) => {
    setPreviousTheme(theme)
    setTheme(newTheme)
    // Close the dropdown after a short delay to allow the animation to play
    setTimeout(() => setIsOpen(false), 500)
  }

  const services: Service[] = [
    {
      id: 'default',
      name: 'All Services',
      icon: '✨',
      description: 'Explore Our Complete Creative Suite',
      color: '#7CB342'
    },
    {
      id: 'music',
      name: 'Music',
      icon: '🎵',
      description: 'Audio Production & Sound Design',
      color: '#FF6B6B'
    },
    {
      id: 'web',
      name: 'Web Development',
      icon: '💻',
      description: 'Digital Solutions & Innovation',
      color: '#7CB342'
    },
    {
      id: 'photography',
      name: 'Photography',
      icon: '📷',
      description: 'Visual Storytelling & Art',
      color: '#9C27B0'
    },
    {
      id: 'video',
      name: 'Video Production',
      icon: '🎬',
      description: 'Cinematic Content & Motion',
      color: '#E91E63'
    }
  ] as const

  return (
    <div className="fixed top-4 right-4 z-[9999]" ref={switcherRef}>
      {/* Theme Toggle Button */}
      <motion.button
        className="flex items-center space-x-2 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/10"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-xl">{services.find(s => s.id === theme)?.icon}</span>
        <span className="text-white text-sm font-medium">{services.find(s => s.id === theme)?.name}</span>
      </motion.button>

      {/* Theme Selector Dropdown */}
      <motion.div
        className="absolute top-12 right-0 mt-2 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 w-64"
        initial={{ opacity: 0, y: -10, pointerEvents: 'none' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -10,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
      >
      <div className="text-center mb-4">
        <h3 className="text-white text-sm font-semibold mb-1">Choose Your Experience</h3>
        <p className="text-gray-400 text-xs">Select a service theme</p>
      </div>
      
      <div className="space-y-3">
        {services.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => handleThemeChange(service.id)}
            style={{
              position: 'relative',
              overflow: 'hidden'
            }}
            className={`w-full p-3 rounded-xl text-left transition-all duration-300 ${
              theme === service.id
                ? 'bg-white/20 border border-white/30'
                : 'bg-white/5 hover:bg-white/10 border border-transparent'
            }`}
            whileHover={{ scale: 1.02, backgroundColor: `${service.color}10` }}
            whileTap={{ scale: 0.98 }}
            initial={{ backgroundColor: 'transparent' }}
            animate={{ 
              backgroundColor: theme === service.id ? `${service.color}20` : 'transparent',
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                className="text-2xl"
                animate={{
                  rotate: theme === service.id ? [0, 10, -10, 0] : 0,
                  scale: theme === service.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="text-white font-medium text-sm">{service.name}</h4>
                  {theme === service.id && (
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: service.color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </div>
                <p className="text-gray-400 text-xs mt-1">{service.description}</p>
              </div>
            </div>
            
            {/* Active theme gradient */}
            {theme === service.id && (
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(45deg, ${service.color}20, transparent)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            
            {/* Theme change ripple effect */}
            {previousTheme !== theme && theme === service.id && (
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{
                  scale: 2,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
                style={{
                  background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`,
                  borderRadius: "50%",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)"
                }}
                onAnimationComplete={() => setPreviousTheme(theme)}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Theme indicator */}
      <motion.div
        className="mt-4 p-2 rounded-lg text-center"
        style={{
          background: `linear-gradient(135deg, ${services.find(s => s.id === theme)?.color}20, transparent)`,
          border: `1px solid ${services.find(s => s.id === theme)?.color}40`
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-white text-xs font-medium">
          Current Theme: {services.find(s => s.id === theme)?.name}
        </p>
      </motion.div>
      </motion.div>
    </div>
  )
}

export default ServiceThemeSwitcher
