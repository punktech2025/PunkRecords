import { Link } from "react-router-dom"
import { Motion } from "./animation-provider"

interface MSMEStartupBannerProps {
  variant?: "full" | "compact" | "service-specific"
  service?: "music" | "photo-video" | "web-dev" | "graphics" | "social-marketing"
}

const serviceSpecificContent = {
  music: {
    title: "Music Production for Growing Brands",
    description: "High-quality music production doesn't have to break the bank. Our startup-friendly packages deliver professional sound that grows with your brand.",
    benefits: [
      "Custom music and jingles that fit your budget",
      "Flexible licensing options for startups",
      "Professional quality at startup-friendly rates",
      "Quick turnaround for time-sensitive projects"
    ]
  },
  "photo-video": {
    title: "Visual Content for Emerging Businesses",
    description: "Professional photography and videography tailored for startups and MSMEs. Make a big impact without the big studio prices.",
    benefits: [
      "High-impact visuals at competitive rates",
      "Flexible shoot schedules for busy founders",
      "Content packages designed for social media",
      "Professional equipment, startup-friendly pricing"
    ]
  },
  "web-dev": {
    title: "Web Development for Growing Companies",
    description: "Launch your digital presence with our MSME-focused web development services. Scale-ready solutions that grow with your business.",
    benefits: [
      "Scalable websites that grow with you",
      "SEO-optimized from day one",
      "Mobile-first, responsive design",
      "Easy content management for your team"
    ]
  },
  graphics: {
    title: "Design Solutions for Startups",
    description: "Professional graphic design that helps your startup stand out. Brand identity packages that won't drain your seed funding.",
    benefits: [
      "Complete brand identity packages",
      "Social media-ready designs",
      "Print & digital marketing materials",
      "Unlimited revisions within scope"
    ]
  },
  "social-marketing": {
    title: "Social Marketing for New Ventures",
    description: "Data-driven social media marketing that maximizes your startup's budget. Get noticed without breaking the bank.",
    benefits: [
      "ROI-focused campaign strategies",
      "Targeted audience growth",
      "Content creation included",
      "Real-time performance tracking"
    ]
  }
}

export const MSMEStartupBanner = ({ variant = "full", service }: MSMEStartupBannerProps) => {
  const serviceContent = service ? serviceSpecificContent[service] : null

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full ${variant === "compact" ? "py-12" : "py-20"}`}
    >
      <div className="container mx-auto px-4">
        <div className={`bg-gradient-to-r from-avocado-green/20 to-blue-500/20 rounded-lg ${variant === "compact" ? "p-6" : "p-8 md:p-12"} border border-avocado-green/30`}>
          {/* Service-specific content */}
          {serviceContent && (
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-avocado-green mb-4">{serviceContent.title}</h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6">{serviceContent.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {serviceContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-avocado-green">✓</span>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Common MSME/Startup content */}
          <div className={variant === "compact" ? "space-y-4" : "space-y-6"}>
            <h2 className={`${variant === "compact" ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"} font-bold text-avocado-green`}>
              🚀 Special Support for MSMEs & Startups
            </h2>
            
            <p className="text-lg text-gray-200 leading-relaxed">
              At Punk Records, we believe in empowering new businesses. We understand that every rupee counts when you're building your dream. That's why we've crafted our services to deliver maximum impact while respecting your budget constraints.
            </p>

            {variant !== "compact" && (
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-avocado-green">💡 Why Startups Choose Us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-avocado-green">•</span>
                      <span className="text-gray-300">Flexible payment plans that match your cash flow</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-avocado-green">•</span>
                      <span className="text-gray-300">Scalable solutions that grow with your business</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-avocado-green">•</span>
                      <span className="text-gray-300">Direct access to creative directors for quick decisions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-avocado-green">•</span>
                      <span className="text-gray-300">No long-term contracts - prove our value first</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-avocado-green">🎯 Our Startup Promise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-avocado-green">•</span>
                      <span className="text-gray-300">Same premium quality, startup-friendly pricing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-avocado-green">•</span>
                      <span className="text-gray-300">Transparent costs - no hidden fees or surprises</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-avocado-green">•</span>
                      <span className="text-gray-300">ROI-focused strategies for maximum impact</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-avocado-green">•</span>
                      <span className="text-gray-300">Priority support for urgent business needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-8">
              <p className="text-lg text-gray-200 italic mb-6">
                "Think of your startup as a rocket ready for launch - it needs the right fuel mixture to reach orbit. We're here to ensure your marketing budget delivers the thrust you need, exactly when you need it."
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-avocado-green text-white rounded-md font-semibold hover:bg-green-600 transition-colors duration-300"
                >
                  Get Your Startup Package
                </Link>
                {variant !== "compact" && (
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-6 py-3 border border-avocado-green text-avocado-green rounded-md font-semibold hover:bg-avocado-green/10 transition-colors duration-300"
                  >
                    Explore All Services
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  )
}

export default MSMEStartupBanner
