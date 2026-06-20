import React from 'react';
import heroVideo from '../../assets/Hero-video.mp4';

const Hero = () => {
  return (
   
    <section className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden bg-gray-950">
      
      {/* =========================================
          VIDEO BACKGROUND SETUP
          ========================================= */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline /* Crucial for iOS devices to play video inline */
        >
          <source src={heroVideo} type="video/mp4" />
         
        </video>
        
        {/* Slightly darker overlay to ensure high contrast for the text */}
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* =========================================
          MAIN CONTENT AREA (Typography & CTA)
          Added subtle fade-in animation for an impressive entrance.
          ========================================= */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
        
        {/* =========================================
            PRO TYPOGRAPHY REDESIGN
            Breaking the sentence into meaningful, highly-styled parts for maximum impact.
            We use Inter/Sans for structure and Serif for elegant accents.
            ========================================= */}
        <h1 className="leading-tight drop-shadow-2xl mb-12">
          
          {/* Part 1: Top introductory phrase - Clean, slightly spaced, modern Sans-serif */}
          <span className="block text-xl md:text-2xl font-sans font-semibold text-gray-100 tracking-widest uppercase mb-4 opacity-90">
            Accelerate Your
          </span>
          
          {/* Part 2: Main Focus Topic - MASSIVE, Bold, Sans-serif (Khatarnak element) */}
          <span className="block text-6xl md:text-8xl font-sans font-extrabold text-white tracking-tighter mb-6 leading-none">
            Digital Journey
          </span>
          
          {/* Part 3: Secondary topic - Pair modern sans with an elegant, larger golden serif */}
          <span className="block text-3xl sm:text-4xl md:text-5xl font-serif  text-techGolden tracking-wide leading-snug max-w-4xl mx-auto">
            
            {/* Inline structure phrase: Sans-serif, modern, white */}
            <span className="font-sans font-medium text-white not-italic text-xl md:text-2xl tracking-tight mr-3">with a</span>
            
            {/* Target phrase: Golden, elegant Serif with a subtle metallic gradient effect */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-techGolden via-goldenHover to-techGolden font-bold">
                Digital Transformation
            </span>
            
            {/* Inline end phrase */}
            <span className="font-sans font-medium text-white not-italic text-xl md:text-2xl tracking-tight ml-3">company</span>
          </span>
        </h1>
        
        {/* CTA button with enhanced shadow and lift animation */}
        <button className="px-10 py-4 bg-techGolden hover:bg-goldenHover text-white font-bold rounded-md text-[16px] uppercase tracking-wider transition-all duration-300 shadow-[0_8px_20px_rgba(212,162,46,0.3)] hover:shadow-[0_12px_25px_rgba(212,162,46,0.25)] transform hover:-translate-y-1">
          Get Started
        </button>

      </div>
    </section>
  );
};

export default Hero;