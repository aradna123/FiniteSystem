import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CAROUSEL_INTERVAL_MS = 5000

const caseStudies = [
    {
        category: 'SEO',
        title: 'Mannix Marketing',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
        paragraph1: 'Grow brands through bold and strategic creative, focused on searching new ways to showcase user experience and drive visibility.',
        paragraph2: 'We deliver measurable results for your bespoke SEO and digital marketing needs.',
    },
    {
        category: 'Digital',
        title: 'Brand Strategy & Growth',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
        paragraph1: 'We help brands define their position and grow through data-driven strategy and creative execution.',
        paragraph2: 'From research to launch, we ensure your brand stands out in a crowded market.',
    },
    {
        category: 'Content',
        title: 'Content & Social Campaigns',
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        paragraph1: 'Engaging content that connects with your audience and drives meaningful engagement across channels.',
        paragraph2: 'Our content and social strategies are built to deliver consistent, measurable results.',
    },
    {
        category: 'Marketing',
        title: 'Online Media Management',
        imageUrl: 'https://images.unsplash.com/photo-1617802690992-15d9324d7cb8?w=600&q=80',
        paragraph1: 'Ad nec unum copiosae. Sea ex everti labores, ad option iuvaret qui. Id quo esse nusquam. Eam iriure diceret oporteat.',
        paragraph2: 'Ensuring the best return on investment for your bespoke SEO campaign requirement.',
    },
]

const TOTAL_SLIDES = 4 // max 4 images in carousel

const CaseStudies = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex((prev) => {
                const next = prev + 1
                return next >= TOTAL_SLIDES ? 0 : next
            })
        }, CAROUSEL_INTERVAL_MS)
        return () => clearInterval(id)
    }, [])

    return (
        <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
            {/* Dark gradient background: deeper left, slightly lighter right (primary tones) */}
            <div
                className="absolute inset-0 z-0 bg-primary"
                style={{
                    background: 'linear-gradient(90deg, #011C4C 0%, #0a1a3d 50%, #15132a 100%)',
                }}
                aria-hidden
            />
            {/* Radial gradients for depth */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 80% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)
          `,
                }}
                aria-hidden
            />
            {/* Faint "WOR" watermark behind left content */}
            <div
                className="absolute left-0 top-1/2 z-0 -translate-y-1/2 select-none opacity-[0.04]"
                aria-hidden
                style={{
                    fontSize: 'clamp(8rem, 20vw, 18rem)',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                }}
            >
                WOR
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12 xl:gap-16">
                    {/* Left: content changes with active image + animation */}
                    <div className="flex flex-col justify-center overflow-hidden">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                            Featured Projects
                        </p>
                        <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            Our Case Studies
                        </h2>
                        <div className="relative min-h-32 sm:min-h-36">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                                    className="absolute inset-0"
                                >
                                    <p className="mb-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                                        {caseStudies[activeIndex].paragraph1}
                                    </p>
                                    <p className="mb-8 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                                        {caseStudies[activeIndex].paragraph2}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <a
                            href="#view-all-cases"
                            className="inline-flex w-fit items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                        >
                            View All Cases
                        </a>
                    </div>

                    {/* Right: scroll carousel – max 4 images, same size, scroll/slide */}
                    <div className="relative flex flex-col">
                        <div className="relative overflow-hidden rounded-xl">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                            >
                                {caseStudies.map((study, i) => (
                                    <div key={i} className="min-w-full shrink-0">
                                        <div className="relative aspect-4/3 overflow-hidden rounded-xl sm:aspect-5/3">
                                            <img
                                                src={study.imageUrl}
                                                alt=""
                                                className="h-full w-full object-cover"
                                            />
                                            <div
                                                className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
                                                aria-hidden
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
                                                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/90 sm:text-sm">
                                                    {study.category}
                                                </p>
                                                <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                                                    {study.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots: 4 dots, active = secondary */}
                        <div className="mt-6 flex justify-center gap-2">
                            {caseStudies.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setActiveIndex(i)}
                                    className="rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    aria-label={`Go to case ${i + 1}`}
                                >
                                    <span
                                        className={`block h-2 w-2 rounded-full transition-all sm:h-2.5 sm:w-2.5 ${i === activeIndex
                                                ? 'bg-secondary w-6 sm:w-8'
                                                : 'bg-white/50 hover:bg-white/70'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudies
