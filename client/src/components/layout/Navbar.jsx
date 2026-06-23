import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  /* State to track if the user has scrolled down */
  const [isScrolled, setIsScrolled] = useState(false);

  /* Effect to listen to the scroll event and update state */
  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls down more than 50px, shrink the header
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Navigation container - Adding smooth transition and dynamic blur/shadow on scroll */
    <nav className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main wrapper - Height shrinks from 100px to 70px on scroll */}
        <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-[70px]' : 'h-[100px]'}`}>
          
          {/* =========================================
            LOGO AND BRAND NAME SECTION
            ========================================= */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            
            {/* Logo Image Container - Shrinks from 88px to 50px smoothly */}
            <div className={`rounded-full flex items-center justify-center mr-4 shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? 'w-[50px] h-[50px]' : 'w-[88px] h-[88px]'}`}>
              <img 
                src="/src/assets/logo.png" 
                alt="Company Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Brand Typography - Text sizes shrink dynamically */}
            <div className="flex flex-col justify-center">
              <span className={`font-bold text-techGolden tracking-tight leading-none  transition-all duration-300 ease-in-out ${isScrolled ? 'text-[22px]' : 'text-[30px]'}`}>
                Techhansa Technology
              </span>
              {/* <span className={`text-gray-500 font-serif italic tracking-wide leading-none transition-all duration-300 ease-in-out ${isScrolled ? 'text-[16px] mt-0.5' : 'text-[25px] mt-1'}`}>
                Technology
              </span> */}
            </div>
          </div>

          {/* =========================================
            DESKTOP MENU LINKS SECTION
            ========================================= */}
          <div className="hidden lg:flex space-x-8 items-center">
           <a href="/" className="text-gray-700 hover:text-techGolden font-medium transition-colors">
  Home
</a>
             <a href="/about" className="text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">
                About us
              </a>
            
            {/* Services Dropdown - Trigger area height syncs with navbar height */}
            <div 
              className={`relative group flex items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-[70px]' : 'h-[100px]'}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {/* Dropdown Menu Items - Dropdown position adjusts based on scroll state */}
              {isServicesOpen && (
                <div className={`absolute left-0 w-64 bg-white shadow-lg border-t-2 border-techGolden animate-fade-in-down transition-all duration-300 ease-in-out ${isScrolled ? 'top-[70px]' : 'top-[100px]'}`}>
                  <div className="py-2">
                    <a href="/services/cloud-services" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-techGolden transition-colors">Cloud Services</a>
                    <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-techGolden transition-colors">Digital Workplace</a>
                    <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-techGolden transition-colors">Automation</a>
                    <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-techGolden transition-colors">Managed Services</a>
                    <a href="#" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-techGolden transition-colors">Professional Services</a>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">Industry</a>
            <a href="#" className="text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">Partners</a>
            
            <a href="#" className="text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;