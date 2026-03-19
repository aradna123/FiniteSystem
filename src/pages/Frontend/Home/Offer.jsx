import React, { useState } from 'react'

const faqItems = [
  {
    title: 'Ut enim ad minim veniam exercitation ullamco?',
    content: 'Our developers are committed to maintaining the highest web standards so that your site will withstand the test of time. We care about your business, which is why we work with you.',
  },
  {
    title: 'Excepteur sint proident culpa qui officia?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Sed ut perspiciatis unde omnis iste natus errorsit?',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Consectetur adipisicing incididunt?',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Consectetur adipisicing incididunt?',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Consectetur adipisicing incididunt?',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Consectetur adipisicing incididunt?',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

const Offer = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const mainBg = '#faf9fc'
  const rightLavender = '#ede9f5'

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24" style={{ backgroundColor: mainBg }}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
          {/* Left column – pale grey organic shape with smoky/watercolor texture (as in picture) */}
          <div className="relative flex min-h-[320px] items-center lg:min-h-[420px]">
            {/* Irregular organic shape: off-white/pale grey, NOT solid – soft smoky texture inside */}
            <div className="absolute inset-0 overflow-hidden lg:right-[48%]">
              <svg
                className="absolute h-full w-full min-w-[200%] max-w-none lg:min-w-[160%]"
                viewBox="0 0 500 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMid meet"
                style={{ left: '-25%', top: '-8%' }}
                aria-hidden
              >
                <defs>
                  <clipPath id="blob-clip">
                    <path d="M 0 100 Q 0 10 110 25 Q 210 35 270 75 Q 330 130 310 210 Q 290 300 250 360 Q 190 440 90 500 Q 15 550 0 510 L 0 100 Z" />
                  </clipPath>
                  <filter id="blur-smoke" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="35" result="blur" />
                  </filter>
                  <linearGradient id="blob-base" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ebe9f2" />
                    <stop offset="50%" stopColor="#e4e2eb" />
                    <stop offset="100%" stopColor="#e8e6ef" />
                  </linearGradient>
                </defs>
                {/* Organic blob – pale grey, slightly darker than main bg */}
                <path
                  d="M 0 100 Q 0 10 110 25 Q 210 35 270 75 Q 330 130 310 210 Q 290 300 250 360 Q 190 440 90 500 Q 15 550 0 510 L 0 100 Z"
                  fill="url(#blob-base)"
                />
                {/* Smoky/watercolor texture inside blob only */}
                <g clipPath="url(#blob-clip)">
                  <ellipse cx="120" cy="180" rx="140" ry="120" fill="rgba(255,255,255,0.5)" filter="url(#blur-smoke)" />
                  <ellipse cx="80" cy="320" rx="100" ry="110" fill="rgba(0,0,0,0.025)" filter="url(#blur-smoke)" />
                  <ellipse cx="200" cy="100" rx="90" ry="80" fill="rgba(255,255,255,0.4)" filter="url(#blur-smoke)" />
                </g>
              </svg>
            </div>

            {/* Left content – on top of blob */}
            <div className="relative z-10 px-2 py-8 lg:py-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                WHAT WE OFFER
              </p>
              <h2 className="max-w-lg text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                We offer the
                <br />
                most
                <br />
                exceptional
                <br />
                <span
                  className="bg-clip-text font-bold text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                  }}
                >
                  SEO services
                </span>
                <br />
                available.
              </h2>
            </div>
          </div>

          {/* Right column – light lavender bg with soft wave cutout at top right */}
          <div
            className="relative flex flex-col justify-center rounded-tl-3xl pl-6 pr-6 pt-10 pb-10 lg:pl-12 lg:pr-12 lg:pt-14 lg:pb-14"
            style={{ backgroundColor: rightLavender }}
          >
            {/* Soft rounded wave-like cutout at top right revealing main bg */}
            <div
              className="absolute -top-8 right-0 h-24 w-24 rounded-bl-[80px] lg:h-32 lg:w-32 lg:rounded-bl-[120px]"
              style={{ backgroundColor: mainBg }}
              aria-hidden
            />

            <p className="mb-8 max-w-xl text-base leading-relaxed text-primary sm:text-lg">
              AI-powered SEO offers a bunch of benefits that can save time, boost rankings, and make your digital strategy way more efficient.
            </p>

            <div className="border-t border-stone-200/80">
              {faqItems.map((item, i) => (
                <div key={i} className="border-b border-stone-200/80">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={openIndex === i}
                  >
                    <span className="text-sm font-semibold text-primary sm:text-base">
                      {item.title}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-200/90 text-primary transition-transform duration-200 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 pt-0 text-sm leading-relaxed text-primary/70 sm:text-base">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
