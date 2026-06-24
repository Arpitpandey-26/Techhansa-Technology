import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // =========================================
  // UPDATED PATHS - Matched exactly with App.jsx
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
      path: "/services/digital-workplace", // Base category route
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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-[70px]' : 'h-[100px]'}`}>
          
          {/* LOGO AND BRAND NAME SECTION */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className={`rounded-full flex items-center justify-center mr-4 shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? 'w-[50px] h-[50px]' : 'w-[88px] h-[88px]'}`}>
              <img 
                src="/src/assets/logo.png" 
                alt="Company Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-bold text-techGolden tracking-tight leading-none  transition-all duration-300 ease-in-out ${isScrolled ? 'text-[22px]' : 'text-[30px]'}`}>
                Techhansa Technology
              </span>
            </div>
          </div>

          {/* DESKTOP MENU LINKS SECTION */}
          <div className="hidden lg:flex space-x-8 items-center relative">
            <Link to="/" className="text-gray-700 hover:text-techGolden font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">
              About us
            </Link>
            
            {/* SERVICES DROPDOWN WITH NESTED SUB-MENUS */}
            <div 
              className={`relative group flex items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-[70px]' : 'h-[100px]'}`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setActiveSubMenu(null);
              }}
            >
              <button className="flex items-center text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>

              {/* Main Services Dropdown Container */}
              {isServicesOpen && (
                <div className={`absolute -left-14 w-60 bg-white shadow-xl border-t-2 border-techGolden animate-fade-in-down transition-all duration-300 ease-in-out ${isScrolled ? 'top-[70px]' : 'top-[100px]'}`}>
                  <div className="py-2">
                    {servicesData.map((service, index) => (
                      <div 
                        key={index}
                        className="relative"
                        onMouseEnter={() => setActiveSubMenu(index)}
                      >
                        <Link 
                          to={service.path} 
                          // Click karne par dropdown close ho jaye (optional but good for UX)
                          onClick={() => setIsServicesOpen(false)}
                          className="flex justify-between items-center px-6 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-50 hover:text-techGolden transition-colors"
                        >
                          {service.name}
                          <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                          </svg>
                        </Link>

                        {/* SIDE-DROPDOWN (Nested Sub-menu) */}
                        {activeSubMenu === index && (
                          <div className="absolute top-0 left-full w-64 bg-white shadow-xl border-l border-gray-100 py-2 ml-0 animate-fade-in-left">
                            {service.subItems.map((subItem, subIndex) => (
                              <Link 
                                key={subIndex}
                                to={subItem.path} 
                                onClick={() => setIsServicesOpen(false)}
                                className="block px-6 py-2.5 text-[14px] text-gray-600 hover:bg-gray-50 hover:text-techGolden hover:pl-8 transition-all duration-200"
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

            <Link to="#" className="text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">Industry</Link>
            <Link to="#" className="text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">Partners</Link>
            <Link to="#" className="text-gray-500 hover:text-techGolden transition duration-300 font-medium text-[17px]">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;