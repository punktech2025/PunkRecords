"use client"

import { Motion } from "../components/animation-provider"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { useTheme } from "../components/theme-provider"
import {
  CameraIcon,
  VideoCameraIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  MusicalNoteIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline"
import FeatureCard from "../components/FeatureCard"

const Home = () => {
  const { theme } = useTheme()

  // Service-specific content
  const serviceContent = {
    music: {
      title: "MUSIC PRODUCTION & AUDIO DESIGN",
      subtitle: "Creating Sonic Experiences",
      description: "Professional music production, sound design, and audio engineering services that bring your creative vision to life with cutting-edge technology and artistic excellence.",
      heroImage: "/music-production-1.png",
      features: [
        { icon: <MusicalNoteIcon className="w-8 h-8 text-white" />, title: "Music Production", description: "Full-service music production from concept to final master.", color: "bg-red-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Sound Design", description: "Custom sound effects and audio branding for your projects.", color: "bg-teal-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Audio Engineering", description: "Professional mixing, mastering, and post-production services.", color: "bg-blue-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Jingle Creation", description: "Memorable jingles and audio logos for brand recognition.", color: "bg-mint-500" }
      ]
    },
    web: {
      title: "WEB DEVELOPMENT & DIGITAL SOLUTIONS",
      subtitle: "Building Digital Excellence",
      description: "Cutting-edge web development, mobile apps, and digital solutions that drive business growth and create engaging user experiences for the modern digital landscape.",
      heroImage: "/creative-agency-workspace.png",
      features: [
        { icon: <CodeBracketIcon className="w-8 h-8 text-white" />, title: "Web Development", description: "Custom websites and web applications built with modern technologies.", color: "bg-green-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android.", color: "bg-blue-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "E-commerce Solutions", description: "Complete online store development with payment integration.", color: "bg-purple-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "UI/UX Design", description: "User-centered design that enhances engagement and conversion.", color: "bg-orange-500" }
      ]
    },
    photography: {
      title: "PHOTOGRAPHY & VISUAL STORYTELLING",
      subtitle: "Capturing Moments of Beauty",
      description: "Professional photography services that tell your story through compelling visuals, from corporate headshots to artistic portraits and product photography.",
      heroImage: "/photography-videography-1.png",
      features: [
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Portrait Photography", description: "Professional headshots and artistic portrait sessions.", color: "bg-purple-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Product Photography", description: "High-quality product images that showcase your offerings.", color: "bg-orange-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Event Coverage", description: "Comprehensive photography for corporate events and celebrations.", color: "bg-blue-500" },
        { icon: <MegaphoneIcon className="w-8 h-8 text-white" />, title: "Brand Photography", description: "Visual storytelling that strengthens your brand identity.", color: "bg-green-500" }
      ]
    },
    video: {
      title: "VIDEO PRODUCTION & CINEMATIC CONTENT",
      subtitle: "Bringing Stories to Life",
      description: "Professional video production services including corporate videos, promotional content, and cinematic storytelling that engages your audience and drives results.",
      heroImage: "/music-production-2.png",
      features: [
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Corporate Videos", description: "Professional corporate videos that communicate your message effectively.", color: "bg-pink-500" },
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Promotional Content", description: "Engaging promotional videos that boost your marketing campaigns.", color: "bg-cyan-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Event Videos", description: "Comprehensive video coverage of your important events.", color: "bg-amber-500" },
        { icon: <MegaphoneIcon className="w-8 h-8 text-white" />, title: "Social Media Content", description: "Short-form videos optimized for social media platforms.", color: "bg-light-green-500" }
      ]
    },
    wedding: {
      title: "WEDDING PHOTOGRAPHY & VIDEOGRAPHY",
      subtitle: "Capturing Love Stories Forever",
      description: "Premier wedding photography and videography studio in Nagpur specializing in cinematic storytelling, candid moments, and timeless memories. From intimate ceremonies to grand celebrations, we capture every precious moment of your special day.",
      heroImage: "/photography-videography-1.png",
      features: [
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Wedding Photography", description: "Professional wedding photography with candid shots, traditional poses, and artistic compositions that tell your love story beautifully.", color: "bg-rose-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Cinematic Wedding Films", description: "Cinematic wedding videography with drone shots, highlight reels, and full ceremony coverage for timeless memories.", color: "bg-pink-500" },
        { icon: <PaintBrushIcon className="w-8 h-8 text-white" />, title: "Pre-Wedding Shoots", description: "Romantic pre-wedding photography sessions at stunning locations in and around Nagpur with creative concepts.", color: "bg-purple-500" },
        { icon: <MusicalNoteIcon className="w-8 h-8 text-white" />, title: "Wedding Albums & Films", description: "Beautifully crafted wedding albums and edited films with custom music and professional post-production.", color: "bg-indigo-500" }
      ]
    },
    default: {
      title: "WEDDING PHOTOGRAPHY STUDIO & CREATIVE SERVICES",
      subtitle: "Your Dream Wedding Captured Perfectly",
      description: "Nagpur's premier wedding photography and videography studio. We specialize in capturing your special moments with cinematic excellence, while also offering comprehensive creative services including web development, music production, and digital marketing.",
      heroImage: "/photography-videography-1.png",
      features: [
        { icon: <CameraIcon className="w-8 h-8 text-white" />, title: "Wedding Photography & Videography", description: "Professional wedding photography and cinematic videography services capturing every precious moment of your special day with artistic excellence.", color: "bg-rose-500" },
        { icon: <VideoCameraIcon className="w-8 h-8 text-white" />, title: "Pre-Wedding & Engagement Shoots", description: "Romantic pre-wedding photography and engagement sessions at beautiful locations with creative storytelling and artistic vision.", color: "bg-pink-500" },
        { icon: <CodeBracketIcon className="w-8 h-8 text-white" />, title: "Web Development & Digital Solutions", description: "Custom wedding websites, online galleries, and digital solutions for couples and wedding businesses with modern design.", color: "bg-blue-500" },
        { icon: <MusicalNoteIcon className="w-8 h-8 text-white" />, title: "Wedding Music & Audio Production", description: "Custom wedding music, audio editing for wedding films, and sound design services for your special celebrations.", color: "bg-purple-500" }
      ]
    }
  }

  const currentContent = serviceContent[theme] || serviceContent.default

  return (
    <>
      <Helmet>
        <title>Best Wedding Photography & Videography in Nagpur | Punk Records Creative Studio</title>
        <meta
          name="description"
          content="Premier wedding photography & videography studio in Nagpur. Professional wedding photographers capturing your special moments with cinematic excellence. Also offering web development, music production & creative services."
        />
        <meta
          name="keywords"
          content="wedding photographer nagpur, wedding photography nagpur, shaadi photographer nagpur, marriage photographer nagpur, wedding videographer nagpur, wedding videography nagpur, best wedding photographer nagpur, candid wedding photographer nagpur, pre wedding photographer nagpur, destination wedding photographer nagpur, shaadi ka photographer nagpur, vivah photographer nagpur, marriage ka photographer nagpur, dulhan photographer nagpur, dulha dulhan photographer nagpur, mangalashtak photographer nagpur, lagan photographer nagpur, byah photographer nagpur, mehendi photographer nagpur, haldi photographer nagpur, sangam photographer nagpur, engagement photographer nagpur, ring ceremony photographer nagpur, reception photographer nagpur, baraat photographer nagpur, vidai photographer nagpur, sagai photographer nagpur, tilak ceremony photographer nagpur, candid wedding photography nagpur, traditional wedding photography nagpur, cinematic wedding videography nagpur, documentary wedding photography nagpur, photojournalistic wedding photography nagpur, artistic wedding photography nagpur, vintage wedding photography nagpur, contemporary wedding photography nagpur, pre wedding photoshoot nagpur, couple photoshoot nagpur, maternity photoshoot nagpur, baby photoshoot nagpur, family portrait photographer nagpur, bridal photoshoot nagpur, groom photoshoot nagpur, save the date photoshoot nagpur, anniversary photoshoot nagpur, drone wedding photography nagpur, 4k wedding videography nagpur, same day edit wedding video nagpur, wedding highlight video nagpur, wedding album design nagpur, wedding photo editing nagpur, wedding video editing nagpur, outdoor wedding photographer nagpur, destination wedding photographer india, palace wedding photographer nagpur, garden wedding photographer nagpur, beach wedding photographer goa, hill station wedding photographer, resort wedding photographer nagpur, affordable wedding photographer nagpur, cheap wedding photographer nagpur, budget wedding photography nagpur, wedding photography packages nagpur, wedding photography price nagpur, low cost wedding photographer nagpur, music studio nagpur, recording studio nagpur, music production nagpur, sound recording nagpur, audio recording nagpur, music recording studio nagpur, professional recording studio nagpur, song recording nagpur, album recording nagpur, jingle recording nagpur, voice over recording nagpur, dubbing studio nagpur, mixing mastering studio nagpur, music composition nagpur, background music creation nagpur, sound design nagpur, audio post production nagpur, bollywood music recording nagpur, classical music recording nagpur, devotional music recording nagpur, folk music recording nagpur, marathi music recording nagpur, hindi song recording nagpur, instrumental music recording nagpur, professional music equipment nagpur, music production software nagpur, audio mixing console nagpur, studio monitors nagpur, microphone rental nagpur, singer recording studio nagpur, musician recording studio nagpur, band recording studio nagpur, artist recording studio nagpur, music producer nagpur, sound engineer nagpur, web development nagpur, website design nagpur, website development nagpur, web designer nagpur, web developer nagpur, website company nagpur, digital agency nagpur, ecommerce website development nagpur, responsive web design nagpur, mobile app development nagpur, custom website development nagpur, wordpress development nagpur, php development nagpur, react development nagpur, website maintenance nagpur, domain hosting nagpur, ssl certificate nagpur, business website design nagpur, corporate website development nagpur, startup website development nagpur, small business website nagpur, professional website design nagpur, company website development nagpur, online store development nagpur, shopping website development nagpur, payment gateway integration nagpur, inventory management system nagpur, pos system development nagpur, html css developer nagpur, javascript developer nagpur, python developer nagpur, node js developer nagpur, angular developer nagpur, vue js developer nagpur, graphic designer nagpur, graphic design services nagpur, logo design nagpur, branding design nagpur, creative design nagpur, visual design nagpur, logo design company nagpur, business card design nagpur, brochure design nagpur, flyer design nagpur, poster design nagpur, banner design nagpur, packaging design nagpur, label design nagpur, book cover design nagpur, magazine design nagpur, social media design nagpur, instagram post design nagpur, facebook cover design nagpur, youtube thumbnail design nagpur, website banner design nagpur, email template design nagpur, presentation design nagpur, visiting card design nagpur, letterhead design nagpur, invoice design nagpur, certificate design nagpur, id card design nagpur, menu design nagpur, catalogue design nagpur, brand identity design nagpur, corporate identity design nagpur, brand guidelines nagpur, brand strategy nagpur, rebranding services nagpur, digital marketing nagpur, social media marketing nagpur, seo services nagpur, online marketing nagpur, internet marketing nagpur, digital marketing agency nagpur, social media agency nagpur, facebook marketing nagpur, instagram marketing nagpur, youtube marketing nagpur, linkedin marketing nagpur, twitter marketing nagpur, whatsapp marketing nagpur, google ads nagpur, facebook ads nagpur, instagram ads nagpur, seo company nagpur, content marketing nagpur, email marketing nagpur, influencer marketing nagpur, affiliate marketing nagpur, ppc management nagpur, social media management nagpur, online reputation management nagpur, restaurant marketing nagpur, real estate marketing nagpur, healthcare marketing nagpur, education marketing nagpur, ecommerce marketing nagpur, startup marketing nagpur, local seo nagpur, google my business optimization nagpur, local business marketing nagpur, nagpur business promotion, maharashtra digital marketing, video production nagpur, video editing nagpur, videographer nagpur, commercial video production nagpur, corporate video production nagpur, promotional video nagpur, product video nagpur, explainer video nagpur, training video nagpur, documentary video nagpur, event videography nagpur, conference videography nagpur, youtube video editing nagpur, social media video nagpur, video post production nagpur, color grading nagpur, motion graphics nagpur, animation services nagpur, 3d animation nagpur, 2d animation nagpur, video compression nagpur, video streaming setup nagpur, wardha, chandrapur, gondia, bhandara, amravati, akola, yavatmal, gadchiroli, civil lines nagpur, sitabuldi nagpur, dharampeth nagpur, sadar nagpur, itwari nagpur, kamptee nagpur, hingna nagpur, katol nagpur, punktech, punk records"
        />
        <meta property="og:title" content="Best Wedding Photography & Videography in Nagpur | Punk Records Creative Studio" />
        <meta
          property="og:description"
          content="Capture your dream wedding with Nagpur's premier wedding photography & videography studio. Cinematic storytelling meets artistic excellence for your special day."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://punktech.in" />
        <meta property="og:image" content="https://punktech.in/wedding-hero-image.jpg" />
        <meta property="og:site_name" content="Punk Records Creative Studio" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@punktechstudio" />
        <meta name="twitter:creator" content="@punktechstudio" />
        <meta name="twitter:title" content="Best Wedding Photography & Videography in Nagpur | Punk Records" />
        <meta name="twitter:description" content="Capture your dream wedding with Nagpur's premier wedding photography & videography studio." />
        <meta name="twitter:image" content="https://punktech.in/wedding-hero-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nagpur" />
        <meta name="geo.position" content="21.1458;79.0882" />
        <meta name="ICBM" content="21.1458, 79.0882" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Punk Records Creative Studio",
            "alternateName": "PunkTech",
            "url": "https://punktech.in",
            "logo": "https://punktech.in/logo.png",
            "description": "Premier wedding photography and videography studio in Nagpur offering cinematic wedding coverage, pre-wedding shoots, and creative digital services.",
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
              "email": "Vansh.Rajak@punktech.in",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "sameAs": [
              "https://instagram.com/punk_record",
              "https://facebook.com/punktechstudio",
              "https://linkedin.com/company/punktech"
            ],
            "priceRange": "₹₹₹"
          })}
        </script>
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://punktech.in/#localbusiness",
            "name": "Punk Records Creative Studio",
            "image": "https://punktech.in/studio-image.jpg",
            "telephone": "+91-74477-76766",
            "email": "Vansh.Rajak@punktech.in",
            "priceRange": "₹₹₹",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "postalCode": "440001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.1458,
              "longitude": 79.0882
            },
            "url": "https://punktech.in",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          })}
        </script>
        
        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wedding Photography & Videography Services",
            "description": "Professional wedding photography and videography services in Nagpur including pre-wedding shoots, engagement photography, bridal portraits, and cinematic wedding films.",
            "provider": {
              "@type": "Organization",
              "name": "Punk Records Creative Studio"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Nagpur, Maharashtra, India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Wedding Photography Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Complete Wedding Photography & Videography Package"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section with enhanced animations and particles */}
        <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <Motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block"
                  >
                    {currentContent.title.split(' ').slice(0, 2).join(' ')}
                  </Motion.span>
                  <Motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="gradient-text block"
                  >
                    {currentContent.title.split(' ').slice(2, 4).join(' ')}
                  </Motion.span>
                  <Motion.span
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="block"
                  >
                    {currentContent.title.split(' ').slice(4).join(' ')}
                  </Motion.span>
                </Motion.h1>

                <Motion.h2
                  className="text-2xl md:text-3xl font-semibold text-avocado-green mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  {currentContent.subtitle}
                </Motion.h2>

                <Motion.p
                  className="text-avocado-text text-lg md:text-xl mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  {currentContent.description}
                </Motion.p>

                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <Link to="/reveal" className="btn-primary inline-flex items-center space-x-2 group">
                    <span>EXPLORE SERVICES</span>
                    <Motion.svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </Motion.svg>
                  </Link>
                </Motion.div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <Motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Motion.img
                    src={currentContent.heroImage}
                    alt={`Punk Records Creative Studio - ${currentContent.title}`}
                    className="w-full h-auto rounded-lg shadow-2xl hover-glow"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </Motion.div>

                {/* ... existing gradient animations ... */}
                <Motion.div
                  className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-avocado-green/30 to-green-400/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <Motion.div
                  className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-avocado-blue/30 to-blue-400/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.6, 0.3, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Client Testimonial Section */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What Our Wedding Couples Say:</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-avocado-text text-lg mb-8 leading-relaxed">
                  "Punk Records captured our wedding day perfectly! Every emotion, every precious moment was beautifully documented. 
                  Their team was professional, creative, and made us feel so comfortable throughout our special day."
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-avocado-dark p-6 rounded-lg border border-rose-300">
                    <p className="text-rose-300 font-semibold mb-2">WEDDING TESTIMONIAL:</p>
                    <blockquote className="text-white text-base italic mb-4">
                      "The pre-wedding shoot was absolutely magical! They found the most beautiful locations in Nagpur 
                      and captured our love story in the most artistic way. Our wedding film still gives us goosebumps!"
                    </blockquote>
                    <p className="text-rose-300 font-semibold text-sm">
                      PRIYA & ARJUN SHARMA • MARRIED DECEMBER 2023
                    </p>
                  </div>
                  <div className="bg-avocado-dark p-6 rounded-lg border border-rose-300">
                    <p className="text-rose-300 font-semibold mb-2">COUPLE REVIEW:</p>
                    <blockquote className="text-white text-base italic mb-4">
                      "From our engagement shoot to the wedding day, Punk Records exceeded all expectations. 
                      The cinematic quality of our wedding film is beyond amazing. Highly recommended!"
                    </blockquote>
                    <p className="text-rose-300 font-semibold text-sm">
                      SNEHA & RAHUL JOSHI • MARRIED FEBRUARY 2024
                    </p>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Wedding Photography & Videography Section */}
        <section className="bg-gradient-to-br from-rose-500/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Wedding Photography & Videography Nagpur</h1>
              <p className="text-avocado-text text-xl mb-8 max-w-3xl mx-auto">
                Nagpur's premier wedding photography and videography studio. We specialize in capturing your love story with 
                cinematic excellence, artistic vision, and attention to every precious detail of your special day.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-rose-500/20 text-rose-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Wedding Photography
                </span>
                <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Cinematic Wedding Films
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Pre-Wedding Shoots
                </span>
                <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Engagement Photography
                </span>
                <span className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Bridal Portraits
                </span>
                <span className="bg-fuchsia-500/20 text-fuchsia-300 px-4 py-2 rounded-full text-sm font-semibold">
                  Destination Weddings
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services/photo-video" className="btn-primary inline-flex items-center space-x-2">
                  <span>VIEW WEDDING PORTFOLIO</span>
                  <CameraIcon className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="bg-transparent border-2 border-rose-500 text-rose-300 hover:bg-rose-500 hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 inline-flex items-center space-x-2">
                  <span>GET WEDDING QUOTE</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-avocado-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentContent.features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-avocado-gray py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                Wedding Photography & Videography Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-avocado-dark p-8 rounded-lg border border-rose-300">
                  <h3 className="text-rose-300 text-xl font-bold mb-4">Essential Wedding Package</h3>
                  <p className="text-3xl font-bold text-white mb-2">₹75,000</p>
                  <p className="text-avocado-text mb-6">Complete Coverage</p>
                  <ul className="text-avocado-text text-left space-y-2">
                    <li>• 6 Hours Wedding Photography</li>
                    <li>• 300+ Edited Photos</li>
                    <li>• Online Gallery</li>
                    <li>• Basic Wedding Highlights Video</li>
                    <li>• 2 Photographers</li>
                  </ul>
                </div>
                <div className="bg-avocado-dark p-8 rounded-lg border-2 border-rose-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
                  </div>
                  <h3 className="text-rose-300 text-xl font-bold mb-4 mt-4">Premium Wedding Package</h3>
                  <p className="text-3xl font-bold text-white mb-2">₹1,25,000</p>
                  <p className="text-avocado-text mb-6">Full Day Coverage</p>
                  <ul className="text-avocado-text text-left space-y-2">
                    <li>• 10 Hours Wedding Photography</li>
                    <li>• 500+ Edited Photos</li>
                    <li>• Cinematic Wedding Film</li>
                    <li>• Pre-Wedding Shoot (4 Hours)</li>
                    <li>• 3 Photographers + Videographer</li>
                    <li>• Premium Album (50 Pages)</li>
                  </ul>
                </div>
                <div className="bg-avocado-dark p-8 rounded-lg border border-rose-300">
                  <h3 className="text-rose-300 text-xl font-bold mb-4">Luxury Wedding Package</h3>
                  <p className="text-3xl font-bold text-white mb-2">₹2,00,000</p>
                  <p className="text-avocado-text mb-6">Multi-Day Coverage</p>
                  <ul className="text-avocado-text text-left space-y-2">
                    <li>• 3 Days Wedding Coverage</li>
                    <li>• 800+ Edited Photos</li>
                    <li>• Feature-Length Wedding Film</li>
                    <li>• Pre-Wedding + Engagement Shoot</li>
                    <li>• 4 Photographers + 2 Videographers</li>
                    <li>• Luxury Album + USB Drive</li>
                    <li>• Drone Coverage</li>
                  </ul>
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Comprehensive SEO Services Section */}
        <section className="bg-gradient-to-br from-avocado-green/10 to-avocado-dark py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete Creative Services in Nagpur Maharashtra</h2>
              <p className="text-avocado-text text-xl mb-8 max-w-4xl mx-auto">
                Premier wedding photography studio, music production facility, web development company, and digital marketing agency serving Nagpur, Wardha, Chandrapur, Gondia, Bhandara, Amravati, Akola, Yavatmal, and Gadchiroli.
              </p>
            </Motion.div>

            {/* Service Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Wedding Photography Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-rose-300"
              >
                <h3 className="text-rose-300 font-bold text-xl mb-4">Wedding Photography Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Wedding Photographer Nagpur • Shaadi Photographer</li>
                  <li>• Marriage Photographer • Vivah Photography</li>
                  <li>• Candid Wedding Photography • Pre Wedding Photoshoot</li>
                  <li>• Mehendi Photography • Haldi Photography</li>
                  <li>• Engagement Photography • Reception Photography</li>
                  <li>• Drone Wedding Photography • Cinematic Videos</li>
                  <li>• Bridal Photography • Couple Photoshoot</li>
                </ul>
              </Motion.div>

              {/* Music Production Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-orange-300"
              >
                <h3 className="text-orange-300 font-bold text-xl mb-4">Music Studio Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Music Studio Nagpur • Recording Studio</li>
                  <li>• Song Recording • Album Recording</li>
                  <li>• Bollywood Music Recording • Classical Music</li>
                  <li>• Voice Over Recording • Dubbing Studio</li>
                  <li>• Mixing Mastering • Sound Design</li>
                  <li>• Jingle Recording • Background Music</li>
                  <li>• Music Producer • Sound Engineer</li>
                </ul>
              </Motion.div>

              {/* Web Development Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-blue-300"
              >
                <h3 className="text-blue-300 font-bold text-xl mb-4">Web Development Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Web Development Nagpur • Website Design</li>
                  <li>• Ecommerce Development • Mobile App Development</li>
                  <li>• WordPress Development • Custom Websites</li>
                  <li>• React Development • PHP Development</li>
                  <li>• Online Store Development • Payment Gateway</li>
                  <li>• Business Website Design • Domain Hosting</li>
                  <li>• Website Maintenance • SSL Certificate</li>
                </ul>
              </Motion.div>

              {/* Digital Marketing Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-green-300"
              >
                <h3 className="text-green-300 font-bold text-xl mb-4">Digital Marketing Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Digital Marketing Nagpur • SEO Services</li>
                  <li>• Social Media Marketing • Google Ads</li>
                  <li>• Facebook Marketing • Instagram Marketing</li>
                  <li>• Local SEO Nagpur • Content Marketing</li>
                  <li>• YouTube Marketing • Email Marketing</li>
                  <li>• Online Reputation Management • PPC</li>
                  <li>• Restaurant Marketing • Real Estate Marketing</li>
                </ul>
              </Motion.div>

              {/* Graphic Design Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-purple-300"
              >
                <h3 className="text-purple-300 font-bold text-xl mb-4">Graphic Design Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Logo Design Nagpur • Graphic Designer</li>
                  <li>• Brand Identity Design • Business Card Design</li>
                  <li>• Brochure Design • Flyer Design</li>
                  <li>• Social Media Design • Instagram Post Design</li>
                  <li>• Website Banner Design • Poster Design</li>
                  <li>• Packaging Design • Menu Design</li>
                  <li>• Corporate Identity • Rebranding Services</li>
                </ul>
              </Motion.div>

              {/* Video Production Services */}
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-avocado-dark p-6 rounded-lg border border-cyan-300"
              >
                <h3 className="text-cyan-300 font-bold text-xl mb-4">Video Production Services</h3>
                <ul className="text-avocado-text space-y-1 text-sm">
                  <li>• Video Production Nagpur • Corporate Videos</li>
                  <li>• Commercial Video Production • Product Videos</li>
                  <li>• Event Videography • Conference Coverage</li>
                  <li>• YouTube Video Editing • Social Media Videos</li>
                  <li>• Motion Graphics • 3D Animation</li>
                  <li>• Documentary Videos • Training Videos</li>
                  <li>• Video Post Production • Color Grading</li>
                </ul>
              </Motion.div>
            </div>

            {/* Location Coverage */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-avocado-green mb-6">Serving All of Nagpur & Maharashtra</h3>
              <div className="bg-avocado-dark p-6 rounded-lg border border-avocado-green mb-8">
                <p className="text-avocado-text mb-4">
                  Professional creative services across Civil Lines Nagpur, Sitabuldi, Dharampeth, Sadar, Itwari, Kamptee, Hingna, Katol and surrounding areas including Wardha, Chandrapur, Gondia, Bhandara, Amravati, Akola, Yavatmal, Gadchiroli
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Civil Lines</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Sitabuldi</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Dharampeth</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Sadar</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Itwari</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Kamptee</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Hingna</span>
                  <span className="bg-avocado-green/20 text-avocado-green px-3 py-1 rounded-full text-xs">Katol</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>GET FREE CONSULTATION</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/services" className="bg-transparent border-2 border-avocado-green text-avocado-green hover:bg-avocado-green hover:text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 inline-flex items-center space-x-2">
                  <span>VIEW ALL SERVICES</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
