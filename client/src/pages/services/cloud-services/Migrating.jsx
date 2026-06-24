import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Migrating = () => {
  // =========================================
  // 1. 3D LOADER STATE
  // =========================================
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the 3D effect to show
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Data from screenshot
  const migrationServices = [
    { title: "Data center Migration", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: "Application Migration", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
    { title: "Database Migration", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" }
  ];

  const cyclePhases = [
    { name: "Assessment & Design", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { name: "Deployment", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
    { name: "Operation & Support", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
    { name: "Continuous Improvement", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }
  ];

  return (
    <>
      {/* =========================================
          3D LOADING ANIMATION SCREEN
          ========================================= */}
      {isLoading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-[#0a1a33] flex flex-col items-center justify-center"
        >
          {/* 3D Spinning Cube CSS constructed with Framer Motion */}
          <div className="perspective-1000 w-32 h-32 relative">
            <motion.div 
              animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-full absolute transform-style-3d flex items-center justify-center"
            >
              <div className="absolute w-16 h-16 border-4 border-[#D4A22E] rounded-lg transform rotate-45 shadow-[0_0_20px_rgba(212,162,46,0.6)]"></div>
              <div className="absolute w-16 h-16 border-4 border-[#113a71] rounded-lg transform rotate-12 shadow-[0_0_20px_rgba(17,58,113,0.6)]"></div>
              <div className="absolute w-16 h-16 border-4 border-white/50 rounded-lg transform -rotate-12"></div>
            </motion.div>
          </div>
          <motion.h2 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white mt-8 font-bold tracking-widest uppercase text-sm"
          >
            Initializing 3D Space...
          </motion.h2>
        </motion.div>
      )}

      {/* MAIN CONTENT WRAPPER */}
      <div className="font-sans text-gray-800 bg-[#f8fafc] selection:bg-[#D4A22E] selection:text-white overflow-x-hidden">
        
        {/* =========================================
            2. HERO SECTION (Deep Space 3D Effect)
            ========================================= */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0a1a33] to-[#113a71] z-10">
          
          {/* Responsive Floating Background Elements */}
          <div className="absolute inset-0 z-0 perspective-1000 overflow-hidden">
            <motion.div 
              animate={{ z: [0, 100, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4A22E]/20 rounded-full blur-[80px]"
            />
            <motion.div 
              animate={{ z: [100, 0, 100], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[100px]"
            />
            {/* Tech Grid */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'rotateX(60deg) scale(2.5)', transformOrigin: 'bottom' }}></div>
          </div>

          {/* Hero Content (Fully Responsive padding and text sizes) */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30, translateZ: -100 }}
              animate={{ opacity: 1, y: 0, translateZ: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-2xl"
            >
              Migrating and <span className="text-[#D4A22E]">Deployment</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex justify-center gap-2 mb-8">
                 <span className="w-2 h-2 rounded-full bg-[#113a71] shadow-[0_0_10px_rgba(17,58,113,1)]"></span>
                 <span className="w-12 h-2 rounded-full bg-[#D4A22E] shadow-[0_0_10px_rgba(212,162,46,1)]"></span>
                 <span className="w-2 h-2 rounded-full bg-[#113a71] shadow-[0_0_10px_rgba(17,58,113,1)]"></span>
              </div>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify md:text-center font-light drop-shadow-md px-2">
                To ensure a risk-free transition or migration to the cloud, enterprises must have access to dependable cloud service partners with the necessary experience and expertise to facilitate a smooth and seamless cloud implementation process. Many organizations may lack the skilled resources, a well-defined IT policies framework, or the expertise in security requirements, which could potentially hinder the transition and deployment to the cloud.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            3. MANAGED CLOUD SERVICE (With 3D Cycle Graphic)
            ========================================= */}
        <section className="py-16 md:py-24 bg-white relative z-20 -mt-10 rounded-t-[30px] md:rounded-t-[50px] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Text Content (Responsive font sizes and margins) */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#113a71] mb-6 leading-tight text-center md:text-left">
                  Techhansa's managed cloud service
                </h2>
                <div className="w-16 h-1.5 bg-[#D4A22E] mb-8 rounded-full mx-auto md:mx-0"></div>
                
                <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed text-justify md:text-left">
                  <p>
                    Companies often face a significant challenge when migrating their applications. Applications running in-house are typically fine-tuned to dedicated servers. However, when moved to a public cloud environment, where resources are shared, the application's response can change, leading to performance issues for users.
                  </p>
                  <p>
                    Techhansa's managed cloud service offerings encompass a comprehensive suite of plans for migrating and deploying cloud workloads. Our goal is to minimize business disruption during this transition by harnessing the capabilities of cloud platforms like <span className="font-bold text-[#113a71]">IBM Cloud, Microsoft Azure, and AWS.</span>
                  </p>
                </div>
              </motion.div>

              {/* Right Side: LIVE 3D CYCLE INFOGRAPHIC */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                className="w-full flex justify-center perspective-1000 py-10"
              >
                {/* 3D Orb Container */}
                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] transform-style-3d hover:-rotate-y-12 hover:rotate-x-12 transition-transform duration-700 ease-out cursor-pointer">
                  
                  {/* Center Hub */}
                  <div className="absolute inset-0 m-auto w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-full shadow-[0_20px_50px_rgba(17,58,113,0.3)] z-20 flex flex-col items-center justify-center border-4 border-[#f8fafc] group">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#113a71] mb-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span className="text-[10px] sm:text-xs font-bold text-center leading-tight px-2">Security &<br/>Compliancy</span>
                  </div>

                  {/* Rotating Orbit Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-dashed border-[#113a71]/20 z-0"
                  ></motion.div>

                  {/* 4 Orbiting 3D Nodes representing the pie chart segments */}
                  {cyclePhases.map((phase, index) => {
                    const angles = [0, 90, 180, 270];
                    return (
                      <motion.div 
                        key={index}
                        className="absolute top-0 left-0 w-full h-full z-10"
                        style={{ transform: `rotate(${angles[index]}deg)` }}
                      >
                        <div 
                          className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-[#113a71] to-[#0a1a33] rounded-2xl shadow-xl flex flex-col items-center justify-center border-t-2 border-[#D4A22E] p-2 hover:scale-110 hover:z-30 transition-all duration-300"
                          style={{ transform: `rotate(-${angles[index]}deg)` }} // Keeps text upright
                        >
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={phase.icon}></path>
                          </svg>
                          <span className="text-[9px] sm:text-[11px] text-white font-medium text-center leading-tight">{phase.name}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================
            4. MIGRATION SERVICES (3D Hover Cards)
            ========================================= */}
        <section className="py-16 md:py-24 bg-[#f4f7f9] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#113a71] mb-6">
                Migration services
              </h2>
              <div className="flex gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#D4A22E]"></span>
                <span className="w-16 h-1.5 rounded-full bg-[#D4A22E]"></span>
                <span className="w-2 h-2 rounded-full bg-[#D4A22E]"></span>
              </div>
              <p className="text-gray-800 font-bold text-lg mb-6">
                We offer the following Migration services :
              </p>
            </div>

            {/* 3D Staggered Cards (Responsive Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-16 perspective-1000">
              {migrationServices.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  // 3D Hover Tilt Effect using Framer Motion
                  whileHover={{ 
                    y: -15, 
                    rotateX: 5, 
                    rotateY: -5,
                    boxShadow: "20px 30px 50px rgba(17, 58, 113, 0.15)"
                  }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transform-style-3d cursor-pointer group"
                >
                  <div className="text-5xl font-black text-gray-100 absolute top-4 right-6 group-hover:text-[#D4A22E]/10 transition-colors duration-300 pointer-events-none">
                    0{index + 1}
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-[#f8fafc] flex items-center justify-center mb-6 group-hover:bg-[#D4A22E] transition-colors duration-300 relative z-10 shadow-inner">
                    <svg className="w-8 h-8 text-[#113a71] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#113a71] transition-colors duration-300 relative z-10">
                    {service.title}
                  </h3>
                  
                 
                </motion.div>
              ))}
            </div>

            {/* Bottom Descriptive Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border-l-4 border-[#D4A22E]"
            >
              <p className="text-gray-600 text-base md:text-[17px] leading-relaxed text-justify">
                Our team of highly skilled cloud consultants and engineers specializes in delivering these services. They possess expertise in various aspects, such as managing the migration of existing applications, refactoring legacy applications, or designing new applications to ensure they are cloud-ready. Our cloud migration approach commences with a thorough feasibility assessment of your current IT infrastructure, applications, processes, and policies. Following this, we meticulously plan the migration methodology, considering technical feasibility and cost-saving opportunities as key factors.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Migrating;
