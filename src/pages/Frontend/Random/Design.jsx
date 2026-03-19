import React from 'react'

const features = [
  {
    title: 'AI Assessment',
    description:
      'Users answer a short guided assessment to receive personalized wellness insights without complex medical questions.',
  },
  {
    title: 'Daily Insights',
    description:
      'AI transforms collected data into simple insights and daily recommendations users can easily understand and follow.',
  },
  {
    title: 'Health Dashboard',
    description:
      'All health data is organized into one clear dashboard that highlights trends, status, and key wellness signals.',
  },
  {
    title: 'Habit Tracking',
    description:
      'Users can track daily habits and wellness activities with visual feedback that encourages consistency over perfection.',
  },
]

const Design = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top label + heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-600">
            Smart Features
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Designed For Simple Daily Wellness
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 sm:text-lg">
            Every feature is designed to guide users gently, turning health data into clear insights
            and meaningful daily actions.
          </p>
        </div>

        {/* Phone + feature blocks */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Left column - 2 features */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {features.slice(0, 2).map((item) => (
              <div key={item.title} className="lg:text-right">
                <h3 className="text-lg font-bold text-indigo-700 sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Central phone mockup */}
          <div className="relative flex justify-center">
            {/* Purple glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100/50 via-transparent to-purple-100/30 blur-2xl" />
            <div className="relative w-[280px] sm:w-[320px]">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border-[10px] border-gray-800 bg-gray-900 p-2 shadow-2xl">
                {/* Notch */}
                <div className="mx-auto mb-2 h-6 w-28 rounded-b-2xl bg-gray-900" />
                {/* Screen */}
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1.5rem] bg-gray-100">
                  {/* Status bar */}
                  <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-white/90 px-6 py-2 text-xs font-medium text-gray-800">
                    <span>9:41</span>
                    <span className="flex gap-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </span>
                  </div>
                  {/* Overlay cards on screen */}
                  <div className="absolute left-3 top-14 z-10 rounded-lg bg-white/90 px-2 py-1.5 shadow-sm">
                    <span className="text-[10px] font-semibold text-indigo-600">128 mmHg</span>
                  </div>
                  <div className="absolute right-3 top-14 z-10 rounded-lg bg-white/90 px-2 py-1.5 shadow-sm">
                    <span className="text-[10px] font-semibold text-red-500">87 bpm</span>
                  </div>
                  {/* Main image - placeholder */}
                  <img
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Wellness"
                    className="h-full w-full object-cover object-top"
                  />
                  {/* Scanning overlay */}
                  <div className="absolute inset-4 top-20 flex items-center justify-center rounded-xl border-2 border-dashed border-white/60" />
                  <div className="absolute bottom-24 left-0 right-0 text-center">
                    <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium text-white">
                      SCANNING...
                    </span>
                  </div>
                  {/* Bottom buttons */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white">
                      ⚙
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500 text-2xl text-white shadow-lg">
                      +
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white">
                      ✎
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - 2 features */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {features.slice(2, 4).map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-bold text-indigo-700 sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design
