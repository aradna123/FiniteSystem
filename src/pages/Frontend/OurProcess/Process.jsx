

import React, { useState } from 'react'

const steps = [
  {
    number: 1,
    title: 'Brainstorm',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.',
  },
  {
    number: 2,
    title: 'Design',
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    number: 3,
    title: 'Develop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.',
  },
  {
    number: 4,
    title: 'Test',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.',
  },
]

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(2) // default: 3rd (Develop)

  const activeStep = steps[activeIndex]

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Work Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex items-center justify-between gap-4">
          {/* dashed line behind circles */}
          <div className="pointer-events-none absolute inset-x-10 top-1/2 -z-10 hidden border-t-2 border-dashed border-gray-200 md:block" />

          {steps.map((step, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={step.number}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className="group flex flex-1 flex-col items-center gap-3 focus:outline-none"
              >
                {/* Circle */}
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full border-4 text-xl font-semibold transition-all duration-200 sm:h-24 sm:w-24 ${
                    isActive
                      ? 'border-emerald-500 text-emerald-600 shadow-[0_0_0_6px_rgba(16,185,129,0.15)] bg-white'
                      : 'border-gray-200 text-gray-500 bg-white group-hover:border-emerald-300 group-hover:text-emerald-500'
                  }`}
                >
                  {step.number}
                </div>

                {/* Label */}
                <span
                  className={`text-sm sm:text-base font-medium ${
                    isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-800'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active step text */}
        <div className="mt-10 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {activeStep.title}
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
            {activeStep.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Process