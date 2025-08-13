"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from "./components/theme-provider"
import { CreativeBackground } from "./components/CreativeBackground"
import ServiceThemeSwitcher from "./components/ServiceThemeSwitcher"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Reveal from "./pages/Reveal"
import Protect from "./pages/Protect"
import Solutions from "./pages/Solutions"
import Newsroom from "./pages/Newsroom"

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-avocado-dark relative">
            {/* Creative background with service-specific animations */}
            <CreativeBackground />
            
            {/* Service theme switcher */}
            <ServiceThemeSwitcher />
            
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reveal" element={<Reveal />} />
                <Route path="/protect" element={<Protect />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/newsroom" element={<Newsroom />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App
