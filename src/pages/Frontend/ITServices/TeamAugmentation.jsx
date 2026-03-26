
import React, { useState, useRef, useEffect } from 'react'
import Design from '../Random/Design';

// ── Hero Section — matches original HTML structure exactly ────────────────────






const IMAGE_URL =
  "https://demo.artureanec.com/themes/marketum/wp-content/uploads/2022/01/feat_blog_1.jpeg";

 function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section className="relative w-full h-screen flex overflow-hidden">

      {/* TOP ACCENT BLOCKS */}
      <div className="absolute top-0 left-0 w-20 h-10 bg-[#C0392B] z-20" />
      <div className="absolute top-0 right-0 w-24 h-10 bg-[#8A8A8A] z-20" />

      {/* ── LEFT — Natural image, no color filter ── */}
      <div
        className="relative w-[48%] h-full overflow-hidden"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-30px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <img
          src={IMAGE_URL}
          alt="Creative Marketing"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── RIGHT — White content area ── */}
      <div
        className="relative w-[52%] h-full bg-white flex flex-col justify-center px-14 lg:px-20"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(30px)",
          transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
        }}
      >
        <h1
          className="text-[72px] font-bold leading-[1.05] text-[#1a1a1a] mb-6"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", letterSpacing: "-0.02em" }}
        >
          Creative
          <br />
          Marketing
        </h1>

        <p
          className="text-[#777] text-[15px] leading-relaxed mb-10 max-w-[360px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat
          seal. Walleye poolfish sand goby butterfly ray stream catfish jewfish,
          Spanish mackerel.
        </p>

        {/* Button with grey shadow offset */}
        <div className="relative w-fit">
          <div className="absolute top-[6px] left-[6px] w-full h-full bg-[#888] rounded-sm" />
          <button
            className="relative px-10 py-[14px] bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold rounded-sm text-[15px] tracking-wider transition-colors duration-150"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Discover
          </button>
        </div>
      </div>

      

    </section>
  );
}


// ── Services Cards ────────────────────────────────────────────────────────────



const services = [
  {
    title: "Social Media Marketing",
    desc: "Steelhead sprat sea lamprey grunion walleye poolfish sand goby butterfly ray stream catfish...",
    icon: (
      <svg width="110" height="100" viewBox="0 0 110 100" fill="none">
        <polyline
          points="10,88 38,28 66,88"
          stroke="#222"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <polyline
          points="38,88 66,36 94,88"
          stroke="#222"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <circle cx="38" cy="82" r="3.5" fill="#e07050" />
      </svg>
    ),
  },
  {
    title: "Email Marketing",
    desc: "Stream catfish jewfish spanish ballan wrasse climbing gourami amur pike arctic char...",
    icon: (
      <svg width="110" height="100" viewBox="0 0 110 100" fill="none">
        <rect
          x="10"
          y="10"
          width="54"
          height="54"
          stroke="#222"
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="34"
          y="26"
          width="54"
          height="54"
          stroke="#e07050"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="68" cy="34" r="4" fill="#e07050" />
        <circle cx="46" cy="46" r="2.5" fill="#e07050" />
      </svg>
    ),
  },
  {
    title: "Creative Advertising",
    desc: "Jewfish spanish stream catfish jewfish spanish ballan wrasse climbing gourami amur pike...",
    icon: (
      <svg width="110" height="100" viewBox="0 0 110 100" fill="none">
        <circle
          cx="38"
          cy="48"
          r="30"
          stroke="#222"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="68"
          cy="48"
          r="30"
          stroke="#222"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="70" cy="38" r="5" fill="#e07050" />
      </svg>
    ),
  },
];

