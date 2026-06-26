import React from 'react';
import { motion } from 'framer-motion';

// Optimized Custom 3D CSS with Fixed Specificity Bugs
const pageStyles = `
  /* Main Page 3D Animations */
  @keyframes float-iso {
    0%, 100% { transform: translateY(0) rotateX(20deg) rotateY(-20deg); }
    50% { transform: translateY(-15px) rotateX(20deg) rotateY(-20deg); }
  }
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .perspective-1200 { 
    perspective: 1200px; 
    transform-style: preserve-3d; 
  }
  
  /* LIGHT Glass Panel */
  .glass-3d-panel-light {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(17, 58, 113, 0.08);
    box-shadow: 0 15px 35px rgba(17, 58, 113, 0.05), inset 0 2px 0 rgba(255, 255, 255, 1);
    transform-style: preserve-3d;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .glass-3d-panel-light:hover {
    transform: translateY(-6px) rotateX(1deg) rotateY(-1deg);
    box-shadow: 0 25px 50px rgba(17, 58, 113, 0.12), -5px 5px 0px rgba(212, 162, 46, 0.15);
    border-color: rgba(212, 162, 46, 0.3);
  }

  /* DARK Glass Panel (Fixed Background Overriding) */
  .glass-3d-panel-dark {
    background: rgba(17, 58, 113, 0.95);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(10, 25, 47, 0.3);
    transform-style: preserve-3d;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .glass-3d-panel-dark:hover {
    transform: translateY(-6px) rotateX(1deg) rotateY(-1deg);
    box-shadow: 0 25px 50px rgba(10, 25, 47, 0.5), -5px 5px 0px rgba(212, 162, 46, 0.2);
    border-color: rgba(212, 162, 46, 0.4);
  }

  /* Isometric Image Container */
  .iso-container {
    transform-style: preserve-3d;
    animation: float-iso 5s ease-in-out infinite;
  }
  .iso-layer {
    position: absolute;
    inset: 0;
    border-radius: 24px;
    transition: transform 0.4s ease;
  }
`;

export default function ITprocess() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <style>{pageStyles}</style>

      <div className="font-sans text-gray-800 bg-[#f4f7f9] selection:bg-[#D4A22E] selection:text-[#113a71] overflow-x-hidden min-h-screen">
        
        {/* =========================================
            1. HERO BANNER SECTION
            ========================================= */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0a192f] z-20 rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(17,58,113,0.3)]">
          
          <div className="absolute inset-0 z-0">
            {/* Background Data Center Image */}
            <img 
              className="w-full h-full object-cover opacity-25 mix-blend-luminosity" 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
              alt="IT Process Automation Servers" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#113a71]/95 via-[#113a71]/80 to-[#0a192f]"></div>
            
            {/* Floating Tech Grid Accent */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'rotateX(60deg) translateY(50px) scale(2)', transformOrigin: 'bottom' }}></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center perspective-1200">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
                IT Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A22E] to-[#E4C77D]">Automation</span>
              </h1>
              
              <div className="flex justify-center gap-2 mb-8">
                <span className="w-16 h-1 bg-[#D4A22E] rounded-full shadow-[0_0_15px_#D4A22E]"></span>
                <span className="w-3 h-1 bg-[#D4A22E] rounded-full"></span>
          0   </div>
              
              {/* Premium Glass Hero Text Box */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] max-w-4xl mx-auto transform-gpu hover:border-white/20 transition-all duration-300">
                <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-4">
                  Automation is an appealing concept with clear advantages such as error reduction, enhanced efficiency, and cost savings. However, it's important to recognize that no single tool can address all your automation needs within your organization.
                </p>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed border-t border-white/10 pt-4 mt-4 font-light">
                  The key lies in identifying areas where automation can have the most significant impact, conducting pilot projects to validate hypotheses, and then implementing broader rollouts.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            2. AUTOMATION CONTENT (Bento Style Layout)
            ========================================= */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center perspective-1200">
              
              {/* Left Side: Adaptive Bento Cards (7 Columns) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Light Panel Variant */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-3d-panel-light p-6 md:p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#113a71]/5 rounded-bl-full"></div>
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-[#113a71] text-lg font-bold">01</span>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Our extensive experience in infrastructure and operations has enabled us to identify specific tools that unequivocally reduce costs and enhance efficiency. While many IT organizations employ scripts for task automation, they may suffice for well-structured tasks like server provisioning. 
                  </p>
                  <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed border-l-2 border-[#D4A22E] pl-3">
                    However, scripts have limitations, especially for complex IT workflows spanning various processes and domains. As IT processes evolve, maintaining and modifying homegrown scripts can become a full-time programming endeavor.
                  </p>
                </motion.div>

                {/* Dark Panel Variant (Fixed Contrast Issue) */}
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-3d-panel-dark p-6 md:p-8 rounded-2xl group shadow-lg">
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mb-4 text-white transform group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                    Our team excels at identifying process bottlenecks, prioritizing automation initiatives, implementing solutions, and formulating future automation strategies based on accumulated insights and knowledge.
                  </p>
                </motion.div>

              </div>

              {/* Right Side: Aligned 3D Isometric Core Component (5 Columns) */}
              <div className="lg:col-span-5 h-[400px] w-full flex justify-center items-center mt-8 lg:mt-0">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="relative w-[280px] h-[280px] iso-container"
                >
                  {/* Base Layer */}
                  <div className="iso-layer bg-gradient-to-tr from-[#113a71] to-[#1e509c] shadow-[0_25px_40px_rgba(17,58,113,0.3)] [transform:translateZ(0px)] border border-white/10"></div>
                  
                  {/* Mid Layer (Glass Platform) */}
                  <div className="iso-layer bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_15px_30px_rgba(0,0,0,0.1)] [transform:translateZ(35px)] flex items-center justify-center">
                    
                    {/* Interactive Rotating Gears */}
                    <div className="relative w-28 h-28 flex items-center justify-center [transform:translateZ(10px)]">
                      <svg className="absolute w-20 h-20 text-[#113a71] animate-[spin-slow_12s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                      </svg>
                      <svg className="absolute w-12 h-12 text-[#D4A22E] top-[5px] left-[50px] animate-[spin-slow_8s_linear_infinite_reverse]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                      </svg>
                    </div>

                  </div>

                  {/* Top Floating Badge 1 */}
                  <div className="absolute w-20 h-12 bg-white rounded-xl border border-gray-100 shadow-md -top-6 -left-4 [transform:translateZ(70px)] flex items-center justify-center">
                    <span className="text-[#113a71] font-bold text-xs">Scripts</span>
                  </div>
                  
                  {/* Top Floating Badge 2 */}
                  <div className="absolute w-28 h-12 bg-[#D4A22E] rounded-xl shadow-[0_10px_20px_rgba(212,162,46,0.3)] bottom-6 -right-6 [transform:translateZ(85px)] flex items-center justify-center">
                    <span className="text-white font-bold text-xs tracking-wide">Automation</span>
                  </div>

                </motion.div>
              </div>

            </div>

          </div>
        </section>
      </div>
    </>
  );
}