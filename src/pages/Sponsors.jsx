import React from 'react';

// --- Imports as requested ---
import PlatformImg from './assets/sponsors/platform.png';
import Partner1Img from './assets/sponsors/zepco.jpeg';
import Partner2Img from './assets/sponsors/finnco.jpeg';
import Partner3Img from './assets/sponsors/metamorf.jpeg';
import Navbar from '../components/Navbar.jsx';
import Footnote from '../components/Footnote.jsx';
// --- Components ---



// --- Main Page ---

const SponsorsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white font-sans relative overflow-x-hidden">
      
      {/* Background Geometric Grid Effect (Red Tint) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #991b1b 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-12 px-6 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest mb-2 text-white">
            Our <span className="text-red-600">Sponsors</span>
          </h1>
          <div className="h-1 w-16 bg-red-600 mx-auto"></div>
        </div>

        {/* Platform Sponsor - Reduced Size */}
        <div className="w-full max-w-3xl mb-16 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-4 text-red-600 text-xs font-bold tracking-[0.3em] uppercase border border-red-900/50 py-1">
            Platform Sponsor
          </div>
          
          <div className="group w-full bg-neutral-900/40 border border-red-900/30 hover:border-red-600/60 p-8 transition-all duration-500">
            {/* Geometric accents */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-red-600"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-600"></div>

            <div className="flex flex-col items-center text-center">
              {/* Image Container: Object-contain for rectangular logos */}
              <div className="w-full h-32 md:h-40 flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={PlatformImg} 
                  alt="Platform Sponsor" 
                  className="max-w-full max-h-full object-contain  transition-all duration-500"
                />
              </div>
         
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="w-full">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8 text-center">
            Strategic Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: Partner1Img, name: "Zepco Technologies Pvt. Ltd." },
              { img: Partner2Img, name: "Finndot by Anomapro" },
              { img: Partner3Img, name: "Metamorf Art and Design" }
            ].map((sponsor, index) => (
              <div key={index} className="group relative bg-neutral-900/20 border border-gray-800 hover:border-red-600 p-6 flex flex-col items-center justify-between transition-all duration-300 hover:bg-neutral-900/60">
                
                {/* Rectangular Image Container */}
                <div className="w-full h-24 mb-6 flex items-center justify-center bg-black/50 border border-white/5 p-2">
                   <img 
                    src={sponsor.img} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
                
                <h4 className="text-sm md:text-base font-bold tracking-wide text-center uppercase group-hover:text-red-500 transition-colors">
                  {sponsor.name}
                </h4>
                
                {/* Corner Decor */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-red-600/0 group-hover:border-r-red-600 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footnote />
    </div>
  );
};

export default SponsorsPage;