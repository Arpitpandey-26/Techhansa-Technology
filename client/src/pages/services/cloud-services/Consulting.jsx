import React from 'react';
import { motion } from 'framer-motion';

const Consulting = () => {
  // Expertise Data Extracted from Screenshot
  const expertiseItems = [
    { id: "01", title: "Cloud Service Assessment", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
    { id: "02", title: "Enterprise Architecture", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { id: "03", title: "SaaS Selection", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
    { id: "04", title: "Cloud Service Delivery Planning", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { id: "05", title: "Proof of Concept", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
    { id: "06", title: "Data Migration Strategy", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
    { id: "07", title: "Compliance and Security", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { id: "08", title: "Backup and Disaster Recovery", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }
  ];

  return (
    <div className="font-sans text-gray-800 bg-[#f4f7f9] selection:bg-techGolden selection:text-white">
      
      {/* =========================================
          1. 3D CINEMATIC HERO SECTION
          ========================================= */}
     {/* =========================================
          1. 3D CINEMATIC HERO SECTION (Themed Fix)
          ========================================= */}
      <section className="relative pt-40 pb-32 overflow-hidden">

        {/* Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden perspective-1000">
          
          {/* 1. Base Image - object-cover ensures it doesn't stretch */}
          <img 
            className="absolute inset-0 h-full w-full object-cover z-0" 
            src="https://i.pinimg.com/1200x/30/c3/bc/30c3bcdf355691637c392a1400a4e58a.jpg" 
            alt="Consulting Background" 
          />
          
          {/* 2. THE BRAND OVERLAY (MAGIC FIX) 
              This applies a rich Dark Blue tint over the image.
              It fades from deep blue at the top to your light grey theme at the bottom. */}
          <div className="absolute inset-0 bg-[#113a71] opacity-70 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#113a71]/80 via-[#113a71]/60 to-[#f8fafc] z-10"></div>

          {/* 3. TechGolden Floating Orbs for Brand Contrast */}
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-[#D4A22E]/40 rounded-full blur-[150px] z-20"
          />
          <motion.div 
            animate={{ rotate: -360, scale: [1, 1.2, 1] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[30%] -right-[10%] w-[50%] h-[70%] bg-[#C19326]/40 rounded-full blur-[130px] z-20"
          />
          
          {/* 4. 3D Space Grid */}
          <div className="absolute inset-0 opacity-30 z-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '50px 50px', transform: 'rotateX(60deg) scale(2)', transformOrigin: 'bottom' }}></div>
        </div>

        {/* Content Container */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tight drop-shadow-[0_10px_30px_rgba(212,162,46,0.6)]"
          >
            Consulting
          </motion.h1>

          {/* 3D Floating Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="bg-[#113a71]/20 backdrop-blur-xl border border-white/30 p-8 md:p-12 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.3)] text-center relative overflow-hidden"
            style={{ transformPerspective: 1000 }}
          >
            {/* TechGolden Top Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-[#D4A22E] to-transparent shadow-[0_0_15px_#D4A22E]"></div>
            
            {/* Text visibility improved with font-medium and pure white */}
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium drop-shadow-md">
              Many organizations start by dipping their toes into the cloud with small, new applications. In this scenario, since the application itself is fresh, the challenges of migration and fine-tuning are usually not a concern. The real complexities surface when the time comes to migrate an existing application to the cloud. This is when considerations shift towards the hypervisor, network configurations, databases, and other critical infrastructure components.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          2. EXPERT SOLUTIONS (3D Overlapping Planes Layout)
          ========================================= */}
      <section className="py-24 bg-white relative z-20 -mt-8 rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-[40px] font-extrabold text-[#113a71] mb-6 leading-tight drop-shadow-sm"> <span className='text-techGolden'>E</span>
                xpert Solutions for <br/> Security and Efficiency
              </h2>
              <div className="w-20 h-1.5 bg-[#C19326] mb-8 rounded-full shadow-[0_4px_10px_rgba(193,147,38,0.4)]"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                Making the decision to transition to the cloud can be quite a daunting task, particularly when organizations bear the responsibility for ensuring data security and high availability across various applications. Our team of experts is here to assist you throughout your cloud migration journey. We can help reduce conventional infrastructure expenses, address potential software installation and implementation challenges, and fortify data security measures.
              </p>
            </motion.div>

            {/* Right Image with Deep 3D Lift Animation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative perspective-1000"
            >
              {/* Massive 3D Shadow underneath */}
              <div className="absolute top-10 -bottom-10 left-10 -right-10 bg-[#113a71] rounded-3xl opacity-20 blur-2xl z-0"></div>
              
              <motion.img 
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Expert Solutions Security" 
                className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full object-cover h-[400px] border border-white/50 relative z-10"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. EXPERTISE COVERS (3D Floating Grid)
          ========================================= */}
      <section className="py-24 bg-[#f4f7f9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-600 mb-6 tracking-tight"> 
                <span className='text-techGolden'>E</span>
              xpertise Covers
            </h2>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C19326]"></span>
              <span className="w-16 h-1 rounded-full bg-[#C19326]"></span>
              <span className="w-2 h-2 rounded-full bg-[#C19326]"></span>
            </div>
            <p className="text-gray-600 text-lg md:text-xl font-medium max-w-4xl">
              Our team of Cloud Consultants is ready to collaborate with you, unraveling any cloud-related questions you may have. Our expertise covers a range of essential areas, including:
            </p>
          </div>

          {/* 3D Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {expertiseItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Deep hover shadows to create a pop-out 3D effect
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(17,58,113,0.15)] hover:-translate-y-4 transition-all duration-300 group relative overflow-hidden"
              >
                {/* 3D Top Edge Highlight */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C19326] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                
                {/* Faint Background Number for depth */}
                <div className="absolute -right-2 -bottom-4 text-8xl font-black text-gray-50 group-hover:text-gray-100 transition-colors duration-300 z-0 pointer-events-none">
                  {item.id}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#f4f7f9] flex items-center justify-center mb-6 group-hover:bg-[#113a71] transition-colors duration-300 shadow-inner">
                    <svg className="w-7 h-7 text-[#C19326] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-[#113a71] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

         

        </div>
      </section>

    </div>
  );
};

export default Consulting;