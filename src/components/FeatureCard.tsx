"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
  delay?: number
}

const FeatureCard = ({ icon, title, description, color, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="feature-card group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-avocado-green/5 via-transparent to-avocado-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        className={`w-16 h-16 ${color} rounded-lg flex items-center justify-center mb-4 relative z-10`}
        whileHover={{
          scale: 1.1,
          rotate: [0, -10, 10, 0],
          boxShadow: "0 10px 30px rgba(124, 179, 66, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          {icon}
        </motion.div>
      </motion.div>

      <motion.h3
        className="text-white font-semibold text-lg mb-2 group-hover:text-avocado-green transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-avocado-text text-sm leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </motion.div>
  )
}

export default FeatureCard
