import { Link } from 'react-router-dom'



const IndustryPage = ({ title, description, features, icon }) => {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-orange-50 text-orange-500 text-3xl mb-6">
            {icon}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <span className="text-lg">★</span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block rounded-lg bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-secondary/90 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IndustryPage
