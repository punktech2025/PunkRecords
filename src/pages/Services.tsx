import { Motion } from '../components/animation-provider'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Services = () => {
  // Mock services data for now
  const services = [
    {
      id: 'web-dev',
      name: 'Web Development',
      path: '/services/web-dev',
      content: {
        hero: {
          description: 'Custom web applications and digital solutions'
        }
      }
    },
    {
      id: 'photo-video',
      name: 'Photography & Videography',
      path: '/services/photo-video',
      content: {
        hero: {
          description: 'Professional photography and videography services'
        }
      }
    },
    {
      id: 'graphics-editing',
      name: 'Graphics & Editing',
      path: '/services/graphics-editing',
      content: {
        hero: {
          description: 'Creative graphic design and editing solutions'
        }
      }
    },
    {
      id: 'music',
      name: 'Music Production',
      path: '/services/music',
      content: {
        hero: {
          description: 'Professional music production and recording'
        }
      }
    },
    {
      id: 'social-marketing',
      name: 'Social Media Marketing',
      path: '/services/social-marketing',
      content: {
        hero: {
          description: 'Strategic digital marketing solutions'
        }
      }
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Services - Punk Records</title>
        <meta name="description" content="Explore our comprehensive range of creative and digital services including web development, photography, music production, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-avocado-dark text-white pt-20">
        <div className="container mx-auto px-4 py-12">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive creative and digital solutions tailored to your business needs
            </p>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-avocado-gray rounded-lg p-6 border border-avocado-light-gray hover:border-avocado-green transition-all duration-300"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.content.hero.description}
                  </p>
                  <Link
                    to={service.path}
                    className="inline-block bg-avocado-green text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
