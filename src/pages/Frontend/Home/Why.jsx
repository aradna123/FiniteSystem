import React from 'react'

const WHY_IMAGE =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'

const features = [
  {
    title: 'SEO Marketing',
    description:
      'Grow brands through bold and strategic creative, focused on searching new new ways to showcase user experience and drive visibility.',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="10" r="4" />
        <path d="M8 24c0-4 3.5-8 8-8s8 4 8 8" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description:
      'Grow brands through bold and strategic creative, focused on searching new new ways to showcase user experience and drive visibility.',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="24" height="20" rx="2" />
        <path d="M4 12h24M12 6v4M20 6v4" />
      </svg>
    ),
  },
  {
    title: 'Content Marketing',
    description:
      'Grow brands through bold and strategic creative, focused on searching new new ways to showcase user experience and drive visibility.',
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8h16M8 14h16M8 20h10" />
      </svg>
    ),
  },
]

const Why = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#1f1d26] py-16 sm:py-20 lg:py-24">
      {/* Topographic / contour-style background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(255,255,255,0.06) 0%, transparent 45%),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 40%)
          `,
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Topographic-style curved lines - slightly more visible */}
      <svg
        className="absolute inset-0 z-0 h-full w-full opacity-[0.18]"
        aria-hidden
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="contours" x="0" y="0" width="600" height="400" patternUnits="userSpaceOnUse">
            <path d="M0 80 Q150 60 300 80 T600 80" fill="none" stroke="white" strokeWidth="0.7" />
            <path d="M0 160 Q200 130 400 160 T600 160" fill="none" stroke="white" strokeWidth="0.7" />
            <path d="M0 240 Q100 220 300 240 T600 240" fill="none" stroke="white" strokeWidth="0.7" />
            <path d="M0 320 Q250 290 500 320 T600 320" fill="none" stroke="white" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contours)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left: text + features */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/90">
              <span className="text-secondary">.:</span> WHY CHOOSE US{' '}
              <span className="text-secondary">:.</span>
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Make Your Service.
            </h2>
            <p className="mb-8 max-w-xl text-white/70 sm:text-lg">
              For each business, we take a bespoke approach to developing change within the
              organization, often with the common goal.
            </p>

            <div className="space-y-0">
              {features.map((item, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div className="mb-6 border-t border-white/10 lg:mb-8" aria-hidden />
                  )}
                  <div className="flex gap-4 lg:gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center text-white lg:h-14 lg:w-14">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-secondary sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/70 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image + overlay + nav */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg overflow-hidden rounded-lg">
              <img
                src={WHY_IMAGE}
                alt=""
                className="aspect-4/5 w-full object-cover"
              />
              {/* Translucent checkmark / V overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-30"
                aria-hidden
              >
                <svg
                  className="h-[85%] w-[85%] text-white"
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M40 120 L90 60 L160 140" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Section bottom-right: orange dot + scroll-up circle */}
      <div className="absolute right-4 bottom-4 z-20 flex items-center gap-2 sm:right-6 sm:bottom-6 lg:right-8 lg:bottom-8">
        <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden />
        <a
          href="#"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-zinc-800 text-white transition hover:bg-zinc-700"
          aria-label="Scroll up"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Why
