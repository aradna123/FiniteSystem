import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroSlides, HERO_BG_IMAGE } from './heroSlides'

const SUBTITLE = 'Welcome Digital Agency'
const CTA_LABEL = 'Order Now'
const SLIDE_DURATION_MS = 3000

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

function MovingLines() {
  return (
    <motion.div
      className="flex gap-1.5 mb-2"
      animate={{ x: [0, 4, -4, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      <span className="block w-8 h-0.5 bg-white rounded" />
      <span className="block w-8 h-0.5 bg-white rounded" />
    </motion.div>
  )
}

function LShapedBorder({ side }) {
  const isLeft = side === 'left'
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top L */}
      <div
        className={`absolute top-0 w-10 lg:w-14 h-0.5 bg-white ${isLeft ? 'left-0' : 'right-0 left-auto'}`}
      />
      <div
        className={`absolute top-0 w-0.5 h-10 lg:h-14 bg-white ${isLeft ? 'left-10 lg:left-14' : 'right-10 lg:right-14 left-auto'}`}
      />
      {/* Bottom L */}
      <div
        className={`absolute bottom-0 w-10 lg:w-14 h-0.5 bg-white ${isLeft ? 'left-0' : 'right-0 left-auto'}`}
      />
      <div
        className={`absolute bottom-0 w-0.5 h-10 lg:h-14 bg-white ${isLeft ? 'left-10 lg:left-14 bottom-0 top-auto' : 'right-10 lg:right-14 left-auto bottom-0 top-auto'}`}
      />
    </div>
  )
}

function SocialIconsStrip() {
  const icons = [
    {
      name: 'Twitter',
      color: 'bg-[#1DA1F2]',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      color: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      color: 'bg-[#1877F2]',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ]
  return (
    <div className="relative flex flex-col items-center gap-4" aria-label="Social links">
      <div className="absolute top-1/2 left-1/2 w-0.5 h-32 -translate-x-1/2 -translate-y-1/2 bg-white/80" />
      <div className="relative z-10 flex flex-col gap-4">
        {icons.map(({ name, color, href, icon }) => (
          <a
            key={name}
            href={href}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${color} text-white shrink-0 shadow-lg`}
            aria-label={name}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

function ModalSlide({ slide, isActive }) {
  const { layout, headline, paragraph, imageUrl, imageShape } = slide
  const imageRight = layout === 'imageRight'
  const contentSide = imageRight ? 'left' : 'right'
  const imageSide = imageRight ? 'right' : 'left'

  const contentBlock = (
    <div
      className={`relative flex-1 min-w-0 flex flex-col justify-center px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-10 lg:py-14 ${
        imageRight ? 'order-1' : 'order-2'
      }`}
    >
      <LShapedBorder side={contentSide} />
      <MovingLines />
      <p className="text-white/90 text-xs sm:text-sm uppercase tracking-widest mb-0.5 sm:mb-1">
        {SUBTITLE}
      </p>
      <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-4">
        {headline}
      </h1>
      <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl mb-4 sm:mb-6">
        {paragraph}
      </p>
      <button
        type="button"
        className="self-start px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-secondary hover:bg-secondary/90 text-white text-sm sm:text-base font-medium transition-colors"
      >
        {CTA_LABEL}
      </button>
    </div>
  )

  const imageBlock = (
    <div
      className={`relative flex-1 min-w-0 flex items-center justify-center py-4 sm:py-8 lg:py-12 ${
        imageRight ? 'order-2 pl-2 sm:pl-4' : 'order-1 pr-2 sm:pr-4'
      }`}
    >
      <div className="relative w-full max-w-50 sm:max-w-70 lg:max-w-md">
        <div
          className={`relative overflow-hidden w-full aspect-square ${
            imageShape === 'circle' ? 'rounded-full' : 'rounded-2xl'
          }`}
        >
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className={`absolute top-1/2 -translate-y-1/2 z-20 ${
            imageSide === 'right' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
          }`}
        >
          <SocialIconsStrip />
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 flex flex-col lg:flex-row items-center gap-4 sm:gap-4 lg:gap-8">
      {contentBlock}
      {imageBlock}
    </div>
  )
}

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const t = setInterval(() => {
      setDirection(1)
      setActiveIndex((i) => (i + 1) % heroSlides.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(t)
  }, [isPaused])

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const currentSlide = heroSlides[activeIndex]

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
      />
      <div
        className="absolute inset-0 z-1 bg-black/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-1 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 12px,
            rgba(255,255,255,0.15) 12px,
            rgba(255,255,255,0.15) 14px
          )`,
        }}
        aria-hidden
      />

      {/* Carousel: reserve top for navbar, center content in visible area only */}
      <div className="relative z-10 flex min-h-screen w-full flex-col pt-14 sm:pt-16 lg:pt-20">
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-x-hidden overflow-y-auto pb-12 sm:pb-14 lg:pb-16">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="relative flex min-h-full w-full shrink-0 items-center justify-center py-4"
            >
              <ModalSlide slide={currentSlide} isActive />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:bottom-6 lg:bottom-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className="group p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`block h-0.5 rounded-full transition-all ${
                  i === activeIndex
                    ? 'w-8 bg-secondary'
                    : 'w-4 bg-white/60 group-hover:bg-white/80'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
