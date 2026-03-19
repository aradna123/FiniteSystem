import React from 'react'

const cards = [
  {
    type: 'intro',
    title: 'HELLO THERE AND WELCOME',
    description:
      'Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Our own warehouses, as well as our partner’s warehouses are located at strategic locations to ensure that there is no additional cost.',
    cta: 'More about us',
  },
  {
    type: 'service',
    title: 'CARGO',
    description:
      'Team of cargo experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your …',
    cta: 'Read more',
    image:
      'https://images.pexels.com/photos/163811/train-railway-tracks-railroad-tracks-163811.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    type: 'service',
    title: 'LOGISTIC SERVICE',
    description:
      'We provide logistic services in the nation, whether it is freight transportation, supply chain solutions, warehousing and distribution, customer resource area services, customs, security and insurance, temperature controlled logistics, industry …',
    cta: 'Read more',
    image:
      'https://images.pexels.com/photos/4484070/pexels-photo-4484070.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    type: 'service',
    title: 'STORAGE',
    description:
      'We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts …',
    cta: 'Read more',
    image:
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const Crago = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) =>
            card.type === 'intro' ? (
              <div
                key={card.title}
                className="flex h-full flex-col justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
              >
                <div>
                  <h3 className="text-xl font-extrabold tracking-wide text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 hover:text-emerald-700"
                >
                  {card.cta}
                  <span className="ml-2 text-base">›</span>
                </button>
              </div>
            ) : (
              <div
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100"
              >
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <h3 className="text-xl font-extrabold tracking-wide text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 hover:text-emerald-700"
                  >
                    {card.cta}
                    <span className="ml-2 text-base">›</span>
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default Crago