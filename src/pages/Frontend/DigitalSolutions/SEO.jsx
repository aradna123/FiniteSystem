import { useState, useEffect, useRef } from "react";

const slides = [
  { title: "Professional Doors & Windows Installation For 20+ Years", desc: "We provide the best services for your doors & windows. Duis minim ea aliqua deserunt ut minim irure in aute aliqua exercitation commodo eiusmod eu.", bg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop" },
  { title: "Improving Living Spaces with Crafted Doors and Windows", desc: "We provide the best services for your doors & windows. Duis minim ea aliqua deserunt ut minim irure in aute aliqua exercitation commodo eiusmod eu.", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop" },
  { title: "Premium Quality, Expert Craftsmanship Every Time", desc: "We provide the best services for your doors & windows. Duis minim ea aliqua deserunt ut minim irure in aute aliqua exercitation commodo eiusmod eu.", bg: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1600&auto=format&fit=crop" },
];

const GREEN = "#2e7d32";
const GREEN_DARK = "#1b5e20";
const GREEN_MID = "#388e3c";
const GREEN_LIGHT = "#43a047";

// ── NAVBAR ────────────────────────────────────────────────
function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 50 }}>
      <nav style={{ width: "calc(100% - 48px)", maxWidth: 1140, background: "#fff", borderRadius: "0 0 6px 6px", boxShadow: "0 4px 32px rgba(0,0,0,0.13)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 36px" }}>
          <div style={{ display: "flex", flexDirection: "column", userSelect: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontWeight: 900, fontSize: 22, color: "#111", letterSpacing: "0.18em", lineHeight: 1 }}>DOORS</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ display: "block", width: 32, height: 2.5, background: GREEN }} />
                <span style={{ display: "block", width: 32, height: 2.5, background: GREEN }} />
              </div>
            </div>
            <span style={{ fontWeight: 900, fontSize: 22, color: "#111", letterSpacing: "0.18em", lineHeight: 1, marginTop: 3 }}>WINDOWS</span>
          </div>
          <ul style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0 }}>
            {["Home", "Services", "Projects", "Blog", "Contact"].map((item, i, arr) => (
              <li key={item} style={{ display: "flex", alignItems: "center" }}>
                <a href="#" style={{ padding: "8px 16px", fontWeight: 600, fontSize: 15, color: "#222", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.color = GREEN}
                  onMouseLeave={e => e.currentTarget.style.color = "#222"}>{item}</a>
                {i < arr.length - 1 && <span style={{ color: "#ccc", fontSize: 16 }}>/</span>}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: GREEN, color: "#fff", padding: "14px 20px", borderRadius: 6 }}>
            <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.18)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 24 24" fill="white" width={18} height={18}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z" /></svg>
            </div>
            <div>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.8, lineHeight: 1, marginBottom: 4 }}>Call Us</p>
              <p style={{ fontWeight: 900, fontSize: 20, letterSpacing: "0.04em", lineHeight: 1 }}>1 200 300 9000</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// ── HERO SLIDER ───────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const goTo = (idx) => { setFade(false); setTimeout(() => { setCurrent(typeof idx === "function" ? idx(current) : idx); setFade(true); }, 380); };
  useEffect(() => { const t = setInterval(() => goTo(p => (p + 1) % slides.length), 5500); return () => clearInterval(t); }, [current]);
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", minHeight: 580, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${slides[current].bg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: fade ? 1 : 0, transition: "opacity 0.42s ease" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(8,18,8,0.52)" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", opacity: fade ? 1 : 0, transition: "opacity 0.42s ease" }}>
        <div style={{ width: "100%", maxWidth: 1140, margin: "0 auto", padding: "110px 24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <h1 style={{ color: "#fff", fontWeight: 900, lineHeight: 1.15, fontSize: "clamp(30px, 4vw, 54px)", fontFamily: "Georgia,'Times New Roman',serif" }}>{slides[current].title}</h1>
          <div>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 15, lineHeight: 1.85, marginBottom: 28 }}>{slides[current].desc}</p>
            <ScheduleBtn />
          </div>
        </div>
      </div>
      <ArrowBtn dir="left" onClick={() => goTo((current - 1 + slides.length) % slides.length)} />
      <ArrowBtn dir="right" onClick={() => goTo((current + 1) % slides.length)} />
    </div>
  );
}

