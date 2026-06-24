import React from 'react';
import { motion } from 'framer-motion';

const CloudManaged = () => {
  // Data for NOC Section
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

  // Animation variants to prevent footer jumping (keeps layout intact)
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // 'overflow-hidden' only on x-axis to prevent horizontal scroll, min-h-screen ensures footer stays down
    <div className="font-sans text-gray-800 bg-[#f8fafc] selection:bg-[#113a71] selection:text-white overflow-x-hidden min-h-screen">
      
      {/* =========================================
          1. PREMIUM HERO SECTION (Optimized 3D)
          ========================================= */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#113a71] z-10 rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(17,58,113,0.2)]">
        
        {/* Background Image with Clean Blend */}
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Cloud Managed Services" 
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#113a71]/90 via-[#113a71]/70 to-[#113a71]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.h1 
            variants={fadeUp} initial="hidden" animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-10 tracking-tight drop-shadow-lg"
          >
            Cloud Managed Services
          </motion.h1>

          {/* Lag-Free 3D Floating Card */}
          <motion.div 
            variants={fadeUp} initial="hidden" animate="visible"
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative transition-transform duration-300"
          >
            {/* TechGolden Highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#D4A22E] rounded-b-md shadow-[0_2px_10px_rgba(212,162,46,0.6)]"></div>
            
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
              Our cloud managed services guarantee you top-notch support across your public, hybrid, or private cloud infrastructure. Entrust us with the management of your cloud, allowing your resources to concentrate on more strategic projects that fuel innovation, while we take care of the day-to-day operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. 12 YEARS EXPERIENCE (Clean Isometric 3D)
          ========================================= */}
      <section className="py-20 md:py-32 bg-[#f8fafc] relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Side */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#113a71] mb-8 leading-tight">
                12 years of experience
              </h2>
              <div className="w-16 h-1.5 bg-[#D4A22E] mb-8 rounded-full"></div>
              <div className="text-gray-600 text-[17px] md:text-lg leading-relaxed text-justify space-y-6">
                <p>
                  With over 12 years of experience in delivering managed services for Data Centers, TechHansa has gained invaluable expertise in overseeing a wide range of cloud operations and processes.
                </p>
                <p>
                  Our offerings include round-the-clock monitoring and support services, catering to the management of your applications and infrastructure. Whether it's on-site, within a Private Cloud environment, or remotely utilizing a public cloud infrastructure, we've got you covered.
                </p>
              </div>
            </motion.div>

            {/* 3D Image Container (Lag-free approach) */}
            <div className="w-full lg:w-1/2 perspective-1000">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                // Using strong layered shadows instead of rotate3D to prevent lag while keeping the 3D pop
                className="relative rounded-3xl overflow-hidden shadow-[20px_20px_60px_rgba(17,58,113,0.15),-20px_-20px_60px_rgba(255,255,255,1)] border-[8px] border-white group"
              >
                <img 
                  src="https://i.pinimg.com/736x/64/a0/63/64a063e9091ef5821095c2922b1a1ca6.jpg" 
                  alt="12 Years Experience" 
                  className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* 3D Floating Badge */}
                <div className="absolute -bottom-2 -left-2 md:bottom-6 md:left-6 bg-[#C19326] text-white p-6 rounded-tr-3xl rounded-bl-xl shadow-[5px_5px_20px_rgba(193,147,38,0.5)] border-2 border-white">
                  <span className="block text-4xl md:text-5xl font-black leading-none drop-shadow-md">12+</span>
                  <span className="text-sm font-bold uppercase tracking-wider">Years</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. NETWORK OPERATIONS CENTRE (Layered 3D Panel Design)
          ========================================= */}
      <section className="py-24 md:py-32 bg-white relative z-20 rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-20px_50px_rgba(17,58,113,0.05)]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#113a71] mb-6">
              Network Operations Centre
            </h2>
            <div className="flex justify-center gap-2 mb-8">
              <span className="w-12 h-1.5 bg-[#D4A22E] rounded-full"></span>
              <span className="w-12 h-1.5 bg-[#113a71] rounded-full"></span>
            </div>
          </div>

          {/* 3D PANELS CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* === PANEL 1: Assist you with (White 3D Look) === */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="bg-[#f8fafc] p-8 md:p-10 rounded-3xl border border-gray-200 shadow-[10px_10px_30px_rgba(17,58,113,0.08),-10px_-10px_30px_rgba(255,255,255,1)]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#113a71] mb-8 border-b-2 border-gray-200 pb-4">
                Through our Network Operations Centre, we can assist you with:
              </h3>
              
              <div className="space-y-4">
                {nocAssistList.map((item, index) => (
                  // Hardware accelerated 3D lift (translate-y) which is 100x faster than translateZ
                  <div 
                    key={index}
                    className="group bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(17,58,113,0.12)] hover:border-[#113a71]/20"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#f4f7f9] text-[#113a71] flex items-center justify-center shrink-0 group-hover:bg-[#113a71] group-hover:text-white transition-colors duration-300 shadow-inner">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 font-medium text-[15px] group-hover:text-[#113a71] transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* === PANEL 2: Onsite / Offshore (Blue 3D Look) === */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}
              className="bg-[#113a71] p-8 md:p-10 rounded-3xl shadow-[10px_10px_30px_rgba(17,58,113,0.3)] relative overflow-hidden"
            >
              {/* Internal 3D lighting effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-8 border-b-2 border-[#1c4b8c] pb-4 relative z-10">
                Onsite / Offshore Support on:
              </h3>
              
              <div className="space-y-4 relative z-10">
                {nocSupportList.map((item, index) => (
                  // Golden 3D Lift
                  <div 
                    key={index}
                    className="group bg-[#174685] border border-[#1c4b8c] p-4 rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:bg-[#D4A22E] hover:border-[#D4A22E]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#113a71] text-[#D4A22E] flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#D4A22E] transition-colors duration-300 shadow-inner">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-200 font-medium text-[15px] group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CloudManaged;