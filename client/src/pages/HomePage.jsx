import React, { useEffect } from 'react';
/* Importing the core Lenis library instead of the React wrapper */
import Lenis from 'lenis';

/* Apne saare components import karein */

import Hero from '../components/home/Hero';
import AboutOverview from '../components/home/AboutOverview';
import ServicesSummary from '../components/home/ServicesSummary';
import VisionTechnology from '../components/home/VisionTechnology';


const HomePage = () => {
  
  useEffect(()=>{
    if ('scrollRestoration' in window.history){
      window.history.scrollRestoration = 'manual';

    }
  window.scrollTo({top:0,
    behavior: 'smooth'
  });


  },[]);

  /* =========================================
     VANILLA LENIS SETUP FOR REACT 19
     This avoids all hook collision errors while keeping the butter-smooth scroll.
     ========================================= */
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Controls the smoothness (lower is smoother)
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to prevent memory leaks if component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white">
      
      
      
      <main>
        <Hero />
        <AboutOverview />
        <ServicesSummary />
        <VisionTechnology />
      </main>
      
  
      
    </div>
  );
};

export default HomePage;