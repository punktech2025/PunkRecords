"use client"

import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import {
  ComputerDesktopIcon,
  CameraIcon,
  MusicalNoteIcon,
  MegaphoneIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline"
import FeatureCard from "../components/FeatureCard"

const Protect = () => {
  return (
    <>
      <Helmet>
        <title>Punk Records Services - Creative Solutions for Your Business</title>
        <meta
          name="description"
          content="Comprehensive creative services including web development, photography, videography, music production, and digital marketing for businesses in India."
        />
        <meta
          name="keywords"
          content="web development, photography services, videography, music production, social media marketing, digital marketing, creative agency, punk records, punktech, nagpur"
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  <span className="gradient-text">CREATIVE SERVICES</span>
                  <br />
                  THAT DRIVE RESULTS
                </h1>
                <p className="text-avocado-text text-lg md:text-xl mb-8 leading-relaxed">
                  From stunning websites to captivating visuals and strategic marketing campaigns, we provide
                  comprehensive creative solutions designed to elevate your brand and drive business growth across
                  India.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/contact" className="btn-primary">
                    GET STARTED
                  </Link>
                  <Link to="/portfolio" className="btn-secondary">
                    VIEW OUR WORK
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/social-media-marketing-1.png"
                  alt="Punk Records Social Media Marketing Services"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Core Creative Services</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                We offer a comprehensive suite of creative services designed to meet all your digital and marketing
                needs under one roof.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ComputerDesktopIcon className="w-8 h-8 text-white" />}
                title="Web Development"
                description="Modern, responsive websites and web applications built with the latest technologies. From e-commerce to corporate sites, we create digital experiences that convert."
                color="bg-avocado-blue"
                delay={0}
              />
              <FeatureCard
                icon={<CameraIcon className="w-8 h-8 text-white" />}
                title="Photography & Videography"
                description="Professional photography and videography services for products, events, corporate content, and promotional materials that tell your brand story."
                color="bg-avocado-purple"
                delay={0.2}
              />
              <FeatureCard
                icon={<MusicalNoteIcon className="w-8 h-8 text-white" />}
                title="Music Production"
                description="Complete music production services including recording, mixing, mastering, and music video production for artists, labels, and commercial projects."
                color="bg-avocado-orange"
                delay={0.4}
              />
              <FeatureCard
                icon={<MegaphoneIcon className="w-8 h-8 text-white" />}
                title="Social Media Marketing"
                description="Strategic social media management, content creation, and advertising campaigns across all major platforms to grow your online presence."
                color="bg-avocado-green"
                delay={0.6}
              />
              <FeatureCard
                icon={<ChartBarIcon className="w-8 h-8 text-white" />}
                title="Marketing Strategy"
                description="Data-driven marketing strategies and campaigns designed to increase brand awareness, generate leads, and drive business growth."
                color="bg-avocado-blue"
                delay={0.8}
              />
              <FeatureCard
                icon={<UserGroupIcon className="w-8 h-8 text-white" />}
                title="Brand Consulting"
                description="Complete brand strategy development, visual identity design, and brand positioning to help your business stand out in the market."
                color="bg-avocado-purple"
                delay={1.0}
              />
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Creative Process</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                We follow a proven process to ensure every project delivers exceptional results and exceeds your
                expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-avocado-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">Discovery & Strategy</h3>
                <p className="text-avocado-text">
                  We start by understanding your business goals, target audience, and creative requirements to develop a
                  comprehensive strategy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-avocado-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">Creative Development</h3>
                <p className="text-avocado-text">
                  Our team creates compelling content, designs, and campaigns tailored to your brand and optimized for
                  your target market.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-avocado-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">Launch & Optimize</h3>
                <p className="text-avocado-text">
                  We launch your project with ongoing support and optimization to ensure maximum performance and ROI.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Benefits */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/marketing-strategies-1.png"
                  alt="Marketing Strategy Services Benefits"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Punk Records</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-avocado-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">All-in-One Creative Solution</h3>
                      <p className="text-avocado-text">
                        Get all your creative needs met under one roof - from web development to marketing campaigns.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-avocado-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Local Market Expertise</h3>
                      <p className="text-avocado-text">
                        Deep understanding of the Indian market and consumer behavior for more effective campaigns.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-avocado-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Proven Track Record</h3>
                      <p className="text-avocado-text">
                        Successful projects across various industries with measurable results and satisfied clients.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-avocado-green/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Elevate Your Brand?</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss your creative needs and see how Punk Records can help transform your business with our
                comprehensive creative services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  START YOUR PROJECT
                </Link>
                <Link to="/contact" className="btn-secondary">
                  GET FREE CONSULTATION
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Protect
