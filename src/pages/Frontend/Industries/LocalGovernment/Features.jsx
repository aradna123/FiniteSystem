
import React, { useState } from "react";

const cards = [
  { num: "01", label: "Industrial Ideas", desc: "Lorem Ipsum has been the industry's standard dummy text ever since." },
  { num: "02", label: "Expert Engineers", desc: "Internet generators tend to repeat predefined chunks of text." },
  { num: "03", label: "Modern Equipment", desc: "Web page editors now use Lorem Ipsum as their default placeholder." },
  { num: "04", label: "Project Support", desc: "Normal letters as opposed to using 'Content here, content here'." },
];

const numOffsets = [0, 30, 60, 90];

const IndustrialSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section style={{ background: "#E8E6E0", padding: "2.5rem 2rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "stretch",
        }}
      >
        {cards.map((card, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={card.num}
              style={{
                background: isActive ? "#ffffff" : "#021c4c",
                borderRadius: "16px",
                padding: "1rem 1rem 1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: isActive
                  ? "0 14px 28px rgba(0,0,0,0.25)"
                  : "0 6px 18px rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                color: isActive ? "#000" : "#fff",
              }}
              onClick={() => setActiveCard(index)}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 14px 28px rgba(0,0,0,0.35)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";
                }
              }}
            >
              {/* Number staircase top-right */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: `${numOffsets[index]}px` }}>
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "800",
                    color: isActive ? "#021c4c" : "#F5A623",
                    opacity: 0.9,
                    lineHeight: 1,
                    fontFamily: "Georgia, serif",
                    letterSpacing: "-1px",
                    userSelect: "none",
                  }}
                >
                  {card.num}
                </span>
              </div>

              {/* Label */}
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  margin: "6px 0 0",
                  letterSpacing: "-0.01em",
                }}
              >
                {card.label}
              </p>

              {/* Thin accent line */}
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  borderRadius: "2px",
                  background: isActive
                    ? "linear-gradient(90deg, #021c4c, #333)"
                    : "linear-gradient(90deg, #F5A623, #e0891a)",
                  margin: "6px 0",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize: "13px",
                  color: isActive ? "#333" : "#ddd",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustrialSection;

