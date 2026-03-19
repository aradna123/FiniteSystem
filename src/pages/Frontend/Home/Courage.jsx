import React from 'react'

const borderBlue = '#011C4C'
const headingNavy = '#1A2C42'
const textGray = '#555'
const purple = '#7c3aed'
const purpleLight = '#ede9fe'
const purpleBorder = '#a78bfa'

const services = [
  'SEO Services',
  'Social Media Marketing',
  'Content Marketing',
  'Website UI/UX Design',
]

const Courage = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        border: '3px solid',
        borderColor: borderBlue,
        borderRadius: '1.5rem',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 40%, #dbeafe 70%, #eff6ff 100%)',
      }}
    >
      {/* Abstract fluid background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-40" style={{ background: 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)' }} />
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #c7d2fe 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-35" style={{ background: 'radial-gradient(circle, #e0e7ff 0%, transparent 70%)' }} />
      </div>

      {/* Large vertical "Marketing" text – right side, rotated */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none lg:block"
        style={{ transform: 'translateY(-50%) rotate(-90deg)' }}
        aria-hidden
      >
        <span
          className="whitespace-nowrap text-8xl font-bold tracking-tighter xl:text-9xl"
          style={{ color: 'rgba(191, 219, 254, 0.5)' }}
        >
          Marketing
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Main content card */}
          <article className="relative z-10 max-w-2xl rounded-3xl bg-white p-8 shadow-lg sm:p-10 lg:p-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: textGray }}>
              WHAT WE OFFER
            </p>
            <h2 className="mb-5 text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-4xl" style={{ color: headingNavy }}>
              Encourage More Visits to Your Website!
            </h2>
            <p className="mb-8 text-base leading-relaxed" style={{ color: textGray }}>
              AI-powered SEO (Search Engine Optimization) offers a bunch of benefits that can save time, boost rankings, and make your digital strategy way more efficient.
              AI-powered SEO (Search Engine Optimization) offers a bunch of benefits that can save time, boost rankings, and make your digital strategy way more efficient. AI-powered SEO (Search Engine Optimization) offers a bunch of benefits that can save time, boost rankings, and make your digital strategy way more efficient.
              AI-powered SEO (Search Engine Optimization) offers a bunch of benefits that can save time, boost rankings, and make your digital strategy way more efficient.
            </p>

            {/* Services list – two columns with purple checkmarks */}
            <ul className="mb-8 grid gap-4 sm:grid-cols-2">
              {services.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: purple }}
                    aria-hidden
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium" style={{ color: textGray }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* DISCOVER MORE button */}
            <button
              type="button"
              className="rounded-2xl border-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
              style={{
                color: purple,
                backgroundColor: purpleLight,
                borderColor: purpleBorder,
              }}
            >
              DISCOVER MORE
            </button>
          </article>

          {/* Spacer for layout when vertical text is visible */}
          <div className="hidden lg:block lg:w-32" />
        </div>
      </div>
    </section>
  )
}

export default Courage
