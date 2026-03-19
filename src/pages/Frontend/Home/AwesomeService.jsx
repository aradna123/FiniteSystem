import React from 'react'

const services = [
  {
    title: 'SEO Consultancy',
    description: 'Delectus recteque has ne, no pro tation commodo. Ea libris utamur vix, in sumo augue soluta vis.',
    icon: (
      <svg className="mx-auto h-14 w-14 sm:h-16 sm:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
        <circle cx="8" cy="11" r="2.5" />
        <circle cx="16" cy="11" r="2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v1.5a1 1 0 001 1h1a1 1 0 001-1V14M16 14v1.5a1 1 0 01-1 1h-1a1 1 0 01-1-1V14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l1 1.5M17 8l-1 1.5" />
        <ellipse cx="6" cy="5.5" rx="2" ry="1.5" />
        <ellipse cx="18" cy="5.5" rx="2" ry="1.5" />
      </svg>
    ),
  },
  {
    title: 'Competitor Analysis',
    description: 'Per ea quod iusto. Te autem perti nax definitiones vel, denique patrioque id per was be more.',
    icon: (
      <svg className="mx-auto h-14 w-14 sm:h-16 sm:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Social Media Marketing',
    description: 'Delenit signiferumque ei cum, te pertinax voluptatum sed, ornatus nonumes explicari sit et.',
    icon: (
      <svg className="mx-auto h-14 w-14 sm:h-16 sm:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8l2 3 3-1-2 3 2 1" />
      </svg>
    ),
  },
]

const AwesomeService = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background: light grey with dotted world-map style pattern – thora dark for visibility */}
      <div className="absolute inset-0 bg-stone-300/50" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1.2px, transparent 0)`,
          backgroundSize: '22px 22px',
        }}
      />
      {/* Secondary dotted layer for map-like texture */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 12px 12px, var(--color-primary) 0.9px, transparent 0)`,
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header – centered */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            CARE FEATURES
          </p>
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Provide Awesome Service
            <br />
            With Our Tools
          </h2>
        </div>

        {/* Three service cards – horizontal */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl border border-stone-200/90 bg-white/95 px-6 py-8 text-center shadow-md backdrop-blur-sm sm:px-8 sm:py-10"
            >
              <div className="mb-5 text-primary">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-primary sm:text-xl">
                {service.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-primary/75 sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AwesomeService
