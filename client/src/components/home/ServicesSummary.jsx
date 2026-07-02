import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServicesSummary = () => {
  /* =========================================
     SCROLL ANIMATION LOGIC
     ========================================= */
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  /* =========================================
     DUMMY DATA FOR SERVICE CARDS
     ========================================= */
  const servicesData = [
    {
      id: 1,
      title: "Cloud Services",
    
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Digital Workplace",
      
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Automation",
  
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Managed Services",
      
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Professional Services",
    
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    /* =========================================
       MAIN SECTION: FULL DARK BLUE BACKGROUND
       Applied #113a71 to the entire scrolling container
       ========================================= */
    <section ref={targetRef} className="relative h-[300vh] bg-[#113a71]" id="services">
      
      {/* =========================================
          STICKY VIEWPORT
          Holds the background image and content in place
          ========================================= */}
      <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden py-12 max-w-[95rem] mx-auto px-6 sm:px-10 lg:px-16 gap-8">
        
        {/* Full-width Cityscape Background Overlay covering both sides */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        {/* Decorative Golden Top Line spanning the full screen width */}
        <div className="absolute top-0 left-0 w-full h-1 bg-techGolden z-10"></div>

        {/* =========================================
            LEFT COLUMN: TEXT CONTENT
            Now transparent, floating elegantly over the global dark background
            ========================================= */}
        <div className="w-full lg:w-[30%] shrink-0 flex flex-col items-start justify-center z-20 relative p-4 lg:p-0">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            <span className="text-techGolden">O</span>ur Services
          </h2>
          
          <p className="text-[#a5b4fc] font-medium text-[15px] md:text-base leading-relaxed mb-10 text-left">
            We lead the architecture and implementation of highly impactful digital solutions, leveraging advanced tech stacks to solve unique business challenges and deliver exceptional measurable value.
          </p>
          
          <button className="px-10 py-4 bg-techGolden hover:bg-goldenHover text-white font-bold rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(212,162,46,0.4)] transform hover:-translate-y-1">
            Explore
          </button>
        </div>

        {/* =========================================
            RIGHT COLUMN: HORIZONTAL ANIMATED TRACK
            White/Grey cards popping beautifully against the dark background
            ========================================= */}
        <div className="w-full lg:w-[70%] overflow-hidden relative z-20 native-scroll-container">
          <motion.div style={{ x }} className="flex gap-8 pl-4 w-max py-8">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="w-[80vw] md:w-[420px] lg:w-[460px] h-[430px] bg-[#f8fafc] border border-gray-100/10 rounded-[2rem] p-6 flex flex-col justify-between group hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex justify-between items-start z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-techGolden transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 font-medium tracking-wide">
                      {service.year}
                    </p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 group-hover:bg-techGolden group-hover:border-transparent transition-all duration-300 transform group-hover:scale-110">
                    <svg 
                      className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300 transform -rotate-45 group-hover:rotate-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
                <div className="w-full h-[65%] rounded-2xl overflow-hidden relative mt-4 shadow-sm">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSummary;