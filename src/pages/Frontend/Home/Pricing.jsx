import React from 'react'

// Theme colors from App.css – primary #011C4C, secondary #EC7424
const primary = '#011C4C'
const secondary = '#EC7424'
const featureGray = '#4a4a4a'
const lightBg = '#f8fafc'
// Soft borders: very light tint of primary/secondary, not dark
const borderPrimary = 'rgba(1, 28, 76, 0.12)'
const borderSecondary = 'rgba(236, 116, 36, 0.2)'

const features = [
  'Advice & Guides',
  'Tools & Calculators',
  'Support in Person',
  'Impartial Money Advice Support',
  'Mortgage Calculator',
]

const plans = [
  { name: 'BASIC', price: '$39', perMonth: 'Per Month', headerColor: primary, borderColor: borderPrimary, isOffer: false },
  { name: 'STANDARD', price: '$69', perMonth: 'per month', headerColor: secondary, borderColor: borderSecondary, isOffer: true },
  { name: 'PREMIUM', price: '$99', perMonth: 'Per Month', headerColor: primary, borderColor: borderPrimary, isOffer: false },
]

const Pricing = () => {
  return (
    <section
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: lightBg }}
    >
      <style>{`
        @keyframes pricing-card-in {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes price-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes offer-shine {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        .pricing-card {
          animation: pricing-card-in 0.6s ease-out forwards;
        }
        .pricing-card:nth-child(1) { animation-delay: 0.1s; }
        .pricing-card:nth-child(2) { animation-delay: 0.2s; }
        .pricing-card:nth-child(3) { animation-delay: 0.3s; }
        .price-circle:hover {
          animation: price-float 1.5s ease-in-out infinite;
        }
        .offer-ribbon {
          animation: offer-shine 2s ease-in-out infinite;
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <article
              key={i}
              className="pricing-card relative flex flex-col overflow-hidden rounded-2xl bg-white opacity-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                border: '1px solid',
                borderColor: plan.borderColor,
              }}
            >
              {/* OFFER ribbon – diagonal from top-right, STANDARD only */}
              {plan.isOffer && (
                <div
                  className="offer-ribbon absolute right-0 top-0 z-10 h-24 w-24 overflow-hidden"
                  aria-hidden
                >
                  <span
                    className="absolute flex w-[170%] items-center justify-center py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
                    style={{
                      backgroundColor: secondary,
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%) rotate(45deg)',
                      transformOrigin: 'center',
                    }}
                  >
                    OFFER
                  </span>
                </div>
              )}

              {/* Header: plan name */}
              <div
                className="relative flex h-24 items-center justify-center pt-6 transition-colors duration-300"
                style={{ backgroundColor: plan.headerColor }}
              >
                <h3 className="text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                  {plan.name}
                </h3>
              </div>

              {/* Price circle – overlaps header and body */}
              <div
                className="price-circle relative z-10 mx-auto -mt-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-white shadow-md transition-transform duration-300"
                style={{ backgroundColor: plan.headerColor }}
              >
                <span className="text-2xl font-bold text-white sm:text-3xl">{plan.price}</span>
                <span className="text-xs font-normal text-white">{plan.perMonth}</span>
              </div>

              {/* Features list – white body, soft look */}
              <div className="flex flex-1 flex-col rounded-b-2xl bg-white px-6 pt-14 pb-6">
                <ul className="flex-1 space-y-0">
                  {features.map((feature, j) => (
                    <li key={j}>
                      <span
                        className="block border-b border-neutral-100 py-3 text-sm transition-colors"
                        style={{ color: featureGray }}
                      >
                        &nbsp;&ndash;&nbsp;{feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* GET STARTED button – secondary */}
                <button
                  type="button"
                  className="mt-6 w-full rounded-xl py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:ring-offset-2"
                  style={{ backgroundColor: secondary }}
                >
                  GET STARTED
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
