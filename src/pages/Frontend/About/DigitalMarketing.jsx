import React from 'react'

const bgOuter = '#0f2435'
const bgInner = '#0a1824'

// Starburst: four main points splitting into two smaller lines, purple–pink gradient
const IconStarburst = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="dm-icon-purple-pink" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    {[0, 90, 180, 270].map((rot, i) => (
      <g key={i} transform={`rotate(${rot} 32 32)`}>
        <path d="M32 10 L32 22 M32 26 L32 54" stroke="url(#dm-icon-purple-pink)" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 14 L30 20 L32 24 L34 20 M32 30 L28 38 L32 42 L36 38" stroke="url(#dm-icon-purple-pink)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9" />
      </g>
    ))}
  </svg>
)

// Sun burst: central circle with wavy radiating lines, orange
const IconSunBurst = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="dm-icon-orange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#ea580c" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="8" fill="url(#dm-icon-orange)" />
    {Array.from({ length: 16 }, (_, i) => {
      const a = (i * 22.5 * Math.PI) / 180
      const r1 = 14
      const r2 = 28
      const x1 = 32 + r1 * Math.cos(a)
      const y1 = 32 + r1 * Math.sin(a)
      const x2 = 32 + r2 * Math.cos(a)
      const y2 = 32 + r2 * Math.sin(a)
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#dm-icon-orange)" strokeWidth="2" strokeLinecap="round" />
    })}
  </svg>
)

// Target / data network: three concentric circles, dots on outer connected by lines, teal–blue
const IconTarget = () => (
  <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <linearGradient id="dm-icon-teal-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="22" stroke="url(#dm-icon-teal-blue)" strokeWidth="2" fill="none" />
    <circle cx="32" cy="32" r="14" stroke="url(#dm-icon-teal-blue)" strokeWidth="2" fill="none" />
    <circle cx="32" cy="32" r="6" stroke="url(#dm-icon-teal-blue)" strokeWidth="2" fill="none" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const x1 = 32 + 22 * Math.cos(rad)
      const y1 = 32 + 22 * Math.sin(rad)
      const x2 = 32 + 26 * Math.cos(rad)
      const y2 = 32 + 26 * Math.sin(rad)
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#dm-icon-teal-blue)" strokeWidth="1.5" strokeLinecap="round" />
    })}
  </svg>
)

const cards = [
  {
    title: 'Social Marketing Strategy',
    description: 'The first step is to clearly define the social issue or problem you want to address.',
    icon: <IconStarburst />,
  },
  {
    title: 'Digital Marketing Development',
    description: 'Start by setting clear and specific goals for your digital marketing efforts.',
    icon: <IconSunBurst />,
  },
  {
    title: 'Reporting and Analysis',
    description: 'Analyze your digital marketing performance data to refine your strategies.',
    icon: <IconTarget />,
  },
]

const DigitalMarketing = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: bgOuter }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Dark inner container with rounded corners and subtle cutouts */}
        <div
          className="relative overflow-hidden rounded-2xl rounded-b-3xl py-14 px-6 sm:px-8 lg:px-12"
          style={{ backgroundColor: bgInner }}
        >
          {/* Decorative cutouts at top-right and bottom-right */}
          <div
            className="absolute -top-8 right-0 h-16 w-16 rounded-bl-full opacity-30"
            style={{ backgroundColor: bgOuter }}
            aria-hidden
          />
          <div
            className="absolute -bottom-8 right-0 h-16 w-16 rounded-tl-full opacity-30"
            style={{ backgroundColor: bgOuter }}
            aria-hidden
          />

          {/* Three equal sections */}
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col">
                <div className="mb-6 flex items-center justify-start">
                  {card.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight text-white sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/90 sm:text-base">
                  {card.description}
                </p>
                <span
                  className="inline-block w-fit rounded-lg p-px"
                  style={{ background: 'linear-gradient(135deg, #a855f7 0%, #38bdf8 100%)' }}
                >
                  <button
                    type="button"
                    className="w-full rounded-[calc(0.5rem-1px)] bg-[#0f2744] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#132d4c] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0a1824]"
                  >
                    DISCOVER MORE
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalMarketing
