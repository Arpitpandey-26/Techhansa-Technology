import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  // Desktop States
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState(null);

  const location = useLocation();

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu when route/page changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileActiveSubMenu(null);
  }, [location.pathname]);

  // =========================================
  // PATHS DATA
  // =========================================
  const servicesData = [
    {
      name: "Cloud Services",
      path: "/services/cloud-services",
      subItems: [
        { name: "Consulting", path: "/services/cloud-services/consulting" },
        { name: "Architecting Services", path: "/services/cloud-services/architecting-services" },
        { name: "Migrating and Deployment", path: "/services/cloud-services/migrating-and-deployment" },
        { name: "Cloud Managed Services", path: "/services/cloud-services/cloud-managed-services" },
        { name: "Monitoring and Help Desk", path: "/services/cloud-services/monitoring-and-help-desk" }
      ]
    },
    {
      name: "Digital Workplace",
      path: "/services/digital-workplace",
      subItems: [
        { name: "Office on Cloud - O365", path: "/services/digital-workplace/office-365" },
        { name: "Desktop Virtualization", path: "/services/digital-workplace/desktop-virtualization" },
        { name: "Endpoint Security", path: "/services/digital-workplace/endpoint-security" },
        { name: "User Experience Monitoring", path: "/services/digital-workplace/user-experience-monitoring" },
        { name: "Enterprise App Store", path: "/services/digital-workplace/enterprise-app-store" }
      ]
    },
    {
      name: "Automation",
      path: "/services/automation",
      subItems: [
        { name: "IT Service Management", path: "/services/automation/it-service-management" },
        { name: "DevOps", path: "/services/automation/devops" },
        { name: "IT Process Automation", path: "/services/automation/it-process-automation" }
      ]
    },
    {
      name: "Managed Services",
      path: "/services/managed-services",
      subItems: [
        { name: "Data Center Services", path: "/services/managed-services/data-center-services" },
        { name: "Database Management", path: "/services/managed-services/database-management" },
        { name: "Network Management", path: "/services/managed-services/network-management" },
        { name: "Application Management", path: "/services/managed-services/application-management" },
        { name: "Remote Infrastructure Management", path: "/services/managed-services/remote-infrastructure" }
      ]
    },
    {
      name: "Professional Services",
      path: "/services/professional-services",
      subItems: [
        { name: "Implementation Services", path: "/services/professional-services/implementation-services" },
        { name: "Resourcing", path: "/services/professional-services/resourcing" }
      ]
    }
  ];

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ease-in-out relative ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm border-b border-gray-100'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`w-full flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-[70px]' : 'h-[100px]'}`}>
          
          {/* =========================================
              LOGO AND BRAND NAME SECTION
              ========================================= */}
          {/* Fixed: Added flex-1 and min-w-0 to allow proper shrinking/truncating */}
          <div className="flex-1 flex items-center cursor-pointer min-w-0">
            <div className={`shrink-0 rounded-full flex items-center justify-center mr-2 md:mr-4 shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? 'w-[36px] h-[36px] md:w-[50px] md:h-[50px]' : 'w-[45px] h-[45px] md:w-[88px] md:h-[88px]'}`}>
              <img 
                src="/src/assets/logo.png" 
                alt="Company Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0 pr-2">
              {/* Fixed: Changed whitespace-nowrap to truncate to prevent pushing button off screen */}
              <span className={`font-bold text-[#D4A22E] tracking-tight leading-tight transition-all duration-300 ease-in-out truncate ${isScrolled ? 'text-[16px] sm:text-[18px] md:text-[22px]' : 'text-[18px] sm:text-[20px] md:text-[30px]'}`}>
                Techhansa Technology
              </span>
            </div>
          </div>

          {/* =========================================
              DESKTOP MENU LINKS (Hidden on Mobile)
              ========================================= */}
          <div className="hidden lg:flex shrink-0 space-x-4 xl:space-x-8 items-center relative h-full">
            <Link to="/" className="text-gray-700 hover:text-[#D4A22E] font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-[#D4A22E] transition duration-300 font-medium text-[17px]">
              About us
            </Link>
            
            {/* Desktop Services Dropdown */}
            <div 
              className={`relative group flex items-center h-full cursor-pointer`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setActiveSubMenu(null);
              }}
            >
              <button className="flex items-center text-gray-500 hover:text-[#D4A22E] transition duration-300 font-medium text-[17px] outline-none">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {isServicesOpen && (
                <div className={`absolute -left-14 w-60 bg-white shadow-xl border-t-2 border-[#D4A22E] animate-fade-in-down transition-all duration-300 top-full`}>
                  <div className="py-2">
                    {servicesData.map((service, index) => (
                      <div 
                        key={index}
                        className="relative"
                        onMouseEnter={() => setActiveSubMenu(index)}
                      >
                        <Link 
                          to={service.path} 
                          onClick={() => setIsServicesOpen(false)}
                          className="flex justify-between items-center px-6 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-50 hover:text-[#D4A22E] transition-colors"
                        >
                          {service.name}
                          <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                          </svg>
                        </Link>

                        {/* Desktop Nested Sub-menu */}
                        {activeSubMenu === index && (
                          <div className="absolute top-0 left-full w-64 bg-white shadow-xl border-l border-gray-100 py-2 ml-0 animate-fade-in-left">
                            {service.subItems.map((subItem, subIndex) => (
                              <Link 
                                key={subIndex}
                                to={subItem.path} 
                                onClick={() => setIsServicesOpen(false)}
                                className="block px-6 py-2.5 text-[14px] text-gray-600 hover:bg-gray-50 hover:text-[#D4A22E] hover:pl-8 transition-all duration-200"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                        
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="#" className="text-gray-500 hover:text-[#D4A22E] transition duration-300 font-medium text-[17px]">Industry</Link>
            <Link to="#" className="text-gray-500 hover:text-[#D4A22E] transition duration-300 font-medium text-[17px]">Partners</Link>
            <Link to="#" className="text-gray-500 hover:text-[#D4A22E] transition duration-300 font-medium text-[17px]">Contact Us</Link>
          </div>

          {/* =========================================
              MOBILE MENU HAMBURGER BUTTON
              ========================================= */}
          {/* Fixed: Added shrink-0 and ml-2 to guarantee button visibility */}
          <div className="flex lg:hidden items-center shrink-0 ml-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#D4A22E] focus:outline-none p-1 sm:p-2 transition-colors duration-200"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* =========================================
          MOBILE MENU OVERLAY (Smooth Dropdown)
          ========================================= */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out overflow-hidden shadow-lg border-b ${
          isMobileMenuOpen ? 'max-h-[85vh] overflow-y-auto opacity-100 border-gray-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link to="/" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-[#D4A22E] hover:bg-gray-50 rounded-xl transition-colors">Home</Link>
          <Link to="/about" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-[#D4A22E] hover:bg-gray-50 rounded-xl transition-colors">About us</Link>
          
          {/* Mobile Services Accordion */}
          <div>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-800 hover:text-[#D4A22E] hover:bg-gray-50 rounded-xl transition-colors outline-none"
            >
              Services
              <svg className={`w-5 h-5 transform transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-[#D4A22E]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {/* Mobile Categories Accordion */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileServicesOpen ? 'max-h-[1200px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-4">
                {servicesData.map((service, index) => (
                  <div key={index} className="space-y-1">
                    <button
                      onClick={() => setMobileActiveSubMenu(mobileActiveSubMenu === index ? null : index)}
                      className="w-full flex justify-between items-center px-4 py-2.5 text-[15px] font-bold text-[#113a71] hover:text-[#D4A22E] rounded-lg transition-colors outline-none"
                    >
                      {service.name}
                      <svg className={`w-4 h-4 transform transition-transform duration-300 ${mobileActiveSubMenu === index ? 'rotate-90 text-[#D4A22E]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>

                    {/* Mobile Nested Sub-items */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileActiveSubMenu === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 pb-2 space-y-1">
                        {service.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm font-medium text-gray-500 hover:text-[#D4A22E] hover:bg-gray-50 rounded-lg transition-colors border-l-2 border-transparent hover:border-[#D4A22E]"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="#" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-[#D4A22E] hover:bg-gray-50 rounded-xl transition-colors">Industry</Link>
          <Link to="#" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-[#D4A22E] hover:bg-gray-50 rounded-xl transition-colors">Partners</Link>
          <Link to="#" className="block px-4 py-3 text-base font-medium text-gray-800 hover:text-[#D4A22E] hover:bg-gray-50 rounded-xl transition-colors">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;