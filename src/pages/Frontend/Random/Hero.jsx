import { useState } from "react";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-full h-[480px] flex overflow-hidden font-sans">
      {/* Left Panel - Person with laptop */}
      <div className="relative w-1/2 h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80')`,
            filter: "grayscale(100%)",
          }}
        />
        {/* Blue overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(30, 60, 110, 0.65)" }}
        />
      </div>

      {/* Right Panel - Person writing */}
      <div className="relative w-1/2 h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80')`,
            filter: "grayscale(100%)",
          }}
        />
        {/* Blue overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(30, 60, 110, 0.65)" }}
        />

        {/* Text Content - overlaid on right panel */}
        <div className="absolute inset-0 flex flex-col justify-center px-12">
          <h1
            className="text-white font-black uppercase leading-none mb-8"
            style={{
              fontSize: "2.6rem",
              fontFamily: "'Arial Black', 'Impact', sans-serif",
              letterSpacing: "-0.5px",
              textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            HOW WE START
            <br />
            BUSINESS WITH NO
            <br />
            MONEY IN DAD'S
            <br />
            GARAGE
          </h1>

          {/* Watch Video Button */}
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-fit px-10 py-4 text-white font-semibold text-base transition-all duration-200"
            style={{
              backgroundColor: hovered ? "#e05a2b" : "#f07040",
              borderRadius: "2px",
              letterSpacing: "0.3px",
              boxShadow: hovered
                ? "0 6px 20px rgba(240,112,64,0.5)"
                : "0 2px 8px rgba(0,0,0,0.2)",
              transform: hovered ? "translateY(-1px)" : "translateY(0)",
            }}
          >
            Watch video
          </button>
        </div>
      </div>

      {/* Vertical divider line */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: "50%",
          width: "2px",
          backgroundColor: "rgba(255,255,255,0.15)",
        }}
      />

      {/* Stack icon - top right corner */}
      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: "#e05a2b" }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;