import React from 'react'

const EXCLUSIVE_IMAGE =
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'

const features = [
  {
    title: 'Media Promotion',
    description: 'Maecenas elementum sapien in metus placerat finibus.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13a3 3 0 010-6m12.708 0a3 3 0 110 6m-9 0h.01" />
      </svg>
    ),
  },
  {
    title: 'Infographics Content',
    description: 'Maecenas elementum sapien in metus placerat finibus.',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const ExclussiveAgency = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left column – content */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              How It Works
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              We are Exclusive Solution Agency
            </h2>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-primary/75 sm:text-base">
              Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam. Ne nam nonumy putent fuisset, reque fabulas usu ne. Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam. Ne nam nonumy putent fuisset, reque fabulas usu ne. Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam te omittam comprehensam. Ne nam nonumy putent fuisset, reque fabulas usu ne.
            </p>

            {/* Two feature blocks side by side */}
            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
              {features.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="relative mb-3 inline-flex w-fit">
                    <span className={`flex h-14 w-14 items-center justify-center rounded-xl text-secondary`}>
                      {item.icon}
                    </span>
                    {/* Decorative dots */}
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-secondary/60" aria-hidden />
                    <span className="absolute bottom-0 right-2 h-1.5 w-1.5 rounded-full bg-secondary/40" aria-hidden />
                  </div>
                  <h3 className="mb-1 text-base font-bold text-primary sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-snug text-primary/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#discover-more"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg sm:px-8 sm:py-4"
              style={{
                background: 'linear-gradient(90deg, var(--color-primary) 0%, #1a237e 100%)',
              }}
            >
              Discover More
            </a>
          </div>

          {/* Right column – illustration / image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl shadow-xl lg:max-w-xl">
              <img
                src={EXCLUSIVE_IMAGE}
                alt=""
                className="aspect-4/3 w-full object-cover lg:aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExclussiveAgency
