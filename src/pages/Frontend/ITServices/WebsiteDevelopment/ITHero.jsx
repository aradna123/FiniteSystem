import React from 'react'

const ITHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Top-left accent */}
      <div className="absolute top-0 left-0 w-16 h-3 bg-red-500 z-10" />
      {/* Top-right accent */}
      <div className="absolute top-0 right-0 w-16 h-10 bg-red-500 z-10" />

      <div className="flex flex-col md:flex-row min-h-[420px]">
        {/* Left: Image */}
        <div className="relative w-full md:w-[45%] min-h-[320px] md:min-h-[420px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Website Development"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-10 md:px-16 py-12 bg-white">
          <h2
            className="text-5xl md:text-6xl font-normal leading-tight mb-6 text-gray-900"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Website
            <br />
            Development
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat
            seal. Walleye poolfish sand goby butterfly ray stream catfish jewfish,
            Spanish mackerel.
          </p>

          <div className="relative inline-block w-fit">
            <div className="absolute top-2 left-0 w-full h-full bg-gray-400 rounded-sm" />
            <button className="relative z-10 bg-red-400 hover:bg-red-500 transition-colors duration-200 text-white text-sm font-medium tracking-widest uppercase px-12 py-4 rounded-sm">
              Discover
            </button>
          </div>
        </div>
      </div>

      {/* Bottom-right accent */}
      <div className="absolute bottom-0 right-0 w-16 h-3 bg-red-500 z-10" />
    </section>
  )
}

export default ITHero