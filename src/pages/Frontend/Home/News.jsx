import React from 'react'

const bgLight = '#F7F8FC'
const titlePurple = '#4B0082'
const textGray = '#4A5568'
const labelGray = '#6B7280'
const readMoreGray = '#1F2937'
const iconGray = '#D1D5DB'

const newsItems = [
  { date: 'August 2, 2023', title: 'How to Increase Your ROI Through scientific SEM?' },
  { date: 'August 1, 2023', title: 'Simple Ways To Optimize Your Website For SEO' },
  { date: 'August 1, 2023', title: 'The Basics of Blogging Search Optimization' },
]

const ShareIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
  </svg>
)

const News = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: bgLight }}>
      {/* Subtle abstract background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-30" style={{ backgroundColor: '#C7D2FE' }} />
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full opacity-20" style={{ backgroundColor: '#E0E7FF' }} />
        <div className="absolute -right-20 -top-10 h-72 w-72 rounded-full opacity-25" style={{ backgroundColor: '#C7D2FE' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest" style={{ color: labelGray }}>
            BLOG
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ color: titlePurple }}>
            Latest News
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed" style={{ color: textGray }}>
            Ad nec unum copiosae. Sea ex everti labores, ad option iuvaret qui. Id quo esse nusquam. Eam iriure diceret oporteat.
          </p>
        </div>

        {/* News cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <article
              key={i}
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)' }}
            >
              <time className="mb-3 block text-sm" style={{ color: labelGray }}>
                {item.date}
              </time>
              <h3 className="mb-6 flex-1 text-lg font-semibold leading-snug sm:text-xl" style={{ color: titlePurple }}>
                {item.title}
              </h3>
              <div className="flex items-center justify-between pt-6">
                <a
                  href="#"
                  className="text-xs font-bold uppercase tracking-wider transition hover:opacity-80"
                  style={{ color: readMoreGray }}
                >
                  READ MORE
                </a>
                <button
                  type="button"
                  className="p-1 transition hover:opacity-70"
                  style={{ color: iconGray }}
                  aria-label="Share"
                >
                  <ShareIcon />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
