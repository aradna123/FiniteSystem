
import React from "react";

/* Single white service card (inside purple panel) */
const ServiceCard = ({ text }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 min-h-[120px]">
    <div className="text-green-600 text-3xl">✅</div>
    <div className="text-gray-800 font-semibold text-lg">{text}</div>
  </div>
);

/* Contact button used inside purple panel */
const ContactButton = ({ icon, label }) => (
  <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-5 py-3 transition w-full sm:w-auto">
    <span className="text-2xl">{icon}</span>
    <span className="font-semibold">{label}</span>
  </button>
);

/* Bottom blue info card (outside the two-column area) */
const InfoCard = ({ icon, text }) => (
  <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center w-72 h-40">
    <div className="text-4xl mb-3">{icon}</div>
    <div className="text-center font-semibold">{text}</div>
  </div>
);

/* One clone: left image + right content (right uses bg image + purple overlay) */
const VintechClone = ({ leftImageUrl, rightBgUrl }) => {
  const services = [
    "24/7 Online Support",
    "Free Consultation",
    "Multilingual Support",
  ];

  const contacts = [
    { icon: "📞", label: "Call Us →" },
    { icon: "💬", label: "Chat with Us →" },
    { icon: "📍", label: "See Location →" },
  ];

  return (
    <section className="w-full bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Two-column area */}
        <div className="flex flex-col md:flex-row items-stretch">
          {/* LEFT: fixed-width image column */}
          <div className="md:w-1/2 flex justify-center items-center bg-gray-100">
            <img
              src={leftImageUrl}
              alt="left"
              className="w-full max-w-sm md:max-w-md object-cover"
              style={{ height: "100%", maxHeight: 520 }}
            />
          </div>

          {/* RIGHT: simple black background, no image */}
<div
  className="md:w-1/2 relative flex flex-col justify-between p-8 md:p-12 bg-black text-white"
  style={{ minHeight: 520 }}
>


            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-700/85 to-purple-500/70 pointer-events-none"></div>

            {/* content wrapper (above overlay) */}
            <div className="relative z-10 text-white flex flex-col">
              {/* Subtitle + Heading */}
              <div className="mb-6">
                <div className="text-purple-200 font-medium mb-2">Challenges—Start Today!</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Let’s Solve Your IT Challenges
                </h3>
              </div>

              {/* Service cards (white) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {services.map((s, i) => (
                  <ServiceCard key={i} text={s} />
                ))}
              </div>

              {/* Description */}
              <p className="text-purple-50 max-w-2xl mb-6">
                Fill out the form below, and one of our experts will contact you within 24 hours to discuss your needs. We’re here to tailor a plan that works for you.
              </p>

              {/* Contact buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {contacts.map((c, i) => (
                  <ContactButton key={i} icon={c.icon} label={c.label} />
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

/* App: render 100 clones stacked with spacing */
export default function App() {
  const leftImage = "https://vintech.casethemes.net/wp-content/uploads/2025/04/home3-img5.webp";
  const rightBg = "https://thepixelcurve.com/wp/techmax/wp-content/uploads/2021/12/NN032-163x300.png";

  const clones = Array.from({ length: 1 });

  return (
    <div className="bg-gray-100 p-8 space-y-10">
      {clones.map((_, idx) => (
        <div key={idx} className="max-w-7xl mx-auto">
          <VintechClone leftImageUrl={leftImage} rightBgUrl={rightBg} />
        </div>
      ))}
    </div>
  );
}

