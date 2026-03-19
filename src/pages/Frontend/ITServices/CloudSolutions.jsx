import React from 'react'

const CloudSolutions = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Cloud Services
          </span>
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AWS, Azure, GCP — we design, migrate, and manage cloud infrastructure that scales with your business and keeps costs under control.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '☁️',
              title: 'Cloud Migration',
              desc: 'Seamlessly move your existing infrastructure to the cloud with zero downtime.',
            },
            {
              icon: '🏗️',
              title: 'Infrastructure Design',
              desc: 'Architecting scalable, secure, and cost-efficient cloud environments.',
            },
            {
              icon: '🔒',
              title: 'Cloud Security',
              desc: 'End-to-end security configurations, IAM policies, and compliance audits.',
            },
            {
              icon: '⚙️',
              title: 'DevOps on Cloud',
              desc: 'CI/CD pipelines, containerization with Docker & Kubernetes on the cloud.',
            },
            {
              icon: '📊',
              title: 'Cost Optimization',
              desc: 'Right-sizing resources and eliminating waste to reduce your cloud bill.',
            },
            {
              icon: '🔄',
              title: 'Disaster Recovery',
              desc: 'Automated backup and recovery strategies to protect your business data.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-600 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="bg-gray-800 rounded-2xl p-10 mb-16 border border-gray-700">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Platforms We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { name: 'Amazon Web Services', short: 'AWS', color: 'text-orange-400' },
              { name: 'Microsoft Azure', short: 'Azure', color: 'text-blue-400' },
              { name: 'Google Cloud Platform', short: 'GCP', color: 'text-green-400' },
            ].map((p) => (
              <div key={p.name} className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                <p className={`text-3xl font-bold mb-2 ${p.color}`}>{p.short}</p>
                <p className="text-gray-400 text-sm">{p.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to move to the cloud?</h2>
          <p className="text-red-100 mb-6">
            Let our cloud experts design the perfect infrastructure for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Free Consultation
          </a>
        </div>

      </div>
    </div>
  )
}

export default CloudSolutions