function ArrowBtn({ dir, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", [dir === "left" ? "left" : "right"]: 20, zIndex: 20, width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, color: "#fff", cursor: "pointer", background: hov ? "rgba(46,125,50,0.7)" : "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.4)", transition: "background 0.2s", lineHeight: 1 }}>
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}

function ScheduleBtn() {
  const [hov, setHov] = useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? GREEN_DARK : GREEN, color: "#fff", border: "none", cursor: "pointer", padding: "14px 30px", fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", borderRadius: 4, transform: hov ? "translateY(-2px)" : "translateY(0)", boxShadow: hov ? "0 8px 24px rgba(46,125,50,0.38)" : "0 2px 8px rgba(46,125,50,0.2)", transition: "all 0.2s ease" }}>
      Schedule For Estimation
    </button>
  );
}

// ── FEATURE CARDS ─────────────────────────────────────────
const featureCards = [
  { bg: GREEN, title: "Professional Workers", icon: <svg viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.7" width={48} height={48}><rect x="8" y="4" width="10" height="13" rx="1.5" /><line x1="13" y1="17" x2="13" y2="24" /><line x1="9.5" y1="24" x2="16.5" y2="24" /><rect x="22" y="4" width="10" height="13" rx="1.5" /><rect x="22" y="23" width="10" height="13" rx="1.5" /><rect x="8" y="23" width="10" height="13" rx="1.5" /></svg> },
  { bg: GREEN_MID, title: "Guaranteed Works", icon: <svg viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.8" width={48} height={48}><circle cx="20" cy="20" r="14" /><circle cx="20" cy="20" r="9" /><line x1="20" y1="14" x2="20" y2="20" strokeWidth="2" strokeLinecap="round" /><circle cx="20" cy="24" r="1.3" fill="white" stroke="none" /></svg> },
  { bg: GREEN_LIGHT, title: "Free Consultation", icon: <svg viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.8" width={48} height={48}><path d="M34 26a3 3 0 01-3 3H11L6 34V8a3 3 0 013-3h22a3 3 0 013 3z" /></svg> },
];

function FeatureCard({ f }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: f.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: "56px 32px", textAlign: "center", cursor: "pointer", filter: hov ? "brightness(1.12)" : "brightness(1)", transition: "filter 0.22s" }}>
      <div style={{ width: 72, height: 72, borderRadius: 10, border: "2px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", transform: hov ? "scale(1.12)" : "scale(1)", transition: "transform 0.22s" }}>{f.icon}</div>
      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17, letterSpacing: "0.05em" }}>{f.title}</h3>
    </div>
  );
}

function FeatureCards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
      {featureCards.map((f) => <FeatureCard key={f.title} f={f} />)}
    </div>
  );
}

