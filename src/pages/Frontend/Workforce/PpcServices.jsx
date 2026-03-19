import React from 'react'

// Place the PPC illustration (dollar sign + businessman) in public/ppc-services-hero.png
const PPC_IMAGE = '/ppc-services-hero.png'

const headingPurple = '#EC7424'
const numberOrange = '#EC7424'
const descGray = '#6b7280'

const services = [
  { num: '01', title: 'PPC Strategy', description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.' },
  { num: '02', title: 'Ad Copywriting', description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.' },
  { num: '03', title: 'PPC Optimization', description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.' },
  { num: '04', title: 'Penalty Recovery', description: 'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.' },
]

const PpcServices = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-16">
          {/* Left – illustration (dollar sign + businessman + decorative base) */}
          <div className="relative flex min-h-[320px] items-center justify-center lg:min-h-[480px]">
            <div className="relative aspect-square w-full max-w-md lg:max-w-lg">
              <img
                src={PPC_IMAGE}
                alt="PPC Services – strategic growth and paid advertising"
                className="h-full w-full object-contain object-center"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
                }}
              />
            </div>
          </div>

          {/* Right – content */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700">
              WHAT WE DO
            </p>
            <h2 className="mb-1 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl text-primary">
              We Provided Best
            </h2>
            <h3 className="mb-10 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl" style={{ color: headingPurple }}>
              PPC Services
            </h3>

            {/* Service list – 2 columns */}
            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.num}>
                  <span className="mb-1 block text-2xl font-bold" style={{ color: numberOrange }}>
                    {s.num}.
                  </span>
                  <h4 className="mb-2 text-lg font-bold text-neutral-900">
                    {s.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: descGray }}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>

            {/* DISCOVER MORE button – gradient lavender to purple */}
            <div className="mt-10">
              <button
                type="button"
                className="rounded-xl px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                style={{
                  background: 'linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)',
                }}
              >
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PpcServices
