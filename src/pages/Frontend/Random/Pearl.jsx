import React from 'react'

const columns = [
  {
    title: 'Business Owners',
    description:
      'Been looking for a construction company WP theme or entertainment template? Pearl is the optimal solution for any industry, small business, and startups.',
    iconColor: 'text-blue-500',
    icon: (
      <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: 'Entrepreneurs',
    description:
      'Premium business templates that are really affordable make building more enjoyable. With just a single platform you can create dozens of different products.',
    iconColor: 'text-red-500',
    icon: (
      <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: 'Freelancer',
    description:
      'Create an outstanding portfolio. Hundreds of practical tools are at your disposal to promote your service and find the perfect clients.',
    iconColor: 'text-teal-500',
    icon: (
      <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v-1.745a.75.75 0 01.298-.605 8.378 8.378 0 003.743-3.243.75.75 0 01.954-.018 8.378 8.378 0 003.743 3.243.75.75 0 01.298.605V21M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: 'Agencies',
    description:
      'Whether it is an IT or SEO agency, these WordPress templates are the best option to uncover your creativity and build an amazing landing page.',
    iconColor: 'text-orange-500',
    icon: (
      <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
]

const Pearl = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading: "Pearl is" + "for everyone" in pink */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span>Pearl is </span>
          <span className="text-rose-500">for everyone</span>
        </h2>

        {/* Four columns */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <div className={col.iconColor}>{col.icon}</div>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-gray-900">
                {col.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{col.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pearl
