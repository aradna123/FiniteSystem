
import React from "react";

// ✅ Single Card Component
const InfoCard = ({ icon, text }) => (
  <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center hover:bg-blue-700 transition w-80 h-48">
    <span className="text-4xl mb-4">{icon}</span>
    <p className="text-lg font-semibold text-center">{text}</p>
  </div>
);

// ✅ Full Section Component
const BannerSection = () => {
  const cards = [
    { icon: "⚡", text: "Faster and trusted grow solutions" },
    { icon: "📈", text: "Strategy buildup for web software" },
    { icon: "💡", text: "Innovative core with possibilities" },
  ];

  return (
    <div className="bg-gray-50 p-12 rounded-2xl shadow-xl max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
        {/* Left Text */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            We bring great Ideas to life
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We provide the most responsive and functional IT design for
            companies and businesses worldwide.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://thepixelcurve.com/wp/techmax/wp-content/uploads/2021/12/NN032-163x300.png"
            alt="Tech Banner"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {cards.map((card, idx) => (
          <InfoCard key={idx} icon={card.icon} text={card.text} />
        ))}
      </div>
    </div>
  );
};

// ✅ Main App (100 Clones)
export default function App() {
  const clones = Array.from({ length: 1});

  return (
    <div className="space-y-20 p-12 bg-gray-50">
      {clones.map((_, idx) => (
        <BannerSection key={idx} />
      ))}
    </div>
  );
}

