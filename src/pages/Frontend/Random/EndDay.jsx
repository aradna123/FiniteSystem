import React from 'react'

const bullets = [
  'Collaboratively administrate empowered markets via plug-and-play.',
  'Dynamically procrastinate B2C users after installed base benefits.',
  'Dramatically visualize customer directed convergence without revolutionary.',
  'Organically grow the holistic view of disruptive innovation via workplace.',
]

const features = [
  {
    title: 'Operational Excellence',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5a7.5 7.5 0 01-7.5-7.5v7.5h7.5z"
        />
      </svg>
    ),
  },
  {
    title: 'Innovative Solutions',
    description: 'Podcasting operational change management inside of workflows.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.53 1.024-1.412 1.412a29.872 29.872 0 0 1-2.208-.33 9.06 9.06 0 0 1-1.712-1.254 9.06 9.06 0 0 1-1.254-1.712 29.872 29.872 0 0 1-.33-2.208c-.388-.882-1.012-1.609-1.412-1.412a29.872 29.872 0 0 1 .33 2.208 9.06 9.06 0 0 1 1.254 1.712 9.06 9.06 0 0 1 1.712 1.254c.765.383 1.535.682 2.208.33"
        />
      </svg>
    ),
  },
  {
    title: 'Targeting and Positioning',
    description:
      'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: 'Best Support',
    description: 'Everride the digital divide with additional clickthroughs from DevOps.',
    icon: (
      <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3 21l18-9L3 3l3 9"
        />
      </svg>
    ),
  },
]

const EndDay = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left column: heading, paragraph, bullets */}
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              At the end of the day, going forward, a new normal.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Podcasting operational change management inside of workflows to establish a framework.
              Taking seamless key performance indicators offline to maximise the long tail. Keeping
              your eye on the ball while performing a deep dive on the start-up mentality to derive
              convergence on cross-platform integration.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((item, index) => (
                <li key={index} className="flex gap-3 text-base text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-gray-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: 2x2 feature grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title}>
                <div className="text-teal-500">{feature.icon}</div>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EndDay
