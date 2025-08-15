import React from 'react'
import { Link } from 'react-router-dom'
import { Motion } from './animation-provider'

interface LogoProps {
  variant?: 'default' | 'small' | 'medium' | 'large'
  className?: string
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '' }) => {
  const sizes = {
    small: 'w-[2.625rem] h-[2.625rem]',
    default: 'w-[4.2rem] h-[4.2rem]',
    medium: 'w-[3.5rem] h-[3.5rem]',
    large: 'w-[6.3rem] h-[6.3rem]'
  }

  const logoVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.02,
    }
  }

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <Motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{
          duration: 0.2,
          ease: "easeOut"
        }}
        className={`relative ${sizes[variant]} group`}
      >
        <Motion.div
          className={`${sizes[variant]} relative flex items-center justify-center`}
        >
          <Motion.img
            src="/Logo_Punk_Records-removebg-preview_Nero_AI_Image_Upscaler_Photo_Face.png"
            alt="Punk Records"
            className={`${sizes[variant]} object-contain relative z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            loading="eager"
          />
        </Motion.div>
        
        {/* Optimized glow effect with reduced blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 via-[#FFA000]/15 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </Motion.div>
    </Link>
  )
}

export default Logo
