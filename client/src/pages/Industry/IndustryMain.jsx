import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Landmark, HeartPulse, ShoppingBag, RadioTower, ArrowRight, Activity } from 'lucide-react';

const IndustryMain = () => {
  // Content extracted exactly from your screenshot
  const industries = [
    {
      title: "Technology",
      desc: "The technology industry is evolving by the hour. Advancements in areas like Artificial Intelligence, machine learning, and Internet of Things...",
      icon: <Monitor size={32} strokeWidth={1.5} />,
      path: "/industry/technology"
    },
    {
      title: "Banking & Finance",
      desc: "Digital disruption is affecting the Banking, Finance and Insurance industries at every level. The rise of mobile convenience and online...",
      icon: <Landmark size={32} strokeWidth={1.5} />,
      path: "/industry/banking-finance"
    },
    {
      title: "Healthcare",
      desc: "The Healthcare industry has always been on the forefront of innovation. Advancements in areas like Artificial Intelligence and Big Data...",
      icon: <HeartPulse size={32} strokeWidth={1.5} />,
      path: "/industry/healthcare"
    },
    {
      title: "Retail",
      desc: "The digital revolution has drastically transformed the buying-selling process. Increased competition within online commerce has...",
      icon: <ShoppingBag size={32} strokeWidth={1.5} />,
      path: "/industry/retail"
    },
    {
      title: "Telecom",
      desc: "Technology trends and rising consumer demands have inundated the Telecom industry with challenges. The digitally-evolving...",
      icon: <RadioTower size={32} strokeWidth={1.5} />,
      path: "/industry/telecom"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] font-['Inter',sans-serif]">
      
      {/* =======================================
          HERO SECTION (Clean, Corporate, Elegant)
          ======================================= */}
      <div className="relative bg-[#0f172a] text-white pt-32 pb-28 px-4 overflow-hidden border-b-2 border-[#D4A22E]/20">
        {/* Subtle Background Glow (Not overpowering) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4A22E] rounded-full blur-[150px] opacity-[0.08] pointer-events-none"></div>
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4A22E] mb-6">
            <Activity size={16} />
            <span className="text-xs font-semibold tracking-widest uppercase">Enterprise Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Industry <span className="text-[#D4A22E]">Solutions</span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
            TechHansa empowers various industries to advance toward rapid growth and the exploration of fresh revenue opportunities through the utilization of big data and analytics. Our cutting-edge solutions are meticulously crafted to tackle the unique challenges faced by diverse sectors, thereby facilitating genuine digital transformation. We are committed to assisting our clients in maintaining an innovative mindset supported by data-informed decision-making.
          </p>
        </div>
      </div>

      {/* =======================================
          MAIN CONTENT SECTION (Smooth Cards)
          ======================================= */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0f172a] mb-4">
            Intelligent <span className="text-[#D4A22E]">Operations</span>
          </h2>
          <div className="w-16 h-1 bg-[#D4A22E] mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-500">
            Tech Hansa service delivers intelligent operations management with complete visibility from application to storage, across physical, virtual, and cloud infrastructure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link 
              key={index} 
              to={industry.path}
              className="group flex flex-col bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.08)] hover:border-[#D4A22E]/30 transition-all duration-500 ease-out transform hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle Top Accent Line that appears on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A22E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#D4A22E]/10 flex items-center justify-center text-[#0f172a] group-hover:text-[#D4A22E] transition-colors duration-500 mb-8">
                {industry.icon}
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#D4A22E] transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {industry.desc}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="mt-auto flex items-center text-sm font-semibold text-[#0f172a] group-hover:text-[#D4A22E] transition-colors duration-300">
                Read More 
                <ArrowRight size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default IndustryMain;