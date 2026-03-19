import React from 'react'

const IconStar = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)
const IconHeart = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)
const IconLink = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.172-1.172M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.172 1.172" />
  </svg>
)

const teamMembers = [
  {
    name: 'Leslie Alexander',
    role: 'Web Designer',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    icon: IconStar,
  },
  {
    name: 'Theresa Webb',
    role: 'Sr. Marketer',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    icon: IconHeart,
  },
  {
    name: 'Dianne Russell',
    role: 'Area Manager',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    icon: IconLink,
  },
]

const Team = () => {
  return (
    <section className="relative w-full overflow-hidden bg-stone-200 py-16 sm:py-20 lg:py-24">
      {/* Subtle interlocking V / chevron pattern - low contrast */}
      <div
        className="absolute inset-0 z-0 opacity-[0.18]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L20 20 L40 40 L20 60 Z M40 0 L60 20 L40 40 L60 60 L40 80' fill='none' stroke='%23a8a29e' stroke-width='0.6'/%3E%3Cpath d='M20 20 L40 0 L60 20 L40 40 M20 60 L40 80 L60 60 L40 40' fill='none' stroke='%23a8a29e' stroke-width='0.5'/%3E%3Cpath d='M40 20 L50 10 L60 20 L50 30 Z M40 60 L50 50 L60 60 L50 70 Z' fill='none' stroke='%23a8a29e' stroke-width='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12 xl:gap-16">
          {/* Left: subtitle, headline, CTA */}
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="text-secondary">.:</span> OUR TEAM MEMBERS{' '}
              <span className="text-secondary">:.</span>
            </p>
            <h2 className="mb-8 max-w-xl text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              We Bring A Core Team Of Experts World.
            </h2>
            <a
              href="#view-more-members"
              className="inline-flex h-24 w-24 shrink-0 items-center justify-center self-start rounded-full bg-secondary py-2 text-center text-xs font-medium leading-tight text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:bg-secondary/90 hover:shadow-xl sm:h-28 sm:w-28 sm:text-sm"
              aria-label="View More Members"
            >
              View More Members
            </a>
          </div>

          {/* Right: 3 team cards */}
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-6">
            {teamMembers.map((member, i) => {
              const IconComponent = member.icon
              return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full sm:h-44 sm:w-44 lg:h-52 lg:w-52">
                    <img
                      src={member.imageUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Orange icon button overlapping bottom-left of circle */}
                  <a
                    href="#"
                    className="absolute bottom-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white shadow-md transition-all duration-300 ease-out hover:scale-110 hover:bg-secondary/90"
                    aria-label={member.name}
                  >
                    {IconComponent && <IconComponent />}
                  </a>
                </div>
                {/* Name section: bg changes on hover, name color changes on hover */}
                <div className="w-full rounded-xl bg-white px-4 py-4 shadow-md transition-colors duration-500 ease-in-out hover:bg-secondary/10">
                  <h3 className="mb-1 cursor-default font-bold text-primary transition-colors duration-500 ease-in-out hover:text-secondary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary/70">{member.role}</p>
                </div>
              </div>
            )
            })}
          </div>
        </div>
      </div>

      {/* Scroll-to-top: black circle, orange arrow */}
      <a
        href="#"
        className="absolute right-4 bottom-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-secondary shadow-lg ring-2 ring-secondary/30 transition-all duration-300 hover:scale-105 hover:ring-secondary/50 lg:right-8 lg:bottom-8"
        aria-label="Scroll to top"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </section>
  )
}

export default Team
