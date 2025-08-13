"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

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
        scrolled ? "glass-dark shadow-2xl shadow-avocado-green/5" : "bg-avocado-dark/95 backdrop-blur-sm"
      } border-b border-avocado-light-gray`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 bg-gradient-to-br from-avocado-green to-green-400 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-avocado-green/50"
            >
              <span className="text-white font-bold text-xs">PR</span>
            </motion.div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-white font-bold text-xl bg-gradient-to-r from-white to-avocado-green bg-clip-text"
            >
              Punk Records
            </motion.span>
          </Link>

          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden lg:flex items-center space-x-8">
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
                      ? "text-avocado-green"
                      : "text-avocado-text hover:text-avocado-green"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-avocado-green to-green-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button with enhanced animation */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-avocado-text hover:text-avocado-green p-2 rounded-lg hover:bg-avocado-gray/50 transition-all duration-200"
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
                          ? "text-avocado-green bg-avocado-green/10"
                          : "text-avocado-text hover:text-avocado-green hover:bg-avocado-gray/50"
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
