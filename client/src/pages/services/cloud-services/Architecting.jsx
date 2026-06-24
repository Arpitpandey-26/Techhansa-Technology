import React from 'react';
import { motion } from 'framer-motion';

const Architecting = () => {
  // =========================================
  // DATA EXTRACTION (From your screenshot)
  // =========================================
  const deliverables = [
    "Requirement Gathering",
    "Sizing of the cloud machines",
    "System Design",
    "Identifying location for the Data Center",
    "Storage Design",
    "Network design",
    "Network Security",
    "Design",
    "Applications /Database Architecture",
    "Backup Strategy",
    "Migration Strategy",
    "DR Strategy",
    "Security Design",
    "Testing and POC"
  ];

  // Orbiting Nodes for the Methodology Diagram
  const orbitNodes = [
    { label: "Storage", top: "5%", left: "15%" },
    { label: "Mobile", top: "0%", left: "46%" },
    { label: "Applications", top: "10%", left: "75%" },
    { label: "Database", top: "40%", left: "85%" },
    { label: "Hybrid Cloud", top: "75%", left: "70%" },
    { label: "Public Cloud", top: "85%", left: "39%" },
    { label: "Private Cloud", top: "65%", left: "5%" },
    { label: "Server", top: "30%", left: "1%" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#f8fafc] selection:bg-[#113a71] selection:text-white min-h-screen">
      
      {/* =========================================
          1. LIGHT 3D HERO SECTION
          ========================================= */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white z-10 shadow-[0_20px_50px_rgba(17,58,113,0.05)] rounded-b-[40px]">
        
        {/* Soft Floating 3D Background Orbs (No dark colors) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] bg-[#113a71]/5 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ y: [20, -20, 20], x: [10, -10, 10] }} 
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-[#D4A22E]/10 rounded-full blur-[100px]"
          />
          {/* Subtle Grid for structural depth */}
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Title with Blue & Golden Theme */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#113a71] tracking-tight mb-8 drop-shadow-sm">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A22E] to-[#C19326]">Services</span>
            </h1>
            
            {/* 3D Glassmorphism Subtitle Card (Light Theme) */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.04),inset_0_2px_10px_rgba(255,255,255,1)] relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-2 -mt-1">
                 <span className="w-2 h-2 rounded-full bg-[#113a71]"></span>
                 <span className="w-8 h-2 rounded-full bg-[#D4A22E]"></span>
                 <span className="w-2 h-2 rounded-full bg-[#113a71]"></span>
              </div>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                While organizations have strategic plans to address their critical business challenges through cloud technology, their current physical architecture might not facilitate a straightforward transition to the cloud via a lift-and-shift approach.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. METHODOLOGY SECTION (With Live 3D Orbit Layout)
          ========================================= */}
      <section className="py-24 bg-[#f8fafc] relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#113a71] mb-6 leading-tight">
                TechHansa Methodology
              </h2>
              
              <div className="space-y-6 text-gray-600 text-[17px] leading-relaxed text-justify">
                <p>
                  TechHansa adheres to a well-established methodology to assess your needs and craft a suitable cloud architecture. Every stage of the cloud architecture design planning process requires meticulous execution to guarantee the delivery of a dependable, high-performance service.
                </p>
                <p>
                  The design process is both iterative and adaptable. We engage in a collaborative effort with your IT teams to evaluate your existing IT infrastructure, workload, and application requirements. This allows us to select the most suitable platform and create a design that seamlessly aligns with your cloud journey.
                </p>
              </div>
            </motion.div>

            {/* Right Side: LIVE 3D INFOGRAPHIC (Recreating the image with code) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center"
            >
              {/* Central Hub (Cloud Computing) */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-48 bg-white rounded-full shadow-[0_20px_50px_rgba(17,58,113,0.15),inset_0_4px_10px_rgba(255,255,255,1)] border-4 border-[#113a71]/10 flex flex-col items-center justify-center relative z-20"
              >
                <svg className="w-16 h-16 text-[#D4A22E] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                </svg>
                <span className="font-bold text-[#113a71] text-lg leading-tight text-center">Cloud<br/>Computing</span>
              </motion.div>

              {/* Dotted Connection Rings */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-[#113a71]/20 z-0 animate-[spin_60s_linear_infinite]"></div>

              {/* Floating Satellites around the center */}
              {orbitNodes.map((node, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 3 + (index % 3), delay: index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-24 h-24 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center text-center p-2 z-10 hover:border-[#D4A22E] hover:shadow-[0_15px_40px_rgba(212,162,46,0.2)] transition-all cursor-default"
                  style={{ top: node.top, left: node.left, transform: 'translate(-50%, -50%)' }}
                >
                  <span className="text-[12px] font-bold text-gray-700 leading-tight">{node.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. DELIVERABLES SECTION (3D Staggered Grid)
          ========================================= */}
      <section className="py-24 bg-white relative z-10 shadow-[0_-20px_50px_rgba(17,58,113,0.03)] rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#113a71] mb-6">
              Cloud Architecture Deliverables
            </h2>
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-3 h-3 bg-[#D4A22E] rounded-full"></div>
              <div className="w-3 h-3 bg-[#113a71] rounded-full"></div>
              <div className="w-3 h-3 bg-[#D4A22E] rounded-full"></div>
            </div>
            <p className="text-gray-600 text-lg font-medium">
              We assess and design solutions on <span className="font-bold text-[#113a71]">IBM Cloud, AWS</span> or <span className="font-bold text-[#113a71]">Microsoft Azure</span> based on cost and performance parameters. Our Cloud Architecture deliverables includes:
            </p>
          </div>

          {/* 3D Floating Pill Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                // Deep 3D Lift effect on Hover
                className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:bg-white hover:border-[#D4A22E]/50 hover:shadow-[0_25px_50px_rgba(17,58,113,0.12)] hover:-translate-y-2 transition-all duration-300 group flex items-center relative overflow-hidden"
              >
                {/* Large Background Number for 3D Depth */}
                <div className="absolute -right-4 -bottom-6 text-7xl font-black text-gray-200/50 group-hover:text-[#D4A22E]/10 transition-colors duration-300 pointer-events-none">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                
                {/* Blue Dot Indicator */}
                <div className="w-3 h-3 rounded-full bg-[#113a71] mr-4 shrink-0 group-hover:bg-[#D4A22E] group-hover:scale-150 transition-all duration-300 shadow-sm"></div>
                
                <h4 className="text-[15px] font-bold text-gray-700 group-hover:text-[#113a71] transition-colors duration-300 relative z-10 leading-snug">
                  {item}
                </h4>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Architecting;