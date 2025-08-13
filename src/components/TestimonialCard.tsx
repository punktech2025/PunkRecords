"use client"

import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  title: string
  company: string
  delay?: number
}

const TestimonialCard = ({ quote, author, title, company, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-avocado-gray p-8 rounded-lg border border-avocado-light-gray"
    >
      <div className="text-avocado-green text-4xl mb-4">"</div>
      <p className="text-avocado-text mb-6 italic leading-relaxed">{quote}</p>
      <div>
        <p className="text-white font-semibold">{author}</p>
        <p className="text-avocado-text text-sm">
          {title}, {company}
        </p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
