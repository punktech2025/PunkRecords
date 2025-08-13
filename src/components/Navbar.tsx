"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "./Logo"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "PUNK REVEAL", path: "/reveal" },
    { name: "PUNK PROTECT", path: "/protect" },
    { name: "PUNK ENCRYPT", path: "/encrypt" },
    { name: "SOLUTIONS", path: "/solutions" },
    { name: "NEWSROOM", path: "/newsroom" },
    { name: "MORE", path: "/more" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-gradient-to-r from-gray-400 to-gray-500 shadow-2xl shadow-gray-400/20" : "bg-gradient-to-r from-gray-400/95 to-gray-500/95 backdrop-blur-sm"
      } border-b border-gray-300/30`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center h-16">
          <div className="flex w-full justify-between items-center">
            <Logo variant="medium" className="hover:opacity-90 transition-opacity" />
            
            {/* Mobile menu button with enhanced animation */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-[#B8860B] p-2 rounded-lg hover:bg-[#B8860B]/10 transition-all duration-200"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Bars3Icon className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
          
          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden lg:flex items-center justify-center space-x-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? "text-[#B8860B]"
                      : "text-gray-800 hover:text-[#B8860B]"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA000] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>


        </div>

        {/* Mobile Navigation with enhanced animations */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden glass-dark rounded-lg mt-2 mb-4"
            >
              <div className="py-4 space-y-4 px-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block text-sm font-medium transition-all duration-200 py-2 px-4 rounded-lg ${
                        location.pathname === item.path
                          ? "text-[#B8860B] bg-[#B8860B]/10"
                          : "text-gray-800 hover:text-[#B8860B] hover:bg-[#B8860B]/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
