import React, { useState } from 'react'

const IMG_CLOUD = '/steve-johnson-_0iV9LmPDn0-unsplash.jpg'
const IMG_MARKETING = '/ai-product-marketing.jpg'
const IMG_INNOVATIVE = '/ai-product-innovative.jpg'

const cards = [
  {
    img: IMG_CLOUD,
    title: 'Cloud solutions',
    description: 'At ITactics, we provide tailored services to enhance your business efficiency.',
    color: '#F5A623',
  },
  {
    img: IMG_MARKETING,
    title: 'Marketing solutions',
    description: 'Our skilled team crafts customized strategies that yield impactful results.',
    color: '#F5A623',
  },
  {
    img: IMG_INNOVATIVE,
    title: 'Innovative solutions',
    description: 'We provide services that enable businesses to excel in the digital realm.',
    color: '#F5A623',
  },
]

const CardItem = ({ card, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#fff',
        boxShadow: hovered
          ? '0 32px 64px rgba(0,0,0,0.15)'
          : '0 2px 20px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Image wrapper with animated overlay */}
      <div style={{
        width: '100%',
        aspectRatio: '4/3',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={card.img}
          alt={card.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.6s ease',
            display: 'block',
          }}
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
          }}
        />

        {/* Animated gradient sweep on hover */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(245,166,35,0.35) 0%, rgba(224,137,26,0.1) 100%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }} />

        {/* Animated corner bracket — top left */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: hovered ? '32px' : '0px',
          height: '2px',
          background: '#fff',
          transition: 'width 0.35s ease 0.05s',
          borderRadius: '2px',
        }} />
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '2px',
          height: hovered ? '32px' : '0px',
          background: '#fff',
          transition: 'height 0.35s ease 0.05s',
          borderRadius: '2px',
        }} />

        {/* Animated corner bracket — bottom right */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          width: hovered ? '32px' : '0px',
          height: '2px',
          background: '#fff',
          transition: 'width 0.35s ease 0.1s',
          borderRadius: '2px',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          width: '2px',
          height: hovered ? '32px' : '0px',
          background: '#fff',
          transition: 'height 0.35s ease 0.1s',
          borderRadius: '2px',
        }} />
      </div>

      {/* Content */}
      <div style={{
        padding: '1.25rem 1.5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Animated bg circle behind content */}
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          right: '-40px',
          width: hovered ? '160px' : '60px',
          height: hovered ? '160px' : '60px',
          borderRadius: '50%',
          background: 'rgba(245,166,35,0.07)',
          transition: 'width 0.5s ease, height 0.5s ease',
          pointerEvents: 'none',
        }} />

        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          color: hovered ? '#F5A623' : '#111',
          margin: '0 0 8px',
          letterSpacing: '-0.02em',
          transition: 'color 0.3s ease',
        }}>
          {card.title}
        </h3>

        <p style={{
          fontSize: '13px',
          color: '#888',
          lineHeight: 1.65,
          margin: '0 0 1rem',
        }}>
          {card.description}
        </p>

        

        {/* Bottom sliding bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '3px',
          width: hovered ? '100%' : '0%',
          background: 'linear-gradient(90deg, #F5A623, #e0891a)',
          transition: 'width 0.45s ease',
          borderRadius: '0 2px 0 0',
        }} />
      </div>
    </article>
  )
}

const AiProduct = () => {
  return (
    <section style={{ width: '100%', background: '#F4F4F0', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#F5A623',
            marginBottom: '10px',
          }}>
            What we offer
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '800',
            color: '#111',
            margin: 0,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          }}>
            AI Products
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {cards.map((card, i) => (
            <CardItem key={i} card={card} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default AiProduct