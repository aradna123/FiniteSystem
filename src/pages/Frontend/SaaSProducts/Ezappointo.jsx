import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ─── SVG ICONS (no react-icons dependency needed) ───────────────────────────

const VideoCameraIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const StethoscopeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0v3.75a4.125 4.125 0 01-8.25 0v-3.75z"/>
    <path d="M12.75 6.375v6a4.5 4.5 0 009 0v-1.5"/>
    <circle cx="21" cy="10.5" r="1.5"/>
  </svg>
);

const DoctorIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 10l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M5 13L13 5M13 5H7M13 5v6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

// ─── SHARED LOGO ─────────────────────────────────────────────────────────────

const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <div style={{
      width: 40, height: 40,
      background: "linear-gradient(135deg, #4B6FD4 0%, #2196F3 100%)",
      borderRadius: 10,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 12px rgba(75,111,212,0.4)"
    }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)"/>
        <polygon points="12,6 18,10 18,14 12,18 6,14 6,10" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.2)"/>
      </svg>
    </div>
    <span style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e", letterSpacing: "-0.3px" }}>
      Doutor
    </span>
  </div>
);


// ════════════════════════════════════════════════════════════════════════════
// COMPONENT 1 — HeroSection
// ════════════════════════════════════════════════════════════════════════════

function HeroSection() {
  return (
    <section style={{ position: "relative", background: "white" }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://doutor-react.envytheme.com/images/banner/banner-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
      }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 0 }} />

      {/* Grid */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 32, alignItems: "center",
        padding: "80px 24px",
      }}>
        {/* Left */}
        <div style={{ color: "white" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{
              background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
              padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.3)"
            }}>⭐ 75k+ Reviews</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16 }}>
            Your Health, One Click Away
          </h1>
          <p style={{ maxWidth: 420, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 28 }}>
            Get expert medical advice, prescriptions, and referrals—anytime, anywhere.
          </p>
          <button style={{
            background: "#2563EB", color: "white",
            border: "none", padding: "14px 28px",
            borderRadius: 10, fontWeight: 600, fontSize: 15,
            cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8,
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
            onMouseLeave={e => e.currentTarget.style.background = "#2563EB"}
          >
            Register Now – It's Free →
          </button>
        </div>

        
      </div>

      {/* Stats Cards */}
<div style={{
  position: "relative", zIndex: 10,
  maxWidth: 1200, margin: "0 auto",
  display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 25, padding: "0 24px",
  transform: "translateY(40px)" // 👈 cards ko neeche attach karne ke liye
}}>
  {[
    { icon: <StethoscopeIcon />, stat: "8.5M+", label: "Patients Served" },
    { icon: <DoctorIcon />, stat: "500+", label: "Licensed Doctors" },
    { icon: <PhoneIcon />, stat: "24/7", label: "Virtual Access", sub: "Urgent Help +1(800) 456-7890" },
  ].map((card, i) => (
    <div key={i} style={{
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      borderRadius: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      padding: "28px", display: "flex", alignItems: "center", gap: 16,
       // 👈 size thoda thoda increase
      transition: "transform 0.3s ease"
    }}>
      {card.icon}
      <div>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: "#2563EB", marginBottom: 2 }}>{card.stat}</h3>
        <p style={{ color: "#374151", fontWeight: 500 }}>{card.label}</p>
        {card.sub && <span style={{ fontSize: 12, color: "#9CA3AF" }}>{card.sub}</span>}
      </div>
    </div>
  ))}
</div>

    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// COMPONENT 2 — AboutUsSection
// ════════════════════════════════════════════════════════════════════════════

