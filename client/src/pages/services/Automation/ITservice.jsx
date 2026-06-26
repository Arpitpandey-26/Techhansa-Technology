import React from 'react';
import { motion } from 'framer-motion';

const pageStyles = `
  /* ==========================================================================
     1. HARDWARE ACCELERATED ULTRA-SMOOTH ANIMATIONS
     ========================================================================== */
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
  @keyframes float-soft {
    0%, 100% { transform: translateY(0) translateZ(0); }
    50% { transform: translateY(-15px) translateZ(30px); }
  }
  @keyframes float-alt {
    0%, 100% { transform: translateY(0) rotateX(10deg) rotateY(-10deg); }
    50% { transform: translateY(-20px) rotateX(15deg) rotateY(-5deg); }
  }
  
  /* 3D True Isometric Orbital Ring Mechanics */
  @keyframes orbit-spin {
    0% { transform: rotateX(60deg) rotateZ(0deg); }
    100% { transform: rotateX(60deg) rotateZ(360deg); }
  }
  @keyframes counter-spin {
    0% { transform: rotateZ(0deg) rotateX(-60deg); }
    100% { transform: rotateZ(-360deg) rotateX(-60deg); }
  }

  /* ==========================================================================
     2. CONTAINERS & LAYOUT BASIS
     ========================================================================== */
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

  /* ==========================================================================
     3. SERVICE CARDS & PREMIUM GLASSMORPHISM
     ========================================================================== */
  /* Premium 3D Service Card Engine */
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
  .service-card-3d:hover .card-title { transform: translateZ(25px); }
  .service-card-3d:hover .card-body { transform: translateZ(15px); }

  /* Glass 3D Card Base Configuration */
  .glass-3d-card {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(17, 58, 113, 0.1);
    box-shadow: 
      0 20px 40px -10px rgba(17,58,113,0.08),
      inset 0 2px 0 rgba(255,255,255,1);
    transform-style: preserve-3d;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .glass-3d-card:hover {
    transform: translateY(-8px) rotateX(4deg) rotateY(-4deg);
    box-shadow: 
      0 30px 60px -15px rgba(17,58,113,0.15),
      -5px 5px 0px rgba(212,162,46,0.2);
    border-color: rgba(212,162,46,0.4);
  }

  /* ==========================================================================
     4. COMPONENT SHOWCASES, PIPELINES & HOVER BLADES
     ========================================================================== */
  /* Isometric Image Showcase */
  .iso-showcase {
    perspective: 1500px;
    transform-style: preserve-3d;
  }
  .iso-screen {
    transform: rotateX(55deg) rotateZ(-40deg) translateZ(0);
    transition: all 0.5s ease;
    box-shadow: -20px 20px 40px rgba(17,58,113,0.2);
    border-radius: 12px;
  }
  .iso-showcase:hover .iso-screen.s-1 { transform: rotateX(55deg) rotateZ(-40deg) translateZ(40px); }
  .iso-showcase:hover .iso-screen.s-2 { transform: rotateX(55deg) rotateZ(-40deg) translateZ(80px); }

  /* 3D Pipeline Steps */
  .pipeline-step {
    transition: all 0.3s ease;
    transform-style: preserve-3d;
  }
  .pipeline-step:hover {
    transform: scale(1.05) translateZ(20px);
    background: #113a71;
    color: white !important;
  }
  .pipeline-step:hover .step-num {
    background: #D4A22E;
    color: white;
  }
  .pipeline-step:hover p { color: rgba(255,255,255,0.8); }

  /* 3D System Server Blade Interactive List Item Layer */
  .blade-hover {
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform-style: preserve-3d;
  }
  .blade-hover:hover {
    transform: translateX(12px) translateZ(15px);
    background: #f4f7f9;
    border-left-color: #D4A22E;
    box-shadow: 0 10px 20px rgba(17, 58, 113, 0.06);
  }
`;

