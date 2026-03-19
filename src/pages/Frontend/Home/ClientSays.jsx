import React, { useState } from 'react'

const primary = '#011C4C'
const secondary = '#EC7424'
const headingPurple = '#3730a3'
const dotActive = '#6366f1'
const dotInactive = '#c4b5fd'

const testimonials = [
  {
    quote: 'Design is a way of life, a point of view. It involves the whole complex of visual communications: talent, creative ability, manual skill, and technical knowledge.',
    name: 'Tommy Dents',
    role: 'Customer',
    avatarLeft: 'https://i.pravatar.cc/80?img=12',
    avatarRight: 'https://i.pravatar.cc/80?img=33',
  },
  {
    quote: 'Exceptional service and creative solutions. The team understood our vision and delivered beyond expectations.',
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    avatarLeft: 'https://i.pravatar.cc/80?img=23',
    avatarRight: 'https://i.pravatar.cc/80?img=44',
  },
  {
    quote: 'Professional, responsive, and results-driven. We could not be happier with the outcome.',
    name: 'James Chen',
    role: 'CEO',
    avatarLeft: 'https://i.pravatar.cc/80?img=15',
    avatarRight: 'https://i.pravatar.cc/80?img=52',
  },
]

// 8 floating avatars – spread across full section, farther from content
const floatingAvatars = [
  { top: '8%', left: '3%', size: 14 },
  { top: '15%', right: '4%', size: 12 },
  { top: '38%', left: '1%', size: 11 },
  { top: '42%', right: '2%', size: 13 },
  { top: '68%', left: '4%', size: 12 },
  { top: '72%', right: '3%', size: 14 },
  { bottom: '18%', left: '2%', size: 11 },
  { bottom: '12%', right: '5%', size: 13 },
]

const avatarUrls = [
  'https://i.pravatar.cc/100?img=1',
  'https://i.pravatar.cc/100?img=2',
  'https://i.pravatar.cc/100?img=3',
  'https://i.pravatar.cc/100?img=4',
  'https://i.pravatar.cc/100?img=5',
  'https://i.pravatar.cc/100?img=6',
  'https://i.pravatar.cc/100?img=7',
  'https://i.pravatar.cc/100?img=8',
]

const ClientSays = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const t = testimonials[activeIndex]

  const goNext = () => setActiveIndex((i) => (i + 1) % testimonials.length)
  const goTo = (i) => setActiveIndex(i)

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: 'linear-gradient(180deg, #f8f9ff 0%, #f1f3f9 50%, #eef0f8 100%)',
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .avatar-float {
          animation: float 4s ease-in-out infinite;
        }
        .avatar-float:nth-child(2) { animation-delay: 0.5s; }
        .avatar-float:nth-child(3) { animation-delay: 1s; }
        .avatar-float:nth-child(4) { animation-delay: 1.5s; }
        .avatar-float:nth-child(5) { animation-delay: 0.3s; }
        .avatar-float:nth-child(6) { animation-delay: 0.8s; }
        .avatar-float:nth-child(7) { animation-delay: 1.2s; }
        .avatar-float:nth-child(8) { animation-delay: 0.2s; }
      `}</style>

      {/* Floating avatars – full section, spread out and farther from content */}
      {floatingAvatars.map((pos, i) => (
        <div
          key={i}
          className="avatar-float absolute z-0 overflow-hidden rounded-full border-2 border-white shadow-md"
          style={{
            width: `${pos.size * 4}px`,
            height: `${pos.size * 4}px`,
            ...(pos.top !== undefined && { top: pos.top }),
            ...(pos.bottom !== undefined && { bottom: pos.bottom }),
            ...(pos.left !== undefined && { left: pos.left }),
            ...(pos.right !== undefined && { right: pos.right }),
          }}
        >
          <img
            src={avatarUrls[i]}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl" style={{ color: headingPurple }}>
            What Our Client&apos;s Say
          </h2>
        </div>

        {/* Central card */}
        <div className="relative flex min-h-[320px] items-center justify-center py-8">
          {/* Main testimonial card */}
          <article className="relative z-10 w-full max-w-2xl rounded-2xl bg-white/90 px-8 py-10 shadow-lg backdrop-blur sm:px-12 sm:py-12">
            {/* Gradient quotation marks */}
            <span
              className="absolute left-6 top-6 text-5xl font-serif leading-none sm:left-8 sm:text-6xl"
              style={{
                background: 'linear-gradient(180deg, #8b5cf6 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              aria-hidden
            >
              &ldquo;
            </span>
            <span
              className="absolute right-6 top-6 text-3xl font-serif leading-none sm:right-8 sm:text-4xl"
              style={{
                background: 'linear-gradient(180deg, #8b5cf6 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              aria-hidden
            >
              &rdquo;
            </span>

            <blockquote className="relative pt-8 text-center text-base leading-relaxed text-neutral-800 sm:text-lg">
              {t.quote}
            </blockquote>

            <div className="mt-8 text-center">
              <p className="font-bold text-neutral-900">{t.name}</p>
              <p className="mt-0.5 text-sm text-neutral-500">{t.role}</p>
            </div>

            {/* Embedded avatars at bottom of card */}
            <div className="absolute -bottom-4 left-6 h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md sm:left-8">
              <img src={t.avatarLeft} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 right-6 h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md sm:right-8">
              <img src={t.avatarRight} alt="" className="h-full w-full object-cover" />
            </div>
          </article>
        </div>

        {/* Pagination dots */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className="h-2.5 w-2.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === activeIndex ? dotActive : dotInactive,
                transform: i === activeIndex ? 'scale(1.2)' : 'scale(1)',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Next button – bottom right */}
        <div className="mt-8 flex justify-end pr-2 sm:pr-4">
          <button
            type="button"
            onClick={goNext}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: secondary }}
            aria-label="Next testimonial"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ClientSays
