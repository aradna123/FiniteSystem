import React from 'react'

const CustomSoftware = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            IT Services
          </span>
          <h1 className="text-5xl font-bold text-white mb-6">Custom Software</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored software solutions built around your unique business workflows. Automate, integrate, and scale with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '⚙️', title: 'Business Automation', desc: 'Automate repetitive tasks and streamline your operations.' },
            { icon: '🏢', title: 'ERP Systems', desc: 'Custom enterprise resource planning tailored to your needs.' },
            { icon: '🤝', title: 'CRM Development', desc: 'Customer relationship management built for your workflow.' },
            { icon: '🔌', title: 'API Development', desc: 'Robust APIs that connect your systems and services seamlessly.' },
            { icon: '🗄️', title: 'Database Design', desc: 'Scalable database architecture for high-performance applications.' },
            { icon: '🔄', title: 'Legacy Modernization', desc: 'Upgrade outdated systems to modern, maintainable code.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-600 transition-all duration-300 group">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-gray-800 rounded-2xl p-10 mb-16 border border-gray-700">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {[
              { step: '01', label: 'Discovery' },
              { step: '02', label: 'Planning' },
              { step: '03', label: 'Development' },
              { step: '04', label: 'Testing' },
              { step: '05', label: 'Deployment' },
            ].map((item) => (
              <div key={item.step} className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                <p className="text-3xl font-bold text-red-500 mb-2">{item.step}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-800 rounded-2xl p-10 mb-16 border border-gray-700">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'Python', 'Laravel', 'Django', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'REST APIs', 'GraphQL'].map((tool) => (
              <span key={tool} className="bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-red-600 hover:text-white transition">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need software built your way?</h2>
          <p className="text-red-100 mb-6">
            Tell us your requirements and we'll build the perfect solution for your business.
          </p>
          <a href="/contact" className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            Start a Project
          </a>
        </div>

      </div>
    </div>
  )
}

export default CustomSoftware