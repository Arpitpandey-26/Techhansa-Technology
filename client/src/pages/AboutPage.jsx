import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* ============================================================
   CUSTOM ANIMATED COUNTER COMPONENT (Reused for Stats)
   ============================================================ */
const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let current = 0;
      const duration = 2000; // 2 seconds animation
      const stepTime = Math.abs(Math.floor(duration / target));
      
      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-extrabold text-white mb-2 flex justify-center items-center drop-shadow-md">
      {count}
      <span className="text-techGolden">{suffix}</span>
    </div>
  );
};

/* ============================================================
   ABOUT US PAGE MAIN COMPONENT
   ============================================================ */
const AboutPage = () => {
  return (
    <div className="bg-[#f8fafc] font-sans text-gray-800">
      
      {/* =========================================
          1. HERO SECTION
          ========================================= */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden bg-[#113a71]">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#113a71] to-transparent opacity-80"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            About <span className="text-techGolden">Techhansa</span> Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium tracking-wide">
            Transforming Businesses Through Technology
          </p>
        </motion.div>
      </section>

      {/* =========================================
          2. WHO WE ARE SECTION
          Focused on company identity and approach.
          ========================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Techhansa Team" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-techGolden/10 rounded-2xl -z-10 border border-techGolden/20"></div>
            </motion.div>

            {/* Right Side: Identity Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-techGolden uppercase tracking-widest mb-2">Discover Our Identity</h2>
              <h3 className="text-4xl font-extrabold text-gray-600 mb-6">Who We Are</h3>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                At Techhansa Technology, we help organizations navigate their digital transformation journey through technology-driven solutions and strategic consulting.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                We work closely with our clients at every stage—from strategy and planning to implementation and ongoing support—ensuring successful outcomes and long-term business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

     {/* =========================================
          3. WHAT WE DO SECTION (Video Reference: Overlapping Circles)
          ========================================= */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold text-techGolden uppercase tracking-widest mb-2">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-600 mb-6">What We Do</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              From designing enterprise software applications to implementing cloud infrastructure and automation solutions, we empower businesses to operate more efficiently and competitively.
            </p>
          </div>

          {/* =========================================
              OVERLAPPING CIRCLES GRID (Exact Video Match)
              ========================================= */}
          <div className="flex flex-wrap justify-center items-center pt-8 pb-12">
            {[
              { 
                title: "Enterprise Software", 
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
              },
              { 
                title: "Cloud Services", 
                icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" 
              },
              { 
                title: "Digital Workplace", 
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              },
              { 
                title: "Process Automation", 
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
              },
              { 
                title: "AI Technologies", 
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
              },
              { 
                title: "Tech Consulting", 
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                /* MAGIC HAPPENS HERE: 
                  - Negative margin (-ml-4 to -ml-8) creates the overlap.
                  - Alternating background colors based on odd/even index.
                  - Thick white border (border-[8px]).
                  - hover:-translate-y-6 creates the jump effect.
                  - hover:z-20 ensures the hovered circle always pops to the very front.
                */
                className={`
                  relative z-10 flex flex-col items-center justify-center text-center
                  w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56
                  rounded-full border-[6px] md:border-[8px] border-white 
                  shadow-[0_8px_20px_rgba(0,0,0,0.12)] 
                  transition-all duration-300 ease-out cursor-pointer
                  hover:-translate-y-4 md:hover:-translate-y-6 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:z-20
                  ${index !== 0 ? '-ml-6 sm:-ml-8 md:-ml-10 lg:-ml-12' : ''} 
                  ${index % 2 === 0 ? 'bg-[#113a71]' : 'bg-techGolden'}
                `}
              >
                {/* White Icon */}
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                </svg>
                
                {/* White Text */}
                <h4 className="text-white text-[11px] sm:text-sm md:text-[15px] font-bold px-3 md:px-6 leading-tight drop-shadow-sm">
                  {service.title}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          4. MISSION & VISION
          ========================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f8fafc] p-10 rounded-2xl shadow-sm border-t-4 border-techGolden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-techGolden/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-techGolden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower organizations with innovative digital solutions that drive growth, efficiency, and long-term success by blending deep industry expertise with cutting-edge technology.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#f8fafc] p-10 rounded-2xl shadow-sm border-t-4 border-[#113a71] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[#113a71]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#113a71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become a globally recognized and trusted partner in digital transformation, setting new standards for technology-driven innovation and sustainable business excellence.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          5. STATISTICS COUNTER SECTION
          ========================================= */}
      <section className="py-20 bg-[#113a71] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-techGolden uppercase tracking-widest mb-2">Our Impact</h2>
            <h3 className="text-4xl font-extrabold text-white">Numbers That Speak</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center divide-x divide-white/20">
            <div className="flex flex-col items-center">
              <AnimatedCounter target={10} suffix="+" />
              <span className="text-[#a5b4fc] font-medium uppercase tracking-wider text-sm mt-2">Years of Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter target={50} suffix="+" />
              <span className="text-[#a5b4fc] font-medium uppercase tracking-wider text-sm mt-2">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter target={20} suffix="+" />
              <span className="text-[#a5b4fc] font-medium uppercase tracking-wider text-sm mt-2">Tech Experts</span>
            </div>
            <div className="flex flex-col items-center">
              <AnimatedCounter target={100} suffix="%" />
              <span className="text-[#a5b4fc] font-medium uppercase tracking-wider text-sm mt-2">Client Centric</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. WHY CHOOSE TECHHANSA (Accurate Video Hover & Tall Height)
          ========================================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Techhansa</h2>
            <div className="w-24 h-1 bg-techGolden mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {[
              { 
                title: "Industry Expertise", 
                desc: "Deep domain knowledge to deliver specialized solutions tailored to your unique market challenges.", 
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                title: "Client-Centric Approach", 
                desc: "Your goals are our priority. We align our strategies perfectly with your business objectives.", 
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                title: "Innovative Solutions", 
                desc: "Leveraging the latest tech stacks and AI to build future-proof and scalable digital platforms.", 
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              },
              { 
                title: "End-to-End Support", 
                desc: "From ideation and strategy to deployment and 24/7 maintenance, we stay with you.", 
                img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" 
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden group flex flex-col"
              >
                {/* Tall Image Section with Smooth Hover Blur */}
                <div className="h-64 overflow-hidden relative bg-gray-900">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:blur-[3px] transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                </div>
                
                {/* Content Details */}
                <div className="p-8 flex-grow flex flex-col bg-white relative z-20">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;