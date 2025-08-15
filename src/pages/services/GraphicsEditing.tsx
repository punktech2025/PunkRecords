import { Motion } from '../../components/animation-provider'
import { Helmet } from 'react-helmet-async'
import { 
  PaintBrushIcon, 
  PhotoIcon, 
  VideoCameraIcon,
  SparklesIcon,
  CpuChipIcon,
  UserGroupIcon,
  CalendarIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const GraphicsEditing = () => {
  const features = [
    {
      icon: PaintBrushIcon,
      title: "Graphic Design",
      description: "Professional graphic design services with creative vision and technical expertise.",
      color: "text-purple-400"
    },
    {
      icon: PhotoIcon,
      title: "Photo Editing",
      description: "Advanced photo editing and retouching to make your images stand out.",
      color: "text-purple-500"
    },
    {
      icon: VideoCameraIcon,
      title: "Video Editing",
      description: "Professional video editing and post-production for compelling visual content.",
      color: "text-purple-600"
    }
  ]

  const services = [
    {
      name: "Punk Graphics",
      description: "Professional graphic design services",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Artwork"]
    },
    {
      name: "Punk Editings",
      description: "Video and photo editing services",
      features: ["Photo Retouching", "Video Post-Production", "Color Grading", "Motion Graphics"]
    },
    {
      name: "Punk Creation",
      description: "2D and 3D image creation",
      features: ["3D Modeling", "Illustration", "Character Design", "Concept Art"]
    }
  ]

  const tools = [
    "Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "After Effects", "Cinema 4D", "Blender", "Figma", "Sketch"
  ]

  return (
    <>
      <Helmet>
        <title>Graphics & Editing - Punk Records</title>
        <meta name="description" content="Professional graphic design, photo editing, video editing, and 3D creation services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white relative pt-20">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
                <PaintBrushIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Graphics & Editing
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
                Transforming ideas into stunning visual creations with cutting-edge design and editing tools
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                >
                  {tool}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-300">
                Our Creative Services
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Three specialized divisions working together to bring your creative vision to life
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-purple-800/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">
                    {service.name}
                  </h3>
                  <p className="text-purple-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-purple-200">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
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
        <section className="relative z-10 py-20 px-4 bg-purple-800/10">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-300">
                Why Choose Punk Creative Studio?
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                We combine artistic talent with technical expertise to create visuals that inspire and engage
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-2xl mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">
                    {feature.title}
                  </h3>
                  <p className="text-purple-100 leading-relaxed">
                    {feature.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-300">
                Our Creative Portfolio
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Showcasing our diverse range of creative work across different mediums and styles
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Brand Identity", desc: "Logo & brand design" },
                { name: "Digital Art", desc: "Illustrations & graphics" },
                { name: "Photo Editing", desc: "Retouching & enhancement" },
                { name: "Motion Graphics", desc: "Animated content" }
              ].map((portfolio, index) => (
                <Motion.div
                  key={portfolio.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center group hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-purple-600/20 rounded-xl mx-auto mb-4 group-hover:bg-purple-600/30 transition-colors duration-300"></div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">
                    {portfolio.name}
                  </h3>
                  <p className="text-purple-200 text-sm">
                    {portfolio.desc}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-300">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Let's discuss your project and bring your creative vision to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <SparklesIcon className="w-5 h-5" />
                  <span>Start Your Project</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <StarIcon className="w-5 h-5" />
                  <span>View Portfolio</span>
                </button>
              </div>
            </Motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GraphicsEditing
