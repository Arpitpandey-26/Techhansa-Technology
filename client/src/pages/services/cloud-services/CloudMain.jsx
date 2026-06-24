import React, { useRef,  useLayoutEffect, useState  } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';



/* ============================================================
   TELEPROMPTER SCROLL CSS & GLOBAL STICKY FIX
   ============================================================ */
const scrollStyles = `
  html, body, #root {
    overflow-x: clip !important; 
  }

  @keyframes textScroll {
    0% { transform: translateY(0%); }
    100% { transform: translateY(-50%); }
  }

  .teleprompter-container {
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
    overflow: hidden;
    height: 280px; 
    position: relative;
    cursor: pointer;
  }

  .teleprompter-content {
    animation: textScroll 25s linear infinite;
    will-change: transform;
    display: flex;
    flex-direction: column;
  }

  .teleprompter-container:hover .teleprompter-content {
    animation-play-state: paused;
  }
`;

const CloudServices = () => {

  const cardsContainerRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const horizontalScrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useLayoutEffect(() => {
    if (cardsContainerRef.current) {
      const trackWidth = cardsContainerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      setScrollDistance(trackWidth - viewportWidth + 300);
    }
  }, []);

  const xTransform = useTransform(
    smoothProgress,
    [0, 1],
    [0, -scrollDistance]
  );

  const solutions = [
    {
      title: "Consulting",
      desc: "Most organizations initially test waters with some small new application on the cloud. Since the application itself is new, the pains of migrations, tuning etc...",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    },
    {
      title: "Architecting",
      desc: "Though organizations have a strategic plan in place to solve their critical business challenges by leveraging on cloud technology, their existing physical architecture...",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Migrating & Deployment",
      desc: "To keep the cloud transition or migration risk free, it is required that enterprises get access to reliable cloud service partners who have the experience and expertise...",
      icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    },
    {
      title: "Managed Services",
      desc: "With our cloud managed services, you can be assured of quality support on your public, hybrid or private cloud architecture. Let us manage your cloud, so that your...",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
      title: "Monitoring & Help Desk",
      desc: "In today’s day and age your customers need to access services 24x7 through a device which is convenient to them. The IT systems therefore need to be robust enough...",
      icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    }
  ];

  const TextContent = () => (
    <div className="flex flex-col gap-6 pb-6">
      <p>
        Over the past few years, Cloud computing has gained widespread adoption, prompting organizations to consider it as a primary strategic initiative. However, determining the right path to embark on this cloud journey has become a challenging task due to the multitude of options available in the market.
      </p>
      <p>
        For mid-size companies, the complexity of managing hybrid environments can be overwhelming. This is where our expertise comes into play. We specialize in helping you identify which applications are suitable for migration to the cloud and the optimal sequence for their transition. 
      </p>
      <p>
        With proficiency across the three major public Infrastructure as a Service (IaaS) providers, we can offer guidance on selecting the most appropriate cloud service provider for your specific application needs.
      </p>
      <p className="text-techGolden/80 font-medium">-- Continuous Innovation --</p>
    </div>
  );

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-techGolden selection:text-white">
      
      <style>{scrollStyles}</style>

      {/* =========================================
          1. PREMIUM HERO SECTION
          ========================================= */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#113a71]/30 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-techGolden/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
              Cloud <span className="text-techGolden">Services</span>
            </h1>
            
            <div className="teleprompter-container max-w-3xl mx-auto px-4">
              <div className="teleprompter-content text-gray-300 text-lg md:text-xl leading-relaxed text-justify md:text-center font-light drop-shadow-md">
                <TextContent />
                <TextContent />
              </div>
            </div>
            
            <p className="text-gray-500 text-sm mt-4 italic animate-pulse">
              Hover over the text to pause
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. VIRTUAL INFRASTRUCTURE MANAGEMENT
          ========================================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Centralized and Proactive <br/>
                <span className="text-[#113a71]">Virtual Infrastructure Management</span>
              </h2>
              <div className="w-20 h-1 bg-techGolden mb-8 rounded-full"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                The administration disciplines within operations are merging with cloud technologies. Performance and capability management have become intertwined because of the dynamic characteristics of converged infrastructure. Traditional tools and methods, originally created for static, siloed physical infrastructure, do not offer the automation and control required for effectively managing highly virtualized private cloud environments.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-techGolden/20 to-[#113a71]/20 rounded-3xl transform rotate-3 -z-10 blur-sm"></div>
              <motion.img 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Cloud Infrastructure Management" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px] border border-gray-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. CLOUD SERVICES SOLUTION (The Ultimate Fix)
          ========================================= */}
      <section ref={horizontalScrollRef} className="relative h-[600vh] bg-gray-900">
        
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?q=80&w=2070&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-[#C19326] opacity-90"></div>
          </div>

          <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center pt-20 md:pt-0">
            
            {/* LEFT SIDE (Fixed) */}
            <div className="w-full md:w-[40%] lg:w-[450px] flex-shrink-0 px-6 md:pl-16 lg:pl-24 flex flex-col justify-center z-20 h-auto md:h-full">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
                <span className="text-[#113a71]">C</span>loud Services
              </h2>
              <p className="text-white text-lg drop-shadow-md mb-10 leading-relaxed pr-4">
                Tech Hansa service delivers intelligent operations management with complete visibility from application to storage, across physical, virtual, and cloud infrastructure.
              </p>
              <button className="bg-[#113a71] hover:bg-white hover:text-[#113a71] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl transition-all duration-300 w-max">
                Explore All
              </button>
            </div>

            {/* RIGHT SIDE (Scrolling Cards) */}
            <div className="flex-1 w-full h-full flex items-center overflow-hidden z-10 relative">
              
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#C19326] to-transparent z-20 hidden md:block opacity-60"></div>

              {/* =========================================
                  FIX: INLINE STYLES FOR ABSOLUTE LOCKING
                  Tailwind classes can sometimes conflict or be overridden.
                  These inline styles GUARANTEE the cards will stay in one line.
                  ========================================= */}
             <motion.div
  ref={cardsContainerRef}
  style={{ x: xTransform }}
  className="flex flex-nowrap gap-6 md:gap-10 pl-4 md:pl-10 pr-24 items-stretch py-10"
>
                {solutions.map((item, index) => (
                  <div 
                    key={index} 
                    className="w-[320px] md:w-[380px] flex-shrink-0 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform duration-300 group"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#113a71] leading-tight pr-4">
                          {item.title}
                        </h3>
                        <div className="w-12 h-12 rounded-full bg-[#C19326] text-white flex items-center justify-center shrink-0 group-hover:bg-[#113a71] transition-colors duration-300 cursor-pointer shadow-md">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
                        {item.desc}
                      </p>
                    </div>

                    <div className="w-full h-40 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center group-hover:bg-[#f0f4f8] transition-colors duration-300 mt-auto shrink-0">
                       <svg className="w-16 h-16 text-[#C19326] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={item.icon}></path>
                       </svg>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CloudServices;