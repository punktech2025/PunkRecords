"use client"

import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { useTheme } from "../components/theme-provider"
import {
  CameraIcon,
  VideoCameraIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  ChartBarIcon,
  PencilIcon,
  MusicalNoteIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline"
import FeatureCard from "../components/FeatureCard"

const Home = () => {
  const { theme } = useTheme()

  // Service-specific content
  const serviceContent = {
    music: {
      title: "MUSIC PRODUCTION & AUDIO DESIGN",
      subtitle: "Creating Sonic Experiences",
      description: "Professional music production, sound design, and audio engineering services that bring your creative vision to life with cutting-edge technology and artistic excellence.",
      heroImage: "/music-production-1.png",
      features: [
        { icon: <MusicalNoteIcon className="w-8 h-8 text-white" />, title: "Music Production", description: "Full-service music production from concept to final master.", color: "bg-red-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Sound Design", description: "Custom sound effects and audio branding for your projects.", color: "bg-teal-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Audio Engineering", description: "Professional mixing, mastering, and post-production services.", color: "bg-blue-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Jingle Creation", description: "Memorable jingles and audio logos for brand recognition.", color: "bg-mint-500" }
      ]
    },
    web: {
      title: "WEB DEVELOPMENT & DIGITAL SOLUTIONS",
      subtitle: "Building Digital Excellence",
      description: "Cutting-edge web development, mobile apps, and digital solutions that drive business growth and create engaging user experiences for the modern digital landscape.",
      heroImage: "/web-development-1.png",
      features: [
        { icon: <CodeBracketIcon className="w-8 h-8 text-white" />, title: "Web Development", description: "Custom websites and web applications built with modern technologies.", color: "bg-green-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android.", color: "bg-blue-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "E-commerce Solutions", description: "Complete online store development with payment integration.", color: "bg-purple-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "UI/UX Design", description: "User-centered design that enhances engagement and conversion.", color: "bg-orange-500" }
      ]
    },
    photography: {
      title: "PHOTOGRAPHY & VISUAL STORYTELLING",
      subtitle: "Capturing Moments of Beauty",
      description: "Professional photography services that tell your story through compelling visuals, from corporate headshots to artistic portraits and product photography.",
      heroImage: "/photography-videography-1.png",
      features: [
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Portrait Photography", description: "Professional headshots and artistic portrait sessions.", color: "bg-purple-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Product Photography", description: "High-quality product images that showcase your offerings.", color: "bg-orange-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Event Coverage", description: "Comprehensive photography for corporate events and celebrations.", color: "bg-blue-500" },
        { icon: <MegaphoneIcon className="w-8 h-8 text-white" />, title: "Brand Photography", description: "Visual storytelling that strengthens your brand identity.", color: "bg-green-500" }
      ]
    },
    video: {
      title: "VIDEO PRODUCTION & CINEMATIC CONTENT",
      subtitle: "Bringing Stories to Life",
      description: "Professional video production services including corporate videos, promotional content, and cinematic storytelling that engages your audience and drives results.",
      heroImage: "/music-production-2.png",
      features: [
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Corporate Videos", description: "Professional corporate videos that communicate your message effectively.", color: "bg-pink-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Promotional Content", description: "Engaging promotional videos that boost your marketing campaigns.", color: "bg-cyan-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Event Videos", description: "Comprehensive video coverage of your important events.", color: "bg-amber-500" },
        { icon: <MegaphoneIcon className="w-8 h-8 text-white" />, title: "Social Media Content", description: "Short-form videos optimized for social media platforms.", color: "bg-light-green-500" }
      ]
    },
    default: {
      title: "CREATIVE DIGITAL SOLUTIONS",
      subtitle: "Innovation Meets Creativity",
      description: "Transform your brand with our comprehensive creative and marketing solutions tailored for the Indian market.",
      heroImage: "/web-development-1.png",
      features: [
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Video Production & Editing", description: "Professional video production, editing, and post-production services for corporate, promotional, and social media content.", color: "bg-avocado-blue" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Photography Services", description: "High-quality photography for products, events, corporate headshots, and brand storytelling across all industries.", color: "bg-avocado-purple" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Graphic Design", description: "Creative graphic design solutions including logos, branding, marketing materials, and digital assets for Indian businesses.", color: "bg-avocado-orange" },
        { icon: <MegaphoneIcon className="w-8 h-8 text-white" />, title: "Social Media Marketing", description: "Comprehensive social media strategy, content creation, and management tailored for Indian market preferences and trends.", color: "bg-avocado-green" }
      ]
    }
  }

  const currentContent = serviceContent[theme] || serviceContent.default

  return (
    <>
      <Helmet>
        <title>Punk Records - Creative Digital Solutions & Marketing Strategy</title>
        <meta
          name="description"
          content="Leading creative agency in Nagpur offering video production, photography, graphic design, social media marketing, and strategic marketing solutions for Indian businesses."
        />
        <meta
          name="keywords"
          content="video production, photography, graphic design, social media marketing, marketing strategy, digital marketing, creative agency, nagpur, punktech, india"
        />
        <meta property="og:title" content="Punk Records - Creative Digital Solutions & Marketing Strategy" />
        <meta
          property="og:description"
          content="Transform your brand with our comprehensive creative and marketing services in India."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section with enhanced animations and particles */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block"
                  >
                    {currentContent.title.split(' ').slice(0, 2).join(' ')}
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="gradient-text block"
                  >
                    {currentContent.title.split(' ').slice(2, 4).join(' ')}
                  </motion.span>
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="block"
                  >
                    {currentContent.title.split(' ').slice(4).join(' ')}
                  </motion.span>
                </motion.h1>

                <motion.h2
                  className="text-2xl md:text-3xl font-semibold text-avocado-green mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  {currentContent.subtitle}
                </motion.h2>

                <motion.p
                  className="text-avocado-text text-lg md:text-xl mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  {currentContent.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <Link to="/reveal" className="btn-primary inline-flex items-center space-x-2 group">
                    <span>EXPLORE SERVICES</span>
                    <motion.svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <motion.img
                    src={currentContent.heroImage}
                    alt={`Punk Records Creative Studio - ${currentContent.title}`}
                    className="w-full h-auto rounded-lg shadow-2xl hover-glow"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>

                {/* ... existing gradient animations ... */}
                <motion.div
                  className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-avocado-green/30 to-green-400/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-avocado-blue/30 to-blue-400/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.3, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Testimonial Section */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What Our Clients Say:</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-avocado-text text-lg mb-8 leading-relaxed">
                  "Punk Records transformed our brand presence completely. Their video production quality is
                  exceptional, and their understanding of the Indian market helped us connect with our audience like
                  never before."
                </p>
                <div className="bg-avocado-dark p-8 rounded-lg border border-avocado-light-gray">
                  <p className="text-avocado-green font-semibold mb-2">CLIENT FEEDBACK:</p>
                  <blockquote className="text-white text-lg italic">
                    "From concept to execution, Punk Records delivered beyond our expectations. Their strategic
                    marketing approach increased our social media engagement by 300% within just 3 months."
                  </blockquote>
                  <p className="text-avocado-green font-semibold mt-4">
                    RAJESH SHARMA • MARKETING DIRECTOR, TECH INNOVATIONS PVT LTD
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Production Section */}
        <section className="bg-gradient-to-br from-avocado-green/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Video Production & Photography:</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Professional video production and photography services that capture your brand's essence and tell
                compelling stories that resonate with Indian audiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-avocado-green/20 text-avocado-green px-4 py-2 rounded-full text-sm font-semibold">
                  Corporate Videos
                </span>
                <span className="bg-avocado-blue/20 text-avocado-blue px-4 py-2 rounded-full text-sm font-semibold">
                  Product Photography
                </span>
                <span className="bg-avocado-purple/20 text-avocado-purple px-4 py-2 rounded-full text-sm font-semibold">
                  Event Coverage
                </span>
                <span className="bg-avocado-orange/20 text-avocado-orange px-4 py-2 rounded-full text-sm font-semibold">
                  Social Media Content
                </span>
              </div>
              <Link to="/reveal" className="btn-primary inline-flex items-center space-x-2">
                <span>VIEW PORTFOLIO</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContent.features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                Affordable Creative Solutions for Every Business Size
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-avocado-dark p-8 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-avocado-green text-xl font-bold mb-4">Startup Package</h3>
                  <p className="text-3xl font-bold text-white mb-2">₹25,000</p>
                  <p className="text-avocado-text mb-6">per month</p>
                  <ul className="text-avocado-text text-left space-y-2">
                    <li>• Social Media Management</li>
                    <li>• Basic Graphic Design</li>
                    <li>• Content Creation</li>
                    <li>• Monthly Strategy Review</li>
                  </ul>
                </div>
                <div className="bg-avocado-dark p-8 rounded-lg border-2 border-avocado-green">
                  <h3 className="text-avocado-green text-xl font-bold mb-4">Professional Package</h3>
                  <p className="text-3xl font-bold text-white mb-2">₹75,000</p>
                  <p className="text-avocado-text mb-6">per month</p>
                  <ul className="text-avocado-text text-left space-y-2">
                    <li>• Everything in Startup</li>
                    <li>• Video Production</li>
                    <li>• Photography Services</li>
                    <li>• Advanced Marketing Strategy</li>
                  </ul>
                </div>
                <div className="bg-avocado-dark p-8 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-avocado-green text-xl font-bold mb-4">Enterprise Package</h3>
                  <p className="text-3xl font-bold text-white mb-2">₹1,50,000</p>
                  <p className="text-avocado-text mb-6">per month</p>
                  <ul className="text-avocado-text text-left space-y-2">
                    <li>• Everything in Professional</li>
                    <li>• Dedicated Account Manager</li>
                    <li>• Custom Campaign Development</li>
                    <li>• Priority Support</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marketing Strategy Section */}
        <section className="bg-gradient-to-br from-avocado-green/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Strategic Marketing Solutions:</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Data-driven marketing strategies designed specifically for Indian businesses, helping you reach your
                target audience effectively and maximize your return on investment.
              </p>
              <Link to="/protect" className="btn-primary inline-flex items-center space-x-2">
                <span>GET STRATEGY CONSULTATION</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