// ── DEPARTMENTS ───────────────────────────────────────────
const departments = [
  { title: "ENT Center", description: "Deals with conditions of the ear, nose, and throat (ENT) and related structures of the head and neck.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={40} height={40}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg> },
  { title: "Traumatology", description: "Injuries caused by accidents or violence to a person, and the surgical therapy and repair of the damage.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={40} height={40}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.318H4.765c-1.718 0-2.3-2.086-1.067-3.318L5 14.5" /></svg> },
  { title: "Ophthalmology", description: "The branch of medicine that deals with the anatomy, physiology and diseases of the eyeball.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={40} height={40}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
  { title: "Cardiology", description: "Congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={40} height={40}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
  { title: "Laboratory", description: "Tests are done on clinical specimens in order to obtain information about the health of a patient.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={40} height={40}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
  { title: "Dentistry", description: "The oral mucosa, and of adjacent and related structures and tissues, particularly in the maxillofacial area.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={40} height={40}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg> },
];

function DeptCard({ dept }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", borderRadius: 12, padding: "20px 18px", boxShadow: hov ? "0 8px 28px rgba(0,0,0,0.13)" : "0 2px 10px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0", transform: hov ? "translateY(-3px)" : "translateY(0)", transition: "all 0.22s ease", cursor: "pointer" }}>
      <div style={{ color: "#10b981", marginBottom: 10 }}>{dept.icon}</div>
      <h3 style={{ fontWeight: 700, fontSize: 15, color: "#111", marginBottom: 6 }}>{dept.title}</h3>
      <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{dept.description}</p>
    </div>
  );
}

function OurDepartments() {
  return (
    <section style={{ background: "#fff", padding: "72px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(26px,3vw,36px)", fontWeight: 800, color: "#111", marginBottom: 48 }}>Our Departments</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 48, alignItems: "start" }}>
          <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
            <img src="https://images.pexels.com/photos/7659574/pexels-photo-7659574.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Doctor" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {departments.map((dept) => <DeptCard key={dept.title} dept={dept} />)}
          </div>
        </div>
      </div>
      <button style={{ position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)", zIndex: 40, width: 48, height: 48, borderRadius: 8, background: "#ef4444", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(239,68,68,0.4)" }}>
        <svg fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} width={22} height={22}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
      </button>
    </section>
  );
}

// ── ATTRIBUTION ───────────────────────────────────────────
const attrCards = [
  { title: "UNIQUE IDEAS & SOLUTIONS", desc: "Experience in all the major geographies, meaning we understand all underlying drivers.", icon: <svg viewBox="0 0 80 80" fill="none" stroke="white" strokeWidth="1.5" width={72} height={72}><circle cx="40" cy="30" r="18" /><line x1="40" y1="48" x2="40" y2="58" /><line x1="32" y1="58" x2="48" y2="58" /><line x1="35" y1="62" x2="45" y2="62" /><circle cx="40" cy="30" r="6" /><line x1="20" y1="30" x2="14" y2="30" /><line x1="60" y1="30" x2="66" y2="30" /><line x1="40" y1="10" x2="40" y2="4" /><line x1="26" y1="16" x2="22" y2="12" /><line x1="54" y1="16" x2="58" y2="12" /><circle cx="40" cy="30" r="24" strokeDasharray="3 4" opacity="0.4" /></svg> },
  { title: "TARGETING & POSITIONING", desc: "Generate new products with higher potential and lower risks of failure.", icon: <svg viewBox="0 0 80 80" fill="none" stroke="white" strokeWidth="1.5" width={72} height={72}><circle cx="40" cy="38" r="28" /><circle cx="40" cy="38" r="18" /><circle cx="40" cy="38" r="8" /><line x1="55" y1="22" x2="70" y2="10" /><polyline points="63,8 70,10 68,17" /></svg> },
  { title: "FRIENDLY CUSTOMER SUPPORT", desc: "We build services for you from the beginning to the final product delivery.", icon: <svg viewBox="0 0 80 80" fill="none" stroke="white" strokeWidth="1.5" width={72} height={72}><rect x="20" y="28" width="40" height="28" rx="3" /><path d="M28 28 V22 Q28 14 40 14 Q52 14 52 22 V28" /><circle cx="40" cy="42" r="5" /><line x1="40" y1="47" x2="40" y2="52" /><circle cx="40" cy="42" r="14" strokeDasharray="3 3" opacity="0.4" /></svg> },
];

function AttrCard({ card }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "40px 32px", cursor: "pointer", border: `1px solid ${hov ? "#e8254a" : "rgba(232,37,74,0.45)"}`, background: hov ? "rgba(232,37,74,0.06)" : "transparent", transform: hov ? "translateY(-4px)" : "translateY(0)", transition: "all 0.25s ease" }}>
      <div style={{ marginBottom: 24, opacity: 0.9 }}>{card.icon}</div>
      <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>{card.title}</h3>
      <p style={{ color: "rgba(200,205,215,0.8)", fontSize: 14, lineHeight: 1.7, fontFamily: "Georgia,serif" }}>{card.desc}</p>
    </div>
  );
}

