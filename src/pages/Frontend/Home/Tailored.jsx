import React, { useState } from 'react'

const packagesContent = {
  heading: 'Tailored service options for you',
  subtitle:
    'Explore custom industry service offerings based on the most in-demand technologies',
  cards: [
    {
      industry: 'Healthcare',
      title: 'Healthcare Software Solutions',
      icon: (
        <svg className="h-16 w-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
    {
      industry: 'Logistics',
      title: 'Logistics Software Solutions',
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      industry: 'Education',
      title: 'Education Software Solutions',
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      ),
    },
  ],
}

const acceleratorsContent = {
  heading: 'Accelerator service options',
  subtitle: 'Pre-built solutions to accelerate your digital transformation journey',
  cards: [
    {
      industry: 'Fintech',
      title: 'Fintech Accelerator Solutions',
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75m15.75 0h.75.75a.75.75 0 01.75.75v.75m0 0h-3.75m0 0h-.375a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h.375"
          />
        </svg>
      ),
    },
    {
      industry: 'Retail',
      title: 'Retail Accelerator Solutions',
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
          />
        </svg>
      ),
    },
    {
      industry: 'Manufacturing',
      title: 'Manufacturing Accelerator Solutions',
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
    },
  ],
}

const Tailored = () => {
  const [activeTab, setActiveTab] = useState('packages')
  const content = activeTab === 'packages' ? packagesContent : acceleratorsContent

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex justify-center gap-8">
          <button
            type="button"
            onClick={() => setActiveTab('packages')}
            className={`pb-2 text-base font-medium transition ${
              activeTab === 'packages'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Packages
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('accelerators')}
            className={`pb-2 text-base font-medium transition ${
              activeTab === 'accelerators'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Accelerators
          </button>
        </div>

        {/* Heading + subtitle */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {content.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">{content.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-xl bg-gray-100 p-6 transition hover:bg-gray-50 sm:p-8"
            >
              <p className="text-sm text-gray-500">Industry &gt; {card.industry}</p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900 sm:text-xl">
                {card.title}
              </h3>
              <div className="mt-6 text-gray-600">{card.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tailored
