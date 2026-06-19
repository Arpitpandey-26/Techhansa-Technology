// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import AboutOverview from '../components/home/AboutOverview';
import ServicesSummary from '../components/home/ServicesSummary';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <div className="font-sans bg-techLight text-gray-800">
      {/* Sticky Header with Multi-level Dropdown */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Full-screen Hero Section with CTA */}
        <Hero />
        
        {/* About Techhansa */}
        <AboutOverview />
        
        {/* Services Cards with Hover & AOS animations */}
        <ServicesSummary />
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;