function AttributionSection() {
  return (
    <div style={{ position: "relative", width: "100%", padding: "80px 24px", overflow: "hidden", minHeight: 460 }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80')`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(40%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(15,20,35,0.82)" }} />
      <div style={{ position: "relative", zIndex: 10, maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: 28, letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "Georgia,serif", marginBottom: 12 }}>ATTRIBUTION</h2>
          <div style={{ width: 48, height: 3, background: "#e8254a", margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          {attrCards.map((card, i) => <AttrCard key={i} card={card} />)}
        </div>
      </div>
    </div>
  );
}

// ── STANDARDS ─────────────────────────────────────────────
const stdCards = [
  { title: "Investment planning & strategy", description: "Maecenas cursus mauris libero, a imperdiet enim pellentesque id. Aliquam erat volutpat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { title: "Data & digital transformation", description: "Maecenas cursus mauris libero, a imperdiet enim pellentesque id. Aliquam erat volutpat. Our solution offerings work together to provide everything you need.", image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

function StdCard({ card }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: "relative", aspectRatio: "5/4", borderRadius: 12, overflow: "hidden", cursor: "pointer" }}>
      <img src={card.image} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease", transform: hov ? "scale(1.05)" : "scale(1)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 64, height: 4, background: "#f97316", zIndex: 10 }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(17,24,39,0.88)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 28, zIndex: 10, opacity: hov ? 1 : 0, transition: "opacity 0.3s ease" }}>
        <div style={{ width: 48, height: 4, background: "#f97316", marginBottom: 12 }} />
        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>{card.title}</h3>
        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: 14, lineHeight: 1.7 }}>{card.description}</p>
      </div>
    </div>
  );
}

function Standards() {
  return (
    <section style={{ background: "#fff", padding: "72px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(24px,3vw,34px)", fontWeight: 800, color: "#111", marginBottom: 20 }}>We have high standards in all we do.</h2>
        <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.8, maxWidth: 860, marginBottom: 48 }}>
          Our people have decades of experience addressing our client's most pressing business problems. A full-service consulting firm, we solve our client's problems in an agile manner that reduces complexity and leads to early successes.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {stdCards.map((card) => <StdCard key={card.title} card={card} />)}
        </div>
      </div>
    </section>
  );
}

// ── ABOUT SECTION ─────────────────────────────────────────
function RequestQuoteBtn() {
  const [hov, setHov] = useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? "#1b5e20" : "#2e7d32", color: "#fff", border: "none", cursor: "pointer", padding: "15px 34px", fontSize: 14, fontWeight: 700, letterSpacing: "0.06em", borderRadius: 3, transform: hov ? "translateY(-2px)" : "translateY(0)", boxShadow: hov ? "0 8px 24px rgba(46,125,50,0.45)" : "0 2px 8px rgba(46,125,50,0.2)", transition: "all 0.2s ease" }}>
      Request Quote
    </button>
  );
}

