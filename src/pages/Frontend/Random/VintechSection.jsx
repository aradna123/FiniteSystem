import { useEffect, useRef, useState } from "react";

const leftFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    stat: "200+",
    title: "Clients Worldwide",
    desc: "We prioritize understanding, ensuring that our solutions resonate with the unique needs of every client globally.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    stat: "100",
    title: "Honest & Integrity",
    desc: "Our foundation is built on trust and transparency, upholding ethical standards in every aspect of our work.",
  },
];

const rightFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    stat: "15+",
    title: "Performance Driven",
    desc: "We are committed to delivering high-quality results, continuously optimizing performance to exceed expectations.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    stat: "98%",
    title: "Teamwork & Collaboration",
    desc: "We believe in the power of collaboration, fostering a culture of teamwork to achieve shared success.",
  },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/\D/g, ""));
    if (!num) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start]);
  const suffix = target.replace(/[0-9]/g, "");
  return count + suffix;
}

function FeatureCard({ item, align = "left", delay = 0, visible }) {
  const animated = useCountUp(item.stat, 1600, visible);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.14)"}`,
        borderRadius: 16,
        padding: "22px 24px",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0) translateY(0)"
          : align === "left"
          ? "translateX(-40px)"
          : "translateX(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, background 0.25s, border 0.25s`,
        cursor: "default",
      }}
    >
      {/* Icon circle */}
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.9)",
          marginBottom: 16,
        }}
      >
        {item.icon}
      </div>

      {/* Stat number */}
      <div
        style={{
          fontSize: 40,
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1,
          letterSpacing: "-1.5px",
          fontFamily: "'Poppins', sans-serif",
          marginBottom: 6,
        }}
      >
        {animated}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 15,
          fontWeight: 900,
          height: 20,
          color: "#fff",
          marginBottom: 10,
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {item.title}
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: 1,
          background: "rgba(255,255,255,0.12)",
          marginBottom: 12,
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: 13.5,
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.75,
          margin: 0
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}

export default function VintechSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        @keyframes floatCircle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes spinOrbit {
          from { transform: rotate(0deg) translateX(82px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(82px) rotate(-360deg); }
        }
        @keyframes spinOrbit2 {
          from { transform: rotate(180deg) translateX(90px) rotate(-180deg); }
          to { transform: rotate(540deg) translateX(90px) rotate(-540deg); }
        }
        .orbit-dot-1 {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #a78bfa;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          margin: -6px 0 0 -6px;
          animation: spinOrbit 5s linear infinite;
        }
        .orbit-dot-2 {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #c4b5fd;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          margin: -4px 0 0 -4px;
          animation: spinOrbit2 7s linear infinite;
        }
        .vintech-divider {
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, transparent);
        }
      `}</style>

      <section
        ref={ref}
        style={{
          background: "linear-gradient(135deg, #2a1a8f 0%, #3730c8 45%, #4338ca 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "stretch",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Background subtle pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />
        {/* Glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(124,58,237,0.3), transparent 65%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        {/* Glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(99,102,241,0.25), transparent 65%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── LEFT: IMAGE ── */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: 600,
            }}
          >
            <img
              src="https://vintech.casethemes.net/wp-content/uploads/2025/04/home2-08.webp"
              alt="IT professional"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(1.05)",
                transition: "opacity 1s ease, transform 1.2s ease",
              }}
            />
            {/* Overlay gradient so it blends into the purple */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, transparent 60%, rgba(55,48,200,0.6) 100%), linear-gradient(to top, rgba(42,26,143,0.4) 0%, transparent 40%)",
              }}
            />
          </div>

          {/* ── RIGHT: CONTENT ── */}
          <div
            style={{
              padding: "80px 60px 80px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Top label */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 100ms",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 28,
                  height: 2,
                  background: "#a78bfa",
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "#a78bfa",
                  textTransform: "uppercase",
                }}
              >
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: 38,
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 48,
                letterSpacing: "-0.5px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 200ms, transform 0.6s ease 200ms",
              }}
            >
              We Make Your Business{" "}
              <span style={{ color: "#c4b5fd" }}>
                More Effective
              </span>
            </h2>

            {/* 3-column: left features | center circle | right features */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 140px 1fr",
                gap: "0 20px",
                alignItems: "center",
              }}
            >
              {/* Left Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {leftFeatures.map((item, i) => (
                  <FeatureCard
                    key={i}
                    item={item}
                    align="left"
                    delay={300 + i * 150}
                    visible={visible}
                  />
                ))}
              </div>

              {/* Center vertical line + circle */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0,
                  height: "100%",
                }}
              >
                {/* Top line */}
                <div
                  style={{
                    width: 1,
                    flex: 1,
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255,255,255,0.18))",
                  }}
                />

                {/* Circle Badge */}
                <div
                  style={{
                    position: "relative",
                    width: 130,
                    height: 130,
                    flexShrink: 0,
                    animation: "floatCircle 3.5s ease-in-out infinite",
                    opacity: visible ? 1 : 0,
                    transition: "opacity 0.8s ease 500ms",
                  }}
                >
                  {/* Orbit ring */}
                  <div
                    style={{
                      position: "absolute",
                      inset: -12,
                      borderRadius: "50%",
                      border: "1px dashed rgba(255,255,255,0.15)",
                    }}
                  />
                  <div className="orbit-dot-1" />
                  <div className="orbit-dot-2" />

                  {/* Main circle */}
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.2), rgba(255,255,255,0.06))",
                      border: "1.5px solid rgba(255,255,255,0.28)",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    {/* Arrow icon */}
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.2"
                        width="18"
                        height="18"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#fff",
                        textAlign: "center",
                        lineHeight: 1.3,
                        letterSpacing: "0.01em",
                      }}
                    >
                      Commitment
                      <br />
                      <span style={{ color: "#c4b5fd" }}>To Growth!</span>
                    </span>
                  </div>
                </div>

                {/* Bottom line */}
                <div
                  style={{
                    width: 1,
                    flex: 1,
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)",
                  }}
                />
              </div>

              {/* Right Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {rightFeatures.map((item, i) => (
                  <FeatureCard
                    key={i}
                    item={item}
                    align="right"
                    delay={300 + i * 150}
                    visible={visible}
                  />
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div
              style={{
                marginTop: 48,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 700ms, transform 0.6s ease 700ms",
              }}
            >
              <button
                style={{
                  background: "#fff",
                  color: "#3730c8",
                  border: "none",
                  borderRadius: 50,
                  padding: "14px 36px",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "'Poppins', sans-serif",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Get In Touch →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}