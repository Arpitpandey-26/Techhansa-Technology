import React from 'react';
import { Cloud, MonitorSmartphone, Cpu, Laptop, ChevronRight } from 'lucide-react';

const Technology = () => {
  // Content extracted from the provided screenshot
  const sections = [
    {
      title: "Enterprise Software",
      content: (
        <>
          <p className="mb-4">Enterprise software expectations have undergone a profound transformation in the past few years. Recent technological breakthroughs, including the Cloud, mobility, and AI, have triggered a significant transition toward SaaS-based models. As a result, enterprise purchasers now anticipate achieving a favorable return on investment in a matter of months.</p>
          <p className="mb-4">To thrive in the contemporary enterprise environment, Independent Software Vendors must embrace agile development methodologies to guarantee their products remain current with the latest features.</p>
          <p>Given our deep comprehension of evolving technology landscapes and extensive expertise in Product Engineering, TechHansa is the perfect ally for your enterprise software development needs.</p>
        </>
      ),
      icon: <Cloud size={56} strokeWidth={1.5} />,
      accent: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Consumer Software",
      content: (
        <>
          <p className="mb-4">The constant quest for enhanced User Experiences serves as the driving force behind innovation in consumer software. Contemporary users anticipate applications to offer extensive personalization, mobility, immediate support, and top-tier security.</p>
          <p className="mb-4">In light of the demanding nature of today's software landscape, providers must take proactive rather than reactive approaches.</p>
          <p>As a frontrunner in data-driven UX Engineering, TechHansa equips you to confront these challenges directly and deliver software that surpasses consumer expectations.</p>
        </>
      ),
      icon: <MonitorSmartphone size={56} strokeWidth={1.5} />,
      accent: "from-emerald-50 to-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      title: "Semiconductors",
      content: (
        <>
          <p className="mb-4">The rise of the Internet of Things (IoT) and the increasing digitization of sensors have thrust the semiconductor industry into the spotlight.</p>
          <p className="mb-4">Hardware manufacturers are recognizing that the seamless integration of modern software into their value chain presents the most significant challenge in adapting to the digital age.</p>
          <p>As a pioneering force in software engineering, TechHansa empowers semiconductor companies to proactively embrace digital innovation and effectively address user interface requirements.</p>
        </>
      ),
      icon: <Cpu size={56} strokeWidth={1.5} />,
      accent: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Consumer Electronics",
      content: (
        <>
          <p className="mb-4">AI and the Internet of Things (IoT) have given rise to futuristic expectations in the realm of consumer electronics. This has placed hardware manufacturers in the position where they must acknowledge that "smart" software is the linchpin of their survival in this digital era.</p>
          <p className="mb-4">The primary challenges center on effectively overseeing full-stack development to fulfill the growing requirements for device connectivity and UX design.</p>
          <p>Drawing upon our extensive experience as leaders in digital product engineering, TechHansa stands ready to collaborate with you in crafting a user interface that complements the sophistication of your electronic hardware.</p>
        </>
      ),
      icon: <Laptop size={56} strokeWidth={1.5} />,
      accent: "from-[#fff8e7] to-[#fef0c7]", // Golden tint
      iconColor: "text-[#D4A22E]"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fafbfc] font-['Inter',sans-serif] overflow-hidden">
      
      {/* =======================================
          LIGHT HERO SECTION (Classy & Smooth)
          ======================================= */}
      <div className="relative pt-32 pb-24 px-4 overflow-hidden bg-white border-b border-slate-100">
        {/* Soft 3D Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A22E]/10 rounded-full mix-blend-multiply filter blur-[80px] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[80px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A22E]/10 border border-[#D4A22E]/20 text-[#D4A22E] mb-6 shadow-sm">
            <span className="text-xs font-bold tracking-widest uppercase">Industry Focus</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-slate-900">
            Technology
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-[#D4A22E] to-transparent mx-auto mb-8 rounded-full opacity-80"></div>
          
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
            The technology sector is undergoing rapid evolution with each passing hour. Progress in fields such as Artificial Intelligence, machine learning, and the Internet of Things is compelling organizations to update their operational foundations in order to meet increasingly elevated consumer demands. Today, technology companies must view the challenges of digital transformation as avenues for growth rather than as potential threats. TechHansa stands ready to bridge this gap.
          </p>
        </div>
      </div>

      {/* =======================================
          LAYERED 3D ALTERNATING SECTIONS
          ======================================= */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        <div className="space-y-32">
          {sections.map((section, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 group`}
              >
                
                {/* 3D Visual Concept Container */}
                <div className="w-full lg:w-5/12 relative">
                  {/* Backdrop shadow card */}
                  <div className="absolute inset-0 bg-slate-200/50 rounded-3xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                  
                  {/* Main Glass/Light Card */}
                  <div className="relative bg-white border border-slate-100 rounded-3xl p-10 aspect-square flex flex-col items-center justify-center shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_-15px_rgba(212,162,46,0.15)] z-10 overflow-hidden">
                    
                    {/* Soft gradient background tied to the specific section */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.accent} opacity-30`}></div>
                    
                    {/* The Icon inside a floating 3D puck */}
                    <div className="relative z-20 w-32 h-32 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white/60 transform transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3">
                      <div className={`${section.iconColor} drop-shadow-md`}>
                        {section.icon}
                      </div>
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-white shadow-md animate-bounce" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute bottom-12 right-10 w-6 h-6 rounded-full bg-white shadow-md animate-pulse" style={{ animationDuration: '4s' }}></div>
                  </div>
                </div>

                {/* Text Content Container */}
                <div className="w-full lg:w-7/12 relative z-20">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] border border-slate-50 transition-all duration-500 hover:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.06)]">
                    
                    {/* Section Accent Line */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-1.5 h-8 bg-[#D4A22E] rounded-full"></div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                        {section.title}
                      </h2>
                    </div>

                    <div className="text-slate-600 text-[15px] lg:text-base leading-relaxed font-light">
                      {section.content}
                    </div>
                    
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Technology;