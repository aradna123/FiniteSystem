import React from 'react'

// Simplified world landmass path (equirectangular 0–1000 x 0–500): Americas, Europe, Africa, Asia, Australia
const worldPath =
  'M 120,140 L 220,100 L 280,140 L 260,220 L 200,240 L 140,200 Z ' + // N America
  'M 200,260 L 260,240 L 280,320 L 260,420 L 200,460 L 160,380 L 180,300 Z ' + // S America
  'M 440,140 L 520,120 L 560,160 L 540,220 L 480,240 L 420,200 Z ' + // Europe
  'M 460,260 L 540,240 L 580,320 L 560,400 L 500,440 L 440,420 L 420,340 Z ' + // Africa
  'M 580,100 L 780,80 L 880,140 L 900,260 L 860,320 L 720,300 L 600,220 Z ' + // Asia
  'M 720,340 L 820,320 L 860,400 L 840,460 L 760,480 L 700,440 Z' // Australia

const dataCenterDots = [
  { cx: 180, cy: 240 },
  { cx: 320, cy: 380 },
  { cx: 500, cy: 200 },
  { cx: 540, cy: 340 },
  { cx: 720, cy: 220 },
  { cx: 760, cy: 420 },
]

const DataCenter = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0f1b] pt-16 pb-2 sm:pt-20 sm:pb-3 lg:pt-24 lg:pb-4">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top: two columns – headline (left), paragraph (right) */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
          {/* Left: headline with "data centers" highlighted */}
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Our{' '}
            <span className="text-[#facc15]">data centers</span>
            {' '}spread all over the world. Get access to the API from anywhere.
          </h2>

          {/* Right: paragraph */}
          <p className="max-w-lg text-base leading-relaxed text-[#e0e0e0] sm:text-lg">
            Our data centers are a key component of our global infrastructure, providing reliable and scalable computing resources to customers around the world. We offer a highly distributed and resilient platform that can support the most demanding workloads.
          </p>
        </div>

        {/* Bottom: world map made of dots – component yahi khatam, neeche bg nazar nahi aayega */}
        <div className="relative mt-14 overflow-hidden sm:mt-16 lg:mt-20">
          <svg
            viewBox="0 0 1000 500"
            className="h-auto w-full min-h-[280px] sm:min-h-[320px]"
            aria-hidden
          >
            <defs>
              {/* Grey dot pattern for landmasses */}
              <pattern
                id="landDots"
                x="0"
                y="0"
                width="12"
                height="12"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="6" cy="6" r="1.2" fill="#b5b5b5" />
              </pattern>
              {/* Denser grey dots for solid feel */}
              <pattern
                id="landDotsDense"
                x="0"
                y="0"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="4" cy="4" r="1" fill="#b5b5b5" />
              </pattern>
            </defs>
            {/* Continents: filled with grey dots */}
            <path
              d={worldPath}
              fill="url(#landDotsDense)"
              stroke="transparent"
            />
            {/* Data center locations: yellow/orange dots */}
            {dataCenterDots.map((dot, i) => (
              <circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r="4"
                fill="#facc15"
                className="opacity-95"
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}

export default DataCenter
