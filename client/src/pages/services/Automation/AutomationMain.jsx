import React from 'react';
import { motion } from 'framer-motion';

// Hardware Accelerated Ultra-Smooth CSS Engine
const pageStyles = `
  @keyframes spin-gear {
    100% { transform: rotate(360deg); }
  }
  @keyframes spin-gear-reverse {
    100% { transform: rotate(-360deg); }
  }
  @keyframes float-badge {
    0%, 100% { transform: translateY(0) translateZ(30px); }
    50% { transform: translateY(-8px) translateZ(45px); }
  }

  .perspective-container {
    perspective: 1400px;
    transform-style: preserve-3d;
  }

  .gear-icon {
    position: absolute;
    color: #D4A22E;
    opacity: 0.08;
    will-change: transform;
    pointer-events: none;
    z-index: 0;
  }

  .gear-1 {
    width: 200px; height: 200px;
    top: -20px; right: -40px;
    animation: spin-gear 25s linear infinite;
  }

  .gear-2 {
    width: 120px; height: 120px;
    bottom: 40px; left: -30px;
    animation: spin-gear-reverse 18s linear infinite;
  }

  /* Premium Premium 3D Service Card Engine */
  .service-card-3d {
    background: #ffffff;
    border: 1px solid rgba(17, 58, 113, 0.06);
    box-shadow: 
      0 10px 30px -10px rgba(17, 58, 113, 0.05),
      0 1px 3px rgba(0, 0, 0, 0.02);
    transform-style: preserve-3d;
    will-change: transform, box-shadow;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  .service-card-3d:hover {
    transform: translateY(-8px) rotateX(4deg) rotateY(-3deg);
    border-color: rgba(212, 162, 46, 0.35);
    box-shadow: 
      0 30px 60px -15px rgba(17, 58, 113, 0.12),
      0 0 50px -10px rgba(212, 162, 46, 0.1),
      -6px 6px 0px rgba(212, 162, 46, 0.15);
  }

  .service-card-3d:hover .icon-wrapper {
    transform: translateZ(40px) scale(1.05);
    box-shadow: 0 15px 30px rgba(17, 58, 113, 0.2);
  }

  .service-card-3d:hover .card-title {
    transform: translateZ(25px);
  }
  
  .service-card-3d:hover .card-body {
    transform: translateZ(15px);
  }
`;

