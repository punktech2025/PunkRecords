import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  CameraIcon, 
  VideoCameraIcon, 
  PhotoIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  CalendarIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const PhotoVideo = () => {
  const features = [
    {
      icon: CameraIcon,
      title: "Professional Photography",
      description: "High-quality photography services with state-of-the-art equipment and creative vision.",
      color: "text-red-400"
    },
    {
      icon: VideoCameraIcon,
      title: "Cinematography",
      description: "Professional video production and cinematography for all types of content.",
      color: "text-red-500"
    },
    {
      icon: PhotoIcon,
      title: "Creative Direction",
      description: "Expert creative direction to bring your vision to life through visual storytelling.",
      color: "text-red-600"
    }
  ]

  const services = [
    {
      name: "Punk Product",
      description: "Professional product photography services",
      features: ["E-commerce Photography", "Product Catalog Shoots", "Lifestyle Photography", "Studio Photography"]
    },
    {
      name: "Punk Service",
      description: "Event and service photography",
      features: ["Corporate Events", "Product Launches", "Trade Shows", "Service Documentation"]
    },
    {
      name: "Punk Weddings",
      description: "Wedding photography and videography",
      features: ["Wedding Photography", "Wedding Videography", "Engagement Shoots", "Wedding Films"]
    }
  ]

  const styles = [
    "Portrait", "Landscape", "Street", "Documentary", "Fashion", "Architecture", "Nature", "Abstract", "Minimalist", "Vintage"
  ]

  return (
    <>
      <Helmet>
        <title>Photography & Videography - Punk Records</title>
        <meta name="description" content="Professional photography and videography services including product photography, events, and wedding coverage." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white relative pt-20">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
                <CameraIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Photography & Videography
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
                Capturing moments that tell your story through stunning visuals and compelling narratives
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {styles.map((style, index) => (
                <span
                  key={style}
                  className="px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium"
                >
                  {style}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
                Our Photography & Video Services
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Three specialized divisions working together to capture your vision perfectly
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-red-300">
                    {service.name}
                  </h3>
                  <p className="text-red-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-red-200">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-20 px-4 bg-red-800/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
                Why Choose Punk Visual Stories?
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                We combine technical expertise with artistic vision to create visuals that inspire and engage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-2xl mb-6 group-hover:bg-red-600/30 transition-colors duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-red-300">
                    {feature.title}
                  </h3>
                  <p className="text-red-100 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-300">
                Professional Equipment
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                State-of-the-art gear to ensure your photos and videos look their absolute best
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Canon EOS R5", desc: "4K video & 45MP photos" },
                { name: "Sony FX3", desc: "Cinema-grade video camera" },
                { name: "DJI RS 3 Pro", desc: "Professional gimbal" },
                { name: "Profoto B10", desc: "Studio lighting system" }
              ].map((equipment, index) => (
                <motion.div
                  key={equipment.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 text-center"
                >
                  <h3 className="text-lg font-semibold mb-2 text-red-300">
                    {equipment.name}
                  </h3>
                  <p className="text-red-200 text-sm">
                    {equipment.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-300">
                Ready to Capture Your Story?
              </h2>
              <p className="text-xl mb-8 text-red-100">
                Let's discuss your project and create visuals that tell your story perfectly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <CameraIcon className="w-5 h-5" />
                  <span>Book a Session</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-red-500 text-red-300 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <SparklesIcon className="w-5 h-5" />
                  <span>View Portfolio</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PhotoVideo
