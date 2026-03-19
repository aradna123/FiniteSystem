import React from 'react'

const TeamAugmentation = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Team Augmentation
          </span>
          <h1 className="text-5xl font-bold text-white mb-6">Scale Your Team On Demand</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Extend your team with skilled developers, designers, and engineers — fast. No long hiring cycles, no overhead. Just talent when you need it.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '👨‍💻',
              title: 'Dedicated Developers',
              desc: 'Full-time dedicated developers embedded into your existing team.',
            },
            {
              icon: '🎨',
              title: 'UI/UX Designers',
              desc: 'Creative designers who understand both aesthetics and usability.',
            },
            {
              icon: '🧪',
              title: 'QA Engineers',
              desc: 'Manual and automated testers to ensure your product is bug-free.',
            },
            {
              icon: '⚙️',
              title: 'DevOps Engineers',
              desc: 'Infrastructure and deployment experts for smooth CI/CD pipelines.',
            },
            {
              icon: '📱',
              title: 'Mobile Developers',
              desc: 'iOS and Android specialists to accelerate your app development.',
            },
            {
              icon: '🤝',
              title: 'Project Managers',
              desc: 'Experienced PMs to keep your projects on time and on budget.',
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

        {/* Why Us */}
        <div className="bg-gray-800 rounded-2xl p-10 mb-16 border border-gray-700">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '48hrs', label: 'Onboarding Time' },
              { stat: '100+', label: 'Skilled Professionals' },
              { stat: '5+', label: 'Years Experience' },
              { stat: '98%', label: 'Client Satisfaction' },
            ].map((item) => (
              <div key={item.label} className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                <p className="text-3xl font-bold text-red-500 mb-2">{item.stat}</p>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need to grow your team fast?</h2>
          <p className="text-red-100 mb-6">
            Tell us what you need and we'll match you with the right talent within 48 hours.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>

      </div>
    </div>
  )
}

export default TeamAugmentation