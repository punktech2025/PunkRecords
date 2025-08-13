"use client"

import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { NewspaperIcon, CalendarIcon, UserIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const Newsroom = () => {
  const newsItems = [
    {
      id: 1,
      title: "Punk Records Expands Creative Services Across Maharashtra",
      excerpt:
        "Leading creative agency announces expansion of services to serve more businesses across Maharashtra with comprehensive digital solutions.",
      date: "2024-01-15",
      author: "Press Team",
      category: "Expansion",
      image: "/placeholder.svg?height=300&width=400&text=Business+Expansion",
    },
    {
      id: 2,
      title: "New Music Production Studio Opens in Nagpur",
      excerpt:
        "State-of-the-art music production facility now available for artists and labels seeking professional recording services.",
      date: "2024-01-10",
      author: "Studio Team",
      category: "Facility",
      image: "/placeholder.svg?height=300&width=400&text=Music+Studio",
    },
    {
      id: 3,
      title: "Partnership with Local E-commerce Businesses",
      excerpt:
        "Strategic partnerships with local retailers to provide comprehensive digital marketing and web development services.",
      date: "2024-01-05",
      author: "Partnership Team",
      category: "Partnership",
      image: "/placeholder.svg?height=300&width=400&text=Business+Partnership",
    },
    {
      id: 4,
      title: "Launch of New Social Media Marketing Packages",
      excerpt:
        "Introducing affordable social media marketing packages designed specifically for small and medium businesses in India.",
      date: "2023-12-20",
      author: "Marketing Team",
      category: "Services",
      image: "/placeholder.svg?height=300&width=400&text=Social+Media+Marketing",
    },
    {
      id: 5,
      title: "Digital Marketing Trends Report 2024 for Indian Businesses",
      excerpt:
        "Comprehensive analysis of digital marketing trends and opportunities for businesses in the Indian market.",
      date: "2023-12-15",
      author: "Research Team",
      category: "Research",
      image: "/placeholder.svg?height=300&width=400&text=Marketing+Research",
    },
    {
      id: 6,
      title: "Client Success Story: 400% Growth in Online Sales",
      excerpt:
        "How our comprehensive digital marketing strategy helped a local retailer achieve remarkable growth in online sales.",
      date: "2023-12-10",
      author: "Success Team",
      category: "Success Story",
      image: "/placeholder.svg?height=300&width=400&text=Success+Story",
    },
  ]

  const categories = ["All", "Expansion", "Facility", "Partnership", "Services", "Research", "Success Story"]

  return (
    <>
      <Helmet>
        <title>Punk Records News - Latest Updates & Creative Insights</title>
        <meta
          name="description"
          content="Stay updated with the latest news, service announcements, and creative insights from Punk Records. Company updates, project highlights, and industry trends."
        />
        <meta
          name="keywords"
          content="creative agency news, digital marketing insights, web development updates, music production news, punk records announcements, punktech, nagpur"
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-bg py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="gradient-text">NEWSROOM</span>
              </h1>
              <p className="text-avocado-text text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Stay updated with the latest news, service announcements, and creative insights from Punk Records. Get
                the latest information about our creative innovations and company milestones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="bg-avocado-dark py-8 border-b border-avocado-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-avocado-light-gray text-avocado-text hover:border-avocado-green hover:text-avocado-green transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Latest News & Updates</h2>

              {/* Featured Article */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={newsItems[0].image || "/placeholder.svg"}
                    alt={newsItems[0].title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-avocado-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {newsItems[0].category}
                    </span>
                    <div className="flex items-center text-avocado-text text-sm">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {new Date(newsItems[0].date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{newsItems[0].title}</h3>
                  <p className="text-avocado-text mb-6 leading-relaxed">{newsItems[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-avocado-text text-sm">
                      <UserIcon className="w-4 h-4 mr-2" />
                      {newsItems[0].author}
                    </div>
                    <Link
                      to={`/news/${newsItems[0].id}`}
                      className="text-avocado-green hover:text-green-400 font-semibold flex items-center"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.slice(1).map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-avocado-gray rounded-lg overflow-hidden border border-avocado-light-gray hover:border-avocado-green transition-colors duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-avocado-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-avocado-text text-sm mb-3">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>

                    <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-avocado-green transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-avocado-text text-sm mb-4 line-clamp-3">{item.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-avocado-text text-sm">
                        <UserIcon className="w-4 h-4 mr-2" />
                        {item.author}
                      </div>
                      <Link
                        to={`/news/${item.id}`}
                        className="text-avocado-green hover:text-green-400 font-semibold flex items-center text-sm"
                      >
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Company Resources */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Company Resources</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Access our company information, creative resources, and media materials for journalists and partners.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <NewspaperIcon className="w-12 h-12 text-avocado-green mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Media Kit</h3>
                  <p className="text-avocado-text text-sm mb-4">
                    Download our complete media kit with logos, images, and company information.
                  </p>
                  <Link to="/media-kit" className="text-avocado-green hover:text-green-400 font-semibold">
                    Download Kit
                  </Link>
                </div>

                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <UserIcon className="w-12 h-12 text-avocado-green mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Media Contacts</h3>
                  <p className="text-avocado-text text-sm mb-4">
                    Connect with our media relations team for interviews and inquiries.
                  </p>
                  <Link to="/contact" className="text-avocado-green hover:text-green-400 font-semibold">
                    Contact Us
                  </Link>
                </div>

                <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-light-gray">
                  <CalendarIcon className="w-12 h-12 text-avocado-green mx-auto mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Events</h3>
                  <p className="text-avocado-text text-sm mb-4">
                    Find upcoming events, workshops, and creative showcases.
                  </p>
                  <Link to="/events" className="text-avocado-green hover:text-green-400 font-semibold">
                    View Events
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-br from-avocado-green/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter to receive the latest news, creative insights, and industry trends directly
                in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-avocado-gray border border-avocado-light-gray rounded-md text-white placeholder-avocado-text focus:outline-none focus:border-avocado-green"
                />
                <button className="btn-primary whitespace-nowrap">Subscribe</button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Newsroom
