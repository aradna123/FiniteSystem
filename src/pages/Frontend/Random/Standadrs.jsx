import React from 'react'

const cards = [
  {
    title: 'Investment planning & strategy',
    description:
      'Investment planning & strategy Maecenas cursus mauris libero, a imperdiet enim pellentesque id. Aliquam erat volutpat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Business professionals',
  },
  {
    title: 'Data & digital transformation',
    description:
      'Data & digital transformation Maecenas cursus mauris libero, a imperdiet enim pellentesque id. Aliquam erat volutpat. Our solution offerings work together to provide everything you need.',
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Laptop and analytics',
  },
]

const Standadrs = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading + paragraph */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          We have high standards in all we do.
        </h2>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Our people have decades of experience addressing our client&apos;s most pressing business
          problems. A full-service consulting firm, we solve our client&apos;s problems in an agile
          manner that reduces complexity and leads to early successes. This allows our clients to
          focus on their future knowing that their present is secure. Our solution offerings work
          together to provide our clients everything they need to transform into an effective,
          digital organization.
        </p>

        {/* Two cards with hover overlay */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 sm:aspect-[5/4]"
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Orange accent line - always visible at bottom */}
              <div className="absolute bottom-0 left-0 z-10 h-1 w-16 bg-orange-500 sm:w-20" />

              {/* Hover overlay - dark panel from bottom with title + description */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-gray-900/90 p-6 pt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-1 w-12 flex-shrink-0 bg-orange-500" />
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{card.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/90">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Standadrs
