import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'

const ServiceThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const services = [
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
  ]

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-4">
        <h3 className="text-white text-sm font-semibold mb-1">Choose Your Experience</h3>
        <p className="text-gray-400 text-xs">Select a service theme</p>
      </div>
      
      <div className="space-y-3">
        {services.map((service) => (
          <motion.button
            key={service.id}
            onClick={() => setTheme(service.id as any)}
            className={`w-full p-3 rounded-xl text-left transition-all duration-300 ${
              theme === service.id
                ? 'bg-white/20 border border-white/30'
                : 'bg-white/5 hover:bg-white/10 border border-transparent'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
  )
}

export default ServiceThemeSwitcher