function AboutUsSection() {
  const [activeCard, setActiveCard] = useState(null);

  const [ripples, setRipples] = useState([]);

 


  const cards = [
    { icon: <StethoscopeIcon />, title: "8.5M+ Patients Served" },
    { icon: <DoctorIcon />, title: "500+ Licensed Doctors" },
    { icon: <PhoneIcon />, title: "24/7 Virtual Access", sub: "Urgent Help +1(800) 456-7890" },
  ];

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y, size };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };


  

  return (
    <section style={{
      maxWidth: 1200, margin: "0 auto",
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: 48, padding: "80px 24px", alignItems: "center",
    }}>
      {/* Left */}
      <div>
        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "#111827", lineHeight: 1.25, marginBottom: 20 }}>
          Building a Future Where Access to Quality Healthcare Doesn't Depend on Location
        </h2>
        <p style={{ color: "#6B7280", maxWidth: 440, lineHeight: 1.7, marginBottom: 28 }}>
          Geography shouldn't limit your access to healthcare. With Doutor, anyone with a device and an internet connection can connect to trusted doctors—no matter where they live, work, or travel.
        </p>
        <button style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "#2563EB", color: "white",
          border: "none", padding: "13px 26px", borderRadius: 10,
          fontWeight: 600, fontSize: 15, cursor: "pointer",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
          onMouseLeave={e => e.currentTarget.style.background = "#2563EB"}
        >
          Learn More About Us <span>→</span>
        </button>
      </div>

      {/* Right cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={(e) => {
              setActiveCard(activeCard === i ? null : i);
              createRipple(e);
            }}
            style={{
              position: "relative", // ripple ke liye
              overflow: "hidden",   // ripple bound
              cursor: "pointer", borderRadius: 18,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "32px 20px", textAlign: "center",
              transition: "all 0.3s",
              background: activeCard === i ? "#EFF6FF" : "white",
              outline: activeCard === i ? "3px solid #93C5FD" : "none",
              gridColumn: i === 2 ? "1 / -1" : "auto",
            }}
          >
            <div style={{ marginBottom: 12 }}>{card.icon}</div>
            <h3 style={{ fontWeight: 600, color: "#374151", fontSize: 15 }}>{card.title}</h3>
            {card.sub && <p style={{ fontSize: 12, color: "#9CA3AF", marginTop: 4 }}>{card.sub}</p>}

            {/* Ripple circles */}
{ripples.map((r) => (
  <span
    key={r.id}
    style={{
      position: "absolute",
      borderRadius: "50%",
      pointerEvents: "none",
      width: r.size,
      height: r.size,
      left: r.x - r.size / 2,
      top: r.y - r.size / 2,
      background: "radial-gradient(circle, rgba(55,138,221,0.35), rgba(55,138,221,0.08))",
      animation: "ripple 0.8s ease-out forwards",
    }}
  />
))}

{/* Background overlay for color change */}
{ripples.length > 0 && (
  <span
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "#EBF8FF", // 👈 light blue background
      opacity: 0.6,
      animation: "fadeOut 0.8s ease-out forwards",
      pointerEvents: "none",
    }}
  />
)}

<style>{`
  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }
  @keyframes fadeOut {
    0% { opacity: 0.6; }
    100% { opacity: 0; }
  }
`}</style>

          </div>
        ))}
      </div>

      
    </section>
  );
}

    

// ════════════════════════════════════════════════════════════════════════════
// COMPONENT 3 — DoutorHero (Why Choose Section)
// ════════════════════════════════════════════════════════════════════════════

