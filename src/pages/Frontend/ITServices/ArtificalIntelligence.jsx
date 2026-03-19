import React from 'react'

const ArtificialIntelligence = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Artificial Intelligence
          </span>
          <h1 className="text-5xl font-bold text-white mb-6">Artificial Intelligence</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We integrate AI and machine learning into your products to automate processes, enhance user experiences, and unlock new business opportunities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: '🤖',
              title: 'AI Chatbots',
              desc: 'Intelligent chatbots powered by LLMs for customer support and automation.',
            },
            {
              icon: '🧠',
              title: 'Machine Learning',
              desc: 'Custom ML models for classification, prediction, and pattern recognition.',
            },
            {
              icon: '👁️',
              title: 'Computer Vision',
              desc: 'Image and video analysis for object detection, OCR, and visual inspection.',
            },
            {
              icon: '💬',
              title: 'Natural Language Processing',
              desc: 'Text analysis, sentiment detection, and language understanding solutions.',
            },
            {
              icon: '📈',
              title: 'Predictive Analytics',
              desc: 'Forecast sales, churn, and demand with data-driven AI models.',
            },
            {
              icon: '⚙️',
              title: 'AI Integration',
              desc: 'Seamlessly embed AI capabilities into your existing products and workflows.',
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
          <h2 className="text-2xl font-bold text-white text-center mb-8">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'HuggingFace', 'scikit-learn', 'OpenCV', 'FastAPI', 'Pinecone', 'AWS SageMaker', 'Google Vertex AI'].map((tool) => (
              <span key={tool} className="bg-gray-900 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-red-600 hover:text-white transition">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to power your business with AI?</h2>
          <p className="text-red-100 mb-6">
            Let's explore how AI can transform your product and processes.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Book a Free Call
          </a>
        </div>

      </div>
    </div>
  )
}

export default ArtificialIntelligence