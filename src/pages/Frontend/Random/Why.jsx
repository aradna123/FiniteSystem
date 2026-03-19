import React from 'react'

const features = [
  {
    number: '1',
    title: 'Quality Craftsmanship',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  },
  {
    number: '2',
    title: 'Expertise & Experience',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  },
  {
    number: '3',
    title: 'Wide Range of Options',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  },
  {
    number: '4',
    title: 'Customization Abilities',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  },
  {
    number: '5',
    title: 'Competitive Pricing',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  },
  {
    number: '6',
    title: 'Positive Reviews',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
  },
]

const Why = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.number}
              className="flex items-start gap-4 rounded-xl bg-white/80 p-6 shadow-sm ring-1 ring-gray-100"
            >
              {/* Number circle */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg font-semibold text-white">
                {item.number}
              </div>

              {/* Text */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why