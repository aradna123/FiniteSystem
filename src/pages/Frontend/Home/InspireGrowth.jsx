import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80'

const InspireGrowth = () => {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="relative w-full overflow-hidden bg-neutral-100">
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col lg:min-h-[600px] lg:flex-row">
        {/* Left: full-width image (≈2/3 on large screens) */}
        <div className="relative h-[380px] w-full shrink-0 lg:h-auto lg:min-h-[600px] lg:w-2/3">
          <img
            src={imgError ? FALLBACK_IMAGE : '/inspire-growth.jpg'}
            alt="Experiences that inspire growth – transformative technology and growth"
            className="absolute inset-0 h-full w-full object-cover object-center"
            onError={() => setImgError(true)}
          />
        </div>

        {/* Right: white content box overlapping the image (≈1/3 width) */}
        <div className="relative z-10 flex w-full items-center lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[44%] lg:min-w-[400px]">
          <div className="mx-4 my-8 w-full max-w-xl rounded-2xl bg-white px-6 py-10 shadow-xl sm:px-8 sm:py-12 lg:ml-auto lg:mr-4 lg:mt-12 lg:mb-12 lg:min-h-[420px] lg:max-w-none lg:px-12 lg:py-16">
            <h2 className="mb-5 text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              Experiences that inspire growth
            </h2>
            <p className="mb-8 text-base leading-relaxed text-neutral-700 sm:text-lg">
              At ITactics, we focus on delivering transformative IT solutions that engage your audience and foster sustainable growth for your business.
            </p>
            <Link
              to="/services"
              className="inline-block rounded-lg bg-neutral-900 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InspireGrowth
