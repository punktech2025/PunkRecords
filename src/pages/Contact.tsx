import { Motion } from "../components/animation-provider"
import { Helmet } from "react-helmet-async"
import MatrixBackground from "../components/MatrixBackground"
import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^(\+91[\s-]?)?[789]\d{9}$/, "Please enter a valid Indian phone number"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rateLimited, setRateLimited] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  // Check rate limiting on component mount
  useEffect(() => {
    const lastSubmission = localStorage.getItem('contactFormLastSubmission')
    if (lastSubmission) {
      const timeDiff = Date.now() - parseInt(lastSubmission)
      const thirtyMinutes = 30 * 60 * 1000 // 30 minutes in milliseconds
      
      if (timeDiff < thirtyMinutes) {
        setRateLimited(true)
        const remaining = Math.ceil((thirtyMinutes - timeDiff) / 1000 / 60) // minutes remaining
        setTimeRemaining(remaining)
        
        // Update countdown every minute
        const interval = setInterval(() => {
          const newTimeDiff = Date.now() - parseInt(lastSubmission)
          if (newTimeDiff >= thirtyMinutes) {
            setRateLimited(false)
            setTimeRemaining(0)
            localStorage.removeItem('contactFormLastSubmission')
            clearInterval(interval)
          } else {
            const newRemaining = Math.ceil((thirtyMinutes - newTimeDiff) / 1000 / 60)
            setTimeRemaining(newRemaining)
          }
        }, 60000) // Update every minute
        
        return () => clearInterval(interval)
      } else {
        localStorage.removeItem('contactFormLastSubmission')
      }
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>Contact Us - Punk Records</title>
        <meta name="description" content="Get in touch with Punk Records for your creative and digital needs." />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white relative">
        {/* Service-specific Matrix background */}
        <MatrixBackground />
        
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-20">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready to start your next creative project? Let's discuss how we can help bring your vision to life.
              </p>
              
              {/* MSME & Startup Support Section */}
              <div className="bg-gradient-to-r from-avocado-green/20 to-blue-500/20 rounded-lg p-6 border border-avocado-green/30 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-avocado-green mb-4">🎯 Special Support for MSMEs & Startups</h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  At Punk Records, we understand the unique challenges that new companies face. We're committed to ensuring that every startup and MSME gets exceptional value for their investment.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-avocado-green">💡 What We Offer</h3>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Same premium services, delivered by expert hands</li>
                      <li>• Strategic marketing guidance for new businesses</li>
                      <li>• Cost-effective solutions without compromising quality</li>
                      <li>• Understanding of startup budget constraints</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-avocado-green">🚀 Why Choose Us</h3>
                    <ul className="text-gray-3 space-y-2">
                      <li>• We treat your business like our own</li>
                      <li>• Proven strategies for maximum ROI</li>
                      <li>• Transparent pricing and honest communication</li>
                      <li>• Long-term partnership approach</li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg text-gray-200 mt-6 italic">
                  "A new company is like a baby that needs to eat a lot - and by eat, we mean money. In marketing, we can help you see the most financially convenient path with the best possible results."
                </p>
              </div>
            </Motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Our Team</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-avocado-green mb-2">Sahil Singh</h3>
                    <p className="text-gray-300">Creative Director 1 (Editing and Content Creation)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-avocado-green mb-2">Yuvi (Durgesh) Sahib</h3>
                    <p className="text-gray-300">Creative Director 2 (Photography and Videography)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-avocado-green mb-2">Nahash Michael</h3>
                    <p className="text-gray-300">Creative Director 3 (Music Production, Web Development and Client Engagement)</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-avocado-green mb-2">Shivani Michael</h3>
                    <p className="text-gray-300">Head of Communication and Talent Acquisition</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-avocado-green mb-2">Vansh Rajak</h3>
                    <p className="text-gray-300">Senior Client Coordinator</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-white mt-12">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-avocado-green mb-2">Email</h3>
                    <p className="text-gray-300">Vansh.Rajak@punktech.in</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-avocado-green mb-2">Phone</h3>
                    <p className="text-gray-300">+91 74477 76766</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-avocado-green mb-2">Instagram</h3>
                    <a 
                      href="https://instagram.com/punk_record" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-300 hover:text-avocado-green transition-colors"
                    >
                      @punk_record
                    </a>
                  </div>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-avocado-gray rounded-lg p-8 border border-avocado-light-gray"
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
                <form onSubmit={handleSubmit(async (data) => {
                  if (rateLimited) {
                    toast.error(`Rate limited! Please wait ${timeRemaining} minutes before submitting again.`)
                    return
                  }
                  
                  try {
                    setIsSubmitting(true)
                    const response = await fetch(import.meta.env.VITE_AZURE_FUNCTION_URL, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "x-functions-key": import.meta.env.VITE_AZURE_FUNCTION_KEY
                      },
                      body: JSON.stringify(data),
                    })

                    if (!response.ok) {
                      const error = await response.json()
                      throw new Error(error.error || "Failed to send message")
                    }

                    // Set rate limiting after successful submission
                    localStorage.setItem('contactFormLastSubmission', Date.now().toString())
                    setRateLimited(true)
                    setTimeRemaining(30)
                    
                    toast.success("Message sent successfully! We'll get back to you soon.")
                    reset()
                  } catch (error) {
                    toast.error(error instanceof Error ? error.message : "Failed to send message")
                  } finally {
                    setIsSubmitting(false)
                  }
                })} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      className={`w-full px-4 py-3 bg-avocado-dark border ${errors.name ? "border-red-500" : "border-avocado-light-gray"} rounded-md text-white focus:border-avocado-green focus:outline-none`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 bg-avocado-dark border ${errors.email ? "border-red-500" : "border-avocado-light-gray"} rounded-md text-white focus:border-avocado-green focus:outline-none`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      className={`w-full px-4 py-3 bg-avocado-dark border ${errors.phone ? "border-red-500" : "border-avocado-light-gray"} rounded-md text-white focus:border-avocado-green focus:outline-none`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      {...register("message")}
                      className={`w-full px-4 py-3 bg-avocado-dark border ${errors.message ? "border-red-500" : "border-avocado-light-gray"} rounded-md text-white focus:border-avocado-green focus:outline-none`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  {rateLimited && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-md p-4 text-center">
                      <p className="text-red-400 font-medium">
                        ⏰ Rate Limited: Please wait {timeRemaining} minutes before submitting again
                      </p>
                      <p className="text-red-300 text-sm mt-1">
                        This prevents spam and ensures quality service for all clients
                      </p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || rateLimited}
                    className={`w-full px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
                      isSubmitting || rateLimited 
                        ? "bg-gray-500 opacity-50 cursor-not-allowed" 
                        : "bg-avocado-green hover:bg-green-600"
                    } text-white`}
                  >
                    {isSubmitting ? "Sending..." : rateLimited ? "Rate Limited" : "Send Message"}
                  </button>
                </form>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

