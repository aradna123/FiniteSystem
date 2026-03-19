const itStaffing = [
  {
    id: '01',
    title: 'Software Engineers',
    description: 'Full‑stack, backend, and frontend developers to build and maintain your products.',
  },
  {
    id: '02',
    title: 'Cloud & DevOps',
    description: 'Experts in CI/CD, infrastructure automation, and cloud environments.',
  },
  {
    id: '03',
    title: 'Data & Analytics',
    description: 'Data engineers and analysts to unlock insights and support decisions.',
  },
  {
    id: '04',
    title: 'Cybersecurity',
    description: 'Security specialists to protect your applications, data, and infrastructure.',
  },
  {
    id: '05',
    title: 'Cybersecurity',
    description: 'Security specialists to protect your applications, data, and infrastructure.',
  },
  {
    id: '06',
    title: 'Cybersecurity',
    description: 'Security specialists to protect your applications, data, and infrastructure.',
  },
]

const ItStaff = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            IT Staffing Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
            Comprehensive IT staffing services to meet all your workforce needs.
          </p>
        </div>

        {/* Button */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow-sm ring-1 ring-gray-100">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full px-10 py-3 text-sm font-medium bg-orange-500 text-white shadow-sm"
            >
              <span className="text-lg">{"</>"}</span>
              <span>IT Staffing</span>
            </button>
          </div>
        </div>

        {/* Label */}
        <div className="mb-8 text-center">
          {/* <div className="mx-auto inline-flex items-center justify-center rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
            IT Staffing
          </div> */}
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
            Skilled professionals to support your technology initiatives.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {itStaffing.map((card) => (
            <div
              key={card.id}
              className="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <span className="text-lg">★</span>
              </div>

              <h3 className="mb-2 text-base font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>

              <span className="absolute right-5 top-5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500">
                {card.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItStaff
