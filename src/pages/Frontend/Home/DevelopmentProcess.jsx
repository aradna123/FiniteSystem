import React from 'react'

const processSteps = [
  {
    letter: 'A',
    title: 'Great Ideas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies, ante',
    boxBg: 'primary',
    textColor: 'white',
    icon: 'lightbulb',
  },
  {
    letter: 'B',
    title: 'The beginning',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies, ante',
    boxBg: 'secondary',
    textColor: 'primary',
    icon: 'rocket',
  },
  {
    letter: 'C',
    title: 'Launch & Grow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies, ante',
    boxBg: 'primary',
    textColor: 'white',
    icon: 'target',
  },
]

const DevelopmentProcess = () => {
  const ringRadius = 140
  const ringStroke = 28
  const innerRadius = 90
  const cx = 200
  const cy = 200

  // SVG arc for segment: from angle1 to angle2 (degrees), outer R, inner R
  const getArcPath = (startAngle, endAngle, outerR, innerR) => {
    const rad = (deg) => (deg * Math.PI) / 180
    const x1 = cx + outerR * Math.cos(rad(startAngle))
    const y1 = cy + outerR * Math.sin(rad(startAngle))
    const x2 = cx + outerR * Math.cos(rad(endAngle))
    const y2 = cy + outerR * Math.sin(rad(endAngle))
    const x3 = cx + innerR * Math.cos(rad(endAngle))
    const y3 = cy + innerR * Math.sin(rad(endAngle))
    const x4 = cx + innerR * Math.cos(rad(startAngle))
    const y4 = cy + innerR * Math.sin(rad(startAngle))
    const large = endAngle - startAngle > 180 ? 1 : 0
    return `M ${x1} ${y1} A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerR} ${innerR} 0 ${large} 0 ${x4} ${y4} Z`
  }

  const segmentPaths = [
    { d: getArcPath(0, 120, ringRadius, ringRadius - ringStroke), fill: 'var(--color-secondary)' },
    { d: getArcPath(120, 240, ringRadius, ringRadius - ringStroke), fill: 'var(--color-primary)' },
    { d: getArcPath(240, 360, ringRadius, ringRadius - ringStroke), fill: 'var(--color-secondary)' },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-stone-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title + line */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Our Development Process
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-24 bg-primary/40" aria-hidden />
        </div>

        {/* Paragraph in subtle box */}
        <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-stone-200 bg-white/90 px-6 py-6 shadow-sm sm:px-8 sm:py-7">
          <p className="text-left text-sm leading-relaxed text-primary/80 sm:text-base">
            Our development process is rooted in agile methodology, emphasizing flexibility, adaptability, and continuous improvement. We collaborate closely with clients, gather feedback at every stage, and deliver ROI and long-term value.
          </p>
        </div>

        {/* Circular diagram area – with faint gear shapes in bg */}
        <div className="relative mx-auto mt-12 max-w-2xl lg:mt-16">
          {/* Faint gear shapes in background */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.06]" aria-hidden>
            <svg className="h-full w-full max-w-md" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="200" cy="200" r="120" strokeDasharray="8 6" />
              <circle cx="200" cy="200" r="80" strokeDasharray="6 4" />
              {/* Gear-like teeth */}
              {[...Array(12)].map((_, i) => {
                const a = (i * 30 * Math.PI) / 180
                const r1 = 115
                const r2 = 125
                const x1 = 200 + r1 * Math.cos(a)
                const y1 = 200 + r1 * Math.sin(a)
                const x2 = 200 + r2 * Math.cos(a)
                const y2 = 200 + r2 * Math.sin(a)
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
              })}
            </svg>
          </div>

          {/* Main diagram SVG: ring + inner circle */}
          <div className="relative flex justify-center">
            <svg
              viewBox="0 0 400 400"
              className="h-auto w-full max-w-md"
              aria-hidden
            >
              {/* 3 segments of the ring */}
              <g>
                {segmentPaths.map((seg, i) => (
                  <path key={i} d={seg.d} fill={seg.fill} />
                ))}
              </g>
              {/* Inner circle – dashed border */}
              <circle
                cx={cx}
                cy={cy}
                r={innerRadius - 10}
                fill="#f5f5f4"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="8 6"
                style={{ opacity: 0.4 }}
              />
              <text x={cx} y={cy - 6} textAnchor="middle" style={{ fontFamily: 'sans-serif', fontSize: 14, fontWeight: 700, fill: 'var(--color-primary)' }}>
                CIRCULAR
              </text>
              <text x={cx} y={cy + 14} textAnchor="middle" style={{ fontFamily: 'sans-serif', fontSize: 11, fill: 'var(--color-primary)', opacity: 0.8 }}>
                DIAGRAM
              </text>
            </svg>
          </div>

          {/* 3 process steps – positioned around the diagram */}
          <div className="relative -mt-64 sm:-mt-72 lg:-mt-80">
            {/* Step A – top-left */}
            <div className="absolute left-0 top-0 max-w-55 sm:left-2 sm:max-w-65 lg:left-4">
              <div className="flex items-start gap-2">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="h-3 w-8 bg-secondary sm:w-10" aria-hidden />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary sm:h-9 sm:w-9">
                    A
                  </div>
                  <div className="h-12 w-0.5 bg-primary sm:h-14" aria-hidden />
                </div>
                <div className="rounded-xl bg-primary px-4 py-3 text-white shadow-md sm:px-5 sm:py-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold sm:text-base">Great Ideas</h3>
                      <p className="mt-1 text-xs leading-snug text-white/90 sm:text-sm">{processSteps[0].description}</p>
                    </div>
                    <svg className="h-8 w-8 shrink-0 text-secondary sm:h-9 sm:w-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74C19 5.14 15.86 2 12 2zm-2 10c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm2 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm2 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-6-5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Step B – right */}
            <div className="absolute right-0 top-24 max-w-55 sm:right-2 sm:top-28 sm:max-w-65 lg:right-4">
              <div className="flex items-start gap-2">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="h-3 w-8 bg-primary sm:w-10" aria-hidden />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white sm:h-9 sm:w-9">
                    B
                  </div>
                  <div className="h-12 w-0.5 bg-primary sm:h-14" aria-hidden />
                </div>
                <div className="rounded-xl bg-secondary px-4 py-3 text-primary shadow-md sm:px-5 sm:py-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold sm:text-base">The beginning</h3>
                      <p className="mt-1 text-xs leading-snug text-primary/90 sm:text-sm">{processSteps[1].description}</p>
                    </div>
                    <svg className="h-8 w-8 shrink-0 text-primary sm:h-9 sm:w-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M12 2L9 8h2v6H9l3 6 3-6h-2V8h2L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Step C – bottom-left */}
            <div className="absolute bottom-0 left-0 max-w-55 sm:left-2 sm:max-w-65 lg:left-4 lg:bottom-4">
              <div className="flex items-start gap-2">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="h-3 w-8 bg-secondary sm:w-10" aria-hidden />
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary sm:h-9 sm:w-9">
                    C
                  </div>
                  <div className="h-12 w-0.5 bg-primary sm:h-14" aria-hidden />
                </div>
                <div className="rounded-xl bg-primary px-4 py-3 text-white shadow-md sm:px-5 sm:py-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold sm:text-base">Launch & Grow</h3>
                      <p className="mt-1 text-xs leading-snug text-white/90 sm:text-sm">{processSteps[2].description}</p>
                    </div>
                    <svg className="h-8 w-8 shrink-0 text-secondary sm:h-9 sm:w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer so step boxes don't get cut */}
          <div className="h-64 sm:h-72 lg:h-80" />
        </div>
      </div>
    </section>
  )
}

export default DevelopmentProcess
