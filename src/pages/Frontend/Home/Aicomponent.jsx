import React from 'react'
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'E-commerce & Transactions',
    description: 'Secure, scalable solutions for online retail and payments.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Optimize operations from port to delivery with real-time data.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    title: 'Business Strategy & Collaboration',
    description: 'Data-driven insights and tools for teams that work together.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  },
]

const Aicomponent = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f0e1a] py-16 sm:py-20 lg:py-24">
      {/* Subtle network / dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top: pill link */}
        <div className="mb-6 flex justify-center">
          <Link
            to="/silicon"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-400/60 bg-indigo-950/80 px-4 py-2 text-sm font-medium text-white transition hover:border-indigo-300 hover:bg-indigo-900/80"
          >
            New Silicon v2.0
            <span className="text-white" aria-hidden>→</span>
          </Link>
        </div>

        {/* Main heading */}
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Powerful AI models to serve
          <br />
          your business needs
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-300 sm:text-lg">
          Our robust platform is designed to handle large volumes of data and processing power, making it perfect for businesses of all sizes.
        </p>

        {/* Three image cards with hover content at bottom */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 shadow-xl"
            >
              <img
                src={card.image}
                alt=""
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              {/* Hover: content at bottom */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 pt-12 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-200">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aicomponent
