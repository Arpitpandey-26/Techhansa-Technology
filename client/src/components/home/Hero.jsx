import React from 'react';

/* INSTRUCTION: 
  Importing the video file from the assets folder.
  Based on your folder structure, we go up two levels (../../) to reach src/assets/
*/
import heroVideo from '../../assets/Hero-video.mp4';

const Hero = () => {
  return (
    /* =========================================
       HERO SECTION CONTAINER
       ========================================= */
    <section className="relative h-[72vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* =========================================
          VIDEO BACKGROUND SETUP
          ========================================= */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline /* Crucial for iOS devices to play video inline instead of fullscreen */
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback text if the browser doesn't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay to ensure white text remains readable over moving video elements */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* =========================================
          MAIN TEXT AND CALL-TO-ACTION (CTA)
          ========================================= */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Strong headline using your modified text and serif/italic styling.
            (Fixed a small responsive scaling issue: sm:text-5xl ensures it grows larger on tablets) 
        */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-white tracking-wide drop-shadow-lg mb-8 leading-tight">
          Accelerate Your Digital Journey with a Digital Transformation company
        </h1>
        
        {/* CTA button with sleek corporate look and hover animation */}
        <button className="px-8 py-3 bg-techGolden hover:bg-goldenHover text-white font-medium rounded text-lg transition duration-300 shadow-lg transform hover:-translate-y-1">
          Get Started
        </button>

      </div>
    </section>
  );
};

export default Hero;