function DoutorHero() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  const features = [
    { title: "500+ Licensed Doctors", desc: "Every Doutor visit connects you with a certified medical professional—no chatbots." },
    { title: "8.2 M+ Virtual Consultations Completed", desc: "From urgent care to therapy, Doutor has successfully completed over 8 million secure video consultations." },
    { title: "Available 24/7, Anytime Anywhere", desc: "Healthcare doesn't follow business hours. Get care whenever you need it, from wherever you are." },
  ];

  return (
    <div style={{ fontFamily: "inherit", textAlign: "center",  overflowX: "hidden" }}>
      <style>{`
        .nav-item-d { display:flex; align-items:center; gap:4px; color:#2d2d2d; font-size:15px; font-weight:500; cursor:pointer; padding:6px 4px; transition:color .2s; text-decoration:none; }
        .nav-item-d:hover { color:#2563EB; }
        .feature-card-d { background:rgba(255,255,255,0.15); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.25); border-radius:16px; padding:28px 32px; display:flex; gap:20px; align-items:flex-start; transition:background .3s,transform .3s; cursor:pointer; }
        .feature-card-d:hover { background:rgba(255,255,255,0.22); transform:translateY(-2px); }
        .reg-btn-d { background:#1a1a2e; color:white; border:none; padding:11px 22px; border-radius:50px; font-size:14px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px; transition:background .2s,transform .15s; }
        .reg-btn-d:hover { background:#2563EB; transform:scale(1.02); }
        .login-btn-d { background:none; border:none; display:flex; align-items:center; gap:6px; color:#2d2d2d; font-size:15px; font-weight:500; cursor:pointer; padding:8px 12px; border-radius:8px; transition:background .2s; }
        .login-btn-d:hover { background:#f0f4ff; }
        .fade-up-d { opacity:0; transform:translateY(30px); transition:opacity .7s ease,transform .7s ease; }
        .fade-up-d.vis { opacity:1; transform:translateY(0); }
        @media(max-width:900px){ .hero-layout-d{ flex-direction:column !important; } .nav-links-d{ display:none !important; } }
      `}</style>

      

      {/* Hero */}
      <section style={{ minHeight: "calc(100vh - 72px)", position: "relative", overflow: "hidden", display: "flex" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://doutor-react.envytheme.com/images/banner/banner-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.62)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,rgba(10,15,40,.72) 0%,rgba(10,15,40,.3) 60%,rgba(10,15,40,.1) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "60px 40px", display: "flex", alignItems: "center", width: "100%", gap: 60 }} className="hero-layout-d">
          {/* Left */}
          <div style={{ flex: "0 0 52%", maxWidth: 640 }}>
            <div className={`fade-up-d ${visible ? "vis" : ""}`} style={{ transitionDelay: ".1s" }}>
              <h1 style={{ fontSize: "clamp(2.4rem,4vw,3.2rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 48, textAlign: "center", textShadow: "0 2px 12px rgba(0,0,0,.3)" }}>
                Why Choose Doutor for Your Healthcare Needs?
              </h1>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {features.map((f, i) => (
                <div key={i} className={`feature-card-d fade-up-d ${visible ? "vis" : ""}`} style={{ transitionDelay: `${0.25 + i * 0.15}s` }}>
                  <div style={{ width: 42, height: 42, minWidth: 42, background: "#2563EB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(37,99,235,.5)" }}>
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 style={{ color: "white", fontSize: "clamp(1rem,1.8vw,1.15rem)", fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ color: "rgba(255,255,255,.82)", fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

         
          
              </div>
            
          </section>


      {/* Scroll to top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ position: "fixed", bottom: 28, right: 28, width: 44, height: 44, background: "#1a1a2e", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(0,0,0,.3)", zIndex: 100 }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 14V4M4 9l5-5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// COMPONENT 4 — HeroSec (Telemedicine — replaces framer-motion + react-icons + helmet)
// ════════════════════════════════════════════════════════════════════════════

function HeroSec() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const pills = [
    { icon: <VideoCameraIcon />, text: "Virtual Visits" },
    { icon: <CheckCircleIcon />, text: "Secure Platform" },
    { icon: <ClockIcon />, text: "24/7 Access" },
  ];

  return (
    <>
      {/* Title tag equivalent (no helmet needed) */}
      <style>{`
        .hs-pill { display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,.1); backdrop-filter:blur(12px); padding:10px 18px; border-radius:50px; border:1px solid rgba(255,255,255,.2); color:white; font-size:14px; font-weight:500; transition:background .2s; cursor:default; }
        .hs-pill:hover { background:rgba(255,255,255,.2); }
        .hs-float-badge { backdrop-filter:blur(12px); padding:14px 18px; border-radius:14px; box-shadow:0 8px 30px rgba(0,0,0,.3); text-align:center; }
        @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatDown { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.1)} }
        .float-up { animation: floatUp 3s ease-in-out infinite; }
        .float-down { animation: floatDown 3s ease-in-out infinite; animation-delay:1.5s; }
        .spin-ring { animation: spin 20s linear infinite; }
        .pulse-blob { animation: pulse 6s ease-in-out infinite; }
        .slide-in-left { opacity:0; transform:translateX(-40px); transition:opacity .7s ease,transform .7s ease; }
        .slide-in-left.vis { opacity:1; transform:translateX(0); }
        .slide-in-right { opacity:0; transform:translateX(40px); transition:opacity .7s ease,transform .7s ease; transition-delay:.2s; }
        .slide-in-right.vis { opacity:1; transform:translateX(0); }
        @media(max-width:900px){ .herosec-grid{ grid-template-columns:1fr !important; } }
      `}</style>

      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "center",
        overflow: "hidden",
        backgroundImage: "url('https://doutor-react.envytheme.com/images/banner/banner-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
        paddingTop: 80, paddingBottom: 40,
      }}>
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(37,99,235,.55) 0%, rgba(37,99,235,.35) 40%, rgba(16,24,64,.25) 100%)" }} />

        {/* Floating blobs */}
        <div className="pulse-blob" style={{ position: "absolute", top: 80, right: 40, width: 128, height: 128, background: "rgba(255,255,255,.15)", borderRadius: "50%", filter: "blur(32px)" }} />
        <div className="pulse-blob" style={{ position: "absolute", bottom: 80, left: 40, width: 160, height: 160, background: "rgba(99,102,241,.2)", borderRadius: "50%", filter: "blur(40px)", animationDelay: "2s" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", width: "100%", padding: "0 24px" }}>
          <div className="herosec-grid" style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 48, alignItems: "center", minHeight: "calc(100vh - 120px)" }}>

            {/* Left */}
            <div className={`slide-in-left ${mounted ? "vis" : ""}`}>
              <h1 style={{ fontSize: "clamp(2rem,4vw,3.25rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
                Secure <span style={{ color: "#FCD34D" }}>Telemedicine</span> for Connected Care
              </h1>
              <p style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "rgba(255,255,255,.9)", lineHeight: 1.75, maxWidth: 560, marginBottom: 32 }}>
                Ezappointo Telemedicine enables virtual consultations that expand patient access, improve continuity of care, and support modern healthcare delivery.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {pills.map((p, i) => (
                  <div key={i} className="hs-pill" style={{ fontSize: "clamp(.8rem,1.2vw,1rem)" }}>
                    <span style={{ fontSize: 20 }}>{p.icon}</span> {p.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className={`slide-in-right ${mounted ? "vis" : ""}`} style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
                {/* Main card */}
                <div style={{
                  background: "rgba(37,99,235,.85)",
                  backdropFilter: "blur(16px)",
                  borderRadius: 24,
                  padding: "48px 40px",
                  boxShadow: "0 24px 64px rgba(0,0,0,.35)",
                  textAlign: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  {/* Decorative circle blurs */}
                  <div style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, background: "rgba(255,255,255,.2)", borderRadius: "50%", filter: "blur(20px)" }} />
                  <div style={{ position: "absolute", bottom: -16, left: -16, width: 64, height: 64, background: "rgba(255,255,255,.2)", borderRadius: "50%", filter: "blur(16px)" }} />

                  {/* Icon */}
                  <div style={{ position: "relative", marginBottom: 24, display: "flex", justifyContent: "center" }}>
                    <div style={{ position: "relative" }}>
                      <div style={{ width: 140, height: 140, background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 40px rgba(0,0,0,.2)", margin: "0 auto" }}>
                        <span style={{ fontSize: 72, color: "#2563EB" }}><VideoCameraIcon /></span>
                      </div>
                      {/* Spinning ring */}
                      <div className="spin-ring" style={{ position: "absolute", inset: -4, border: "3px solid rgba(255,255,255,.35)", borderRadius: "50%" }} />
                    </div>
                  </div>

                  <h2 style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", color: "#FCD34D", fontWeight: 700, lineHeight: 1.1 }}>
                    Telemedicine
                  </h2>
                </div>

                {/* Floating badge top-right */}
                <div className="float-up hs-float-badge" style={{ position: "absolute", top: -32, right: -32, background: "#FCD34D" }}>
                  <div style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e" }}>Secure</div>
                  <div style={{ fontSize: 11, color: "#92400e", fontWeight: 500 }}>Platform</div>
                </div>

                {/* Floating badge bottom-left */}
                <div className="float-down hs-float-badge" style={{ position: "absolute", bottom: -32, left: -32, background: "#FCD34D" }}>
                  <div style={{ fontWeight: 700, fontSize: 18, color: "#1a1a2e" }}>HD</div>
                  <div style={{ fontSize: 11, color: "#92400e", fontWeight: 500 }}>Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



import {
  HiOutlineGlobeAlt,
  HiOutlineRocketLaunch,
  HiOutlineBuildingOffice2,
  HiOutlineVideoCamera,
} from "react-icons/hi2";

const PatientGrowth = () => {
  const items = [
    {
      icon: <HiOutlineGlobeAlt />,
      title: "Remote Patient Access",
      description:
        "Serve patients regardless of location through secure virtual appointments.",
    },
    {
      icon: <HiOutlineRocketLaunch />,
      title: "Simple Visit Launch",
      description:
        "One-click access makes virtual consultations easy for patients and providers.",
    },
    {
      icon: <HiOutlineBuildingOffice2 />,
      title: "Reduced In-Clinic Congestion",
      description: "Virtual visits help manage patient flow efficiently.",
    },
  ];
  return (
    <>
      <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20  overflow-x-hidden">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Image Section */}
            <motion.div
              className="col-span-1 lg:col-span-6 relative"
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src="/assets/telemedicine2.jpg"
                  alt="Virtual Care Without Complexity"
                  className="w-full h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                  style={{
                    borderBottomRightRadius: "clamp(50px, 12vw, 200px)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Card */}
                <motion.div
                  className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-12 md:right-8 lg:bottom-16 lg:right-10 bg-white shadow-2xl rounded-lg p-4 sm:p-5 md:p-6 max-w-[240px] sm:max-w-[280px] md:max-w-[320px] z-10 group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="absolute -top-4 -left-4 bg-primary w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex justify-center items-center shadow-lg z-20"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      rotate: 180,
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <HiOutlineVideoCamera className="text-white text-xl sm:text-2xl md:text-3xl" />
                  </motion.div>
                  <div className="pt-4 space-y-2">
                    <h3 className="text-sm sm:text-base font-semibold text-primary uppercase tracking-wide">
                      Virtual Care
                    </h3>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary leading-tight">
                      Connect remotely
                    </h2>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="col-span-1 lg:col-span-6 flex items-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <div className="w-full max-w-2xl mx-auto">
                <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
                  <div className="flex flex-col space-y-4 sm:space-y-5">
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <motion.div
                        className="bg-primary w-3 h-3 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1,
                          type: "spring",
                        }}
                      />
                      <p className="text-md sm:text-base md:text-lg ms-2 font-light">
                        Modern Practices
                      </p>
                    </motion.div>
                    <motion.h1
                      className="text-4xl sm:text-4xl  lg:text-5xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.span
                        className="text-secondary"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        Virtual Care Without Complexity
                      </motion.span>
                    </motion.h1>
                    <motion.p
                      className="text-gray-600 text-md sm:text-md md:text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Provide high-quality medical consultations remotely with a
                      simple, secure telemedicine experience.
                    </motion.p>
                  </div>

                  {/* Features Grid */}
                  <div className="space-y-4 sm:space-y-5">
                    {items.map((data, index) => (
                      <motion.div
                        key={index}
                        className="p-4 sm:p-5 group hover:bg-[#91DDDD]/40 transition duration-300 rounded-lg cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + index * 0.1,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          x: 10,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div className="flex items-start gap-4 sm:gap-5">
                          <motion.span
                            className="text-5xl sm:text-6xl text-primary shrink-0"
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.5 + index * 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{
                              rotate: 360,
                              scale: 1.1,
                              transition: { duration: 0.5 },
                            }}
                          >
                            {data.icon}
                          </motion.span>
                          <div className="space-y-2 flex-1">
                            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                              {data.title}
                            </h2>
                            <p className="text-gray-600 text-md sm:text-md leading-relaxed">
                              {data.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};


//Pearl

const columns = [
  {
    title: 'Business Owners',
    description:
      'Been looking for a construction company WP theme or entertainment template? Pearl is the optimal solution for any industry, small business, and startups.',
    iconColor: 'text-blue-500',
    icon: (
      <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: 'Entrepreneurs',
    description:
      'Premium business templates that are really affordable make building more enjoyable. With just a single platform you can create dozens of different products.',
    iconColor: 'text-red-500',
    icon: (
      <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: 'Freelancer',
    description:
      'Create an outstanding portfolio. Hundreds of practical tools are at your disposal to promote your service and find the perfect clients.',
    iconColor: 'text-teal-500',
    icon: (
      <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v-1.745a.75.75 0 01.298-.605 8.378 8.378 0 003.743-3.243.75.75 0 01.954-.018 8.378 8.378 0 003.743 3.243.75.75 0 01.298.605V21M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: 'Agencies',
    description:
      'Whether it is an IT or SEO agency, these WordPress templates are the best option to uncover your creativity and build an amazing landing page.',
    iconColor: 'text-orange-500',
    icon: (
      <svg className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
]

const Pearl = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading: "Pearl is" + "for everyone" in pink */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span>Pearl is </span>
          <span className="text-rose-500">for everyone</span>
        </h2>

        {/* Four columns */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <div className={col.iconColor}>{col.icon}</div>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-gray-900">
                {col.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{col.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// MedicalSection

  function GeneralMedicalSection() {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y, size };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <section style={{
      position: "relative",
      background: "white",
      padding: "100px 24px",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 48,
        alignItems: "stretch",
      }}>
        {/* Left side doctor image + overlay card */}
        <div style={{ position: "relative", minHeight: 420 }}>
          <img
            src="https://doutor-react.envytheme.com/images/features/features.jpg"
            alt="Doctor"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 16,
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)"
            }}
          />
          <div
            onClick={createRipple}
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              background: "rgba(255,255,255,0.95)",
              borderRadius: 16,
              padding: "24px",
              maxWidth: 320,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              cursor: "pointer",
              overflow: "hidden"
            }}
          >
            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 12 }}>
              General Medical
            </h3>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6, marginBottom: 16 }}>
              Feeling sick or have non-emergency symptoms like cold, flu, or allergies? 
              Our doctors are available 24/7 to provide quick answers, prescriptions, and peace of mind.
            </p>
            <button style={{
              background: "#1E40AF",
              color: "White",
              border: "none",
              padding: "12px 24px",
              borderRadius: 8,
              fontWeight: 600,
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
            }}>
              Book Now
            </button>

            {/* Ripple circles */}
            {ripples.map((r) => (
              <span
                key={r.id}
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  pointerEvents: "none",
                  width: r.size,
                  height: r.size,
                  left: r.x - r.size / 2,
                  top: r.y - r.size / 2,
                  background: "radial-gradient(circle, rgba(147,197,253,0.4), rgba(147,197,253,0.05))",
                  animation: "ripple 0.6s ease-out forwards",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right side Quick Access Panel */}
        <div style={{
          background: "#2563EB",
          borderRadius: 20,
          padding: "64px 48px",
          color: "white",
          boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
          position: "relative",
          overflow: "hidden",
          minHeight: 420,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          {/* Decorative shape */}
          <img
            src="https://doutor-react.envytheme.com/images/features/shape.png"
            alt="Decorative Shape"
            style={{
              position: "absolute",
              right: -40,
              top: "50%",
              transform: "translateY(-50%)",
              maxWidth: "280px",
              opacity: 0.25,
              pointerEvents: "none"
            }}
          />

          {/* Icon image (layer.png) */}
          <div style={{ marginBottom: 24 }}>
            <img
              src="https://doutor-react.envytheme.com/images/features/layer.png"
              alt="Panel Icon"
              style={{ width: 80, height: 80 }}
            />
          </div>

          <h2 style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, marginBottom: 16 }}>
            Quick Access Panel
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 28 }}>
            Get the Care You Need — Faster Than Ever
          </p>

          {/* Theme styled link button */}
          <a
            className="link-btn"
            href="/register/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#FCD34D",
              color: "#1a1a2e",
              padding: "14px 28px",
              borderRadius: 10,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
            }}
          >
            <strong>Register Now</strong> - It's Free
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M12.5 0H0.5C0.224 0 0 0.224 0 0.5C0 0.776 0.224 1 0.5 1H11.2928L0.1465 12.1465C-0.04875 12.3417 -0.04875 12.6583 0.1465 12.8535C0.24425 12.9513 0.372 13 0.5 13C0.628 13 0.756 12.9513 0.8535 12.8535L12 1.707V12.5C12 12.776 12.224 13 12.5 13C12.776 13 13 12.776 13 12.5V0.5C13 0.224 12.776 0 12.5 0Z" fill="white"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Ripple keyframes */}
      <style>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
      `}</style>
    </section>
  );
}


//Services//

const services = [
  {
    id: 1,
    title: "General Medical",
    description:
      "Feeling sick or have non-emergency symptoms like cold, flu, or allergies? Our doctors are available 24/7 to provide quick answers, prescriptions, and peace of mind.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <path d="M22 8C15.925 8 11 12.925 11 19c0 4.1 2.1 7.7 5.25 9.9L15 37h14l-1.25-8.1C30.9 26.7 33 23.1 33 19c0-6.075-4.925-11-11-11z" stroke="#378ADD" strokeWidth="1.5" fill="none" />
        <circle cx="22" cy="19" r="4" fill="#378ADD" fillOpacity="0.25" />
        <line x1="22" y1="15" x2="22" y2="23" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="19" x2="26" y2="19" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 37 Q22 39.5 27 37" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Mental Health",
    description:
      "Connect with licensed therapists and counselors from the comfort of your home. Book flexible sessions that fit your schedule and start feeling better.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <path d="M22 10 C16 10 11 15 11 21 C11 25.5 13.5 29.5 17.5 31.5 L16 38 L28 38 L26.5 31.5 C30.5 29.5 33 25.5 33 21 C33 15 28 10 22 10Z" stroke="#378ADD" strokeWidth="1.5" fill="none" />
        <path d="M18 21 C18 18.8 19.8 17 22 17 C24.2 17 26 18.8 26 21" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="22" cy="21" r="2.5" fill="#378ADD" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Dermatology",
    description:
      "Get expert advice for skin conditions, acne, rashes, and more. Our dermatologists provide quick diagnoses and personalized treatment plans online.",
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <rect x="10" y="9" width="24" height="28" rx="4" stroke="#378ADD" strokeWidth="1.5" fill="none" />
        <line x1="16" y1="18" x2="28" y2="18" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="23" x2="28" y2="23" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="28" x2="23" y2="28" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="13" x2="22" y2="16" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="14.5" x2="24" y2="14.5" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ServiceCard({ service, isActive, onClick }) {
  const cardRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    onClick();
  };

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      className={[
        "relative overflow-hidden cursor-pointer rounded-2xl p-7 w-72 border select-none",
        "transition-colors duration-300",
        isActive
          ? "bg-blue-100 border-blue-300"
          : "bg-white border-gray-200 hover:border-blue-200",
      ].join(" ")}
    >
      {/* Ripple circles */}
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{
            position: "absolute",
            borderRadius: "50%",
            pointerEvents: "none",
            width: r.size,
            height: r.size,
            left: r.x - r.size / 2,
            top: r.y - r.size / 2,
            background:
              "radial-gradient(circle, rgba(55,138,221,0.28), rgba(55,138,221,0.04))",
            animation: "ripple 0.6s ease-out forwards",
          }}
        />
      ))}

      {/* Keyframe style (injected once, harmless if repeated) */}
      <style>{`@keyframes ripple { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(4); opacity: 0; } }`}</style>

      {/* Slider dots */}
      <div className="flex justify-end gap-1.5 mb-4">
        <div className="w-5 h-1.5 rounded-full bg-blue-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
      </div>

      {/* Icon */}
      <div className="mb-4">{service.icon}</div>

      {/* Title */}
      <h3 className={["text-xl font-bold mb-2 transition-colors duration-300", isActive ? "text-blue-900" : "text-gray-900"].join(" ")}>
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Button */}
      <button
        className={[
          "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white",
          "transition-colors duration-300 pointer-events-none",
          isActive ? "bg-blue-700" : "bg-blue-500",
        ].join(" ")}
      >
        Book Now
        <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

 function ServicesSection() {
  const [activeId, setActiveId] = useState(null);

  return (
  <section className="py-16 px-6 bg-gray-50 min-h-screen">
    <div className="max-w-5xl mx-auto">
      <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
        Our Services
      </p>
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Get the Care You Need — Faster Than Ever
      </h2>

      {/* Cards wrapper */}
      <div className="flex flex-wrap gap-6 justify-center">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isActive={activeId === service.id}
            onClick={() =>
              setActiveId((prev) => (prev === service.id ? null : service.id))
            }
            className="w-[320px] h-[280px]" // 👈 width & height increased
          />
        ))}
      </div>
    </div>
  </section>
);
 }

// ════════════════════════════════════════════════════════════════════════════
// ROOT EXPORT
// ════════════════════════════════════════════════════════════════════════════

const Ezappointo = () => {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <HeroSection />
      <AboutUsSection />
      <DoutorHero />
      <Pearl/>
      <HeroSec />
      <PatientGrowth />
      
      <GeneralMedicalSection />
      <ServicesSection/>
    
      
    </div>
  );
};

export default Ezappointo;