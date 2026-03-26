
import React from "react";

import { useEffect, useRef, useState } from "react";


// ── Feature Cards Data ─────────────────────────────────────────────────────────
const cards = [
  {
    title: "Faster and trusted grow solutions",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="10" stroke="white" strokeWidth="2.2" />
        <circle cx="26" cy="10" r="3" stroke="white" strokeWidth="2" />
        <circle cx="26" cy="42" r="3" stroke="white" strokeWidth="2" />
        <circle cx="10" cy="26" r="3" stroke="white" strokeWidth="2" />
        <circle cx="42" cy="26" r="3" stroke="white" strokeWidth="2" />
        <line x1="26" y1="13" x2="26" y2="16" stroke="white" strokeWidth="2" />
        <line x1="26" y1="36" x2="26" y2="39" stroke="white" strokeWidth="2" />
        <line x1="13" y1="26" x2="16" y2="26" stroke="white" strokeWidth="2" />
        <line x1="36" y1="26" x2="39" y2="26" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Strategy buildup for web software",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="10" y="14" width="32" height="24" rx="3" stroke="white" strokeWidth="2.2" />
        <rect x="17" y="20" width="8" height="8" rx="1" stroke="white" strokeWidth="2" />
        <line x1="28" y1="22" x2="36" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="26" x2="34" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="32" x2="42" y2="32" stroke="white" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Innovative core with possibilities",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="10" y="10" width="32" height="32" rx="4" stroke="white" strokeWidth="2.2" />
        <rect x="18" y="18" width="16" height="16" rx="2" stroke="white" strokeWidth="2" />
        <path d="M23 26l2.5 2.5L29 23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ── Hero Section ───────────────────────────────────────────────────────────────
function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const bars = Array.from({ length: 40 }, (_, i) => ({
      x: (i / 40) * canvas.width,
      height: Math.random() * 120 + 20,
      color: i % 3 === 0 ? "#00e5ff" : i % 3 === 1 ? "#7c3aed" : "#1e40af",
      speed: Math.random() * 0.5 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    let animId;
    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bars.forEach((bar) => {
        const h = bar.height + Math.sin(t * bar.speed + bar.phase) * 20;
        ctx.fillStyle = bar.color + "55";
        ctx.fillRect(bar.x, canvas.height - h, 6, h);
      });
      t += 0.03;
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden flex items-center"
      style={{
        minHeight: "560px",
        paddingTop: "96px",
        background: "linear-gradient(135deg, #0a0e27 0%, #0d1540 50%, #0a0e27 100%)",
      }}
    >
      {/* Animated grid floor */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100,100,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,100,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 30px",
          transform: "perspective(300px) rotateX(40deg)",
          transformOrigin: "bottom center",
        }}
      />

      {/* Canvas bars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Left content */}
      <div className="relative z-10 flex-1 px-12 py-16 max-w-xl">
        <h1
          className="text-white font-black leading-none mb-6"
          style={{
            fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
            fontFamily: "'Segoe UI', sans-serif",
            lineHeight: 1.05,
          }}
        >
          We bring great
          <br />
          Ideas to life
        </h1>
        <p
          className="text-gray-300 mb-10"
          style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: "420px" }}
        >
          We provide the most responsive and functional IT design for companies
          and businesses worldwide.
        </p>
        <button
          className="px-8 py-3 rounded font-semibold text-white text-sm tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(90deg, #1d6ef5 0%, #2563eb 100%)",
            boxShadow: "0 4px 24px rgba(37,99,235,0.4)",
          }}
        >
          Read More
        </button>
      </div>

      {/* Right: person + circle rings */}
      <div
        className="relative flex-1 flex justify-center items-end h-full"
        style={{ minHeight: "560px" }}
      >
        {/* Outer dashed ring */}
        <div
          className="absolute"
          style={{
            width: "480px", height: "480px",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "90%",
           // border: "4px dashed rgba(255,255,255,0.18)",
            animation: "spin 18s linear infinite",
          }}
        />
        {/* Middle ring */}
        <div
          className="absolute"
          style={{
            width: "440px", height: "440px",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "80%",
            border: "4px solid rgba(0,229,255,0.35)",
            boxShadow: "0 0 30px rgba(0,229,255,0.2), inset 0 0 30px rgba(0,229,255,0.08)",
          }}
        />
        {/* Inner ring */}
        <div
          className="absolute"
          style={{
            width: "370px", height: "370px",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "80%",
            border: "5px solid rgba(0,180,255,0.55)",
            boxShadow: "0 0 40px rgba(0,180,255,0.4)",
          }}
        />
        {/* Person image */}
        <img
          src="https://thepixelcurve.com/wp/techmax/wp-content/uploads/2021/12/NN032.png"
          alt="IT Professional"
          className="relative z-10"
          style={{
            height: "520px",
            objectFit: "contain",
            objectPosition: "bottom",
            filter: "drop-shadow(0 0 30px rgba(0,180,255,0.3))",
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

// ── Feature Cards ──────────────────────────────────────────────────────────────
function FeatureCards() {
  return (
    <div
      className="w-full grid grid-cols-1 md:grid-cols-3"
      style={{ gap: "14px", padding: "14px 14px 0 14px" }}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative flex items-center gap-6 px-8 py-9 overflow-hidden"
          style={{
            background:
              i === 0
                ? "linear-gradient(120deg, #1a3db5 0%, #2563eb 100%)"
                : i === 1
                ? "linear-gradient(120deg, #2563eb 0%, #06b6d4 100%)"
                : "linear-gradient(120deg, #1e40af 0%, #38bdf8 100%)",
            borderRadius: "10px",
          }}
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            {React.cloneElement(card.icon, { width: 64, height: 64 })}
          </div>

          {/* Text */}
          <h3
            className="text-white font-bold leading-snug"
            style={{ fontSize: "1.25rem" }}
          >
            {card.title}
          </h3>

          {/* Decorative chevron top-right */}
          <div className="absolute top-0 right-0 overflow-hidden" style={{ width: 48, height: 48 }}>
            <div
              style={{
                width: 0, height: 0,
                borderLeft: "48px solid transparent",
                borderTop: "48px solid rgba(255,255,255,0.12)",
              }}
            />
          </div>
          <svg className="absolute top-3 right-3" width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="rgba(255,255,255,0.55)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ))}
    </div>
  );
}


//About Section//

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 1;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

 function AboutSection() {
  const { count, ref } = useCounter(25, 2000);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">

        {/* LEFT SIDE */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <button
              className="mb-6 px-6 py-2 rounded font-semibold text-white text-sm"
              style={{ background: "#6d28d9" }}
            >
              About Us
            </button>

            <h2
              className="font-black text-gray-900 mb-6 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontFamily: "'Georgia', serif" }}
            >
              Who Are We? Your Trusted IT
              <br />Solutions Partner
            </h2>

            <p className="text-gray-500 mb-8 leading-relaxed" style={{ maxWidth: "500px", fontSize: "1rem" }}>
              At Vintech, we are more than just an IT company—we are your strategic
              partner in navigating the complexities of today's digital landscape.
              Founded in 2012, we've grown into a trusted leader in delivering
              innovative, reliable, and scalable IT solutions for businesses of all sizes.
            </p>

            {/* Two features stacked */}
            <div className="flex flex-col gap-6 mb-10">
              {/* Modern Technology */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#ede9fe" }}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="12" r="5" stroke="#6d28d9" strokeWidth="2" />
                    <path d="M15 17v5M11 22h8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 12c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="15" cy="12" r="2" fill="#6d28d9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">Modern Technology</h4>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ maxWidth: "360px" }}>
                    Leveraging cutting-edge technology to enhance efficiency, precision, and sustainability in every project.
                  </p>
                </div>
              </div>

              {/* Experience Engineers */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#ede9fe" }}>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <circle cx="15" cy="9" r="4" stroke="#6d28d9" strokeWidth="2" />
                    <path d="M7 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 14l-2 3 2 1M19 14l2 3-2 1" stroke="#6d28d9" strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="12" y="19" width="6" height="4" rx="1" stroke="#6d28d9" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-1">Experience Engineers</h4>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ maxWidth: "360px" }}>
                    A team of skilled professionals dedicated to delivering excellence through expertise and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex items-center gap-8 flex-wrap">
            <button
              className="flex items-center gap-3 px-7 py-3 rounded font-bold text-white text-sm transition hover:opacity-90"
              style={{ background: "#6d28d9" }}
            >
              More About Us
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#ede9fe" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 4h4l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L13.5 12l4 1.5v4c0 1-1 2-2 1.5C6 16 2 10 2 6c-.5-1 .5-2 1.5-2H4z" stroke="#6d28d9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs font-medium">Contact Us 24/7</p>
                <p className="text-gray-900 font-bold text-base">543-234-8000</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          ref={ref}
          className="flex-1 relative"
          style={{ minHeight: "520px" }}
        >
          {/* Main full-height image */}
          <div
            className="w-full rounded-2xl overflow-hidden"
            style={{
              height: "100%",
              minHeight: "520px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src="https://vintech.casethemes.net/wp-content/uploads/2025/04/home3-img3.webp"
              alt="IT Solutions"
              className="w-full object-cover"
              style={{ height: "100%", minHeight: "520px", display: "block" }}
            />
          </div>

          {/* 25+ badge — top right overlap */}
          <div
            className="absolute bg-white rounded-xl flex items-center gap-4 px-6 py-4"
            style={{
              top: "-16px",
              right: "-16px",
              minWidth: "200px",
              boxShadow: "0 8px 32px rgba(109,40,217,0.15)",
            }}
          >
            <span
              className="font-black leading-none"
              style={{ fontSize: "2.8rem", color: "#6d28d9", fontFamily: "'Georgia', serif" }}
            >
              {count}<span style={{ fontSize: "1.8rem" }}>+</span>
            </span>
            <span className="text-gray-500 font-semibold uppercase tracking-widest" style={{ fontSize: "0.65rem", lineHeight: 1.5 }}>
              Year of<br />Experience<br />in IT Solution
            </span>
          </div>

          {/* 1000+ Trusted Customers badge — bottom center */}
          <div
            className="absolute bottom-6 bg-white rounded-2xl flex items-center gap-3 px-5 py-3"
            style={{
              left: "50%",
              transform: "translateX(-50%)",
              minWidth: "290px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              whiteSpace: "nowrap",
            }}
          >
            <span className="text-gray-900 font-bold text-sm">1000+ Trusted Customers</span>
            <div className="flex items-center ml-auto">
              {["#c084fc", "#818cf8", "#60a5fa"].map((color, i) => (
                <div
                  key={i}
                  className="rounded-full border-2 border-white flex items-center justify-center"
                  style={{
                    width: 30, height: 30,
                    background: color,
                    marginLeft: i === 0 ? 0 : -8,
                    zIndex: 3 - i,
                    position: "relative",
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="6" r="3" fill="white" />
                    <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="white" />
                  </svg>
                </div>
              ))}
              <div
                className="rounded-full flex items-center justify-center ml-2 flex-shrink-0"
                style={{ width: 30, height: 30, background: "#6d28d9" }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

//Features//


const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" stroke="white" strokeWidth="2" />
        <path d="M10 18a8 8 0 0 1 8-8 8 8 0 0 1 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 24c2 3.2 5.2 5.5 9 5.5s7-2.3 9-5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="10" x2="18" y2="26" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    stat: null,
    title: "Clients Worldwide",
    desc: "We prioritize understanding, ensuring that our solutions resonate with the unique needs.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="7" width="28" height="22" rx="3" stroke="white" strokeWidth="2" />
        <path d="M11 18l5 5 9-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    stat: null,
    title: "Performance Driven",
    desc: "We are committed to delivering high-quality results, continuously optimizing performance to exceed expectations.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 4 L20 14 L30 14 L22 20 L25 30 L18 24 L11 30 L14 20 L6 14 L16 14 Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    stat: "100",
    title: "Honest & Integrity",
    desc: "Our foundation is built on trust and transparency, upholding ethical standards in every aspect of our work.",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="13" r="5" stroke="white" strokeWidth="2" />
        <path d="M6 32c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 10c1.2 1.2 2 2.8 2 4.5s-.8 3.3-2 4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 10c-1.2 1.2-2 2.8-2 4.5s.8 3.3 2 4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    stat: "98%",
    title: "Teamwork & Collaboration",
    desc: "We believe in the power of collaboration, fostering a culture of teamwork to achieve shared success.",
  },
];

 function WhoWeAreSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "600px" }}>

        {/* LEFT: Image — full height */}
        <div className="lg:w-5/12" style={{ minHeight: "500px" }}>
          <img
            src="https://vintech.casethemes.net/wp-content/uploads/2025/04/home2-08.webp"
            alt="Who We Are"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "500px" }}
          />
        </div>

        {/* RIGHT: 2×2 grid */}
        <div
          className="lg:w-7/12 relative"
          style={{ background: "#3b2e9e", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "40px 36px",
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.13)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.13)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 68,
                  height: 68,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginBottom: 4,
                }}
              >
                {f.icon}
              </div>

              {/* Stat */}
              {f.stat && (
                <div style={{ color: "white", fontWeight: 900, fontSize: "2.6rem", lineHeight: 1, fontFamily: "'Georgia', serif" }}>
                  {f.stat}
                </div>
              )}

              {/* Title */}
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "1.15rem", margin: 0 }}>
                {f.title}
              </h3>

              {/* Desc */}
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}

          {/* Center circle — exactly at grid junction (50% / 50%) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-70%, -60%)",
              width: 128,
              height: 128,
              borderRadius: "50%",
              background: "#c8bcf8",
              boxShadow: "0 0 0 10px #3b2e9e",
              zIndex: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              pointerEvents: "none",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M6 20L20 6M20 6H10M20 6V16" stroke="#3b2e9e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ color: "#3b2e9e", fontWeight: 700, fontSize: "0.7rem", textAlign: "center", lineHeight: 1.35 }}>
              Commitment<br />To Growth!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}



// Case Study Section//


const tabs = ["All Projects", "Cloud Solutions", "Cyber Security", "Development", "Digital Marketing"];

const projects = [
  {
    id: 1,
    image: "https://vintech.casethemes.net/wp-content/uploads/2025/04/case4-1.webp",
    tags: ["Cyber Security", "Digital Marketing"],
    title: "Creative Team In Strategy Session",
    desc: "Empowering ideas and campaigns through collaboration in modern workspaces.",
    link: "https://vintech.casethemes.net/portfolio/creative-team-in-strategy-session/",
    categories: ["Cyber Security", "Digital Marketing"],
  },
  {
    id: 2,
    image: "https://vintech.casethemes.net/wp-content/uploads/2025/04/case10.webp",
    tags: ["Cloud Solutions", "Development"],
    title: "Cloud Infrastructure & DevOps Pipeline",
    desc: "Scalable cloud architecture designed for high-performance enterprise environments.",
    link: "#",
    categories: ["Cloud Solutions", "Development"],
  },
];

 function CaseStudySection() {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [active, setActive] = useState(null);

  const filtered = activeTab === "All Projects"
    ? projects
    : projects.filter((p) => p.categories.includes(activeTab));

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-10">
        <span
          className="inline-block px-6 py-2 rounded font-semibold text-white text-sm mb-6"
          style={{ background: "#6d28d9" }}
        >
          Case Study
        </span>
        <h2
          className="font-black text-gray-900 mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Georgia', serif" }}
        >
          Real Solutions, Proven Results.
        </h2>
        <p className="text-gray-500 mx-auto" style={{ maxWidth: 640, fontSize: "1rem", lineHeight: 1.7 }}>
          Our IT solutions company offers services that empower businesses and drive things
          forward. Ideas and excellent service are the hallmarks of our work.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setActive(null); }}
            style={{
              padding: "10px 22px",
              borderRadius: "999px",
              fontWeight: 600,
              fontSize: "0.9rem",
              border: "none",
              cursor: "pointer",
              background: activeTab === tab ? "#6d28d9" : "#f0edf9",
              color: activeTab === tab ? "white" : "#6d28d9",
              transition: "all 0.2s",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {filtered.map((project) => {
          const isOpen = active === project.id;
          return (
            <div
              key={project.id}
              onClick={() => setActive(isOpen ? null : project.id)}
              style={{
                position: "relative",
                height: "420px",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Background image — always visible, never changes */}
              <img
                src={project.image}
                alt={project.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                  transform: isOpen ? "scale(1.04)" : "scale(1)",
                }}
              />

              {/* Dark overlay — slightly stronger when card open */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: isOpen
                    ? "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)",
                  transition: "background 0.4s ease",
                }}
              />

              {/* Arrow icon (visible when closed) */}
              {!isOpen && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 18,
                    right: 18,
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.85)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 14L14 4M14 4H7M14 4V11" stroke="#6d28d9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {/* Info card — slides up on click, same image stays behind */}
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  right: 20,
                  bottom: isOpen ? 20 : "-260px",
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: "14px",
                  padding: "22px 24px 24px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.22)",
                  transition: "bottom 0.45s cubic-bezier(0.4,0,0.2,1)",
                  zIndex: 10,
                }}
              >
                {/* Top row: tags + arrow link */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          color: "#4338ca",
                          fontWeight: 600,
                          fontSize: "0.82rem",
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <span style={{
                          width: 7, height: 7,
                          borderRadius: "50%",
                          background: "#4338ca",
                          display: "inline-block",
                          flexShrink: 0,
                        }} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ flexShrink: 0, marginLeft: 10 }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 19L19 5M19 5H9M19 5V15" stroke="#4338ca" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>

                {/* Title */}
                <h3 style={{ fontWeight: 800, fontSize: "1.2rem", color: "#111827", margin: "0 0 8px", lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                {/* Desc */}
                <p style={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                  {project.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      
    </section>
  );
}




const steps = [
  {
    title: "Understand Your Needs",
    desc: "We begin with a deep consultation to understand your goals, challenges, and needs, ensuring a strategy aligned with your vision for real results.",
  },
  {
    title: "Design Tailored Solutions",
    desc: "Our team crafts customized IT solutions specifically designed to address your unique business challenges and objectives with precision.",
  },
  {
    title: "Deliver And Support",
    desc: "We implement solutions seamlessly and provide ongoing support to ensure everything runs smoothly and delivers maximum value.",
  },
];

function HowWeWorkSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #2d1f7a 0%, #3b2ea0 50%, #2a1f6e 100%)",
        minHeight: "520px",
        padding: "80px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-0">

        {/* ── LEFT: Text ── */}
        <div className="lg:w-5/12 pr-0 lg:pr-8 mb-12 lg:mb-0 pt-2">
          <button
            style={{
              background: "#6d28d9",
              color: "white",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "10px 24px",
              borderRadius: "6px",
              border: "none",
              marginBottom: "28px",
              cursor: "default",
            }}
          >
            How We Work
          </button>

          <h2
            className="text-white font-black leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "'Georgia', serif" }}
          >
            How We Deliver<br />Innovation And<br />Excellence
          </h2>

          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 380 }}>
            Our IT solutions company offers services that empower businesses and drive things
            forward. Ideas and excellent service are the hallmarks of our work.
          </p>
        </div>

        {/* ── CENTER: Timeline ── */}
        <div
          className="hidden lg:flex flex-col items-center"
          style={{ width: 80, flexShrink: 0, paddingTop: 8 }}
        >
          {steps.map((_, i) => {
            const isOpen = openIndex === i;
            const isLast = i === steps.length - 1;
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Dot */}
                <div
                  style={{
                    width: isOpen ? 64 : 20,
                    height: isOpen ? 64 : 20,
                    borderRadius: "50%",
                    background: isOpen ? "white" : "rgba(255,255,255,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                >
                  {isOpen && (
                    <span
                      style={{
                        color: "#3b2ea0",
                        fontWeight: 900,
                        fontSize: "1.5rem",
                        fontFamily: "'Georgia', serif",
                        lineHeight: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                  )}
                </div>

                {/* Connector line */}
                {!isLast && (
                  <div
                    style={{
                      width: 2,
                      height: isOpen ? 120 : 80,
                      background: "rgba(255,255,255,0.25)",
                      transition: "height 0.35s ease",
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* ── RIGHT: Accordion ── */}
        <div className="lg:w-7/12 flex flex-col gap-4" style={{ paddingTop: 4 }}>
          {steps.map((step, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                style={{
                  background: isOpen ? "rgba(220,215,255,0.18)" : "rgba(255,255,255,0.06)",
                  border: isOpen ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: isOpen ? "28px 32px" : "22px 32px",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                }}
              >
                {/* Header row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      margin: 0,
                      transition: "font-size 0.2s",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* +/- button */}
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginLeft: 16,
                      transition: "all 0.2s",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      {isOpen ? (
                        <path d="M3 8h10" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                      ) : (
                        <>
                          <path d="M8 3v10" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                          <path d="M3 8h10" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>

                {/* Expanded content */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.4s ease, opacity 0.3s ease",
                    marginTop: isOpen ? 14 : 0,
                  }}
                >
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.75, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
//Leadership//

 function LeadershipSection() {
  return (
    <section
      className="w-full"
      style={{ background: "#eeeaf8", padding: "80px 0 0 0" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">

          {/* ── LEFT ── */}
          <div className="lg:w-5/12 pb-16">
            {/* Badge */}
            <button
              style={{
                background: "#6d28d9",
                color: "white",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "10px 24px",
                borderRadius: "6px",
                border: "none",
                marginBottom: "28px",
                cursor: "default",
              }}
            >
              Leadership
            </button>

            {/* Heading */}
            <h2
              className="font-black text-gray-900 leading-tight mb-6"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                fontFamily: "'Georgia', serif",
                lineHeight: 1.12,
              }}
            >
              Meet The Incredible<br />
              Minds Behind Our<br />
              Success
            </h2>

            {/* Para */}
            <p
              style={{
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.78,
                maxWidth: 420,
                marginBottom: 36,
              }}
            >
              Our team is the driving force behind innovation and excellence. Get
              to know the experts dedicated to delivering solutions that make a
              difference.
            </p>

            {/* All Team Members button */}
            <button
              className="transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                background: "#6d28d9",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "14px 32px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                marginBottom: 32,
                display: "block",
              }}
            >
              All Team Members
            </button>

            {/* Want to join line */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <p style={{ color: "#374151", fontWeight: 800, fontSize: "1rem", margin: 0 }}>
                Want to Become Part of Our Team?  
              </p>
              <a
                href="#"
                style={{
                  color: "#6d28d9",
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* ── RIGHT: Image same height as left ── */}
          <div
            className="lg:w-7/12"
            style={{ lineHeight: 0, display: "flex", alignItems: "stretch" }}
          >
            <img
              src="https://vintech.casethemes.net/wp-content/uploads/2025/04/home3-img4.webp"
              alt="Team Member"
              style={{
                width: "100%",
                height: "80%",
                display: "block",
                borderRadius: "12px 12px 0 0",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

//Contact
 function ContactCTASection() {
  const pills = [
    "24/7 Online Support",
    "Free Consultation",
    "Multilingual Support",
  ];

  const contacts = [
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M6 7h6l2.5 6-3 2c1.8 3.6 4.9 6.7 8.5 8.5l2-3 6 2.5v6c0 1.7-1.7 3-3.3 2.5C12 27 5 20 5 10.3 4.5 8.7 4.3 7 6 7z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M24 6c3.3 0 6 2.7 6 6" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 10a2 2 0 0 1 2 2" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: "Call Us",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M6 8h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H10l-6 4V10a2 2 0 0 1 2-2z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="13" cy="17" r="1.5" fill="#6d28d9"/>
          <circle cx="18" cy="17" r="1.5" fill="#6d28d9"/>
          <circle cx="23" cy="17" r="1.5" fill="#6d28d9"/>
        </svg>
      ),
      label: "Chat With Us",
    },
    {
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 4C13.6 4 10 7.6 10 12c0 7 8 18 8 18s8-11 8-18c0-4.4-3.6-8-8-8z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="18" cy="12" r="3" stroke="#6d28d9" strokeWidth="2" fill="none"/>
        </svg>
      ),
      label: "Our Location",
    },
{
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M6 8h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H10l-6 4V10a2 2 0 0 1 2-2z" stroke="#6d28d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="13" cy="17" r="1.5" fill="#6d28d9"/>
          <circle cx="18" cy="17" r="1.5" fill="#6d28d9"/>
          <circle cx="23" cy="17" r="1.5" fill="#6d28d9"/>
        </svg>
      ),
      label: "Talk With Us",
    },

  ];

  return (
    <section className="w-full flex flex-col lg:flex-row" style={{ minHeight: "520px" }}>

      {/* LEFT: Photo */}
      <div className="lg:w-5/12" style={{ minHeight: "420px" }}>
        <img
          src="https://vintech.casethemes.net/wp-content/uploads/2025/04/home3-img5.webp"
          alt="Contact"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "420px" }}
        />
      </div>

      {/* RIGHT: Purple content */}
      <div
        className="lg:w-7/12 flex flex-col justify-center px-10 py-14"
        style={{ background: "linear-gradient(135deg, #4c35c8 0%, #5b3fd6 50%, #3d2fb0 100%)" }}
      >
        {/* Heading */}
        <h2
          className="text-white font-black mb-8 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontFamily: "'Georgia', serif" }}
        >
          Let's Solve Your IT<br />Challenges—Start Today!
        </h2>

        {/* Pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {pills.map((pill) => (
            <div
              key={pill}
              className="flex items-center gap-2 px-5 py-3 rounded-full"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              <div
                style={{
                  width: 22, height: 22,
                  borderRadius: "50%",
                  background: "#6d28d9",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ color: "white", fontWeight: 600, fontSize: "0.95rem", whiteSpace: "nowrap" }}>
                {pill}
              </span>
            </div>
          ))}
        </div>

        {/* Subtext */}
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 540 }}>
          Fill out the form below, and one of our experts will contact you within 24 hours to
          discuss your needs. We're here to tailor a plan that works for you.
        </p>

        {/* Contact icons */}
        <div className="flex gap-5 flex-wrap">
          {contacts.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-3 cursor-pointer transition-all duration-200 hover:scale-105"
              style={{
                flex: "1 1 120px",
                maxWidth: 150,
                background: "rgba(180,160,255,0.22)",
                borderRadius: "14px",
                padding: "24px 16px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div
                style={{
                  width: 68, height: 68,
                  borderRadius: "14px",
                  background: "rgba(200,185,255,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {c.icon}
              </div>
              <span style={{ color: "white", fontWeight: 600, fontSize: "0.9rem" }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
// ── Main Page ─────────────────────────────────────────────────────────────────
const Acquia = () => {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '96px' }}>
      <HeroSection />
      <FeatureCards />
      <AboutSection />
      <WhoWeAreSection />
      <CaseStudySection />
      <HowWeWorkSection />
      <LeadershipSection />
      <ContactCTASection />
      
      
      
    </div>
  )
}

export default Acquia
