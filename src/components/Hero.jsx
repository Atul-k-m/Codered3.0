import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import DotGrid from "../background/Dotgrid.jsx";
import Plasma from "./Plasma";
import { Particles } from "react-tsparticles";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import Element1 from "../assets/elements/1.svg";
import Element2 from "../assets/elements/2.svg";
import Element4 from "../assets/elements/4.svg";
import Element5 from "../assets/elements/5.svg";
import Element6 from "../assets/elements/6.svg";
import Element7 from "../assets/elements/7.svg";
import Element8 from "../assets/elements/8.svg";
import Element9 from "../assets/elements/9.svg";
import Element10 from "../assets/elements/10.svg";
import Element11 from "../assets/elements/11.svg";
import Element13 from "../assets/elements/13.svg";
import Element14 from "../assets/elements/14.svg";
import Element15 from "../assets/elements/15.svg";
import Element16 from "../assets/elements/16.svg";
import Element17 from "../assets/elements/17.svg";
import Element19 from "../assets/elements/19.svg";
import Element20 from "../assets/elements/20.svg";
import Element21 from "../assets/elements/21.svg";



export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-12-20T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, mins, secs });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <section className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Background elements - subtle and far */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src={Element2} alt="" className="absolute -top-20 -right-32 w-64 md:w-80 opacity-8 mix-blend-screen -rotate-12" style={{ filter: "saturate(1.1) brightness(0.9)" }} />
        <img src={Element8} alt="" className="absolute -bottom-24 -left-28 w-56 md:w-72 opacity-6 mix-blend-screen rotate-45" style={{ filter: "saturate(1.0) brightness(0.85)" }} />
      </div>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/bmslogo.png" 
              alt="BMS Institute" 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain rounded-full"
            />
            <img 
              src="/crlogo.png" 
              alt="CodeRed 3.0" 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
            />
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="/prize-pool" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              Prizes
            </a>
            <a href="/problem-statements" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              Problem Statements
            </a>
            <a href="#team" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              Team
            </a>
            <a href="/faq" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              FAQ
            </a>
            <a href="#sponsors" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              Sponsors
            </a>
          </div>
          
          <div className="flex items-center gap-3 pr-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-red-600 transition-colors shrink-0"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <InteractiveHoverButton 
              className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm tracking-wide font-semibold shrink-0"
            >
              <span className="hidden sm:inline">Register Now</span>
              <span className="sm:hidden">Register</span>
            </InteractiveHoverButton>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        <div className={`mobile-menu-container absolute right-0 top-0 h-full w-80 bg-black border-l border-red-900/30 transform transition-transform duration-300 ease-in-out z-60 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <img src="/crlogo.png" alt="CodeRed 3.0" className="h-8 w-8 object-contain" />
              <img src="/bmslogo.png" alt="BMS Institute" className="h-8 w-8 object-contain rounded-full" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-300 hover:text-red-600 transition-colors"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 space-y-6">
            <a href="/prize-pool" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2" style={{ fontFamily: 'Grotesk, sans-serif' }} onClick={() => setIsMobileMenuOpen(false)}>
              Prizes
            </a>
            <a href="/problem-statements" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2" style={{ fontFamily: 'Grotesk, sans-serif' }} onClick={() => setIsMobileMenuOpen(false)}>
              Problem Statements
            </a>
            <a href="#team" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2" style={{ fontFamily: 'Grotesk, sans-serif' }} onClick={() => setIsMobileMenuOpen(false)}>
              Team
            </a>
            <a href="/faq" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2" style={{ fontFamily: 'Grotesk, sans-serif' }} onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="#sponsors" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2" style={{ fontFamily: 'Grotesk, sans-serif' }} onClick={() => setIsMobileMenuOpen(false)}>
              Sponsors
            </a>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6">
            <InteractiveHoverButton 
              className="w-full bg-red-600 hover:bg-red-700 border-red-600 text-white px-6 py-3 text-sm tracking-wide font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </InteractiveHoverButton>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 pt-20 sm:pt-24">
        <div className="w-full max-w-5xl mx-auto text-center relative">
          <p className="text-gray-300 text-xs sm:text-sm md:text-base tracking-[0.3em] mb-4 sm:mb-6 uppercase font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>
            ECELL × BMSIT Presents
          </p>

          <div className="relative">
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 sm:mb-6 relative z-10"
            >
              <span className="italic font-light" style={{ fontFamily: 'Riccione, cursive' }}>CODE RED </span>
              <span className="not-italic font-light text-red-600" style={{ fontFamily: 'Robit, sans-serif' }}>3.0</span>
            </h1>
            
            {/* Decorative elements around the title */}
            <div className="absolute inset-0 pointer-events-none select-none">
              {/* Red/yellow priority elements close to text */}
              <img src={Element21} alt="" className="absolute -top-8 -right-12 sm:-right-16 md:-right-20 w-16 sm:w-20 md:w-24 opacity-50 mix-blend-screen rotate-15" style={{ filter: "saturate(2) brightness(1.3)" }} />
              <img src={Element15} alt="" className="absolute -top-4 -left-8 sm:-left-12 md:-left-16 w-14 sm:w-16 md:w-20 opacity-45 mix-blend-screen -rotate-12" style={{ filter: "saturate(1.8) hue-rotate(10deg)" }} />
              <img src={Element14} alt="" className="absolute -bottom-6 right-8 sm:right-12 md:right-16 w-12 sm:w-14 md:w-18 opacity-50 mix-blend-screen rotate-25" style={{ filter: "saturate(1.7) hue-rotate(-5deg)" }} />
              <img src={Element10} alt="" className="absolute -bottom-4 -left-6 sm:-left-10 md:-left-12 w-10 sm:w-12 md:w-16 opacity-55 mix-blend-screen -rotate-30" style={{ filter: "saturate(1.6) brightness(1.2)" }} />
              
              {/* Secondary accent elements */}
              <img src={Element11} alt="" className="absolute top-1/2 -right-20 sm:-right-28 md:-right-32 w-18 sm:w-22 md:w-28 opacity-35 mix-blend-screen rotate-8" style={{ filter: "saturate(1.5) hue-rotate(8deg)" }} />
              <img src={Element5} alt="" className="absolute top-1/3 -left-16 sm:-left-20 md:-left-24 w-12 sm:w-14 md:w-18 opacity-40 mix-blend-screen rotate-45" style={{ filter: "saturate(1.4)" }} />
              <img src={Element7} alt="" className="absolute bottom-1/4 right-20 sm:right-28 md:right-32 w-14 sm:w-16 md:w-20 opacity-35 mix-blend-screen -rotate-20" style={{ filter: "saturate(1.3) hue-rotate(15deg)" }} />
              <img src={Element4} alt="" className="absolute top-2/3 left-16 sm:left-20 md:left-24 w-10 sm:w-12 md:w-14 opacity-45 mix-blend-screen rotate-60" style={{ filter: "saturate(1.6) brightness(1.1)" }} />
              
              {/* Smaller scattered elements */}
              <img src={Element6} alt="" className="absolute -top-12 left-1/4 w-8 sm:w-10 md:w-12 opacity-40 mix-blend-screen -rotate-45" style={{ filter: "saturate(1.4) hue-rotate(25deg)" }} />
              <img src={Element9} alt="" className="absolute -bottom-10 right-1/3 w-10 sm:w-12 md:w-14 opacity-35 mix-blend-screen rotate-30" style={{ filter: "saturate(1.3)" }} />
              <img src={Element13} alt="" className="absolute top-1/4 right-1/2 w-12 sm:w-14 md:w-16 opacity-30 mix-blend-screen -rotate-15" style={{ filter: "saturate(1.4)" }} />
              <img src={Element16} alt="" className="absolute bottom-1/3 left-1/3 w-8 sm:w-10 md:w-12 opacity-42 mix-blend-screen rotate-75" style={{ filter: "saturate(1.5) brightness(1.05)" }} />
              <img src={Element17} alt="" className="absolute top-1/2 left-1/2 w-12 sm:w-14 md:w-16 opacity-28 mix-blend-screen -rotate-25" style={{ filter: "saturate(1.2)" }} />
              <img src={Element19} alt="" className="absolute -top-6 right-1/3 w-10 sm:w-12 md:w-14 opacity-38 mix-blend-screen rotate-50" style={{ filter: "saturate(1.4) brightness(0.98)" }} />
              <img src={Element20} alt="" className="absolute -bottom-8 left-1/4 w-10 sm:w-12 md:w-14 opacity-32 mix-blend-screen -rotate-10" style={{ filter: "saturate(1.3) hue-rotate(20deg)" }} />
              <img src={Element1} alt="" className="absolute top-1/6 -right-24 sm:-right-32 md:-right-40 w-12 sm:w-14 md:w-16 opacity-25 mix-blend-screen rotate-12" style={{ filter: "saturate(1.3)" }} />
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 tracking-wide mb-6 italic" style={{ fontFamily: 'Grotesk, sans-serif' }}>
            code till you <span className="not-italic text-red-500 font-semibold">drop</span>
          </p>

          <p className="text-red-500 text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] mb-8" style={{ fontFamily: 'Grotesk, sans-serif' }}>
            National 24-Hour Hackathon
          </p>

          <div className="flex gap-6 sm:gap-10 md:gap-12 justify-center items-end mb-10">
            {["Days", "Hours", "Mins", "Secs"].map((label, idx) => {
              const val = [timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs][idx];
              return (
                <div key={label} className="flex flex-col items-center">
                  <span className={`text-5xl sm:text-6xl md:text-7xl font-semibold tabular-nums mb-1 ${label === 'Secs' ? 'text-red-500' : 'text-white'}`}>
                    {val.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider">{label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/brochure.pdf" target="_blank" rel="noreferrer">
              <InteractiveHoverButton className="bg-transparent border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 text-sm sm:text-base">
                Brochure
              </InteractiveHoverButton>
            </a>
            <a href="/register" target="_self">
              <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-6 py-3 text-sm sm:text-base">
                Register
              </InteractiveHoverButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}