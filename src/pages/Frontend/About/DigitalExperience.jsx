import React from 'react'

const bulletPoints = [
  'For startups and growing businesses, an online specialist can develop a digital marketing plan to help you grow.',
  'Your digital consultant will also be able to kickstart campaigns and maximise your marketing budget.',
  'Lorem ipsum dolor sit amet, vix an natum labitur eleif, mel amet laoreet prois menandri.',
]

const featureCards = [
  {
    title: 'Search Engine Optimization',
    description: 'Maecenas elementum sapien in metus placerat finibus.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Social Media Strategy',
    description: 'Maecenas elementum sapien in metus placerat finibus.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14h.01M12 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Real Time and Data',
    description: 'Maecenas elementum sapien in metus placerat finibus.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01M9 15h6" />
      </svg>
    ),
  },
  {
    title: 'Reporting & Analysis',
    description: 'Maecenas elementum sapien in metus placerat finibus.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

const DigitalExperience = () => {
  return (
    <section className="relative w-full overflow-hidden bg-stone-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left – content */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Choose Us
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Outstanding Digital Experience
            </h2>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-primary/75 sm:text-base">
              Ad nec unum copiosae. Sea ex everti labores, ad option iuvaret qui. Id quo esse nusquam. Eam iriure diceret oporteat.
            </p>

            {/* Bullet list with checkmarks */}
            <ul className="mb-8 space-y-4">
              {bulletPoints.map((text, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:h-7 sm:w-7">
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-primary/80 sm:text-base">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#discover-more"
              className="inline-flex w-fit items-center justify-center rounded-lg border-2 border-primary bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary transition-colors duration-300 hover:bg-primary/5 sm:px-8 sm:py-4"
            >
              Discover More
            </a>
          </div>

          {/* Right – 2x2 feature cards with subtle blurred bg */}
          <div className="relative">
            {/* Soft blurred shapes behind cards */}
            <div
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute bottom-10 right-0 h-40 w-40 rounded-full bg-secondary/10 blur-3xl"
              aria-hidden
            />

            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
              {featureCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-stone-200/80 bg-white px-5 py-6 shadow-lg shadow-stone-200/40 transition-shadow duration-300 hover:shadow-xl sm:px-6 sm:py-7"
                >
                  <div className="mb-4 text-primary">
                    {card.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-primary sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-snug text-primary/70">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalExperience
