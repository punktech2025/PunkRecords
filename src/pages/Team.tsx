import { Motion } from "../components/animation-provider"
import MatrixBackground from "../components/MatrixBackground"

interface TeamMember {
  name: string
  role: string
  specialties: string[]
  email?: string
  phone?: string
  image?: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Sahil Singh",
    role: "Creative Director 1",
    specialties: ["Video Editing", "Content Creation", "Post-Production"],
    description: "Leading our creative vision with expertise in video editing and content creation. Sahil brings innovative storytelling techniques to every project.",
    image: "🎬"
  },
  {
    name: "Yuvi (Durgesh) Sahib",
    role: "Creative Director 2", 
    specialties: ["Photography", "Videography", "Visual Arts"],
    description: "Master of visual storytelling through photography and videography. Yuvi captures moments that speak volumes and creates stunning visual narratives.",
    image: "📸"
  },
  {
    name: "Nahash Michael",
    role: "Creative Director 3",
    specialties: ["Music Production", "Web Development", "Client Engagement"],
    description: "Multi-talented director handling music production, technical development, and client relationships. Nahash ensures seamless project delivery and client satisfaction.",
    image: "🎵"
  },
  {
    name: "Shivani Michael",
    role: "Head of Communication and Talent Acquisition",
    specialties: ["Team Building", "Communication", "HR Management"],
    description: "Building and nurturing our talented team while maintaining excellent communication across all departments. Shivani ensures we have the right people in the right roles.",
    image: "🤝"
  },
  {
    name: "Vansh Rajak",
    role: "Senior Client Coordinator",
    specialties: ["Client Relations", "Project Management", "Business Development"],
    email: "Vansh.Rajak@punktech.in",
    phone: "+91 74477 76766",
    description: "Your primary point of contact for all projects. Vansh ensures smooth communication and successful project outcomes from start to finish.",
    image: "📋"
  }
]

const Team = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Service-specific Matrix background */}
      <MatrixBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Team
            </Motion.h1>
            <Motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet the creative minds behind Punk Records - a diverse team of talented professionals dedicated to bringing your vision to life.
            </Motion.p>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <Motion.div
                  key={member.name}
                  className="feature-card bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-avocado-green/20"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="text-6xl flex-shrink-0">
                      {member.image}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-avocado-green mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg text-gray-300 mb-4 font-semibold">
                        {member.role}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-avocado-green/20 text-avocado-green text-sm rounded-full border border-avocado-green/30"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {member.description}
                      </p>
                      
                      {(member.email || member.phone) && (
                        <div className="space-y-2">
                          {member.email && (
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="text-avocado-green">📧</span>
                              <a 
                                href={`mailto:${member.email}`}
                                className="text-avocado-green hover:text-avocado-light-green transition-colors"
                              >
                                {member.email}
                              </a>
                            </div>
                          )}
                          {member.phone && (
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="text-avocado-green">📞</span>
                              <a 
                                href={`tel:${member.phone}`}
                                className="text-avocado-green hover:text-avocado-light-green transition-colors"
                              >
                                {member.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-20 px-4 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <Motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-avocado-green">Why Choose Punk Records?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team brings together expertise from multiple creative disciplines to deliver comprehensive solutions for your business.
              </p>
            </Motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <Motion.div
                className="feature-card bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-4 text-avocado-green">Innovation First</h3>
                <p className="text-gray-300">
                  We stay ahead of industry trends and use cutting-edge technology to deliver exceptional results.
                </p>
              </Motion.div>

              <Motion.div
                className="feature-card bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-4 text-avocado-green">Collaborative Approach</h3>
                <p className="text-gray-300">
                  We work closely with our clients to understand their vision and bring it to life through collaboration.
                </p>
              </Motion.div>

              <Motion.div
                className="feature-card bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-4 text-avocado-green">Fast Delivery</h3>
                <p className="text-gray-300">
                  Our streamlined processes and experienced team ensure quick turnaround without compromising quality.
                </p>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-avocado-green">Ready to Work Together?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Get in touch with our team to discuss your project and see how we can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 text-lg">
                Start a Project
              </button>
              <a 
                href="https://instagram.com/punk_record" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 text-lg flex items-center justify-center space-x-2"
              >
                <span>📱</span>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Team
