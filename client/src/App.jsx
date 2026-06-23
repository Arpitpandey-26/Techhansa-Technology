import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components Import */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

/* Pages Import */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; 
import CloudServices from './pages/services/CloudServices';

function App() {
  return (
    // Router hamari website mein navigation enable karta hai
    <Router>
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar har page ke top par rahega */}
        <Navbar />

        {/* Routes decide karta hai ki URL ke hisaab se kya dikhana hai */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/cloud-services" element={<CloudServices />} />
          </Routes>
        </main>

        {/* Footer har page ke bottom par rahega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;