export default function AutomationMain() {
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-[#f8fafc] selection:bg-[#D4A22E] selection:text-[#113a71] overflow-x-hidden min-h-screen antialiased">
      <style>{pageStyles}</style>

      {/* =========================================
          1. COMPACT 3D HERO BANNER
          ========================================= */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden z-20 bg-[#113a71] rounded-b-[30px] md:rounded-b-[50px] shadow-[0_15px_40px_rgba(17,58,113,0.15)]">
        
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover mix-blend-overlay opacity-30" 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Automation Technology" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#113a71]/95 via-[#113a71]/75 to-[#0f3263]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center perspective-container">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
              Automation
            </h1>
            <div className="flex justify-center gap-1.5 mb-8">
              <span className="w-3 h-1 bg-[#D4A22E] rounded-full"></span>
              <span className="w-12 h-1 bg-[#D4A22E] rounded-full shadow-[0_0_10px_#D4A22E]"></span>
              <span className="w-3 h-1 bg-[#D4A22E] rounded-full"></span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] max-w-3xl"
          >
            <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed font-light">
              Automation has the potential to enhance process predictability, reliability, and cost efficiency for companies. Historically, manufacturing companies realized significant productivity gains on the factory floor through automation. Similarly, we anticipate comparable productivity improvements through the automation of IT processes and other enterprise workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. CORE AUTOMATION OBJECTIVES
          ========================================= */}
      <section className="py-16 md:py-20 relative z-10 overflow-hidden">
        <svg className="gear-icon gear-1" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Stacked Cards */}
            <div className="w-full lg:col-span-6 space-y-5">
              <motion.div 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-xl border-l-4 border-[#113a71] shadow-[0_10px_25px_rgba(17,58,113,0.04)]"
              >
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Our automation services are centered on key operational domains: core IT Infrastructure within the Data Center, localized IT service desks, and end-to-end Enterprise service delivery models.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="bg-[#113a71] p-6 md:p-8 rounded-xl shadow-[0_15px_30px_rgba(17,58,113,0.12)] relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D4A22E] opacity-10 rounded-full blur-2xl"></div>
                <p className="text-white text-sm md:text-base leading-relaxed relative z-10 font-light">
                  Whether you are looking to optimize a single bottlenecked workflow for improved throughput or require our consulting architects to audit, design, and orchestrate an enterprise-wide tool deployment strategy, we align perfectly with your business metrics.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Balanced Tilted Tech Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full lg:col-span-6 perspective-container flex justify-center"
            >
              <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-[#113a71]/10 bg-white p-2.5 shadow-[15px_15px_35px_rgba(17,58,113,0.08)] transform-gpu hover:rotate-1 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Automation Core" 
                  className="w-full h-56 md:h-64 object-cover rounded-xl"
                />
                
                <div className="absolute top-6 right-6 bg-[#113a71]/95 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2.5 shadow-md animate-[float-badge_4s_ease-in-out_infinite]">
                  <span className="w-2 h-2 rounded-full bg-[#D4A22E] animate-ping"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Engine Active</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. PREMIUM REDESIGNED AUTOMATION SERVICES
          ========================================= */}
      <section className="py-16 md:py-20 bg-white relative z-20 border-t border-gray-100 rounded-t-[30px] md:rounded-t-[50px] shadow-[0_-15px_40px_rgba(17,58,113,0.02)] overflow-hidden">
        <svg className="gear-icon gear-2" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#113a71] mb-3">
              Automation Services
            </h2>
            <div className="flex justify-center gap-1 mb-6">
               <span className="w-2 h-1 bg-[#D4A22E] rounded-full"></span>
               <span className="w-10 h-1 bg-[#113a71] rounded-full"></span>
               <span className="w-2 h-1 bg-[#D4A22E] rounded-full"></span>
            </div>
          </div>

          {/* Interactive 3D Symmetric Service Grid */}
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 perspective-container mb-16"
          >
            
            {/* Service Card 1 */}
            <motion.div variants={fadeUp} className="service-card-3d p-6 md:p-8 rounded-2xl flex flex-col justify-between cursor-pointer">
              <div>
                <div className="icon-wrapper w-14 h-14 rounded-xl bg-gradient-to-br from-[#113a71] to-[#1e509c] flex items-center justify-center shadow-md mb-6 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="card-title text-lg md:text-xl font-bold text-[#113a71] mb-3 transition-transform duration-300">
                  IT Service Management & <br className="hidden sm:inline"/>Enterprise Service Management
                </h3>
                <p className="card-body text-gray-500 text-xs md:text-sm leading-relaxed transition-transform duration-300">
                  Unify service desks and corporate processes under unified automated channels to dramatically lower ticket resolution latencies and ensure cross-departmental agility.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-[#113a71] gap-1 hover:text-[#D4A22E] transition-colors">
                <span>Explore Architecture</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div variants={fadeUp} className="service-card-3d p-6 md:p-8 rounded-2xl flex flex-col justify-between cursor-pointer">
              <div>
                <div className="icon-wrapper w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4A22E] to-[#bfa226] flex items-center justify-center shadow-md mb-6 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 className="card-title text-lg md:text-xl font-bold text-[#113a71] mb-3 transition-transform duration-300">
                  ITPA / RPA <br/><span className="text-sm text-gray-400 font-medium">(Robotic Process Automation)</span>
                </h3>
                <p className="card-body text-gray-500 text-xs md:text-sm leading-relaxed transition-transform duration-300">
                  Deploy software bots to eliminate high-volume repetitive tasks, validate data pathways instantly, and create software-led automation routines across isolated legacy legacy platforms.
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-semibold text-[#113a71] gap-1 hover:text-[#D4A22E] transition-colors">
                <span>Explore Integration</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </motion.div>

          </motion.div>

          {/* Cognitive Tools Bottom Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f8fafc] border border-gray-150 p-6 md:p-8 rounded-2xl shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D4A22E]"></div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-center max-w-3xl mx-auto font-light">
              As part of our commitment to promoting structural agility, we actively invest in capabilities related to market-ready cognitive infrastructure tools. Although integration into live operations is in its early cycles, we observe an accelerated adoption trend and stand equipped to onboard customers as these technologies unify standard business environments.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}