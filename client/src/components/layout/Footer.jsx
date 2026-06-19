import React from 'react';

const Footer = () => {


  return (
    <footer className="w-full flex flex-col">
      
      {/* =========================================
          TOP BANNER SECTION
          Dark blue connection banner with CTA button
          ========================================= */}
      <div className="relative bg-[#113a71] py-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4 md:mb-0">
            Connect with Techhansa
          </h2>
          <a 
            href="#contact" 
            className="bg-white text-[#113a71] hover:text-techGolden hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] px-8 py-3 rounded text-[15px] font-bold transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* =========================================
          MAIN FOOTER SECTION 
          Light textured background with 4-column layout
          ========================================= */}
      <div className="relative bg-[#f4f5f7] pt-12 pb-8 border-t border-gray-200">
        
        {/* CSS Dotted Texture Overlay for professional depth */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-80"
          style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1.4px, transparent 1.6px)',
            backgroundSize: '24px 26px'
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Footer Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* COLUMN 1: Brand Logo & Information */}
            <div className="flex flex-col pr-4">
              <div className="flex items-center mb-6 cursor-pointer">
                {/* Logo Container */}
                <div className="w-22 h-22 bg-white border border-gray-200 rounded-full flex items-center justify-center mr-3 shadow-sm overflow-hidden">
                  
                     <img 
                src="/src/assets/logo.png" 
                alt="Company Logo" 
                className="w-auto h-auto  "
              />
                  
                </div>
                {/* Brand Typography perfectly matching Navbar style */}
                <div className="flex flex-col justify-center">
                  <span className="text-[22px] font-extrabold text-techGolden tracking-tight leading-none ">
                    Techhansa
                  </span>
                  <span className="text-[16px] text-gray-500 font-serif italic mt-1 tracking-wide leading-none">
                    Technology
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                Your strategic IT partner for enterprise success. We engineer future-ready solutions across Cloud, Consulting, and Managed Services.
              </p>
            </div>

            {/* COLUMN 2: Our Services */}
            <div>
              <h3 className="text-[17px] font-bold text-[#113a71] mb-5 ml-10 tracking-wide">
                Our Services
              </h3>
              <ul className="space-y-3 ml-10">
                {['Cloud Services', 'Digital Workplace', 'Automation', 'Managed Services', 'Professional Services'].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-gray-400 mr-2 text-[10px] mt-1.5 group-hover:text-techGolden transition-colors">●</span>
                    <a href="#" className="text-[14px] text-gray-600 group-hover:text-techGolden transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: Useful Links */}
            <div>
              <h3 className="text-[17px] font-bold text-[#113a71] mb-5 ml-10 tracking-wide">
                Useful Links
              </h3>
              <ul className="space-y-3 ml-10">
                {['About Us', 'Industry', 'Partners', ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-gray-400 mr-2 text-[10px] mt-1.5 group-hover:text-techGolden transition-colors">●</span>
                    <a href="#" className="text-[14px] text-gray-600 group-hover:text-techGolden transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: Can We Help You */}
            <div>
              <h3 className="text-[17px] font-bold text-[#113a71] mb-5 ml-8 tracking-wide">
                Can We Help You
              </h3>
              <ul className="space-y-3 ml-8">
                {['Contact Us', 'Enquiry Form'].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-gray-400 mr-2 text-[10px] mt-1.5 group-hover:text-techGolden transition-colors">●</span>
                    <a href="#" className="text-[14px] text-gray-600 group-hover:text-techGolden transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM COPYRIGHT BAR
          ========================================= */}
      <div className="bg-white py-4 border-t border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-600">
          <p className="font-medium">© {new Date().getFullYear()} Techhansa Technology. All rights reserved.</p>
          
          <div className="flex items-center space-x-6 mt-3 md:mt-0">
            <div className="flex space-x-4 border-r border-gray-300 pr-6">
               <a href="#" className="hover:text-techGolden font-medium transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-techGolden font-medium transition-colors">Twitter</a>
            </div>
            
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-6 -top-5 w-10 h-10 bg-white border border-gray-200 hover:bg-techGolden text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

    </footer>
  );
};

export default Footer;