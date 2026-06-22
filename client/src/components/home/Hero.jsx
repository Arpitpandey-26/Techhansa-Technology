import React from 'react';
import heroVideo from '../../assets/Hero-video.mp4';

/* ============================================================
   CSS FOR PREMIUM GOLDEN BUTTON
   ============================================================ */
const buttonStyles = `
  @keyframes vt-shimmer {
    from { left: -120%; }
    to   { left:  140%; }
  }
  @keyframes vt-arrowSlide {
    0%   { transform: translateX(0);     opacity: 1; }
    49%  { transform: translateX(22px); opacity: 0; }
    50%  { transform: translateX(-22px);opacity: 0; }
    100% { transform: translateX(0);     opacity: 1; }
  }
`;

/* ============================================================
   PREMIUM ANIMATED GOLDEN BUTTON COMPONENT
   ============================================================ */
const GoldenButton = ({ children }) => (
  <button
    className="
      relative overflow-hidden
      flex items-center justify-center gap-3
      px-10 py-4
      text-[16px] font-bold uppercase tracking-widest text-white
      rounded-md border-none outline-none cursor-pointer
      transition-all duration-300
      hover:-translate-y-[2px]
      active:translate-y-0
      group/btn
    "
    style={{
      background: 'linear-gradient(90deg, #D4A22E 0%, #EFC44A 40%, #D4A22E 100%)',
      backgroundSize: '200% 100%',
      backgroundPosition: '100% 0',
      boxShadow: '0 4px 20px rgba(212,162,46,.32)',
      /* transition for background-position must be inline */
      transition: 'background-position .5s ease, transform .25s cubic-bezier(.22,.68,0,1.2), box-shadow .3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundPosition = '0% 0';
      e.currentTarget.style.boxShadow = '0 18px 44px rgba(212,162,46,.58), 0 6px 14px rgba(0,0,0,.13)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundPosition = '100% 0';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(212,162,46,.32)';
    }}
  >
    {/* Continuous shimmer streak */}
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        width: '50%',
        height: '100%',
        background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,.28) 50%, transparent 80%)',
        transform: 'skewX(-15deg)',
        animation: 'vt-shimmer 2.6s infinite',
        pointerEvents: 'none',
      }}
    />

    {/* Label */}
    <span className="relative z-10 whitespace-nowrap">{children}</span>

    {/* Arrow — slides out right and re-enters from left on hover */}
    <span
      aria-hidden="true"
      className="relative z-10 text-lg font-black leading-none"
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <svg
        width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"
        className="
          transition-transform duration-300
          group-hover/btn:animate-[vt-arrowSlide_.45s_ease_forwards]
        "
        style={{ display: 'block' }}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  </button>
);

/* ============================================================
   MAIN HERO COMPONENT
   ============================================================ */
const Hero = () => {
  return (
    <>
      {/* Injecting Button Keyframes */}
      <style>{buttonStyles}</style>

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
            ========================================= */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
          
          <h1 className="leading-tight drop-shadow-2xl mb-12">
            
            {/* Part 1: Top introductory phrase */}
            <span className="block text-xl md:text-2xl font-sans font-semibold text-gray-100 tracking-widest uppercase mb-4 opacity-90">
              Accelerate Your
            </span>
            
            {/* Part 2: Main Focus Topic */}
            <span className="block text-6xl md:text-8xl font-sans font-extrabold text-white tracking-tighter mb-6 leading-none">
              Digital Journey
            </span>
            
            {/* Part 3: Secondary topic */}
            <span className="block text-3xl sm:text-4xl md:text-5xl font-serif text-techGolden tracking-wide leading-snug max-w-4xl mx-auto">
              <span className="font-sans font-medium text-white not-italic text-xl md:text-2xl tracking-tight mr-3">with a</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-techGolden via-goldenHover to-techGolden font-bold">
                  Digital Transformation
              </span>
              <span className="font-sans font-medium text-white not-italic text-xl md:text-2xl tracking-tight ml-3">company</span>
            </span>
          </h1>
          
          {/* =========================================
              IMPLEMENTED PREMIUM CTA BUTTON
              ========================================= */}
          <div className="mt-4">
            <GoldenButton>Get Started</GoldenButton>
          </div>

        </div>

        {/* =========================================
            SCROLL DOWN INDICATOR (Animated Bounce)
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
    </>
  );
};

export default Hero;