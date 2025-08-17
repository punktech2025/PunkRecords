import { Motion } from '../../components/animation-provider'
import { Helmet } from 'react-helmet-async'
import MSMEStartupBanner from '../../components/MSMEStartupBanner'
import { 
  MusicalNoteIcon, 
  MicrophoneIcon, 
  SpeakerWaveIcon,
  PlayCircleIcon,
  CalendarIcon
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
        <title>Music Studio Nagpur | Recording Studio | Music Production | Punk Records</title>
        <meta name="description" content="Professional music studio and recording facility in Nagpur. Song recording, album production, bollywood music, classical music, voice over recording, dubbing studio, mixing mastering services in Maharashtra." />
        <meta name="keywords" content="music studio nagpur, recording studio nagpur, music production nagpur, sound recording nagpur, audio recording nagpur, music recording studio nagpur, professional recording studio nagpur, song recording nagpur, album recording nagpur, jingle recording nagpur, voice over recording nagpur, dubbing studio nagpur, mixing mastering studio nagpur, music composition nagpur, background music creation nagpur, sound design nagpur, audio post production nagpur, bollywood music recording nagpur, classical music recording nagpur, devotional music recording nagpur, folk music recording nagpur, marathi music recording nagpur, hindi song recording nagpur, instrumental music recording nagpur, professional music equipment nagpur, music production software nagpur, audio mixing console nagpur, studio monitors nagpur, microphone rental nagpur, singer recording studio nagpur, musician recording studio nagpur, band recording studio nagpur, artist recording studio nagpur, music producer nagpur, sound engineer nagpur, civil lines nagpur, sitabuldi nagpur, dharampeth nagpur, sadar nagpur, itwari nagpur, kamptee nagpur, hingna nagpur, katol nagpur, wardha, chandrapur, gondia, bhandara, amravati, akola, yavatmal, gadchiroli, punktech music, punk records studio" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Music Studio Nagpur | Recording Studio | Music Production | Punk Records" />
        <meta property="og:description" content="Professional music studio and recording facility in Nagpur offering song recording, music production, and audio services." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://punktech.in/services/music" />
        <meta property="og:image" content="https://punktech.in/music-production-1.png" />
        <meta property="og:site_name" content="Punk Records Creative Studio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@punktechstudio" />
        <meta name="twitter:title" content="Music Studio Nagpur | Recording Studio | Punk Records" />
        <meta name="twitter:description" content="Professional music studio and recording facility in Nagpur" />
        <meta name="twitter:image" content="https://punktech.in/music-production-1.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <link rel="canonical" href="https://punktech.in/services/music" />
        
        {/* Structured Data for Music Studio Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Music Studio & Recording Services Nagpur",
            "description": "Professional music studio and recording services in Nagpur including song recording, music production, voice over recording, and audio post production.",
            "provider": {
              "@type": "Organization",
              "name": "Punk Records Creative Studio",
              "url": "https://punktech.in",
              "logo": "https://punktech.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nagpur",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "telephone": "+91-74477-76766",
              "email": "Vansh.Rajak@punktech.in"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Nagpur, Maharashtra, India"
            },
            "serviceType": "Music Production",
            "category": "Recording Studio"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white relative pt-20">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Motion.div
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
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium"
                >
                  {genre}
                </span>
              ))}
            </Motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Motion.div
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
            </Motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Motion.div
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
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-20 px-4 bg-orange-800/10">
          <div className="max-w-7xl mx-auto">
            <Motion.div
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
            </Motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Motion.div
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
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Equipment Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Motion.div
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
            </Motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Pro Tools HD", desc: "Industry-standard DAW" },
                { name: "Neumann U87", desc: "Professional condenser mic" },
                { name: "Universal Audio", desc: "Premium audio interfaces" },
                { name: "Genelec Monitors", desc: "Reference-grade speakers" }
              ].map((equipment, index) => (
                <Motion.div
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
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Motion.div
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
            </Motion.div>
          </div>
        </section>

        {/* Comprehensive Music Services Keywords Section */}
        <section className="relative z-10 py-20 px-4 bg-orange-800/10">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-300">
                Complete Music Studio Services in Nagpur
              </h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
                Professional music recording studio serving Nagpur, Wardha, Chandrapur, Gondia, Bhandara, Amravati, Akola, Yavatmal, and Gadchiroli with state-of-the-art equipment and expert sound engineering.
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Recording Studio Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-orange-800/20 p-6 rounded-lg border border-orange-300"
              >
                <h3 className="text-orange-300 font-bold text-xl mb-4">Recording Studio Services</h3>
                <ul className="text-orange-100 space-y-1 text-sm">
                  <li>• Music Studio Nagpur - Professional Recording</li>
                  <li>• Song Recording Nagpur - Single Track Production</li>
                  <li>• Album Recording - Complete Album Production</li>
                  <li>• Voice Over Recording - Professional Narration</li>
                  <li>• Dubbing Studio Nagpur - Audio Synchronization</li>
                  <li>• Jingle Recording - Commercial Audio Production</li>
                  <li>• Background Music Creation - Custom Compositions</li>
                </ul>
              </Motion.div>

              {/* Music Genre Specialization */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-orange-800/20 p-6 rounded-lg border border-orange-300"
              >
                <h3 className="text-orange-300 font-bold text-xl mb-4">Music Genre Specialization</h3>
                <ul className="text-orange-100 space-y-1 text-sm">
                  <li>• Bollywood Music Recording - Film Music Production</li>
                  <li>• Classical Music Recording - Traditional Indian Music</li>
                  <li>• Marathi Music Recording - Regional Language Music</li>
                  <li>• Devotional Music Recording - Spiritual Audio</li>
                  <li>• Folk Music Recording - Traditional Folk Songs</li>
                  <li>• Hindi Song Recording - Popular Music Production</li>
                  <li>• Instrumental Music Recording - Pure Instrumental</li>
                </ul>
              </Motion.div>

              {/* Audio Engineering Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-orange-800/20 p-6 rounded-lg border border-orange-300"
              >
                <h3 className="text-orange-300 font-bold text-xl mb-4">Audio Engineering Services</h3>
                <ul className="text-orange-100 space-y-1 text-sm">
                  <li>• Mixing Mastering Studio - Audio Post Production</li>
                  <li>• Sound Design Nagpur - Custom Audio Effects</li>
                  <li>• Music Composition - Original Music Creation</li>
                  <li>• Audio Recording - High-Quality Sound Capture</li>
                  <li>• Sound Recording - Professional Audio Services</li>
                  <li>• Music Producer Nagpur - Complete Music Direction</li>
                  <li>• Sound Engineer - Technical Audio Expertise</li>
                </ul>
              </Motion.div>
            </div>

            {/* Location Coverage */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center bg-orange-800/20 p-8 rounded-lg border border-orange-300"
            >
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Serving Music Artists Across Maharashtra</h3>
              <p className="text-orange-100 mb-6">
                Professional music recording services across Civil Lines Nagpur, Sitabuldi, Dharampeth, Sadar, Itwari, Kamptee, Hingna, Katol and surrounding cities including Wardha, Chandrapur, Gondia, Bhandara, Amravati, Akola, Yavatmal, Gadchiroli
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-xs">Singer Recording Studio</span>
                <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-xs">Musician Recording Studio</span>
                <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-xs">Band Recording Studio</span>
                <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-xs">Artist Recording Studio</span>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* MSME & Startup Support Section */}
        <MSMEStartupBanner variant="service-specific" service="music" />
      </div>
    </>
  )
}

export default Music