export default function ITservice() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const assetPhases = [
    { title: "Planning", desc: "Formulating hardware and software acquisition plans based on approved budgets." },
    { title: "Acquisition", desc: "Facilitates the procurement of assets securely." },
    { title: "Deployment", desc: "Assets are allocated to employees, projects, or business units as needed." },
    { title: "Management", desc: "Tracking of assets and their ongoing maintenance." },
    { title: "Security & Compliance", desc: "Deployment of approved patches and software licensing compliance." }
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#f8fafc] selection:bg-[#D4A22E] selection:text-white overflow-x-hidden min-h-screen">
      <style>{pageStyles}</style>

      {/* =========================================
          1. 3D HERO SECTION 
          ========================================= */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0a192f] rounded-b-[40px] md:rounded-b-[80px] shadow-[0_20px_60px_rgba(17,58,113,0.15)] z-20">
        
        {/* Banner Background */}
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
            alt="IT Service Management" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#113a71]/90 via-[#113a71]/70 to-[#113a71]/90"></div>
          
          {/* Subtle 3D floating grid */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'rotateX(60deg) scale(2)' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center perspective-[1200px]">
          <motion.div initial={{ opacity: 0, rotateX: 20, y: 30 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} transition={{ duration: 1, type: "spring" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
              IT Service Management
            </h1>
            <div className="flex justify-center gap-2 mb-10">
              <span className="w-16 h-1.5 bg-[#D4A22E] rounded-full shadow-[0_0_15px_#D4A22E]"></span>
              <span className="w-4 h-1.5 bg-[#D4A22E] rounded-full"></span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl relative max-w-4xl mx-auto transform-gpu hover:translate-y-[-5px] transition-transform duration-500">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#D4A22E] rounded-tl-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-[#D4A22E] rounded-br-xl"></div>
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                Our ITSM Solutions are meticulously crafted to cater to the requirements of both Telecom operators and Enterprise customers. This comprehensive solution encompasses the entire spectrum of operations, from monitoring to problem resolution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. THE FRAMEWORK (3D Object & Text)
          ========================================= */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center perspective-[1000px]">
            
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
             
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#113a71] mb-6"> <span className='text-techGolden'>V</span>
                ersatile Framework
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We have established a versatile framework that allows the seamless integration of various discrete tools within the organization. This integration facilitates robust root cause analysis and advanced analytics.
              </p>
              <div className="glass-3d-card p-6 border-l-4 border-l-[#D4A22E] rounded-2xl">
                <p className="text-[#113a71] font-bold">
                  The backbone of this framework relies on the IBM Netcool family, which underpins its robust functionality.
                </p>
              </div>
            </motion.div>

            {/* 3D Floating Component representing Framework */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="flex justify-center relative h-[400px]"
            >
              <div className="absolute inset-0 bg-[#D4A22E]/10 rounded-full blur-[80px] animate-[float-soft_6s_infinite]"></div>
              {/* Outer Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[10px] border-[#113a71] rounded-full border-dashed animate-[spin_20s_linear_infinite] opacity-20"></div>
              {/* Main Sphere */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-[#113a71] to-[#D4A22E] rounded-full shadow-[0_20px_50px_rgba(17,58,113,0.4)] animate-[float-alt_5s_infinite] flex items-center justify-center border-4 border-white">
                <svg className="w-20 h-20 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                </svg>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. ASSET MANAGEMENT (Isometric Dashboard & 3D Pipeline)
          ========================================= */}
      <section className="py-24 bg-white border-t border-gray-100 relative rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(17,58,113,0.03)] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left: Isometric Dashboard Showcase */}
            <div className="iso-showcase h-[400px] relative flex justify-center items-center">
              <div className="absolute bg-[#113a71]/5 w-[400px] h-[400px] rounded-full blur-3xl"></div>
              {/* Back Screen */}
              <div className="absolute w-[300px] h-[200px] bg-[#f8fafc] border-2 border-gray-200 iso-screen s-1 z-0 overflow-hidden flex items-center justify-center">
                <div className="w-full h-8 bg-gray-200 absolute top-0 flex items-center px-3 gap-1"><div className="w-2 h-2 rounded-full bg-red-400"></div><div className="w-2 h-2 rounded-full bg-yellow-400"></div><div className="w-2 h-2 rounded-full bg-green-400"></div></div>
                <span className="text-[#113a71] font-bold text-xl opacity-20">Dashboard</span>
              </div>
              {/* Front Screen */}
              <div className="absolute w-[320px] h-[220px] bg-white border-2 border-[#113a71]/20 iso-screen s-2 z-10 overflow-hidden shadow-2xl">
                <div className="w-full h-8 bg-[#113a71] absolute top-0 flex items-center px-4"><span className="text-white text-xs font-bold tracking-widest">ASSET TRACKER</span></div>
                <div className="p-4 mt-8 grid grid-cols-2 gap-3">
                  <div className="h-16 bg-[#D4A22E]/20 rounded-lg"></div><div className="h-16 bg-[#113a71]/10 rounded-lg"></div>
                  <div className="col-span-2 h-20 bg-gray-100 rounded-lg border-l-4 border-green-500"></div>
                </div>
              </div>
            </div>

            {/* Right: Asset Management Content */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="w-16 h-1.5 bg-[#D4A22E] mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#113a71] mb-6"><span className='text-techGolden'>A</span>sset Management</h2>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
                Utilizing the ITSM framework, we've developed a comprehensive Asset Management Solution that effectively manages the entire lifecycle of assets, spanning from the point of purchase to their current location and eventual retirement.
              </p>
              <p className="text-gray-700 font-medium mb-6">
                Our solution is built upon the robust foundations of IBM Big Fix, ServiceNow/IBM Maximo, and Control Desk, offering features like:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Inventory management", "Procurement management", "Contract management", "Financial management"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded bg-[#D4A22E]/20 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#D4A22E]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                    </div>
                    <span className="text-gray-700 text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* 3D Lifecycle Pipeline */}
          <div className="mt-16">
            <h3 className="text-center text-xl font-bold text-[#113a71] mb-10">Comprehensive Support for the Entire Asset Lifecycle</h3>
            <div className="flex flex-col lg:flex-row gap-4 perspective-[1000px]">
              {assetPhases.map((phase, i) => (
                <div key={i} className="pipeline-step flex-1 bg-[#f4f7f9] border border-gray-200 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 text-7xl font-black text-gray-200 group-hover:text-white/10 transition-colors duration-300 z-0 select-none">0{i+1}</div>
                  <div className="relative z-10">
                    <div className="step-num w-10 h-10 rounded-xl bg-white text-[#113a71] font-bold flex items-center justify-center shadow-sm mb-4 border border-gray-100 transition-colors">
                      {i+1}
                    </div>
                    <h4 className="text-[#113a71] group-hover:text-white font-bold text-lg mb-2 transition-colors">{phase.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed transition-colors">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

     {/* =========================================
          4. ENTERPRISE ITSM (ServiceNow 3D Orbital Ring)
          ========================================= */}
      <section className="py-16 md:py-20 bg-[#f4f7f9] border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Content & 3D Interactive Hover Blades (7 Columns) */}
            <motion.div 
              className="w-full lg:col-span-7"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <div className="w-12 h-1 bg-[#113a71] mb-5 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#113a71] mb-5 leading-tight tracking-tight">
                Enterprise IT Service Management – <span className="text-[#D4A22E]">ServiceNow</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                ITSM software users now have heightened expectations for increased capabilities, user-friendliness, and adaptability. ServiceNow stands out as a product turning these expectations into reality. By harnessing the ServiceNow platform, we've assisted organizations in automating service desk operations, HR functions, and procurement.
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200/60 p-4 rounded-xl mb-4 shadow-sm">
                <p className="font-bold text-sm md:text-base text-[#113a71]">We help customers with building systems for:</p>
              </div>

              <div className="space-y-2.5 pl-1 perspective-container">
                {[
                  "Employee self service portal",
                  "CMDB Integration and Reconciliation",
                  "Problem, Change, Incident & Knowledge Management",
                  "Architecture, Consultancy, and Integration Services"
                ].map((item, idx) => (
                  <div key={idx} className="blade-hover bg-white border border-gray-200/80 border-l-4 border-l-transparent p-3.5 rounded-xl flex items-center gap-3.5 cursor-default shadow-[0_2px_4px_rgba(0,0,0,0.01)] transform-gpu">
                    <div className="w-5 h-5 rounded-full bg-[#113a71]/10 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#113a71]"></div>
                    </div>
                    <span className="text-gray-700 font-semibold text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Clean Ultra-Legible 3D Orbital Ring Diagram (5 Columns) */}
            <div className="w-full lg:col-span-5 flex justify-center items-center h-[460px] perspective-container relative mt-8 lg:mt-0">
              
              {/* Background Contrast Ambient Glow */}
              <div className="absolute w-[260px] h-[260px] bg-[#113a71]/5 rounded-full blur-[40px]"></div>
              <div className="absolute w-[180px] h-[180px] bg-[#D4A22E]/5 rounded-full blur-[50px] delay-75"></div>

              {/* Enhanced Scale Orbital System Container */}
              <div 
                className="relative w-[380px] h-[380px] flex items-center justify-center rounded-full" 
                style={{ transformStyle: 'preserve-3d', animation: 'orbit-spin 30s linear infinite' }}
              >
                
                {/* Structural Vector Rings (Sized Up and Scaled) */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#113a71]/20"></div>
                <div className="absolute inset-6 rounded-full border-2 border-solid border-[#113a71]/5"></div>
                <div className="absolute inset-12 rounded-full border border-dashed border-[#D4A22E]/30"></div>

                {/* Highly Visible Stabilized Center Core Platform */}
                <div 
                  className="absolute w-28 h-28 bg-white rounded-full shadow-[0_15px_35px_rgba(17,58,113,0.18)] border-4 border-[#113a71] flex flex-col items-center justify-center z-20 transform-gpu" 
                  style={{ animation: 'counter-spin 30s linear infinite' }}
                >
                  <span className="text-2xl font-black text-[#113a71] tracking-tight">ITSM</span>
                  <span className="text-[9px] bg-[#f4f7f9] text-gray-500 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider mt-1 border border-gray-200">Core</span>
                </div>

                {/* Sized-up High-Legibility Ring Nodes */}
                {[
                  { label: "Service Catalog", accent: "#113a71", isDark: true, deg: 0 },
                  { label: "Incident Mgmt", accent: "#D4A22E", isDark: false, deg: 60 },
                  { label: "Problem Mgmt", accent: "#113a71", isDark: true, deg: 120 },
                  { label: "Change Mgmt", accent: "#113a71", isDark: true, deg: 180 },
                  { label: "Asset Mgmt", accent: "#D4A22E", isDark: false, deg: 240 },
                  { label: "Knowledge Base", accent: "#113a71", isDark: true, deg: 300 },
                ].map((node, i) => (
                  <div 
                    key={i} 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -mt-7"
                    style={{ 
                      transformOrigin: '50% 217px', 
                      transform: `rotateZ(${node.deg}deg)`,
                      transformStyle: 'preserve-3d' 
                    }}
                  >
                    {/* Outer Node Box with counter-rotation logic */}
                    <div 
                      className="w-28 h-14 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-200/80 flex flex-col items-center justify-center p-2 text-center transform-gpu hover:scale-105 transition-transform duration-200" 
                      style={{ 
                        animation: 'counter-spin 30s linear infinite',
                        borderTop: `3px solid ${node.accent}`
                      }}
                    >
                      <span className="text-[11px] font-extrabold text-gray-800 leading-tight tracking-tight mb-0.5">
                        {node.label}
                      </span>
                      <span 
                        className="text-[8px] font-bold uppercase tracking-wide px-1.5 py-0.2 rounded"
                        style={{ 
                          backgroundColor: node.isDark ? 'rgba(17,58,113,0.06)' : 'rgba(212,162,46,0.1)', 
                          color: node.accent 
                        }}
                      >
                        Module
                      </span>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}