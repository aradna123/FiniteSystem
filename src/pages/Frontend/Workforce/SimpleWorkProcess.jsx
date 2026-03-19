import React from 'react'

const processSteps = [
  {
    number: '01',
    title: 'Select our Service',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Elit Sed Do Eiusmod.',
  },
  {
    number: '02',
    title: 'Contact Worker Now',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Elit Sed Do Eiusmod.',
  },
  {
    number: '03',
    title: 'Discourse Detail Project',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Elit Sed Do Eiusmod.',
  },
  {
    number: '04',
    title: 'Finalize The Work',
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Elit Sed Do Eiusmod.',
  },
]

const SimpleWorkProcess = () => {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="text-secondary">.:</span> SIMPLE WORK PROCESS <span className="text-secondary">:.</span>
          </p>
          <h2 className="mb-2 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            See Our Working Process
          </h2>
          <h3 className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
            How We Manage
          </h3>
        </div>

        {/* Process Cards - equal height, number tabs protrude outside */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <div key={i} className="group relative min-h-70">
              {/* Card box - same size, right border, rounded top only */}
              <div className="relative h-full min-h-70 overflow-hidden   border-r-6 border-primary bg-stone-200 px-6 pb-16 pt-8 shadow-sm"
              style={{borderTopLeftRadius:"100px"}}
              >
                {/* Hover effect: orange expands from bottom-right tab upward */}
                <div
                  className="absolute bottom-0 right-0 h-16 w-16 origin-bottom-right scale-0 rounded-tl-3xl bg-secondary transition-transform duration-4000 ease-out group-hover:scale-[25]"
                  aria-hidden
                />

                {/* Content - right aligned, text changes color on hover */}
                <div className="relative z-10 text-right">
                  <h3 className="mb-3 text-lg font-bold text-primary transition-colors duration-500 group-hover:text-white sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-snug text-primary/80 transition-colors duration-500 group-hover:text-white/90 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Number tab - protrudes outside bottom-right; on hover: bg light, text primary */}
              <div className="absolute -bottom-2 -right-2 z-20 flex h-14 w-14 items-center justify-center rounded-tl-2xl bg-secondary shadow-lg transition-colors duration-300 group-hover:bg-stone-200 sm:h-16 sm:w-16">
                <span className="text-base font-bold text-white transition-colors duration-300 group-hover:text-primary sm:text-lg">{step.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimpleWorkProcess
