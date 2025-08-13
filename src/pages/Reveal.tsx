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
  EyeIcon,
} from "@heroicons/react/24/outline"
import FeatureCard from "../components/FeatureCard"

const Reveal = () => {
  return (
    <>
      <Helmet>
        <title>Punk Records Portfolio - Our Creative Work & Projects</title>
        <meta
          name="description"
          content="Explore our portfolio of web development, photography, videography, music production, and digital marketing projects. See our creative work in action."
        />
        <meta
          name="keywords"
          content="portfolio, web development projects, photography portfolio, videography work, music production, digital marketing campaigns, punk records, punktech, nagpur"
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
                  <span className="gradient-text">OUR PORTFOLIO:</span>
                  <br />
                  CREATIVE EXCELLENCE
                </h1>
                <p className="text-avocado-text text-lg md:text-xl mb-8 leading-relaxed">
                  Discover our diverse portfolio of creative projects spanning web development, photography,
                  videography, music production, and digital marketing campaigns that have helped businesses across
                  India achieve their goals.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/contact" className="btn-primary">
                    VIEW FULL PORTFOLIO
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    START YOUR PROJECT
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
                  src="/photography-videography-1.png"
                  alt="Punk Records Photography and Videography Portfolio"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Categories */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Creative Services Portfolio</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                Explore our comprehensive range of creative services and see how we've helped businesses across various
                industries achieve their digital and creative goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ComputerDesktopIcon className="w-8 h-8 text-white" />}
                title="Web Development"
                description="Modern, responsive websites and web applications built with cutting-edge technologies. From e-commerce platforms to corporate websites."
                color="bg-avocado-blue"
                delay={0}
              />
              <FeatureCard
                icon={<CameraIcon className="w-8 h-8 text-white" />}
                title="Photography & Videography"
                description="Professional photography and videography services for products, events, corporate content, and promotional materials."
                color="bg-avocado-purple"
                delay={0.2}
              />
              <FeatureCard
                icon={<MusicalNoteIcon className="w-8 h-8 text-white" />}
                title="Music Production"
                description="Complete music production services including recording, mixing, mastering, and music video production for artists and labels."
                color="bg-avocado-orange"
                delay={0.4}
              />
              <FeatureCard
                icon={<MegaphoneIcon className="w-8 h-8 text-white" />}
                title="Social Media Marketing"
                description="Comprehensive social media strategies, content creation, and campaign management across all major platforms."
                color="bg-avocado-green"
                delay={0.6}
              />
              <FeatureCard
                icon={<ChartBarIcon className="w-8 h-8 text-white" />}
                title="Marketing Strategy"
                description="Data-driven marketing strategies and campaigns designed to increase brand awareness and drive business growth."
                color="bg-avocado-blue"
                delay={0.8}
              />
              <FeatureCard
                icon={<EyeIcon className="w-8 h-8 text-white" />}
                title="Brand Identity"
                description="Complete brand identity design including logos, visual guidelines, and brand strategy development for businesses."
                color="bg-avocado-purple"
                delay={1.0}
              />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Featured Projects</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                Take a closer look at some of our most successful projects and see how we've helped businesses transform
                their digital presence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">E-commerce Platform - Fashion Retailer</h3>
                  <p className="text-avocado-text mb-4">
                    Complete e-commerce solution with product photography, promotional videos, and digital marketing
                    campaign that increased online sales by 400%.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Modern responsive website design</li>
                    <li>• Professional product photography</li>
                    <li>• Social media marketing campaign</li>
                    <li>• SEO optimization and analytics</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Project Value: ₹3,50,000</div>
                </div>

                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">Music Album Production - Independent Artist</h3>
                  <p className="text-avocado-text mb-4">
                    Complete album production including recording, mixing, mastering, music videos, and digital
                    distribution strategy.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Professional studio recording</li>
                    <li>• Music video production</li>
                    <li>• Digital distribution setup</li>
                    <li>• Social media promotion</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Project Value: ₹1,25,000</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">Restaurant Chain - Digital Marketing</h3>
                  <p className="text-avocado-text mb-4">
                    Comprehensive digital marketing strategy including food photography, promotional videos, and social
                    media campaigns across 5 locations.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Food photography and styling</li>
                    <li>• Promotional video content</li>
                    <li>• Multi-location social media management</li>
                    <li>• Online ordering system integration</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Monthly Retainer: ₹45,000</div>
                </div>

                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">Tech Startup - Complete Brand Launch</h3>
                  <p className="text-avocado-text mb-4">
                    End-to-end brand launch including website development, corporate photography, promotional videos,
                    and digital marketing strategy.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Brand identity and website design</li>
                    <li>• Corporate photography sessions</li>
                    <li>• Explainer video production</li>
                    <li>• Launch marketing campaign</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Project Value: ₹2,75,000</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Client Results */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Measurable Results for Our Clients</h2>
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
                      <h3 className="text-white font-semibold mb-2">Average 300% Increase in Online Engagement</h3>
                      <p className="text-avocado-text">
                        Our social media marketing and content creation strategies consistently deliver significant
                        engagement improvements.
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
                      <h3 className="text-white font-semibold mb-2">95% Client Satisfaction Rate</h3>
                      <p className="text-avocado-text">
                        Our commitment to quality and client service ensures exceptional satisfaction across all
                        projects.
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
                      <h3 className="text-white font-semibold mb-2">Fast Project Delivery</h3>
                      <p className="text-avocado-text">
                        We deliver projects on time and within budget, with most web development projects completed
                        within 4-6 weeks.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/web-development-2.png"
                  alt="Web Development Portfolio Results"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Creative Project?</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss your creative needs and see how Punk Records can help bring your vision to life with our
                comprehensive creative services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  START YOUR PROJECT
                </Link>
                <Link to="/contact" className="btn-secondary">
                  VIEW FULL PORTFOLIO
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Reveal
