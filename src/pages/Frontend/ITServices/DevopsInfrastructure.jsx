import React from 'react'

const DevopsInfrastructure = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            DevOps & Infrastructure
          </span>
          <h1 className="text-5xl font-bold text-white mb-6">DevOps & Infrastructure</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automate, monitor, and scale your infrastructure. We build robust CI/CD pipelines, containerized environments, and reliable deployment workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '🔄',
              title: 'CI/CD Pipelines',
              desc: 'Automated build, test, and deployment pipelines using GitHub Actions, Jenkins, or GitLab CI.',
            },
            {
              icon: '🐳',
              title: 'Containerization',
              desc: 'Docker and Kubernetes setup for consistent, scalable deployments across environments.',
            },
            {
              icon: '📡',
              title: 'Infrastructure as Code',
              desc: 'Terraform and Ansible scripts to provision and manage cloud infrastructure reliably.',
            },
            {
              icon: '📊',
              title: 'Monitoring & Alerts',
              desc: 'Real-time monitoring with Grafana, Prometheus, and Datadog for full observability.',
            },
            {
              icon: '🔒',
              title: 'Security & Compliance',
              desc: 'DevSecOps practices to embed security at every stage of your pipeline.',
            },
            {
              icon: '⚡',
              title: 'Performance Tuning',
              desc: 'Optimize server performance, reduce latency, and improve system reliability.',
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

        {/* Tools */}
        <div className="bg-gray-800 rounded-2xl p-10 mb-16 border border-gray-700">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana', 'Nginx', 'Linux', 'AWS', 'Azure', 'GCP'].map((tool) => (
              <span key={tool} className="bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-red-600 hover:text-white transition">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Streamline your deployment process</h2>
          <p className="text-red-100 mb-6">
            Let us build a DevOps pipeline that saves your team time and reduces errors.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Talk to an Expert
          </a>
        </div>

      </div>
    </div>
  )
}

export default DevopsInfrastructure