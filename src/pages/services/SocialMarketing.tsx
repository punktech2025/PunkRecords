import { Motion } from '../../components/animation-provider'
import { Helmet } from 'react-helmet-async'
import MSMEStartupBanner from '../../components/MSMEStartupBanner'
import { 
  MegaphoneIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const SocialMarketing = () => {
  const features = [
    {
      icon: MegaphoneIcon,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach.",
      color: "text-blue-400"
    },
    {
      icon: ChartBarIcon,
      title: "Analytics & Insights",
      description: "Data-driven insights and analytics to optimize your marketing campaigns.",
      color: "text-blue-500"
    },
    {
      icon: UserGroupIcon,
      title: "Social Media",
      description: "Strategic social media management to engage and grow your audience.",
      color: "text-blue-600"
    }
  ]

  const services = [
    {
      name: "Punk Strategies",
      description: "Digital marketing strategies and planning",
      features: ["Brand Strategy", "Content Marketing", "SEO Optimization", "Marketing Automation"]
    },
    {
      name: "Punk Campaigns",
      description: "Social media and digital campaigns",
      features: ["Social Media Campaigns", "Influencer Marketing", "Paid Advertising", "Viral Marketing"]
    },
    {
      name: "Punk Surveys",
      description: "Market research and customer surveys",
      features: ["Customer Research", "Market Analysis", "Competitor Research", "Performance Tracking"]
    }
  ]

  const platforms = [
    "Instagram", "Facebook", "Twitter", "LinkedIn", "TikTok", "YouTube", "Pinterest", "Snapchat"
  ]

  return (
    <>
      <Helmet>
        <title>Digital Marketing Nagpur | Social Media Marketing | SEO Services | Punk Records</title>
        <meta name="description" content="Leading digital marketing agency in Nagpur offering social media marketing, SEO services, Google Ads, Facebook marketing, Instagram marketing, and comprehensive online marketing solutions for businesses in Maharashtra." />
        <meta name="keywords" content="digital marketing nagpur, social media marketing nagpur, seo services nagpur, online marketing nagpur, internet marketing nagpur, digital marketing agency nagpur, social media agency nagpur, facebook marketing nagpur, instagram marketing nagpur, youtube marketing nagpur, linkedin marketing nagpur, twitter marketing nagpur, whatsapp marketing nagpur, google ads nagpur, facebook ads nagpur, instagram ads nagpur, seo company nagpur, content marketing nagpur, email marketing nagpur, influencer marketing nagpur, affiliate marketing nagpur, ppc management nagpur, social media management nagpur, online reputation management nagpur, restaurant marketing nagpur, real estate marketing nagpur, healthcare marketing nagpur, education marketing nagpur, ecommerce marketing nagpur, startup marketing nagpur, local seo nagpur, google my business optimization nagpur, local business marketing nagpur, nagpur business promotion, maharashtra digital marketing, digital marketing company nagpur, online advertising nagpur, search engine marketing nagpur, social media strategy nagpur, brand marketing nagpur, performance marketing nagpur, conversion optimization nagpur, analytics and reporting nagpur, civil lines nagpur, sitabuldi nagpur, dharampeth nagpur, sadar nagpur, itwari nagpur, kamptee nagpur, hingna nagpur, katol nagpur, wardha, chandrapur, gondia, bhandara, amravati, akola, yavatmal, gadchiroli, punktech marketing, punk records digital" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Digital Marketing Nagpur | Social Media Marketing | SEO Services | Punk Records" />
        <meta property="og:description" content="Leading digital marketing agency in Nagpur offering comprehensive online marketing solutions." />
        <meta property="og:type" content="service" />
        <meta property="og:url" content="https://punktech.in/services/social-marketing" />
        <meta property="og:image" content="https://punktech.in/digital-marketing-hero.jpg" />
        <meta property="og:site_name" content="Punk Records Creative Studio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@punktechstudio" />
        <meta name="twitter:title" content="Digital Marketing Nagpur | Social Media Marketing | Punk Records" />
        <meta name="twitter:description" content="Leading digital marketing agency in Nagpur" />
        <meta name="twitter:image" content="https://punktech.in/digital-marketing-hero.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <link rel="canonical" href="https://punktech.in/services/social-marketing" />
        
        {/* Structured Data for Digital Marketing Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Marketing & Social Media Marketing Services Nagpur",
            "description": "Professional digital marketing services in Nagpur including social media marketing, SEO, Google Ads, and comprehensive online marketing strategies.",
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
            "serviceType": "Digital Marketing",
            "category": "Marketing Services"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative pt-20">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                <MegaphoneIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Social Media Marketing
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Strategic digital marketing solutions that drive engagement, growth, and measurable results
              </p>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {platforms.map((platform, index) => (
                <span
                  key={platform}
                  className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                >
                  {platform}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300">
                Our Marketing Services
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Three specialized divisions working together to create comprehensive marketing solutions
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-blue-800/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">
                    {service.name}
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-blue-200">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
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
        <section className="relative z-10 py-20 px-4 bg-blue-800/10">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300">
                Why Choose Punk Marketing Hub?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We combine strategic thinking with data-driven insights to deliver marketing that works
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-2xl mb-6 group-hover:bg-blue-600/30 transition-colors duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {feature.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="relative z-10 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300">
                Measurable Results
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We track and optimize every campaign to ensure maximum ROI and growth
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "500%+", desc: "Average engagement increase" },
                { metric: "2.5M+", desc: "Total reach across campaigns" },
                { metric: "85%", desc: "Customer satisfaction rate" },
                { metric: "3x", desc: "ROI improvement average" }
              ].map((result, index) => (
                <Motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 text-center"
                >
                  <h3 className="text-3xl font-bold mb-2 text-blue-300">
                    {result.metric}
                  </h3>
                  <p className="text-blue-200 text-sm">
                    {result.desc}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-300">
                Ready to Grow Your Brand?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss your marketing goals and create strategies that drive real results
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                  <RocketLaunchIcon className="w-5 h-5" />
                  <span>Start Your Campaign</span>
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <LightBulbIcon className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </button>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* MSME & Startup Support Section */}
        <MSMEStartupBanner variant="service-specific" service="social-marketing" />
      </div>
    </>
  )
}

export default SocialMarketing
