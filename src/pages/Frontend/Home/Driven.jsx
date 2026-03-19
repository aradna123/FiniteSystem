import React from 'react'

// Place your Driven section image in public/driven-hero.png (man writing with digital network overlay)
const DRIVEN_IMAGE = '/driven-hero.png'

const purple = '#B065F6'
const blueHighlight = '#2563eb'

const bulletPoints = [
  'ITactics is committed to delivering innovative solutions',
  'Empowering businesses through innovative technology.',
  'Delivering tailored IT solutions for unique needs.',
]

// Icons for the vertical stack (cart, gallery/folder, browser)
const IconCart = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)
const IconFolder = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2h-3.172a2 2 0 01-1.414-.586L13 2.586A2 2 0 0011.172 2H6a2 2 0 00-2 2v16a2 2 0 002 2z" />
  </svg>
)
const IconBrowser = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const rightIcons = [
  { Icon: IconCart, label: 'E-commerce' },
  { Icon: IconFolder, label: 'Gallery' },
  { Icon: IconBrowser, label: 'Web services' },
]

const Driven = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left column – text */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
              EMPOWERING BUSINESSES
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Driven by innovation,{' '}
              <span style={{ color: blueHighlight }}>fueled by expertise</span>
            </h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-900 sm:text-lg">
              ITactics is dedicated to bridging the gap between technology and business needs, providing tailored solutions that enhance efficiency and drive growth.
            </p>
            <ul className="space-y-4">
              {bulletPoints.map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: purple }}
                    aria-hidden
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base text-neutral-900">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column – image + vertical icon stack */}
          <div className="relative">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-neutral-200 sm:aspect-5/4 lg:aspect-4/3">
              <img
                src={DRIVEN_IMAGE}
                alt="Professional writing with digital connectivity – ITactics expertise"
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Driven
