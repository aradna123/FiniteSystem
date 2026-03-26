
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineLink,
} from "react-icons/hi2";




function AilandCard() {
  return (
    <div 
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/assets/Viva.webp')" }} // yahan tum apni uploaded image ka path use karo
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-9">
        <h2 className="text-blue-300 text-sm tracking-widest mb-2">\\ AI GENERATED //</h2>
        <h1 className="text-blue-300 text-5xl md:text-7xl font-bold mb-6">CELESTIA PRIME</h1>
        
    
      </div>
    </div>
  );
}





//2
import {
  HiOutlineArrowTrendingUp,
  HiOutlineHeart,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const PatientGrowth = () => {
  const items = [
    {
      icon: <HiOutlineArrowTrendingUp />,
      title: "Higher Appointment Capture Rates",
      description: "Never miss patient booking opportunities.",
    },
    {
      icon: <HiOutlineHeart />,
      title: "Improved Patient Satisfaction",
      description: "Fast responses improve trust and experience.",
    },
    {
      icon: <HiOutlineSparkles />,
      title: "Automated Appointment Flow",
      description:
        "Reduces staff workload by handling patient bookings, confirmations, and reminders automatically.",
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
                  src="/assets/AiBooking2.png"
                  alt="Smarter Growth Through AI"
                  className="w-full h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                  style={{
                    borderBottomRightRadius: "clamp(50px, 12vw, 200px)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Card */}
                {/* <motion.div 
                                className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-12 md:right-8 lg:bottom-16 lg:right-10 bg-white shadow-2xl rounded-lg p-4 sm:p-5 md:p-6 max-w-[240px] sm:max-w-[280px] md:max-w-[320px] z-10 group cursor-pointer"
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                whileHover={{ 
                                    y: -5,
                                    transition: { duration: 0.3 }
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
                                        stiffness: 200
                                    }}
                                    whileHover={{ 
                                        rotate: 180,
                                        scale: 1.1,
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <HiOutlineSparkles className='text-white text-xl sm:text-2xl md:text-3xl' />
                                </motion.div>
                                <div className="pt-4 space-y-2">
                                    <h3 className='text-sm sm:text-base font-semibold text-primary uppercase tracking-wide'>
                                        AI Powered
                                    </h3>
                                    <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-primary leading-tight'>
                                        Smart booking
                                    </h2>
                                </div>
                            </motion.div> */}
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
                        Smarter Growth Through AI
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
                        Smarter Growth Through AI
                      </motion.span>
                    </motion.h1>
                    <motion.p
                      className="text-gray-600 text-md sm:text-md md:text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Vivalink transforms communication into measurable growth.
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




const HealthcareWebsite = () => {
  const features = [
    {
      icon: <HiOutlineClipboardDocumentCheck />,
      title: "Automated Appointment Requests",
      description:
        "Collects patient details and booking preferences accurately.",
    },
    {
      icon: <HiOutlineLink />,
      title: "Seamless Ezappointo Integration",
      description:
        "Directly connects AI conversations to your scheduling system.",
    },
  ];

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-12 md:py-16 lg:py-20">
        {/* Background Image Container with Overlay */}
        <motion.div
          className="relative rounded-lg overflow-hidden max-w-9xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
          style={{
            backgroundImage: "url('/assets/AiBooking4.webp')",
            
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Accent Color Overlay */}
          <motion.div
            className="absolute inset-0 bg-accent/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />

          {/* Content Container */}
          <div className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Features Grid Section */}
                <div className="col-span-1 lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto">
                    {features.map((data, index) => {
                      const IconComponent = data.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex flex-col justify-center items-center text-center space-y-3 sm:space-y-4"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.1,
                            ease: "easeOut",
                          }}
                          whileHover={{
                            y: -10,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <motion.div
                            className="text-4xl sm:text-5xl md:text-6xl text-white mb-2"
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.3 + index * 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                            whileHover={{
                              scale: 1.2,
                              rotate: 360,
                              transition: { duration: 0.5 },
                            }}
                          >
                            {data.icon}
                          </motion.div>
                          <motion.h2
                            className="text-2xl sm:text-2xl md:text-3xl text-white font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.4 + index * 0.1,
                            }}
                          >
                            {data.title}
                          </motion.h2>
                          <motion.p
                            className="text-md sm:text-md md:text-lg text-white/90 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.4 + index * 0.1,
                            }}
                          >
                            {data.description}
                          </motion.p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Text Section */}
                <motion.div
                  className="col-span-1 lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                >
                  <motion.h1
                    className="text-4xl sm:text-4xl  lg:text-5xl text-white font-bold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Smart Appointment Handling
                  </motion.h1>
                  <motion.p
                    className="text-md sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-md lg:max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Vivalink manages scheduling conversations efficiently.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};



import { HiOutlineLockClosed, HiOutlineShieldCheck } from 'react-icons/hi2'

const Visitors = () => {
    return (
      <>
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 overflow-x-hidden">
            <div className="max-w-9xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
                    {/* Content Section */}
                    <motion.div 
                        className="col-span-1 lg:col-span-6 flex items-center px-2 sm:px-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="w-full max-w-2xl mx-auto">
                            <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                                {/* Header Section */}
                                <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
                                    <motion.div 
                                        className="flex items-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <motion.div 
                                            className="bg-secondary w-3 h-3 rounded-full"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.1, type: "spring" }}
                                        />
                                        <p className='text-md sm:text-md md:text-lg ms-2 font-light'>
                                            Security & Practice-Safe
                                        </p>
                                    </motion.div>
                                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                                        <motion.h1 
                                            className='text-4xl sm:text-4xl  lg:text-5xl font-bold leading-tight'
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <motion.span 
                                                className='text-secondary'
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                Secure & Practice-Safe
                                            </motion.span>
                                        </motion.h1>
                                        <motion.div 
                                            className="bg-gray-300 w-full max-w-md h-0.5 my-4 sm:my-6 md:my-8 lg:my-10"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                        />
                                        <div className="space-y-3 sm:space-y-4">
                                            <motion.p 
                                                className='text-gray-600 text-md sm:text-md md:text-lg font-medium leading-relaxed'
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                            >
                                                AI interactions follow healthcare security standards.
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-4 sm:space-y-5 pt-4">
                                    {[
                                        {
                                            icon: <HiOutlineLockClosed />,
                                            title: "Protected Patient Information",
                                            description: "Safeguards sensitive data during conversations."
                                        },
                                        {
                                            icon: <HiOutlineShieldCheck />,
                                            title: "Controlled AI Access Rules",
                                            description: "Limits actions based on predefined practice settings."
                                        }
                                    ].map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="p-4 sm:p-5 group hover:bg-[#91DDDD]/40 transition duration-300 rounded-lg cursor-pointer"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ 
                                                duration: 0.5, 
                                                delay: 0.5 + (index * 0.1),
                                                ease: "easeOut"
                                            }}
                                            whileHover={{ 
                                                x: 10,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            <div className="flex items-start gap-4 sm:gap-5">
                                                <motion.span 
                                                    className='text-5xl sm:text-6xl text-primary shrink-0'
                                                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ 
                                                        duration: 0.5, 
                                                        delay: 0.6 + (index * 0.1),
                                                        type: "spring",
                                                        stiffness: 200
                                                    }}
                                                    whileHover={{ 
                                                        rotate: 360,
                                                        scale: 1.1,
                                                        transition: { duration: 0.5 }
                                                    }}
                                                >
                                                    {feature.icon}
                                                </motion.span>
                                                <div className="space-y-2 flex-1">
                                                    <h2 className='text-xl sm:text-2xl font-semibold text-slate-900'>
                                                        {feature.title}
                                                    </h2>
                                                    <p className='text-gray-600 text-md sm:text-md leading-relaxed'>
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        className="col-span-1 lg:col-span-6 relative px-2 sm:px-0"
                        initial={{ opacity: 0, x: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    >
                        <div className="w-full h-full">
                            <motion.img
                                src="/assets/AiBooking8.jpeg"
                                alt="AI Booking Agent"
                                className='w-full h-150 object-cover rounded-lg sm:rounded-xl md:rounded-2xl'
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
      </>
    );
}





//







const cards = [
  {
    id: 0,
    title: "AI Automation",
    desc: "Turn complex workflows into smarter processes with adaptive algorithms that learn from your business.",
    featured: false,
    orb1Color: "#c4b5d8",
    orb2Color: "#d9d0ea",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14" stroke="#7c5cbf" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: 1,
    title: "Predictive Analytics",
    desc: "Reveal hidden patterns, anticipate future outcomes, and empower faster, more informed data-driven decision-making.",
    featured: true,
    orb1Color: "#9b72d4",
    orb2Color: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14" stroke="white" strokeWidth={1.3}>
        <path strokeLinejoin="round" d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Data Integration",
    desc: "Unify your CRM, analytics, and cloud systems into one intelligent dashboard that delivers real-time insights.",
    featured: false,
    orb1Color: "#baaed6",
    orb2Color: "#d0c5e8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14" stroke="#7c5cbf" strokeWidth={1.3}>
        <path strokeLinecap="round" d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path strokeLinecap="round" d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

const infoItems = [
  {
    id: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
        <circle cx="17" cy="17" r="3" stroke="white" strokeWidth={1.8} />
      </svg>
    ),
    title: "Automated Workflows",
    subtitle: "1,000+ processes optimized daily",
  },
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="3" y="13" width="7" height="8" rx="1" />
        <rect x="14" y="11" width="7" height="10" rx="1" />
      </svg>
    ),
    title: "Predictive Insights",
    subtitle: "95% accuracy across key forecasts",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h14a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zM5 14h5v6H5v-6zM14 14h5v6h-5v-6z" />
      </svg>
    ),
    title: "System Integration",
    subtitle: "50+ tools connected seamlessly",
  },
];
function AISection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredInfo, setHoveredInfo] = useState(null);
  const [dragSrcId, setDragSrcId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);

  const handleDragStart = (id) => setDragSrcId(id);
  const handleDragOver = (e, id) => { e.preventDefault(); setDragOverId(id); };
  const handleDrop = (targetId) => {
    if (dragSrcId === null || dragSrcId === targetId) { setDragSrcId(null); setDragOverId(null); return; }
    const newOrder = [...cardOrder];
    const srcIdx = newOrder.indexOf(dragSrcId);
    const tgtIdx = newOrder.indexOf(targetId);
    [newOrder[srcIdx], newOrder[tgtIdx]] = [newOrder[tgtIdx], newOrder[srcIdx]];
    setCardOrder(newOrder);
    setDragSrcId(null);
    setDragOverId(null);
  };
  const handleDragEnd = () => { setDragSrcId(null); setDragOverId(null); };

  return (
    <section className="bg-[#f5f4fb] px-6 py-16" style={{ fontFamily: "'Sora', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div className="max-w-5xl mx-auto flex justify-between items-start mb-14">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-900 max-w-md">
          Everything You Need<br />To Run Smarter AI
        </h2>
        <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md">
          Read More
          <span className="w-6 h-6 border border-white/50 rounded-full flex items-center justify-center text-base">+</span>
        </button>
      </div>

      {/* ── TOP CARDS ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        {cardOrder.map((cardId) => {
          const card = cards[cardId];
          const isHovered = hoveredCard === cardId;
          const isDragging = dragSrcId === cardId;
          const isDragOver = dragOverId === cardId && dragSrcId !== cardId;
 
          return (
            <div
              key={cardId}
              draggable
              onDragStart={() => handleDragStart(cardId)}
              onDragOver={(e) => handleDragOver(e, cardId)}
              onDrop={() => handleDrop(cardId)}
              onDragEnd={handleDragEnd}
              onMouseEnter={() => setHoveredCard(cardId)}
              
              style={{ minHeight: 440 }}
              className={`
                relative bg-white rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing
                flex flex-col transition-all duration-300 ease-out
                ${card.featured ? "border-2 border-purple-300 scale-[1.02]" : "border border-purple-100"}
                ${isHovered ? "-translate-y-2 shadow-[0_20px_50px_rgba(124,92,191,0.22)] border-purple-400" : "shadow-[0_4px_20px_rgba(124,92,191,0.07)]"}
                ${isDragging ? "opacity-40 rotate-1 scale-105" : ""}
                ${isDragOver ? "border-purple-500 bg-purple-50/50" : ""}
              `}
            >
              {/* Glow border overlay */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-10 transition-opacity duration-300"
                style={{
                  opacity: isHovered || card.featured ? 1 : 0,
                  border: "2px solid transparent",
                  background: "linear-gradient(white,white) padding-box, linear-gradient(135deg,#c4a8e8,#e8e0f5) border-box",
                }}
              />

              {/* Orb area — tall */}
              <div className="relative flex items-center justify-center overflow-hidden" style={{ height: 290 }}>
                {card.featured && (
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-50/60 to-transparent" />
                )}

                {/* Circle group that animates on hover */}
                <div
                  className="relative transition-all duration-500"
                  style={{
                    width: 210, height: 210,
                    transform: isHovered ? "rotate(12deg) scale(1.12)" : "rotate(0deg) scale(1)",
                  }}
                >
                  {/* Orb 1 — big */}
                  <div
                    className="absolute rounded-full opacity-65 transition-all duration-500"
                    style={{
                      width: 140, height: 140,
                      background: card.featured
                        ? `radial-gradient(circle at 38% 38%, ${card.orb1Color}, ${card.orb2Color})`
                        : card.orb1Color,
                      top: 16, left: 14,
                      transform: isHovered ? "translate(-10px, -8px)" : "translate(0,0)",
                    }}
                  />
                  {/* Orb 2 — smaller */}
                  <div
                    className="absolute rounded-full opacity-60 transition-all duration-500"
                    style={{
                      width: 105, height: 105,
                      background: card.featured
                        ? `radial-gradient(circle at 62% 62%, ${card.orb1Color}bb, ${card.orb2Color})`
                        : card.orb2Color,
                      bottom: 14, right: 12,
                      transform: isHovered ? "translate(10px, 8px)" : "translate(0,0)",
                    }}
                  />
                  {/* Icon in centre */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="px-8 pb-10 flex-1 flex flex-col justify-start pt-2">
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-200 ${isHovered ? "text-purple-700" : "text-gray-900"}`}>
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── BOTTOM — SINGLE BOX with 3 info items ── */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-purple-100 shadow-[0_4px_20px_rgba(124,92,191,0.07)] px-2 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {infoItems.map((item, idx) => {
              const isHovered = hoveredInfo === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredInfo(item.id)}
                  onMouseLeave={() => setHoveredInfo(null)}
                  className={`
                    flex items-center gap-5 px-8 py-4 cursor-pointer
                    transition-all duration-300 rounded-xl
                    ${isHovered ? "bg-purple-50/60" : ""}
                    ${idx < 2 ? "sm:border-r border-purple-100" : ""}
                  `}
                >
                  {/* Purple gradient icon box */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${isHovered ? "scale-110 rotate-3 shadow-lg" : ""}`}
                    style={{ background: "linear-gradient(135deg, #a78bfa, #7c3aed)" }}
                  >
                    {item.icon}
                  </div>
                  {/* Text */}
                  <div>
                    <h4 className={`font-bold text-base leading-snug transition-colors duration-200 ${isHovered ? "text-purple-700" : "text-gray-900"}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}




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


const VivaLink = () => {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <AilandCard />
      <PatientGrowth />
      <HealthcareWebsite />
      <Visitors />
      <AISection />
      <CaseStudySection/>
     
      
      
      
    
    </div>
  );
};

export default VivaLink;