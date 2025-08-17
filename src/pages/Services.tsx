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
        <title>Wedding Photography & Creative Services Nagpur | Punk Records Studio</title>
        <meta
          name="description"
          content="Premier wedding photography studio in Nagpur offering wedding videography, pre-wedding shoots, plus web development, music production, and creative digital services. Complete creative solutions for weddings and businesses."
        />
        <meta
          name="keywords"
          content="wedding photography nagpur, wedding videography nagpur, creative services nagpur, web development nagpur, music production nagpur, graphic design nagpur, social media marketing nagpur, pre-wedding photography, engagement photography, bridal photography, wedding services nagpur, punktech services, punk records services"
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Wedding Photography & Creative Services Nagpur | Punk Records Studio" />
        <meta property="og:description" content="Complete creative services with specialty in wedding photography and videography. Professional services for weddings and businesses in Nagpur." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://punktech.in/services" />
        <meta property="og:image" content="https://punktech.in/services-overview.jpg" />
        <meta property="og:site_name" content="Punk Records Creative Studio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@punktechstudio" />
        <meta name="twitter:title" content="Wedding Photography & Creative Services Nagpur" />
        <meta name="twitter:description" content="Premier wedding photography studio and creative services in Nagpur" />
        <meta name="twitter:image" content="https://punktech.in/services-overview.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <link rel="canonical" href="https://punktech.in/services" />
        
        {/* Structured Data for Service Catalog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Wedding Photography & Creative Services",
            "description": "Complete range of wedding photography and creative services in Nagpur",
            "numberOfItems": 6,
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "Wedding Photography & Videography",
                  "description": "Professional wedding photography and cinematic videography services",
                  "url": "https://punktech.in/services/photo-video",
                  "provider": {
                    "@type": "Organization",
                    "name": "Punk Records Creative Studio"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "Music Production",
                  "description": "Professional music production and audio services",
                  "url": "https://punktech.in/services/music",
                  "provider": {
                    "@type": "Organization",
                    "name": "Punk Records Creative Studio"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Custom web development and digital solutions",
                  "url": "https://punktech.in/services/web-dev",
                  "provider": {
                    "@type": "Organization",
                    "name": "Punk Records Creative Studio"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "Graphic Design",
                  "description": "Creative graphic design and branding services",
                  "url": "https://punktech.in/services/graphics",
                  "provider": {
                    "@type": "Organization",
                    "name": "Punk Records Creative Studio"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Service",
                  "name": "Social Media Marketing",
                  "description": "Strategic social media marketing and management",
                  "url": "https://punktech.in/services/social-marketing",
                  "provider": {
                    "@type": "Organization",
                    "name": "Punk Records Creative Studio"
                  }
                }
              }
            ]
          })}
        </script>
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Punk Records Creative Studio",
            "url": "https://punktech.in",
            "logo": "https://punktech.in/logo.png",
            "description": "Premier wedding photography studio and creative services company in Nagpur offering professional photography, videography, web development, and digital marketing services.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-74477-76766",
              "contactType": "customer service",
              "email": "Vansh.Rajak@punktech.in"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wedding Photography & Creative Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Wedding Photography Package"
                  }
                }
              ]
            }
          })}
        </script>
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
