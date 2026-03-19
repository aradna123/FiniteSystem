import React from 'react'
import { motion } from 'framer-motion'

const CAPITOL_IMAGE =
  'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80'

const badges = [
  'Woman-Owned Business',
  'ISO 27001 Certified',
  'NASPO Partner',
  'FedRAMP Ready',
  'CMMC Compliant',
  'GSA Schedule Holder',
  'SBA 8(a) Certified',
  'Top Secret Cleared',
  'Top Secret Cleared',
  'Top Secret Cleared',
  'Top Secret Cleared',
  'Top Secret Cleared',
]

const Agencies = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Capitol building background image - left side */}
      <div className="absolute bottom-0 left-0 z-0 h-[70%] w-[35%] opacity-[0.08]">
        <img
          src={CAPITOL_IMAGE}
          alt=""
          className="h-full w-full object-cover object-right"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[2px] w-10 bg-secondary" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            About QLogic
          </p>
          <span className="h-[2px] w-10 bg-secondary" />
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
          Why Agencies Choose{' '}
          <span className="text-secondary">QLogic</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-4 max-w-3xl text-gray-600 sm:text-lg">
          We combine deep public sector expertise with agile delivery. From custom software and cloud
          migrations to cleared IT professionals and healthcare staff, QLogic provides end-to-end
          capabilities under a single contract vehicle.
        </p>
        <p className="mx-auto mb-10 max-w-3xl text-gray-500 sm:text-lg">
          No subcontracting layers. No finger-pointing between vendors. Just one accountable team delivering
          measurable outcomes for federal, state, and local government missions.
        </p>

        {/* Badges - 8 items with hover effects */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex cursor-default items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1"
            >
              {/* Checkmark icon */}
              <svg
                className="h-4 w-4 shrink-0 text-secondary transition-colors duration-300 group-hover:text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {badge}
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-secondary/30"
          >
            Learn More About Us
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gray-800 px-8 py-3.5 text-sm font-semibold text-gray-800 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white"
          >
            View Capability Statement
          </a>
        </div>
      </div>
    </section>
  )
}

export default Agencies
