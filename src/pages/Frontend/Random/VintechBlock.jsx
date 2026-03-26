
import React from "react";

// Base reusable component
function VintechBlock({ item }) {
  return (
    <div className="relative w-full bg-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            {item.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{item.desc}</p>

          <div className="space-y-4">
            {item.features.map((f, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-gray-900">{f.heading}</h4>
                <p className="text-gray-600 text-sm">{f.text}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-md shadow hover:bg-purple-700 transition">
            {item.buttonText}
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full rounded-lg shadow-lg transform translate-y-10"
          />
          <div className="absolute top-0 left-0 bg-purple-600 text-white px-4 py-2 rounded-md shadow">
            {item.badge}
          </div>
        </div>
      </div>
    </div>
  );
}

// Example data array
const vintechData = [
  {
    title: "Who Are We? Your Trusted IT Solutions Partner",
    desc: "At Vintech, we are more than just an IT company—we are your strategic partner in navigating the complexities of today’s digital landscape.",
    image: "https://vintech.casethemes.net/wp-content/uploads/2025/04/home3-img3.webp",
    badge: "25+ YEAR OF EXPERIENCE IN IT SOLUTION",
    buttonText: "More About Us →",
    features: [
      { heading: "Modern Technology", text: "Leveraging cutting-edge technology to enhance efficiency, precision, and sustainability in every project." },
      { heading: "Experience Engineers", text: "A team of skilled professionals dedicated to delivering excellence through expertise and innovation." },
      { heading: "Contact Us 24/7", text: "543-234-8000" },
    ],
  },
  // 👇 Add more objects here for multiple blocks
];

// Page rendering multiple blocks
export default function Page() {
  return (
    <div>
      {vintechData.map((item, i) => (
        <VintechBlock key={i} item={item} />
      ))}
    </div>
  );
}

