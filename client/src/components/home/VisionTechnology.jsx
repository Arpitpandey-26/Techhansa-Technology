import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/* ============================================================
   GLOBAL CSS (Ring Rotation + Button Animations)
   ============================================================ */
const ringStyles = `
  @keyframes spinRing {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to   { transform: translate(-50%, -50%) rotate(360deg); }
  }
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
   EXTRACTED: YOUR PREMIUM ANIMATED GOLDEN BUTTON
   ============================================================ */
const GoldenButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="
      relative overflow-hidden
      flex items-center gap-3
      px-9 py-4
      text-sm font-bold uppercase tracking-widest text-white
      rounded-xl border-none outline-none cursor-pointer
      transition-all duration-300
      hover:-translate-y-[5px]
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

const VisionTechnology = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const leftTextX  = useTransform(smoothProgress, [0, 0.40], ["-100%", "0%"]);
  const rightTextX = useTransform(smoothProgress, [0, 0.40], ["100%",  "0%"]);

  return (
    <>
      {/* Inject keyframe animation */}
      <style>{ringStyles}</style>

      <section className="bg-white relative overflow-hidden" id="vision">

        {/* Decorative dot grid background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: 'repeating-radial-gradient(circle at 0 0, transparent 0, #000 1px, transparent 1px, transparent 100%)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Scroll-pinned heading track */}
        <div ref={trackRef} className="h-[120vh] relative z-10 w-full">
          <div className="sticky top-[20vh] md:top-[25vh] w-full flex flex-col items-center justify-center px-4">

            <motion.div
              style={{ x: leftTextX }}
              className="w-full text-center flex justify-center md:justify-start md:pl-[10%]"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-extrabold text-[#6a6a6a] tracking-tighter whitespace-nowrap leading-[1.1] pb-2 drop-shadow-sm">
                <span className="text-techGolden">Y</span>our Vision
              </h2>
            </motion.div>

            <motion.div
              style={{ x: rightTextX }}
              className="w-full text-center flex justify-center md:justify-end md:pr-[10%] mt-2 md:mt-4"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-extrabold text-[#6a6a6a] tracking-tighter whitespace-nowrap leading-[1.1] pb-4 drop-shadow-sm">
                 <span className="text-techGolden">O</span>ur Technology
              </h2>
            </motion.div>

          </div>
        </div>

        {/* ── Static content section ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-24 -mt-[15vh] md:-mt-[25vh] lg:-mt-[35vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* ── LEFT: Asymmetric image collage with rotating golden ring ── */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* ★ GOLDEN GLOW BLOB — soft ambient glow behind images */}
              <div
                className="absolute top-1/2 left-1/2 -z-10 pointer-events-none"
                style={{
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(212,162,46,0.20) 0%, transparent 70%)',
                  filter: 'blur(32px)',
                }}
              />

              {/* ★ OUTER SPINNING RING — solid arc */}
              <div
                className="absolute -z-10 pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  border: '3px solid transparent',
                  borderTopColor: '#D4A22E',
                  borderRightColor: '#D4A22E',
                  borderLeftColor: 'rgba(212,162,46,0.15)',
                  borderBottomColor: 'rgba(212,162,46,0.15)',
                  boxShadow: '0 0 20px 4px rgba(212,162,46,0.25)',
                  animation: 'spinRing 6s linear infinite',
                }}
              />

              {/* ★ INNER SPINNING RING — dashed, reverse direction */}
              <div
                className="absolute -z-10 pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '2px dashed rgba(212,162,46,0.35)',
                  animation: 'spinRing 12s linear infinite reverse',
                }}
              />

              {/* Image collage grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center relative z-10">

                {/* Left column — two stacked images */}
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                      alt="Team discussion"
                      className="
                        w-full h-48 sm:h-56 object-cover
                        transition-transform duration-500 ease-out
                        group-hover:scale-110
                      "
                    />
                  </div>
                  {/* ★ Golden border highlight on hover */}
                  <div
                    className="
                      rounded-2xl overflow-hidden shadow-lg group cursor-pointer
                      ring-0 transition-all duration-300
                      hover:ring-2 hover:ring-[#D4A22E]/60
                      hover:shadow-[0_12px_32px_rgba(212,162,46,0.35)]
                    "
                  >
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                      alt="Tech team working"
                      className="
                        w-full h-48 sm:h-56 object-cover
                        transition-transform duration-500 ease-out
                        group-hover:scale-110
                      "
                    />
                  </div>
                </div>

                {/* Right column — tall image, offset down */}
                <div className="translate-y-8">
                  <div
                    className="
                      rounded-2xl overflow-hidden shadow-xl group cursor-pointer
                      ring-0 transition-all duration-300
                      hover:ring-2 hover:ring-[#D4A22E]/60
                      hover:shadow-[0_16px_40px_rgba(212,162,46,0.40)]
                    "
                  >
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                      alt="Professional Expert"
                      className="
                        w-full h-80 sm:h-[22rem] object-cover
                        transition-transform duration-500 ease-out
                        group-hover:scale-110
                      "
                    />
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ── RIGHT: Description & CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col items-start lg:pl-8 bg-white/80 backdrop-blur-sm p-6 lg:p-0 rounded-2xl"
            >
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8 text-justify">
                We combine industry expertise with cutting-edge technology to help businesses
                innovate, automate, and grow. From enterprise software and cloud transformation
                to AI-driven solutions, we build digital experiences that create measurable
                business impact.
              </p>

              {/* ★ Your Extracted Animated Golden Button */}
              <div>
                <GoldenButton onClick={() => navigate('/contact')}>Let's Build Together</GoldenButton>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default VisionTechnology;