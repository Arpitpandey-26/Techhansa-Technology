import React from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    /* min-h-screen: Taki page kam se kam puri screen ki height le
      bg-techLight: Jo humne abhi v4 index.css mein define kiya hai
      selection classes: Jab user text select karega toh professional golden color aayega
    */
    <div className="min-h-screen bg-techLight font-sans selection:bg-techGolden selection:text-techDark">
      <HomePage />
    </div>
  );
}

export default App;