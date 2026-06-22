import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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


    // ==========================================================
  // SECTION 4 (MISSION & VISION) KE LIYE 3D SCROLL HOOKS
  // Inko return() se upar hi rakhna hota hai
  // ==========================================================
 const missionVisionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: missionVisionRef,
    offset: ["start start", "end end"]
  });

  // 1. MAKKHAN SMOOTHNESS KE LIYE USESPRING
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,  // Kitna tight ya loose bounce chahiye
    damping: 25,    // Jhatka rokne ke liye
    restDelta: 0.001
  });

  // 2. TIMINGS FIX (Dono cards aapas me takrayenge nahi)
  
  // Mission Card: 0 se 30% scroll tak ruka rahega, fir piche jayega
  const missionScale = useTransform(smoothProgress, [0, 0.3, 0.6], [1, 1, 0.9]);
  const missionY = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 0, -60]);
  const missionOpacity = useTransform(smoothProgress, [0, 0.3, 0.6], [1, 1, 0]); // Pura hide kar diya taki text overlap na ho
  const missionRotateX = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 0, 5]);

  // Vision Card: 40% scroll par aana shuru hoga, takraav nahi hoga
  const visionY = useTransform(smoothProgress, [0.4, 0.8, 1], [600, 0, 0]);
  const visionScale = useTransform(smoothProgress, [0.4, 0.8, 1], [0.8, 1, 1]);
  const visionRotateX = useTransform(smoothProgress, [0.4, 0.8, 1], [25, 0, 0]);
  const visionOpacity = useTransform(smoothProgress, [0.4, 0.6, 1], [0, 1, 1]);

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
              <h3 className="text-4xl font-extrabold text-gray-700 mb-6"> <span className="text-techGolden">W</span>ho We Are</h3>
              
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
          3A. WHAT WE DO SECTION (Split Layout like Screenshot 1)
          ========================================= */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Heading styled exactly like the screenshot (Gray/Dark Gray tone) */}
              <h2 className="text-4xl md:text-[42px] font-bold text-gray-600 mb-8 tracking-tight"> <span className="text-techGolden">W</span>hat We Do?</h2>
              
              {/* Paragraphs split for readability */}
              <p className="text-gray-600 text-[17px] leading-relaxed mb-6 text-justify">
                At Techhansa Technology, we help organizations navigate their digital transformation journey through technology-driven solutions and strategic consulting. From designing enterprise software applications to implementing cloud infrastructure and automation solutions, we empower businesses to operate more efficiently and competitively.
              </p>
              
              <p className="text-gray-600 text-[17px] leading-relaxed text-justify">
                We enable business leaders to seamlessly adopt their digital journey and enhance the utilization of their deployed infrastructure and applications while managing and monitoring their day to day operations.
              </p>
            </motion.div>

            {/* Right Side: Illustration/Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              {/* Note: Using a premium Unsplash image related to business/tech problem solving to match the illustration vibe */}
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="What We Do Illustration" 
                className="w-full max-w-lg rounded-2xl shadow-lg object-cover h-[350px]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          3B. TECHHANSA EXPERTISE (Overlapping Circles like Screenshot 2)
          ========================================= */}
      <section className="pb-24 bg-white relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-[40px] font-bold text-gray-600 tracking-tight"> 
              Techhansa Expertise
            </h3>
          </div>

          {/* Overlapping Circles Grid */}
          <div className="flex flex-wrap justify-center items-center">
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
                /* Same overlap magic with Techhansa colors (Dark Blue & Golden) */
                className={`
                  relative z-10 flex flex-col items-center justify-center text-center
                  w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56
                  rounded-full border-[8px] border-white 
                  shadow-[0_8px_20px_rgba(0,0,0,0.12)] 
                  transition-all duration-300 ease-out cursor-pointer
                  hover:-translate-y-6 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:z-20
                  ${index !== 0 ? '-ml-8 sm:-ml-10 md:-ml-12 lg:-ml-14' : ''} 
                  ${index % 2 === 0 ? 'bg-[#113a71]' : 'bg-[#C19326]'}
                `}
              >
                {/* Icon */}
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white mb-2 md:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                </svg>
                
                {/* Title */}
                <h4 className="text-white text-[13px] md:text-[15px] font-bold px-4 leading-tight drop-shadow-sm">
                  {service.title}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
{/* =========================================
          4. MISSION & VISION (Khatarnak 3D Sticky Scroll Section)
          ========================================= */}
    
       
      <section ref={missionVisionRef} className="h-[200vh] bg-white relative">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-[1500px]">
          
          {/* Subtle Grid Background for White Theme */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Light Background Ambient Glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-techGolden/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#113a71]/10 rounded-full blur-[100px]"></div>

          <div className="absolute top-18 w-full text-center z-30 pointer-events-none">
            <h2 className="text-sm font-bold text-techGolden uppercase tracking-[0.3em] mb-2">The Core</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-600 tracking-tight drop-shadow-sm">
            <span className="text-techGolden">O</span>ur Driving Forces
            </h3>
          </div>

          <div className="relative w-full max-w-5xl mx-auto h-[60vh] md:h-[50vh] flex items-center justify-center mt-10">
            
            {/* MISSION CARD (Light Theme) */}
            <motion.div 
              style={{ 
                scale: missionScale, y: missionY, opacity: missionOpacity, rotateX: missionRotateX,
                transformStyle: "preserve-3d" 
              }}
              className="absolute w-[90%] md:w-3/4 h-full bg-white/80 backdrop-blur-3xl border border-techGolden/30 rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center shadow-[0_15px_50px_rgba(193,147,38,0.15)] origin-top z-10"
            >
              {/* Huge Background Letter Mask */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none overflow-hidden rounded-[2.5rem]">
                <span className="text-[25rem] font-black text-techGolden leading-none">M</span>
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-techGolden to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-techGolden/20 transform -translate-z-[50px]">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-800 mb-6 uppercase tracking-wider relative transform translate-z-[30px]">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl relative transform translate-z-[40px]">
                To empower organizations with innovative digital solutions that drive growth, efficiency, and long-term success.
              </p>
            </motion.div>

            {/* VISION CARD (Light Theme) */}
            <motion.div 
              style={{ 
                y: visionY, scale: visionScale, rotateX: visionRotateX, opacity: visionOpacity,
                transformStyle: "preserve-3d"
              }}
              className="absolute w-[90%] md:w-3/4 h-full bg-white/90 backdrop-blur-3xl border border-[#113a71]/30 rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center shadow-[0_-15px_50px_rgba(17,58,113,0.15)] origin-bottom z-20"
            >
              {/* Huge Background Letter Mask */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none overflow-hidden rounded-[2.5rem]">
                <span className="text-[25rem] font-black text-[#113a71] leading-none">V</span>
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-[#113a71] to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-[#113a71]/30 transform -translate-z-[50px]">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-700 mb-6 uppercase tracking-wider relative transform translate-z-[30px]">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl relative transform translate-z-[40px]">
                To become a globally recognized and trusted partner in digital transformation, setting new standards for tech-driven innovation.
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
            <h2 className="text-4xl font-extrabold text-gray-600 mb-4"> <span className="text-techGolden">W</span>hy Choose Techhansa</h2>
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