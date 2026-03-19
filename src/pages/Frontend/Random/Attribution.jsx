import { useState } from "react";

const AttributionSection = () => {
  const cards = [
    {
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="white" strokeWidth="1.5" width="80" height="80">
          <circle cx="40" cy="30" r="18" />
          <line x1="40" y1="48" x2="40" y2="58" />
          <line x1="32" y1="58" x2="48" y2="58" />
          <line x1="35" y1="62" x2="45" y2="62" />
          <circle cx="40" cy="30" r="6" />
          <line x1="20" y1="30" x2="14" y2="30" />
          <line x1="60" y1="30" x2="66" y2="30" />
          <line x1="40" y1="10" x2="40" y2="4" />
          <line x1="26" y1="16" x2="22" y2="12" />
          <line x1="54" y1="16" x2="58" y2="12" />
          <circle cx="40" cy="30" r="24" strokeDasharray="3 4" opacity="0.4" />
        </svg>
      ),
      title: "UNIQUE IDEAS & SOLUTIONS",
      desc: "Experience in all the major geographies, meaning we understand all underlying drivers.",
    },
    {
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="white" strokeWidth="1.5" width="80" height="80">
          <circle cx="40" cy="38" r="28" />
          <circle cx="40" cy="38" r="18" />
          <circle cx="40" cy="38" r="8" />
          <line x1="55" y1="22" x2="70" y2="10" />
          <polyline points="63,8 70,10 68,17" />
        </svg>
      ),
      title: "TARGETING & POSITIONING",
      desc: "Generate new products with higher potential and lower risks of failure.",
    },
    {
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="white" strokeWidth="1.5" width="80" height="80">
          <rect x="20" y="28" width="40" height="28" rx="3" />
          <path d="M28 28 V22 Q28 14 40 14 Q52 14 52 22 V28" />
          <circle cx="40" cy="42" r="5" />
          <line x1="40" y1="47" x2="40" y2="52" />
          <circle cx="40" cy="42" r="14" strokeDasharray="3 3" opacity="0.4" />
        </svg>
      ),
      title: "FRIENDLY CUSTOMER SUPPORT",
      desc: "We build services for you from the beginning to the final product delivery.",
    },
  ];

  return (
    <div
      className="relative w-full py-20 px-6 overflow-hidden"
      style={{ minHeight: "480px" }}
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80')`,
          filter: "grayscale(40%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(15, 20, 35, 0.82)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            className="text-white uppercase tracking-widest font-bold text-3xl mb-3"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.25em" }}
          >
            ATTRIBUTION
          </h2>
          <div
            className="mx-auto"
            style={{
              width: "48px",
              height: "3px",
              backgroundColor: "#e8254a",
            }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {cards.map((card, i) => (
            <CardItem key={i} card={card} />
          ))}
        </div>
      </div>

      {/* Stack icon */}
      <div
        className="absolute right-6 top-1/4 w-10 h-10 flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: "#2a2f3d", border: "1px solid #444" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

const CardItem = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center px-8 py-10 cursor-pointer transition-all duration-300"
      style={{
        border: `1px solid ${hovered ? "#e8254a" : "rgba(232,37,74,0.5)"}`,
        backgroundColor: hovered ? "rgba(232,37,74,0.06)" : "transparent",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Icon */}
      <div className="mb-6 opacity-90">{card.icon}</div>

      {/* Title */}
      <h3
        className="text-white uppercase font-bold text-sm mb-4 tracking-wider"
        style={{ fontFamily: "'Arial', sans-serif", letterSpacing: "0.12em" }}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(200,205,215,0.8)", fontFamily: "'Georgia', serif" }}
      >
        {card.desc}
      </p>
    </div>
  );
};

export default AttributionSection;