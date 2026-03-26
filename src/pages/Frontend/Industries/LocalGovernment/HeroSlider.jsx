import { useState } from "react";

const slides = [
  {
    title: "Moving Your Industry Manufacturing Forward",
    description:
      "We face each project as a new challenge and with our ability to build and innovate we overcome all barriers to using content.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80",
  },
  {
    title: "Building Tomorrow's Infrastructure Today",

    description:
      "Our engineering expertise drives results across every sector, delivering precision and performance at every stage.",
    image:
      "https://images.unsplash.com/photo-1565715101965-a4fc14b1e5a9?w=1400&q=80",
  },
  {
    title: "Innovation Meets Industrial Excellence",
    description:
      "We combine cutting-edge technology with deep industry knowledge to transform the way the world builds and operates.",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1400&q=80",
  },
];

const stats = [
  { value: "3", label: "ISO CERTIFIED" },
  { value: "SBA", label: "SELF CERTIFIED SMALL BUSINESS" },
  { value: "SAM", label: "REGISTERED" },
];

const StatsBar = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "stretch",
        height: "115px",
        backgroundColor: "rgba(10, 15, 30, 0.28)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        zIndex: 5,
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRight:
              i < stats.length - 1
                ? "1px solid #DA7756"
                : "none",
            gap: "7px",
          }}
        >
          <span
            style={{
              fontFamily: "'Arial Black', Impact, sans-serif",
              fontSize: "2.6rem",
              fontWeight: "900",
              color: "#DA7756",
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            {stat.value}
          </span>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: "600",
              color: "#DA7756",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <div style={{ width: "100%" }}>
      {/* ── Slider ── */}
      <div className="relative w-full h-[520px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url('${slide.image}')` }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20">
          <h1
            className="text-white font- scheme-light-dark text-1xl eading-tight mb-6 max-w-3xl"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontFamily: "'Arial Black', Impact, sans-serif",
              textShadow: "2px 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            Moving Your <span style={{ color: "#DA7756" }}>Industry</span>{" "}
            Manufacturing <span style={{ color: "#DA7756" }}>Forward</span>
          </h1>
          <p
            className="text-white/80 max-w-xl text-base leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {slide.description}
          </p>
        </div>

        {/* ── Stats Bar (transparent, overlapping image) ── */}
        <StatsBar />
      </div>
    </div>
  );
};

export default HeroSlider;
export { HeroSlider, StatsBar };