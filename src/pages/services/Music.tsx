import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  MusicalNoteIcon, 
  MicrophoneIcon, 
  SpeakerWaveIcon,
  PlayCircleIcon,
  ChartBarIcon,
  UserGroupIcon,
  CalendarIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const Music = () => {
  const features = [
    {
      icon: MusicalNoteIcon,
      title: "Professional Recording",
      description: "State-of-the-art recording studios with industry-standard equipment and acoustics.",
      color: "text-orange-400"
    },
    {
      icon: MicrophoneIcon,
      title: "Music Production",
      description: "Expert music production services from concept to final master.",
      color: "text-orange-500"
    },
    {
      icon: SpeakerWaveIcon,
      title: "Artist Development",
      description: "Comprehensive artist development and career guidance services.",
      color: "text-orange-600"
    }
  ]

  const services = [
    {
      name: "Punk Production",
      description: "Professional music production and arrangement",
      features: ["Beat Making", "Song Arrangement", "Mixing & Mastering", "Sound Design"]
    },
    {
      name: "Punk Recordings",
      description: "High-quality recording studio services",
      features: ["Vocal Recording", "Instrument Recording", "Live Session Recording", "Post-Production"]
    },
    {
      name: "Punk Affiliations",
      description: "Artist development and partnerships",
      features: ["Artist Management", "Label Partnerships", "Distribution Deals", "Marketing Support"]
    }
  ]

  const genres = [
    "Hip-Hop", "R&B", "Pop", "Rock", "Electronic", "Jazz", "Classical", "Folk", "Country", "Reggae"
  ]

  return (
    <>
      <Helmet>
        <title>Music Production - Punk Records</title>
        <meta name="description" content="Professional music production, recording, and artist development services at Punk Records Studio." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white relative pt-20">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 rounded-full mb-6">
                <MusicalNoteIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Music Production
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
                Where creativity meets technology to create unforgettable musical experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {genres.map((genre, index) => (
                <span
                  key={genre}
                  className="px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium"
                >
                  {genre}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-300">
                Our Music Services
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Three specialized divisions working together to bring your musical vision to life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-orange-800/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-orange-300">
                    {service.name}
                  </h3>
                  <p className="text-orange-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-orange-200">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
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
        <section className="relative z-10 py-20 px-4 bg-orange-800/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-300">
                Why Choose Punk Records Studio?
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                We combine artistic vision with technical excellence to create music that moves people
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600/20 rounded-2xl mb-6 group-hover:bg-orange-600/30 transition-colors duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-orange-300">
                    {feature.title}
                  </h3>
                  <p className="text-orange-100 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Equipment Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-300">
                Professional Studio Equipment
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                State-of-the-art gear to ensure your music sounds its absolute best
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Pro Tools HD", desc: "Industry-standard DAW" },
                { name: "Neumann U87", desc: "Professional condenser mic" },
                { name: "Universal Audio", desc: "Premium audio interfaces" },
                { name: "Genelec Monitors", desc: "Reference-grade speakers" }
              ].map((equipment, index) => (
                <motion.div
                  key={equipment.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-orange-800/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 text-center"
                >
                  <h3 className="text-lg font-semibold mb-2 text-orange-300">
                    {equipment.name}
                  </h3>
                  <p className="text-orange-200 text-sm">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-orange-300">
                Ready to Create Your Sound?
              </h2>
              <p className="text-xl mb-8 text-orange-100">
                Book your session and let's bring your musical vision to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <PlayCircleIcon className="w-5 h-5" />
                  <span>Book Studio Time</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <CalendarIcon className="w-5 h-5" />
                  <span>View Availability</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Music
