import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Background: picture you gave – put it in public as service-hero.jpg or service-hero.png
const FALLBACK_IMAGE = '/steve-johnson-_0iV9LmPDn0-unsplash.jpg'
const HERO_IMAGE = '/service-hero.jpg' // or /service-hero.png – use the image you shared

const Hero = () => {
    const [imgError, setImgError] = useState(false)

    return (
        <section className="relative w-full overflow-hidden bg-neutral-100">
            {/* Full-width background image – picture you gave */}
            <div className="absolute inset-0 w-full">
                <img
                    src={imgError ? FALLBACK_IMAGE : HERO_IMAGE}
                    alt="Experiences that inspire growth – transformative technology and growth"
                    className="h-full w-full object-cover object-center"
                    onError={() => setImgError(true)}
                />
            </div>

            {/* Right side: choti width, lambi white bar */}
            <div className="relative z-10 flex min-h-[520px] items-center justify-end lg:min-h-[600px]">
                <div className="mx-4 my-8 w-[88%] max-w-[340px] rounded-2xl bg-white px-6 py-12 shadow-xl sm:py-14 lg:mr-8 lg:max-w-[360px] lg:min-h-[480px] lg:px-10 lg:py-20">
                    <h2 className="mb-5 text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
                        Experiences that inspire growth
                    </h2>
                    <p className="mb-8 text-base leading-relaxed text-neutral-700 sm:text-lg">
                        At ITactics, we focus on delivering transformative IT solutions that engage your audience and foster sustainable growth for your business.
                    </p>
                    <Link
                        to="/services"
                        className="inline-block rounded-lg bg-neutral-900 px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
                    >
                        Our Services
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
