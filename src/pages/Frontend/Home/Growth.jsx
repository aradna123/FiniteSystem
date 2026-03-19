import React from 'react'

const trafficData = [
  { label: 'Linux', value: 0.4, color: '#8b5cf6' },
  { label: 'Mac', value: 0.55, color: '#ec4899' },
  { label: 'iOS', value: 0.65, color: '#eab308' },
  { label: 'Windows', value: 0.95, color: '#3b82f6' },
  { label: 'Android', value: 0.25, color: '#22c55e' },
]

const BarChartCard = () => (
  <div className="rounded-xl bg-white p-5 shadow-lg sm:p-6">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-base font-semibold text-neutral-800">Traffic by Device</h3>
      <button type="button" className="text-neutral-400 hover:text-neutral-600" aria-label="More options">
        <span className="text-lg">⋯</span>
      </button>
    </div>
    <div className="flex h-[200px] items-end justify-between gap-2 sm:gap-3">
      {trafficData.map((item, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-2">
          <div
            className="w-full min-w-0 rounded-t transition hover:opacity-90"
            style={{
              height: `${item.value * 100}%`,
              minHeight: '24px',
              backgroundColor: item.color,
            }}
          />
          <span className="truncate text-center text-xs font-medium text-neutral-500">{item.label}</span>
        </div>
      ))}
    </div>
    <div className="mt-2 flex justify-end gap-1 text-xs text-neutral-400">
      <span>0</span>
      <span>300K</span>
      <span>600K</span>
      <span>900K</span>
    </div>
  </div>
)

const linePoints1 = '0,80 60,60 120,75 180,40 240,55 300,30 360,45'
const linePoints2 = '0,70 60,50 120,65 180,50 240,45 300,55 360,40'

const LineChartCard = () => (
  <div className="rounded-xl bg-white p-5 shadow-lg sm:p-6">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-base font-semibold text-neutral-800">Total Users</h3>
      <div className="flex items-center gap-3 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          Current Week
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-violet-500" />
          Previous Week
        </span>
      </div>
    </div>
    <div className="h-[180px] w-full">
      <svg viewBox="0 0 360 120" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={linePoints1}
        />
        <polyline
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={linePoints2}
        />
        <circle cx="300" cy="30" r="4" fill="#94a3b8" />
      </svg>
    </div>
    <div className="mt-1 text-right text-xs text-neutral-400">1M · 5M · 10M · 15M</div>
  </div>
)

const Growth = () => {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top: centered title + subtitle */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          What you can build with Silicon
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base text-neutral-500 sm:text-lg">
          Well, lots of things. Some of them are listed below.
        </p>

        {/* Two columns: left text, right stacked charts */}
        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left: Data analysis tools heading + paragraph */}
          <div className="lg:pr-4">
            <h3 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Data analysis tools
            </h3>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg">
              From complex analysis to stunning visualizations, our advanced AI technology can help you extract valuable insights and make data-driven decisions faster than ever before.
               From complex analysis to stunning visualizations, our advanced AI technology can help you extract valuable insights and make data-driven decisions faster than ever before.
               From complex analysis to stunning visualizations, our advanced AI technology can help you extract valuable insights and make data-driven decisions faster than ever before.
            </p>
          </div>

          {/* Right: two chart cards – thora overlap, dono clearly nazar aayein */}
          <div className="relative min-h-[340px] sm:min-h-[400px]">
            {/* Peeche wala card (line chart) – neeche, left taraf zyada visible */}
            <div className="absolute left-0 top-12 w-[78%] sm:top-14 sm:w-[80%]">
              <LineChartCard />
            </div>
            {/* Aage wala card (bar chart) – upar, right taraf, peeche wali se thora door */}
            <div className="absolute -top-6 right-3 z-10 w-[78%] sm:-top-8 sm:right-6 sm:w-[80%]">
              <BarChartCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Growth
