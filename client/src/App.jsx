import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

/* =========================================
   COMPONENTS IMPORT
   ========================================= */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

/* =========================================
   MAIN PAGES IMPORT
   ========================================= */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InvestorsPartners from './pages/Investers'; 
import Contactus from './pages/Contactus';

/* =========================================
   SERVICES PAGES IMPORT
   ========================================= */

// 1. Cloud Services
import CloudMain from './pages/services/cloud-services/CloudMain';
import Consulting from './pages/services/cloud-services/Consulting';
import Architecting from './pages/services/cloud-services/Architecting';
import Migrating from './pages/services/cloud-services/Migrating';
import CloudManaged from './pages/services/cloud-services/CloudManaged';
import Monitoring from './pages/services/cloud-services/Monitoring';

// 2. Digital Workplace
import DigitalMain from './pages/services/DigitalWP/DigitalMain';
import DesktopVirtualization from './pages/services/DigitalWP/DesktopVirtualization';
import EndpointSecurity from './pages/services/DigitalWP/EndpointSecurity';
import Enterprise from './pages/services/DigitalWP/Enterprise';
import OfficeCloud from './pages/services/DigitalWP/OfficeCloud';
import UserExperience from './pages/services/DigitalWP/UserExperience';

// 3. Automation
import AutomationMain from './pages/services/Automation/AutomationMain';
import Devops from './pages/services/Automation/Devops';
import ITprocess from './pages/services/Automation/ITprocess';
import ITservice from './pages/services/Automation/ITservice';

// 4. Managed Services
import ManagedMain from './pages/services/ManagedServices/ManagedMain';
import Application from './pages/services/ManagedServices/Application';
import Database from './pages/services/ManagedServices/Database';
import DataCenter from './pages/services/ManagedServices/DataCenter';
import Network from './pages/services/ManagedServices/Network';
import Remote from './pages/services/ManagedServices/Remote';

// 5. Professional Services
import ProfessionalMain from './pages/services/ProfessionalServices/ProfessionalMain';
import Implementation from './pages/services/ProfessionalServices/Implementation';
import Resourcing from './pages/services/ProfessionalServices/Resourcing';

// =========================================
// INDUSTRY PAGES IMPORT
// =========================================
import IndustryMain from './pages/Industry/IndustryMain';
import Banking from './pages/Industry/Banking';
import Technology from './pages/Industry/Technology';
import Healthcare from './pages/Industry/Healthcare';
import Telecom from './pages/Industry/Telecom';
import Retail from './pages/Industry/Retail';

/* =========================================
   SCROLL TO TOP HELPER (Fixed)
   ========================================= */
function ScrollToTopHelper() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable default browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Use setTimeout to ensure the DOM is rendered before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTopHelper />
      <div className="flex flex-col min-h-screen">
        
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Core Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/investors" element={<InvestorsPartners />} />
            <Route path="/contact" element={<Contactus />} />

            {/* --- CLOUD SERVICES ROUTES --- */}
            <Route path="/services/cloud-services" element={<CloudMain />} />
            <Route path="/services/cloud-services/consulting" element={<Consulting />} />
            <Route path="/services/cloud-services/architecting-services" element={<Architecting />} />
            <Route path="/services/cloud-services/migrating-and-deployment" element={<Migrating />} />
            <Route path="/services/cloud-services/cloud-managed-services" element={<CloudManaged />} />
            <Route path="/services/cloud-services/monitoring-and-help-desk" element={<Monitoring />} />

            {/* --- DIGITAL WORKPLACE ROUTES --- */}
            <Route path="/services/digital-workplace" element={<DigitalMain />} />
            <Route path="/services/digital-workplace/office-365" element={<OfficeCloud />} />
            <Route path="/services/digital-workplace/desktop-virtualization" element={<DesktopVirtualization />} />
            <Route path="/services/digital-workplace/endpoint-security" element={<EndpointSecurity />} />
            <Route path="/services/digital-workplace/user-experience-monitoring" element={<UserExperience />} />
            <Route path="/services/digital-workplace/enterprise-app-store" element={<Enterprise />} />

            {/* --- AUTOMATION ROUTES --- */}
            <Route path="/services/automation" element={<AutomationMain />} />
            <Route path="/services/automation/it-service-management" element={<ITservice />} />
            <Route path="/services/automation/devops" element={<Devops />} />
            <Route path="/services/automation/it-process-automation" element={<ITprocess />} />

            {/* --- MANAGED SERVICES ROUTES --- */}
            <Route path="/services/managed-services" element={<ManagedMain />} />
            <Route path="/services/managed-services/data-center-services" element={<DataCenter />} />
            <Route path="/services/managed-services/database-management" element={<Database />} />
            <Route path="/services/managed-services/network-management" element={<Network />} />
            <Route path="/services/managed-services/application-management" element={<Application />} />
            <Route path="/services/managed-services/remote-infrastructure" element={<Remote />} />

            {/* --- PROFESSIONAL SERVICES ROUTES --- */}
            <Route path="/services/professional-services" element={<ProfessionalMain />} />
            <Route path="/services/professional-services/implementation-services" element={<Implementation />} />
            <Route path="/services/professional-services/resourcing" element={<Resourcing />} />

            {/* 🔴 NEW: INDUSTRY ROUTES 🔴 */}
            <Route path="/industry" element={<IndustryMain />} />
            <Route path="/industry/technology" element={<Technology />} />
            <Route path="/industry/banking-finance" element={<Banking />} />
            <Route path="/industry/healthcare" element={<Healthcare />} />
            <Route path="/industry/retail" element={<Retail />} />
            <Route path="/industry/telecom" element={<Telecom />} />

          </Routes>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;