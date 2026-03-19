import React from 'react'

const ASSESSMENT_BG =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80'

const assessmentCards = [
  {
    title: 'We Deal With Love',
    description:
      'The shore hat this group would some how form a family all trouble with the law sinced a the day what might he right for these days',
    icon: (
      <svg className="h-12 w-12 sm:h-14 sm:w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'We Are Professionals',
    description:
      'The shore hat this group would some how form a family all trouble with the law sinced a the day what might he right for these days',
    icon: (
      <svg className="h-12 w-12 sm:h-14 sm:w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'We Deliver Our Best',
    description:
      'The shore hat this group would some how form a family all trouble with the law sinced a the day what might he right for these days',
    icon: (
      <svg className="h-12 w-12 sm:h-14 sm:w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M12 6v2M12 16v2M6 12h2M16 12h2" />
        <path strokeLinecap="round" d="M8.5 8.5l3 3M12.5 12.5l3 3M12.5 12.5l-3-3M8.5 15.5l3-3" />
      </svg>
    ),
  },
]

const OurAssesment = () => {
  return (
    <section className="relative w-full overflow-hidden bg-stone-100">
      {/* Top half: dark background image with centered content */}
      <div
        className="relative flex min-h-[45vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20 sm:min-h-[50vh] sm:py-24"
        style={{ backgroundImage: `url(${ASSESSMENT_BG})` }}
      >
        <div className="absolute inset-0 z-0 bg-black/75" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-secondary">
            Why Choose Us
          </p>
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our Assessment
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-secondary" aria-hidden />
          <p className="text-base leading-relaxed text-white/90 sm:text-lg">
            The shore hat this group would some how form a family all trouble with the law sinced a the day what might he right for these days are Happy and Free you may not be right for some they was born of them.
          </p>
        </div>
      </div>

      {/* Bottom half: 3 white cards overlapping the dark section */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8" style={{ marginTop: '-6rem' }}>
          {assessmentCards.map((card, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center rounded-xl bg-white px-6 py-8 text-center shadow-lg sm:py-10"
            >
              <div className="mb-4 text-secondary">
                {card.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-primary sm:text-xl">
                {card.title}
              </h3>
              <div className="mb-4 h-0.5 w-12 bg-secondary" aria-hidden />
              <p className="text-sm leading-relaxed text-primary/80 sm:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer below cards */}
      <div className="h-16 bg-stone-100 sm:h-20 lg:h-24" />
    </section>
  )
}

export default OurAssesment