const ServiceCard = ({ service, idx }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex flex-col px-8 py-10 shadow-lg rounded-lg bg-white border border-gray-200"
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="mb-8 h-28 flex items-center justify-center">
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="font-semibold"
        style={{
          fontSize: "1.2rem",
          fontFamily: "'Georgia', serif",
          letterSpacing: "0.2px",
          color: "#1a1a1a",
          marginBottom: "10px",
        }}
      >
        {service.title}
      </h3>

      {/* Underline on hover */}
      <div
        className="transition-all duration-300"
        style={{
          height: "2px",
          backgroundColor: "#1a1a1a",
          width: isHovered ? "100%" : "0px",
          marginBottom: "16px",
        }}
      />

      {/* Static thin gray line */}
      <div className="w-10 h-px bg-gray-300 mb-5" />

      <p
        className="leading-relaxed mb-8 flex-1"
        style={{
          fontSize: "0.88rem",
          fontFamily: "'Georgia', serif",
          color: "#6b7280",
        }}
      >
        {service.desc}
      </p>

      {/* Number */}
      <div className="relative h-20 select-none">
        <span
          style={{
            fontSize: "5.5rem",
            fontWeight: "700",
            color: "#1a1a1a",
            lineHeight: 1,
            fontFamily: "'Georgia', serif",
          }}
        >
          {String(idx + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

const ServicesCards = () => {
  return (
    <div 
      className="w-full py-16" 
      style={{ 
        backgroundColor: "#6f9db2" // simple solid blue background
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} idx={idx} />
        ))}
      </div>
    </div>
  );
};




// ── Projects Slider ───────────────────────────────────────────────────────────
const projects = [
  { img: 'https://demo.artureanec.com/themes/marketum/wp-content/uploads/2021/08/img_4-935x1000.jpeg', category: 'Graphic Design', title: 'Notebook mockup design' },
  { img: 'https://demo.artureanec.com/themes/marketum/wp-content/uploads/2021/08/img_3-935x1000.jpeg', category: '3D Render, Graphic Design', title: 'Orange juice graphic design pack' },
  { img: 'https://demo.artureanec.com/themes/marketum/wp-content/uploads/2021/08/img_7-935x1000.jpeg', category: 'Graphic Design', title: 'Foresmost badge design', dark: true },
]

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div style={{ width: '360px', flexShrink: 0, cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div style={{ height: '380px', overflow: 'hidden' }}>
        <img src={project.img} alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s', display: 'block' }} draggable={false} />
      </div>
      <div style={{ backgroundColor: isHovered ? '#1a1a1a' : (project.dark ? '#1a1a1a' : '#fff'), padding: '20px 24px', transition: 'background-color 0.3s' }}>
        <p style={{ color: isHovered ? '#aaa' : (project.dark ? '#aaa' : '#888'), fontFamily: "'Georgia', serif", fontSize: '0.82rem', marginBottom: '8px', transition: 'color 0.3s' }}>{project.category}</p>
        <h3 style={{ color: isHovered ? '#fff' : (project.dark ? '#fff' : '#1a1a1a'), fontFamily: "'Georgia', serif", fontSize: '1.1rem', fontWeight: '600', transition: 'color 0.3s', margin: 0 }}>{project.title}</h3>
      </div>
    </div>
  )
}

const ProjectsSlider = () => {
  const sliderRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const [dragging, setDragging] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showDrag, setShowDrag] = useState(false)

  const onMouseDown = (e) => { isDragging.current = true; setDragging(true); startX.current = e.pageX - sliderRef.current.offsetLeft; scrollLeft.current = sliderRef.current.scrollLeft }
  const onMouseMove = (e) => {
    const rect = sliderRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    if (!isDragging.current) return
    e.preventDefault()
    sliderRef.current.scrollLeft = scrollLeft.current - (e.pageX - sliderRef.current.offsetLeft - startX.current) * 1.5
  }
  const onMouseUp = () => { isDragging.current = false; setDragging(false) }

  return (
    <div style={{ width: '100%', backgroundColor: '#fff', padding: '48px 0', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}
        onMouseEnter={() => setShowDrag(true)}
        onMouseLeave={() => { setShowDrag(false); onMouseUp() }}>
        {showDrag && (
          <div style={{ pointerEvents: 'none', position: 'absolute', zIndex: 50, width: '80px', height: '80px', backgroundColor: '#1a1a1a', borderRadius: '50%', left: mousePos.x - 40, top: mousePos.y - 40, transition: 'left 0.05s, top 0.05s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>DRAG</span>
          </div>
        )}
        <div ref={sliderRef} style={{ display: 'flex', overflowX: 'auto', userSelect: 'none', cursor: dragging ? 'grabbing' : 'none', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingLeft: '60px', paddingRight: '60px', gap: '20px' }}
          onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── What We Do ────────────────────────────────────────────────────────────────
const accordionItems = [
  { title: 'SEO Analytics and consulting', desc: 'Walleye poolfish sand goby butterfly ray stream catfish jewfish spanish. Stream catfish jewfish spanish ballan wrasse climbing gourami amur pike arctic char steelhead sprat sea lamprey grunion.' },
  { title: 'Digital marketing', desc: 'Steelhead sprat sea lamprey grunion walleye poolfish sand goby butterfly ray stream catfish jewfish spanish ballan wrasse climbing gourami amur pike.' },
  { title: 'Creative advertising', desc: 'Jewfish spanish stream catfish jewfish spanish ballan wrasse climbing gourami amur pike arctic char steelhead sprat sea lamprey grunion walleye poolfish.' },
]

const WhatWeDo = () => {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <div style={{ width: '100%', display: 'flex', minHeight: '500px' }}>
      <div style={{ width: '42%', minHeight: '500px', position: 'relative', flexShrink: 0 }}>
        <img src="https://demo.artureanec.com/themes/marketum/wp-content/uploads/2021/12/case_7.jpg"
          alt="What we do" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.15)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '32px', backgroundColor: '#e05a2b', width: '75%', zIndex: 10 }}>
          <h3 style={{ color: '#fff', fontWeight: '700', lineHeight: 1.3, fontSize: '1.4rem', fontFamily: "'Georgia', serif", margin: 0 }}>
            Creative SEO &amp; Digital<br />Marketing Solutions<br />for your Business
          </h3>
        </div>
      </div>
      <div style={{ width: '58%', flexShrink: 0, backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '56px 64px' }}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ display: 'block', textDecoration: 'line-through', color: '#c0392b', fontFamily: "'Georgia', serif", fontSize: '0.85rem', letterSpacing: '1px' }}>What we do</span>
          <span style={{ display: 'block', color: '#e05a2b', fontFamily: "'Georgia', serif", fontSize: '1.4rem', fontStyle: 'italic', marginTop: '-2px' }}>What we do</span>
        </div>
        <h2 style={{ color: '#fff', fontWeight: '700', lineHeight: 1.25, fontSize: '2.3rem', fontFamily: "'Georgia', serif", marginBottom: '32px' }}>
          We create some things<br />for your success future
        </h2>
        <div>
          {accordionItems.map((item, idx) => (
            <div key={idx} style={{ borderTop: '1px solid #374151' }}>
              <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                <span style={{ color: openIdx === idx ? '#fff' : '#aaa', fontSize: '1rem', fontFamily: "'Georgia', serif", fontWeight: '600', transition: 'color 0.2s' }}>{item.title}</span>
                <span style={{ transform: openIdx === idx ? 'rotate(0deg)' : 'rotate(180deg)', color: openIdx === idx ? '#fff' : '#aaa', transition: 'transform 0.2s', display: 'inline-block', marginLeft: '16px', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                </span>
              </button>
              <div style={{ overflow: 'hidden', maxHeight: openIdx === idx ? '200px' : '0px', transition: 'max-height 0.3s' }}>
                <p style={{ color: '#aaa', fontSize: '0.88rem', fontFamily: "'Georgia', serif", paddingBottom: '20px', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #374151' }} />
        </div>
        <div style={{ marginTop: '32px' }}>
          <a href="/contact" style={{ color: '#fff', fontSize: '0.875rem', fontWeight: '500', borderBottom: '1px solid #6b7280', paddingBottom: '4px', fontFamily: "'Georgia', serif", letterSpacing: '0.5px', textDecoration: 'none' }}>Explore more</a>
        </div>
      </div>
    </div>
  )
}

// ── Testimonial Section ───────────────────────────────────────────────────────
const testimonials = [
  { text: 'Creative SEO & Digital Marketing Solutions for your Business — helping brands grow with innovative strategy and data-driven results.', author: 'Sam Peters', role: 'CEO Clef Inc', photo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80' },
  { text: 'Marketum agency transformed our digital presence completely. Their team delivered beyond expectations with measurable results.', author: 'Laura Miles', role: 'CMO Brandify', photo: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80' },
  { text: 'Outstanding creative work and professional team. Our campaigns saw a 3x increase in engagement within just two months.', author: 'David Clark', role: 'Director, NovaCorp', photo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80' },
]
const bgImages = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=80',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=80',
]

const TestimonialSection = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const t = testimonials[activeIdx]
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: '360px' }}>
      <img src={bgImages[activeIdx % bgImages.length]} alt="bg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.32) saturate(0.6)', transition: 'all 0.7s' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,10,10,0.95) 45%, rgba(10,10,10,0.4) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', minHeight: '360px' }}>
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '48px' }}>
          <div>
            <div style={{ display: 'flex', gap: '5px', marginBottom: '28px' }}>
              <div style={{ width: '10px', height: '38px', background: '#cc2200', borderRadius: '2px' }} />
              <div style={{ width: '10px', height: '38px', background: '#cc2200', borderRadius: '2px' }} />
            </div>
            <h2 style={{ fontSize: '2rem', fontFamily: "'Georgia', serif", color: '#fff', fontWeight: '700', lineHeight: 1.25, marginBottom: '20px' }}>
              Customers say about<br />Marketum agency
            </h2>
            <p style={{ color: '#bbb', fontSize: '0.88rem', lineHeight: 1.75, maxWidth: '360px', fontFamily: "'Georgia', serif", marginBottom: '24px' }}>{t.text}</p>
            <p style={{ fontSize: '0.88rem', color: '#fff', fontFamily: "'Georgia', serif", margin: 0 }}>
              <strong>{t.author}</strong>{' '}<span style={{ color: '#cc2200' }}>/ {t.role}</span>
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '32px' }}>
            <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>{String(activeIdx + 1).padStart(2, '0')}</span>
            <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: '#444', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '1px', width: `${((activeIdx + 1) / testimonials.length) * 100}%`, background: '#cc2200', transition: 'width 0.4s' }} />
            </div>
            <span style={{ fontSize: '13px', color: '#888' }}>{String(testimonials.length).padStart(2, '0')}</span>
            <button onClick={() => setActiveIdx((activeIdx - 1 + testimonials.length) % testimonials.length)}
              style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #555', background: 'transparent', color: '#aaa', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>‹</button>
            <button onClick={() => setActiveIdx((activeIdx + 1) % testimonials.length)}
              style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #555', background: 'transparent', color: '#aaa', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>›</button>
          </div>
        </div>
        <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 32px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px', borderRadius: '10px', overflow: 'hidden', border: '2px solid rgba(204,34,0,0.4)' }}>
            <img src={t.photo} alt={t.author} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', filter: 'saturate(0.8) brightness(0.85)', transition: 'all 0.5s' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(180,30,0,0.18)' }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '6px', height: '100%', background: '#cc2200' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

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


// ── Main Page ─────────────────────────────────────────────────────────────────
const TeamAugmentation = () => {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '96px' }}>
      <HeroSection />
      <ServicesCards />
      <Design/>
      <WhatWeDo />
      <ProjectsSlider />
      <TestimonialSection />
      <Pearl/>
    </div>
  )
}

export default TeamAugmentation