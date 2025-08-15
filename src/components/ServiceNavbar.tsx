"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Motion } from "./animation-provider"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "./Logo"

interface ServiceMenuItem {
  name: string
  path: string
  description: string
}

interface Service {
  id: string
  name: string
  shortName: string
  path: string
  dynamicMenu: ServiceMenuItem[]
  staticMenu: ServiceMenuItem[]
}

// Service configurations with dynamic and static menus
const SERVICES: Service[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    shortName: 'Punk Software',
    path: '/services/web-dev',
    dynamicMenu: [
      {
        name: 'Punk Software',
        path: '/services/web-dev/software',
        description: 'Custom software development solutions'
      },
      {
        name: 'Punk Webapps',
        path: '/services/web-dev/webapps',
        description: 'Progressive web applications'
      },
      {
        name: 'Punk IT Solutions',
        path: '/services/web-dev/it-solutions',
        description: 'Comprehensive IT consulting and solutions'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  },
  {
    id: 'photo-video',
    name: 'Photography & Videography',
    shortName: 'Punk Visual Stories',
    path: '/services/photo-video',
    dynamicMenu: [
      {
        name: 'Punk Product',
        path: '/services/photo-video/product',
        description: 'Professional product photography services'
      },
      {
        name: 'Punk Service',
        path: '/services/photo-video/service',
        description: 'Event and service photography'
      },
      {
        name: 'Punk Weddings',
        path: '/services/photo-video/weddings',
        description: 'Wedding photography and videography'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  },
  {
    id: 'graphics-editing',
    name: 'Graphics & Editing',
    shortName: 'Punk Creative Studio',
    path: '/services/graphics-editing',
    dynamicMenu: [
      {
        name: 'Punk Graphics',
        path: '/services/graphics-editing/graphics',
        description: 'Professional graphic design services'
      },
      {
        name: 'Punk Editings',
        path: '/services/graphics-editing/editing',
        description: 'Video and photo editing services'
      },
      {
        name: 'Punk Creation',
        path: '/services/graphics-editing/creation',
        description: '2D and 3D image creation'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  },
  {
    id: 'music',
    name: 'Music Production',
    shortName: 'Punk Records Studio',
    path: '/services/music',
    dynamicMenu: [
      {
        name: 'Punk Production',
        path: '/services/music/production',
        description: 'Music production and recording services'
      },
      {
        name: 'Punk Recordings',
        path: '/services/music/recordings',
        description: 'Professional recording studio services'
      },
      {
        name: 'Punk Affiliations',
        path: '/services/music/affiliations',
        description: 'Artist development and partnerships'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  },
  {
    id: 'social-marketing',
    name: 'Social Media Marketing',
    shortName: 'Punk Marketing Hub',
    path: '/services/social-marketing',
    dynamicMenu: [
      {
        name: 'Punk Strategies',
        path: '/services/social-marketing/strategies',
        description: 'Digital marketing strategies and planning'
      },
      {
        name: 'Punk Campaigns',
        path: '/services/social-marketing/campaigns',
        description: 'Social media and digital campaigns'
      },
      {
        name: 'Punk Surveys',
        path: '/services/social-marketing/surveys',
        description: 'Market research and customer surveys'
      }
    ],
    staticMenu: [
      {
        name: 'Solutions',
        path: '/solutions',
        description: 'Industry solutions and case studies'
      },
      {
        name: 'Newsroom',
        path: '/newsroom',
        description: 'Latest news and updates'
      },
      {
        name: 'More',
        path: '/more',
        description: 'Additional resources and information'
      }
    ]
  }
]

const ServiceNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentService, setCurrentService] = useState<Service | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Determine current service based on path
    const path = location.pathname
    console.log('ServiceNavbar - Current path:', path)
    
    if (path.startsWith('/services/')) {
      const service = SERVICES.find(s => path.startsWith(s.path)) || 
                     SERVICES.find(s => path.includes(s.id))
      console.log('ServiceNavbar - Found service:', service?.name || 'null')
      setCurrentService(service || null)
    } else {
      console.log('ServiceNavbar - Not a service path, setting to null')
      setCurrentService(null)
    }
  }, [location.pathname])

  // Default navigation when not in a specific service
  const defaultNavItems = [
    { name: "SERVICES", path: "/services", description: "Our Services" },
    { name: "SOLUTIONS", path: "/solutions", description: "Industry Solutions" },
    { name: "NEWSROOM", path: "/newsroom", description: "Latest News" },
    { name: "TEAM", path: "/team", description: "Our Team" },
    { name: "CONTACT", path: "/contact", description: "Get In Touch" },
    { name: "MORE", path: "/more", description: "Additional Resources" },
  ]

  // Service-specific navigation
  const getServiceNavItems = () => {
    if (!currentService) return defaultNavItems

    return [
      ...currentService.dynamicMenu.map(item => ({
        name: item.name.toUpperCase(),
        path: item.path,
        description: item.description
      })),
      ...currentService.staticMenu.map(item => ({
        name: item.name.toUpperCase(),
        path: item.path,
        description: item.description
      }))
    ]
  }

  const navItems = getServiceNavItems()
  console.log('ServiceNavbar - Navigation items:', navItems.map(item => item.name))

  // Get safe CSS variables for the current service
  const getServiceStyles = () => {
    if (!currentService) {
      return {
        navBg: scrolled ? 'bg-gray-400' : 'bg-gray-400/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-yellow-600',
        buttonBg: 'bg-gray-500',
        buttonHover: 'hover:bg-gray-600',
        activeBg: 'bg-gray-200',
        activeText: 'text-gray-900'
      }
    }
    
    // Map service IDs to safe Tailwind classes
    const serviceColorMap = {
      'web-dev': {
        navBg: scrolled ? 'bg-green-600' : 'bg-green-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-green-600',
        buttonBg: 'bg-green-600',
        buttonHover: 'hover:bg-green-700',
        activeBg: 'bg-green-100',
        activeText: 'text-green-800'
      },
      'photo-video': {
        navBg: scrolled ? 'bg-red-600' : 'bg-red-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-red-600',
        buttonBg: 'bg-red-600',
        buttonHover: 'hover:bg-red-700',
        activeBg: 'bg-red-100',
        activeText: 'text-red-800'
      },
      'graphics-editing': {
        navBg: scrolled ? 'bg-purple-600' : 'bg-purple-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-purple-600',
        buttonBg: 'bg-purple-600',
        buttonHover: 'hover:bg-purple-700',
        activeBg: 'bg-purple-100',
        activeText: 'text-purple-800'
      },
      'music': {
        navBg: scrolled ? 'bg-orange-600' : 'bg-orange-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-orange-600',
        buttonBg: 'bg-orange-600',
        buttonHover: 'hover:bg-orange-700',
        activeBg: 'bg-orange-100',
        activeText: 'text-orange-800'
      },
      'social-marketing': {
        navBg: scrolled ? 'bg-blue-600' : 'bg-blue-600/95',
        textColor: 'text-gray-800',
        hoverColor: 'hover:text-blue-600',
        buttonBg: 'bg-blue-600',
        buttonHover: 'hover:bg-blue-700',
        activeBg: 'bg-blue-100',
        activeText: 'text-blue-800'
      }
    }
    
    return serviceColorMap[currentService.id as keyof typeof serviceColorMap] || serviceColorMap['web-dev']
  }

  const styles = getServiceStyles()

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${styles.navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="medium" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                key={item.name}
                  to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? `${styles.activeText} ${styles.activeBg}`
                      : `${styles.textColor} ${styles.hoverColor}`
                  }`}
                    title={item.description}
                >
                  {item.name}
                </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${styles.textColor} ${styles.hoverColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <Motion.div
              initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                      <Link
                        key={item.name}
                          to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive
                              ? `${styles.activeText} ${styles.activeBg}`
                        : `${styles.textColor} ${styles.hoverColor}`
                          }`}
                          onClick={() => setIsOpen(false)}
                    title={item.description}
                        >
                          {item.name}
                        </Link>
                )
              })}
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
    </nav>
  )
}

export default ServiceNavbar

