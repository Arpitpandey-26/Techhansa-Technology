import React from 'react';
import { motion } from 'framer-motion';

const Monitoring = () => {
  // Data Extraction
  const nocAssistList = [
    "Cost management and optimization",
    "Resource provisioning automation",
    "Infrastructure/OS monitoring",
    "Network Monitoring",
    "Application monitoring",
    "Security monitoring",
    "SLA-driven managed service",
    "24x7 Monitoring/helpdesk/Support"
  ];

  const nocSupportList = [
    "Server & Operating Systems",
    "Storage management",
    "Database management",
    "Application management",
    "Network management",
    "Backup & DR management",
    "Security management"
  ];

  // Smooth Fade Up Animation (Optimized)
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="font-sans text-gray-800 bg-[#f8fafc] selection:bg-[#D4A22E] selection:text-white overflow-x-hidden min-h-screen">
      
      {/* =========================================
          1. 3D LIGHT THEME HERO SECTION
          ========================================= */}
      <section className="relative pt-40 pb-32 overflow-hidden z-20 shadow-[0_20px_50px_rgba(17,58,113,0.08)] rounded-b-[40px] md:rounded-b-[80px]">
        
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Monitoring and Help Desk Banner" 
          />
          <div className="absolute inset-0 bg-[#113a71] opacity-60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#113a71]/80 via-[#113a71]/40 to-[#f8fafc]"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 50px)' }}></div>
        </div>

        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 tracking-tight drop-shadow-lg"
          >
            Monitoring and <span className="text-[#D4A22E]">help desk</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/40 p-8 md:p-12 rounded-tl-[50px] rounded-br-[50px] rounded-tr-xl rounded-bl-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A22E]/20 blur-3xl rounded-full"></div>
            
            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-medium drop-shadow-md relative z-10 text-justify md:text-center">
              In the modern era, customers expect seamless access to services around the clock, using devices that suit their convenience. Consequently, IT systems must exhibit robustness to accommodate this constant demand. However, stress-testing applications for all potential scenarios is challenging, especially within the agile development methodology commonly employed today. When multiple applications interact, the complexity grows, making the identification of failures a daunting task.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. TECHHANSA MONITORING SERVICES
          ========================================= */}
      <section className="py-24 md:py-32 bg-[#f8fafc] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#113a71] mb-8 leading-tight">
                TechHansa Monitoring <span className="text-[#D4A22E]">services</span>
              </h2>
              <div className="text-gray-600 text-[16px] md:text-lg leading-relaxed text-justify space-y-6">
                <p>
                  TechHansa Monitoring services encompass the utilization of various tools for tracking and evaluating the performance and health of an array of IT components. This includes Systems, Network, Storage devices, Operating Systems, Applications, Databases, and Backups.
                </p>
                <p>
                  This holistic approach provides management with a comprehensive overview of the data center's IT landscape. It aids in proactively identifying and resolving issues before they manifest, mitigating potential disruptions to the business.
                </p>
              </div>
            </motion.div>

            <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
              <motion.div 
                initial={{ opacity: 0, rotateY: -15, rotateX: 10, y: 50 }}
                whileInView={{ opacity: 1, rotateY: -20, rotateX: 15, y: 0 }}
                whileHover={{ rotateY: -10, rotateX: 5, y: -10, scale: 1.05 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                // Thick 3D layered borders and shadows
                className="relative rounded-2xl bg-white p-4 shadow-[30px_30px_60px_rgba(17,58,113,0.15),-10px_-10px_30px_rgba(255,255,255,1)] border border-gray-100"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                  alt="Monitoring 3D Isometric" 
                  className="rounded-xl w-full max-w-[500px] h-auto object-cover relative z-0"
                />
                
                <motion.div 
                  animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-[#113a71] text-white p-3 rounded-xl shadow-xl z-20 border-2 border-white flex items-center gap-2"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="font-bold tracking-wide text-sm">100% Secure</span>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. NETWORK OPERATIONS CENTRE (Zero-Lag Optimized 3D)
          ========================================= */}
      <section className="py-24 md:py-32 bg-white relative z-20 rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_60px_rgba(17,58,113,0.06)] overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#113a71 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#113a71] mb-6 drop-shadow-sm">
              Network Operations Centre
            </h2>
            <div className="flex justify-center gap-2 mb-8">
               <span className="w-16 h-1 bg-[#D4A22E]"></span>
               <span className="w-2 h-1 bg-[#113a71]"></span>
               <span className="w-2 h-1 bg-[#D4A22E]"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* === PANEL 1: Dynamic Skewed Shapes (PURE CSS FOR ZERO LAG) === */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-xl md:text-2xl font-bold text-[#113a71] mb-10">
                Through our Network Operations Centre, we can assist you with:
              </h3>
              
              <div className="space-y-5 pl-4 md:pl-6 border-l-4 border-[#D4A22E]/30">
                {nocAssistList.map((item, index) => (
                  // Removed Framer Motion whileHover to stop layout thrashing. 
                  // Using Tailwind's native hardware-accelerated transforms instead.
                  <div 
                    key={index}
                    className="group bg-white p-4 flex items-center cursor-pointer border border-gray-200 transition-all duration-300 ease-out hover:translate-x-3 hover:-translate-y-1 hover:border-[#113a71] relative will-change-transform"
                    style={{ 
                      transform: 'skewX(-10deg)', 
                      boxShadow: '5px 5px 0px rgba(212,162,46,0.2)' 
                    }}
                  >
                    <div className="flex items-center gap-4 w-full" style={{ transform: 'skewX(10deg)' }}>
                      <span className="text-[#D4A22E] font-black text-xl opacity-50 group-hover:opacity-100 group-hover:text-[#113a71] transition-all">0{index + 1}.</span>
                      <span className="text-gray-700 font-bold text-[15px] md:text-[16px] group-hover:text-[#113a71] transition-colors">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* === PANEL 2: Overlapping Tech-Plates (PURE CSS FOR ZERO LAG) === */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 className="text-xl md:text-2xl font-bold text-[#113a71] mb-10">
                Onsite / Offshore Support on:
              </h3>
              
              <div className="relative pt-4">
                {nocSupportList.map((item, index) => (
                  // Removed zIndex animation and Framer Motion hover. 
                  // Used simple CSS translate-y for a butter-smooth 3D deck lift effect.
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group bg-[#113a71] p-5 rounded-2xl flex items-center gap-4 cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.2)] border border-[#1e509c] transition-transform duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(17,58,113,0.4)] relative will-change-transform ${index !== 0 ? '-mt-4' : ''}`}
                  >
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#D4A22E] transition-colors duration-300 pointer-events-none"></div>
                    
                    <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-[#D4A22E] transition-colors shadow-inner">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-100 font-medium text-[15px] md:text-[16px] group-hover:text-white transition-colors tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Monitoring;