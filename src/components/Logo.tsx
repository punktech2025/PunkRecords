import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'default' | 'small' | 'medium' | 'large'
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const sizes = {
    small: 'w-[2.625rem] h-[2.625rem]',  /* 5% larger than w-10 (2.5rem) */
    default: 'w-[4.2rem] h-[4.2rem]',    /* 5% larger than w-16 (4rem) */
    medium: 'w-[3.5rem] h-[3.5rem]',     /* Medium size for header readability */
    large: 'w-[6.3rem] h-[6.3rem]'       /* 5% larger than w-24 (6rem) */
  }

  const logoAnimation = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    whileHover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <motion.div
        {...logoAnimation}
        className={`relative ${sizes[variant]} group`}
      >
        <motion.div
          className={`${sizes[variant]} relative flex items-center justify-center`}
        >
          {/* No fallback text as requested */}
          
          <motion.img
            src="/Logo_Punk_Records-removebg-preview_Nero_AI_Image_Upscaler_Photo_Face.png"
            alt="Punk Records"
            className={`${sizes[variant]} object-contain relative z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/30 via-[#FFA000]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </Link>
  )
}

export default Logo
