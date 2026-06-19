import React from 'react';

const Hero = () => {
  return (
    /* Full-screen visually striking banner. 
       Height set to standard hero proportion. */
    <section className="relative h-[72vh] w-full flex items-center justify-center overflow-hidden bg-gray-100">
      
      {/* Background Image Setup (Airy and bright like the screenshot) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        /* Yeh ek dummy bright sky image hai taaki apko screenshot jaisa feel aaye. Baad me aap apne balloons/sky ki image laga lena. */
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/fd/11/2b/fd112b2364a7e45cfc19951201516b15.jpg')" }}
      >
        {/* Sirf halka sa shadow effect taaki white text easily read ho sake, no dark overlay */}
        <div className="absolute inset-0 bg-gray-600/30"></div>
      </div>

      {/* Content - Centered, bold, white typography matching screenshot */}
      <div className="relative z-10 text-center   px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Strong headline. Using the exact text from your screenshot for perfect matching. */}
        <h1 className="text-4xl sm:text-2xl md:text-7xl font-base text-white font-serif italic tracking-wide drop-shadow-lg mb-8">
         Accelerate Your Digital Journey with a Digital Transformation company
        </h1>
        
        {/* CTA button. Using our Golden color with a sleek corporate look. */}
        <button className="px-8 py-3 bg-techGolden hover:bg-goldenHover text-white font-medium rounded text-lg transition duration-300 shadow-lg transform hover:-translate-y-1">
          Get Started
        </button>

      </div>
    </section>
  );
};

export default Hero;