function AboutSection() {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const [imgHov, setImgHov] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const timer = setInterval(() => { n++; setCount(n); if (n >= 20) clearInterval(timer); }, 1800 / 20);
    return () => clearInterval(timer);
  }, [inView]);
  return (
    <section ref={ref} style={{ background: "#0d1a0e", width: "100%", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ position: "relative", minHeight: 440 }}>
          <div onMouseEnter={() => setImgHov(true)} onMouseLeave={() => setImgHov(false)}
            style={{ width: "84%", aspectRatio: "4/3.2", overflow: "hidden", borderRadius: 2, cursor: "pointer", transition: "transform 0.4s cubic-bezier(.25,.8,.25,1), box-shadow 0.4s", transform: imgHov ? "scale(1.025)" : "scale(1)", boxShadow: imgHov ? "0 28px 64px rgba(0,0,0,0.65)" : "0 8px 32px rgba(0,0,0,0.4)" }}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop" alt="Interior" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease", transform: imgHov ? "scale(1.07)" : "scale(1)" }} />
          </div>
          <div style={{ position: "absolute", bottom: 0, right: 0, width: 205, height: 195, background: "#0d1a0e", border: "1px solid #1e3320", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="148" height="112" viewBox="0 0 148 112" style={{ position: "absolute" }}>
                <text x="50%" y="90" textAnchor="middle" fontSize="104" fontWeight="900" fontFamily="Georgia,serif" fill="none" stroke="#2e7d32" strokeWidth="1.2" opacity="0.18">{count}</text>
              </svg>
              <span style={{ fontSize: 78, fontWeight: 900, color: "#2e7d32", lineHeight: 1, fontFamily: "Georgia,serif", position: "relative", zIndex: 1 }}>{count}</span>
            </div>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 600, textAlign: "center", marginTop: 8, lineHeight: 1.45 }}>Years of<br />Experience</span>
          </div>
        </div>
        <div>
          <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(28px,3.4vw,48px)", lineHeight: 1.15, marginBottom: 24, fontFamily: "Georgia,serif" }}>
            We Produce &amp; Install<br />Quality Doors &amp; Windows
          </h2>
          <p style={{ color: "#8fa890", fontSize: 15.5, lineHeight: 1.9, marginBottom: 40, maxWidth: 490 }}>
            Our doors and windows services epitomize craftsmanship and innovation, seamlessly merging functionality with aesthetic appeal. From bespoke designs to precision installations, we redefine the boundaries of elegance and security.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}>
            <RequestQuoteBtn />
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", border: "2px solid #2e7d32", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" fill="#2e7d32" width={20} height={20}><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z" /></svg>
              </div>
              <div>
                <p style={{ color: "#5a6e5b", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>Call Us</p>
                <p style={{ color: "#fff", fontSize: 19, fontWeight: 900 }}>1 200 300 9000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HERO SECTION ──────────────────────────────────────────
function HeroSection() {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", height: 480, display: "flex", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "50%", height: "100%" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80')`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(30,60,110,0.65)" }} />
      </div>
      <div style={{ position: "relative", width: "50%", height: "100%" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80')`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(30,60,110,0.65)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 48px" }}>
          <h1 style={{ color: "#fff", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, fontSize: "clamp(24px,2.6rem,42px)", fontFamily: "'Arial Black','Impact',sans-serif", marginBottom: 32 }}>
            HOW WE START<br />BUSINESS WITH NO<br />MONEY IN DAD'S<br />GARAGE
          </h1>
          <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            style={{ width: "fit-content", padding: "14px 40px", color: "#fff", fontWeight: 600, fontSize: 15, background: hovered ? "#e05a2b" : "#f07040", borderRadius: 2, border: "none", cursor: "pointer", boxShadow: hovered ? "0 6px 20px rgba(240,112,64,0.5)" : "0 2px 8px rgba(0,0,0,0.2)", transform: hovered ? "translateY(-1px)" : "translateY(0)", transition: "all 0.2s" }}>
            Watch video
          </button>
        </div>
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, background: "rgba(255,255,255,0.15)" }} />
      <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", width: 40, height: 40, borderRadius: "50%", background: "#e05a2b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
      </div>
    </div>
  );
}

// ── END DAY ───────────────────────────────────────────────
const endDayFeatures = [
  { title: "Operational Excellence", description: "Bring to the table win-win survival strategies to ensure proactive domination.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={48} height={48}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5a7.5 7.5 0 01-7.5-7.5v7.5h7.5z" /></svg> },
  { title: "Innovative Solutions", description: "Podcasting operational change management inside of workflows.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={48} height={48}><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V2.75a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904" /></svg> },
  { title: "Targeting and Positioning", description: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={48} height={48}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg> },
  { title: "Best Support", description: "Everride the digital divide with additional clickthroughs from DevOps.", icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} width={48} height={48}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3 21l18-9L3 3l3 9" /></svg> },
];

function EndDay() {
  return (
    <section style={{ background: "#fff", padding: "72px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
        <div>
          <h2 style={{ fontSize: "clamp(22px,2.8vw,34px)", fontWeight: 800, color: "#111", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: 20 }}>
            At the end of the day, going forward, a new normal.
          </h2>
          <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.8 }}>
            Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {endDayFeatures.map((f) => (
            <div key={f.title}>
              <div style={{ color: "#14b8a6" }}>{f.icon}</div>
              <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#111", margin: "14px 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── ROOT ──────────────────────────────────────────────────
const SEO = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <div style={{ position: "relative" }}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HeroSlider />
      </div>
      <FeatureCards />
      <OurDepartments />
      <AttributionSection />
      <Standards />
      <AboutSection />
      <HeroSection />
      <EndDay />
    </div>
  );
};

export default SEO;