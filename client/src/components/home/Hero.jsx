import React from 'react';
import heroVideo from '../../assets/Hero-video.mp4';

const Hero = () => {
  return (
    <section className="relative h-[82vh] w-full flex items-center justify-center overflow-hidden bg-gray-950">
      
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
        <div className="absolute inset-0 bg-[#113a71] bg-cover bg-center opacity-35"></div>
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
          <span className="block text-3xl sm:text-4xl md:text-5xl font-serif text-techGolden tracking-wide leading-snug max-w-4xl mx-auto">
            
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

      {/* =========================================
          SCROLL DOWN INDICATOR (Animated Bounce)
          Positioned absolutely at the bottom center.
          ========================================= */}
      <a 
        href="#about" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300 z-20 group"
      >
        <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-2 drop-shadow-md group-hover:text-techGolden transition-colors duration-300">
          Scroll Down
        </span>
        <div className="animate-bounce bg-white/10 p-2 rounded-full border border-white/20 backdrop-blur-sm group-hover:border-techGolden transition-colors duration-300">
          <svg 
            className="w-5 h-5 text-white group-hover:text-techGolden transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </a>

    </section>
  );
};

export default Hero;