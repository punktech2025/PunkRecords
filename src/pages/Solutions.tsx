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
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline"
import FeatureCard from "../components/FeatureCard"

const Solutions = () => {
  return (
    <>
      <Helmet>
        <title>Punk Records Solutions - Creative Services for Every Industry</title>
        <meta
          name="description"
          content="Comprehensive creative solutions including web development, photography, videography, music production, and digital marketing for Indian businesses."
        />
        <meta
          name="keywords"
          content="web development, photography, videography, music production, social media marketing, digital marketing, creative agency, punk records, punktech, nagpur"
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  <span className="gradient-text">CREATIVE SOLUTIONS</span>
                  <br />
                  FOR EVERY INDUSTRY
                </h1>
                <p className="text-avocado-text text-lg md:text-xl mb-8 leading-relaxed max-w-4xl mx-auto">
                  Tailored creative services designed for your specific industry needs. From startups to enterprises, we
                  provide comprehensive web development, visual content, and marketing solutions that drive results.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Link to="/contact" className="btn-primary">
                    EXPLORE SOLUTIONS
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industry-Specific Solutions</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                We understand that different industries have unique creative challenges. Our solutions are tailored to
                meet specific brand requirements and business objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BuildingStorefrontIcon className="w-8 h-8 text-white" />}
                title="Retail & E-commerce"
                description="Complete e-commerce websites, product photography, promotional videos, and social media campaigns to boost online sales."
                color="bg-avocado-blue"
                delay={0}
              />
              <FeatureCard
                icon={<MusicalNoteIcon className="w-8 h-8 text-white" />}
                title="Entertainment & Music"
                description="Professional music production, artist websites, promotional content, and social media management for musicians and labels."
                color="bg-avocado-purple"
                delay={0.2}
              />
              <FeatureCard
                icon={<ComputerDesktopIcon className="w-8 h-8 text-white" />}
                title="Technology & Startups"
                description="Modern web applications, corporate videos, brand photography, and digital marketing strategies for tech companies."
                color="bg-avocado-orange"
                delay={0.4}
              />
              <FeatureCard
                icon={<CameraIcon className="w-8 h-8 text-white" />}
                title="Hospitality & Tourism"
                description="Stunning property photography, promotional videos, booking websites, and social media content for hotels and resorts."
                color="bg-avocado-green"
                delay={0.6}
              />
              <FeatureCard
                icon={<MegaphoneIcon className="w-8 h-8 text-white" />}
                title="Healthcare & Wellness"
                description="Professional websites, educational videos, patient testimonials, and digital marketing for healthcare providers."
                color="bg-avocado-blue"
                delay={0.8}
              />
              <FeatureCard
                icon={<ChartBarIcon className="w-8 h-8 text-white" />}
                title="Education & Training"
                description="E-learning platforms, course videos, educational content, and digital marketing for educational institutions."
                color="bg-avocado-purple"
                delay={1.0}
              />
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Complete Service Packages</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                See how businesses across India are using Punk Records to transform their digital presence and
                accelerate growth with our comprehensive creative solutions.
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
                  <h3 className="text-white font-semibold text-xl mb-4">Digital Transformation Package</h3>
                  <p className="text-avocado-text mb-4">
                    Complete digital makeover including modern website, professional photography, promotional videos,
                    and social media setup.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Responsive website development</li>
                    <li>• Professional brand photography</li>
                    <li>• Promotional video production</li>
                    <li>• Social media account setup</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Starting from ₹1,50,000</div>
                </div>

                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">Content Creation Suite</h3>
                  <p className="text-avocado-text mb-4">
                    Monthly content creation including photography, videography, graphic design, and social media
                    management for consistent brand presence.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Monthly photo/video shoots</li>
                    <li>• Social media content creation</li>
                    <li>• Graphic design and branding</li>
                    <li>• Content calendar management</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">₹25,000/month</div>
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
                  <h3 className="text-white font-semibold text-xl mb-4">E-commerce Launch Package</h3>
                  <p className="text-avocado-text mb-4">
                    Complete e-commerce solution with product photography, promotional videos, website development, and
                    digital marketing strategy.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• E-commerce website development</li>
                    <li>• Product photography sessions</li>
                    <li>• Marketing video production</li>
                    <li>• Digital marketing strategy</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Starting from ₹2,00,000</div>
                </div>

                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <h3 className="text-white font-semibold text-xl mb-4">Music Production Package</h3>
                  <p className="text-avocado-text mb-4">
                    Complete music production including recording, mixing, mastering, music videos, and digital
                    distribution across platforms.
                  </p>
                  <ul className="text-avocado-text text-sm space-y-2">
                    <li>• Professional recording and mixing</li>
                    <li>• Music video production</li>
                    <li>• Digital distribution setup</li>
                    <li>• Artist website and promotion</li>
                  </ul>
                  <div className="mt-4 text-avocado-green font-semibold">Starting from ₹75,000</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Success Stories</h2>
              <p className="text-avocado-text text-xl max-w-3xl mx-auto">
                See how our clients have transformed their businesses with Punk Records creative solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="bg-avocado-gray p-8 rounded-lg border border-avocado-light-gray"
              >
                <div className="text-avocado-green text-4xl mb-4">"</div>
                <p className="text-avocado-text mb-6 italic leading-relaxed">
                  "Punk Records transformed our restaurant's online presence. The food photography and website design
                  increased our online orders by 300% within 3 months."
                </p>
                <div>
                  <p className="text-white font-semibold">Rajesh Sharma</p>
                  <p className="text-avocado-text text-sm">Owner, Spice Garden Restaurant, Mumbai</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-avocado-gray p-8 rounded-lg border border-avocado-light-gray"
              >
                <div className="text-avocado-green text-4xl mb-4">"</div>
                <p className="text-avocado-text mb-6 italic leading-relaxed">
                  "The music production quality and promotional videos helped us get signed with a major label. Their
                  creative vision is unmatched."
                </p>
                <div>
                  <p className="text-white font-semibold">Priya Mehta</p>
                  <p className="text-avocado-text text-sm">Lead Singer, Indie Band 'Echoes', Delhi</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Let's discuss how Punk Records can elevate your business with our comprehensive creative solutions and
                digital marketing expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  GET STARTED
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  VIEW PORTFOLIO
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Solutions
