import { Motion } from '../../components/animation-provider'
import { Helmet } from 'react-helmet-async'
import MSMEStartupBanner from '../../components/MSMEStartupBanner'
import { 
  CodeBracketIcon, 
  ComputerDesktopIcon, 
  ServerIcon,
  RocketLaunchIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'

const WebDev = () => {
  const features = [
    {
      icon: CodeBracketIcon,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements.",
      color: "text-green-400"
    },
    {
      icon: ComputerDesktopIcon,
      title: "Web Applications",
      description: "Modern, responsive web applications that work seamlessly across all devices and platforms.",
      color: "text-green-500"
    },
    {
      icon: ServerIcon,
      title: "IT Solutions & Consulting",
      description: "Comprehensive IT consulting services to optimize your technology infrastructure and processes.",
      color: "text-green-600"
    }
  ]

  const services = [
    {
      name: "Punk Software",
      description: "Custom enterprise software solutions",
      features: ["Business Process Automation", "CRM Systems", "ERP Solutions", "Custom Dashboards"]
    },
    {
      name: "Punk Webapps",
      description: "Progressive web applications",
      features: ["Cross-platform Compatibility", "Offline Functionality", "Push Notifications", "App-like Experience"]
    },
    {
      name: "Punk IT Solutions",
      description: "Comprehensive IT consulting",
      features: ["Technology Assessment", "Infrastructure Optimization", "Security Audits", "Digital Transformation"]
    }
  ]

  const technologies = [
    "React", "Node.js", "Python", "Java", "C#", "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
  ]

  return (
    <>
      <Helmet>
        <title>Web Development Nagpur | Website Design | Ecommerce Development | Punk Records</title>
        <meta name="description" content="Professional web development company in Nagpur offering custom website design, ecommerce development, mobile apps, WordPress development, and digital solutions for businesses in Maharashtra." />
        <meta name="keywords" content="web development nagpur, website design nagpur, website development nagpur, web designer nagpur, web developer nagpur, website company nagpur, digital agency nagpur, ecommerce website development nagpur, responsive web design nagpur, mobile app development nagpur, custom website development nagpur, wordpress development nagpur, php development nagpur, react development nagpur, website maintenance nagpur, domain hosting nagpur, ssl certificate nagpur, business website design nagpur, corporate website development nagpur, startup website development nagpur, small business website nagpur, professional website design nagpur, company website development nagpur, online store development nagpur, shopping website development nagpur, payment gateway integration nagpur, inventory management system nagpur, pos system development nagpur, html css developer nagpur, javascript developer nagpur, python developer nagpur, node js developer nagpur, angular developer nagpur, vue js developer nagpur, civil lines nagpur, sitabuldi nagpur, dharampeth nagpur, sadar nagpur, itwari nagpur, kamptee nagpur, hingna nagpur, katol nagpur, wardha, chandrapur, gondia, bhandara, amravati, akola, yavatmal, gadchiroli, punktech web, punk records development" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Web Development Nagpur | Website Design | Ecommerce Development | Punk Records" />
        <meta property="og:description" content="Professional web development company in Nagpur offering custom website design and digital solutions." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://punktech.in/services/web-dev" />
        <meta property="og:image" content="https://punktech.in/web-development-hero.jpg" />
        <meta property="og:site_name" content="Punk Records Creative Studio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@punktechstudio" />
        <meta name="twitter:title" content="Web Development Nagpur | Website Design | Punk Records" />
        <meta name="twitter:description" content="Professional web development company in Nagpur" />
        <meta name="twitter:image" content="https://punktech.in/web-development-hero.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <link rel="canonical" href="https://punktech.in/services/web-dev" />
        
        {/* Structured Data for Web Development Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Development & Website Design Services Nagpur",
            "description": "Professional web development services in Nagpur including custom website design, ecommerce development, mobile apps, and digital solutions.",
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
            "serviceType": "Web Development",
            "category": "Web Design Services"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative pt-20">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
                <CodeBracketIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Web Development
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                Building the future of digital experiences with cutting-edge technology and innovative solutions
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium"
                >
                  {tech}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-300">
                Our Web Development Services
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Three specialized divisions working together to deliver comprehensive digital solutions
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-green-800/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-green-300">
                    {service.name}
                  </h3>
                  <p className="text-green-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-green-200">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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
        <section className="relative z-10 py-20 px-4 bg-green-800/10">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-300">
                Why Choose Our Web Development?
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                We combine technical expertise with creative innovation to deliver exceptional results
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-2xl mb-6 group-hover:bg-green-600/30 transition-colors duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-green-300">
                    {feature.title}
                  </h3>
                  <p className="text-green-100 leading-relaxed">
                    {feature.description}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-300">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Let's discuss your project and create a digital solution that drives your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span>Start Your Project</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-green-500 text-green-300 hover:bg-green-500 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <CpuChipIcon className="w-5 h-5" />
                  <span>View Portfolio</span>
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* MSME & Startup Support Section */}
        <MSMEStartupBanner variant="service-specific" service="web-dev" />
      </div>
    </>
  )
}

export default WebDev
