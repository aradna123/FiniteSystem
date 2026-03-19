
import { useState } from "react";


export default function IndustrialSection() {
  const [btnHovered, setBtnHovered] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <section className="bg-white overflow-hidden">
      {/* Heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-10 py-8">
        <h2 className="font-black text-4xl md:text-5xl text-gray-900 leading-tight">
          We work for you{" "}
          <span className="text-orange-400 italic">since 1989.</span>
          <br />
          Industrial around the world
        </h2>

        <div className="flex flex-col space-y-4">
          <p className="font-bold text-gray-900 text-base">
            innovator with a rich history of excellence.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed font-serif max-w-sm">
            At the heart of the global landscape, the industry stands as a
            multidimensional force of progress, driving economies.
          </p>
          <button
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            className={`inline-flex items-center gap-2 px-7 py-3 rounded-sm font-bold text-sm uppercase tracking-wide text-white transition-all ${
              btnHovered
                ? "bg-orange-700 shadow-lg -translate-y-0.5"
                : "bg-orange-600 shadow-md"
            }`}
          >
            Discover More
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              className={`transition-transform ${btnHovered ? "translate-x-1" : ""}`}
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-width Image */}
      <div
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
        className="w-full h-[500px] overflow-hidden cursor-pointer mt-16"
      >
        <div
          className={`w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out ${
            imgHovered ? "scale-105 brightness-110" : "scale-100 brightness-100"
          }`}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1400')",
          }}
        ></div>
      </div>
    </section>
  );
}

