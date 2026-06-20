import React, { useState, useEffect, useRef } from 'react';

/* =========================================
   CUSTOM ANIMATED COUNTER COMPONENT
   ========================================= */
const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let current = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));
      
      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= target) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 flex justify-center items-center">
      {count}
      <span className="text-techGolden">{suffix}</span>
    </div>
  );
};

/* =========================================
   ABOUT OVERVIEW MAIN COMPONENT
   ========================================= */
const AboutOverview = () => {

  const featureCards = [
    {
      title: "Enterprise Software Solutions",
      subtitle: "Building Scalable Digital Foundations",
      desc: "Empower your organization with custom enterprise applications designed to streamline operations, enhance productivity, and support long-term business growth. We develop scalable solutions tailored to your unique business requirements.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "Cloud & Digital Transformation",
      subtitle: "Modernize. Optimize. Accelerate.",
      desc: "Transform legacy systems into agile digital ecosystems through cloud adoption, automation, and modern workplace solutions. We help businesses improve efficiency, collaboration, and operational resilience.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      title: "Emerging Technology & Innovation",
      subtitle: "Future-Ready Solutions for Tomorrow",
      desc: "Leverage AI, IoT, data-driven insights, and next-generation technologies to create innovative products, improve customer experiences, and unlock new opportunities for growth.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]  relative overflow-hidden" id="about">
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================
            HEADER SECTION
            ========================================= */}
        <div className="text-center -mt-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4 tracking-tight">
            <span className="text-techGolden text-5xl md:text-6xl">A</span>bout Techhansa Technology
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-[#0d3863] max-w-3xl mx-auto">
            We believe digital transformation is more than adopting new technologies—it's about creating smarter, faster, and more connected businesses.
          </p>
        </div>

        {/* =========================================
            CONTENT GRID (Text & Main Image)
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              We help organizations navigate the digital landscape through innovative software solutions, cloud services, automation, and digital workplace strategies.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Our team works closely with clients to understand their unique challenges and develop tailored solutions that improve operational efficiency, strengthen customer engagement, and unlock new growth opportunities. From enterprise systems to next-generation digital products, we are committed to building technology that delivers measurable business impact.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-techGolden hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
                <p className="text-sm text-gray-600">
                  To empower organizations with innovative digital solutions that drive growth, efficiency, and long-term success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#1e3a8a] hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
                <p className="text-sm text-gray-600">
                  To become a trusted global partner in digital transformation by delivering technology-driven innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Techhansa Team" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-techGolden/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* =========================================
            FEATURE CARDS SECTION
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featureCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="h-56 overflow-hidden relative">
                 <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                 />
                 
                 {/* Standard dark gradient overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

                 {/* =========================================
                     CENTER-OUT SHUTTER EFFECT (The Magic)
                     Starts from the center (scale-x-0) and expands to left/right on hover (scale-x-100).
                     Removed blur, keeping it as a clean glossy white layer.
                     ========================================= */}
                 <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-400 ease-in-out pointer-events-none"></div>
              </div>
              
              {/* Card Content Area */}
              <div className="p-8 relative z-10 bg-white">
                 <h3 className="text-2xl font-bold text-techGolden mb-2 tracking-tight">
                    {card.title}
                 </h3>
                 <p className="text-[#0d3863] font-semibold text-[15px] italic mb-4">
                    {card.subtitle}
                 </p>
                 <p className="text-gray-600 leading-relaxed text-[15px]">
                    {card.desc}
                 </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            DYNAMIC STATS SECTION
            ========================================= */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 py-12 px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
            
            <div className="flex flex-col items-center">
              <AnimatedCounter target={10} suffix="+" />
              <span className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-1">Years Experience</span>
            </div>

            <div className="flex flex-col items-center">
              <AnimatedCounter target={50} suffix="+" />
              <span className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-1">Projects Delivered</span>
            </div>

            <div className="flex flex-col items-center">
              <AnimatedCounter target={20} suffix="+" />
              <span className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-1">Tech Experts</span>
            </div>

            <div className="flex flex-col items-center">
              <AnimatedCounter target={100} suffix="%" />
              <span className="text-gray-500 font-medium uppercase tracking-wider text-sm mt-1">Client-Centric</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutOverview;