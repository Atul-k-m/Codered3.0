import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Award, Menu, X } from "lucide-react";

// Interactive Hover Button Component
const InteractiveHoverButton = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-2 font-semibold uppercase tracking-wide border transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default function PrizePoolPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
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
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/crlogo.png" 
                alt="CODERED 3.0" 
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
              />
              <img 
                src="/bmslogo.png" 
                alt="BMS Institute" 
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain rounded-full"
              />
            </Link>
          </div>
          
          {/* Center - Back Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
          
          {/* Right side - Mobile Menu Button & Register Button */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-red-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
            
            {/* Register Button */}
            <InteractiveHoverButton 
              className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm tracking-wide font-semibold"
            >
              <span className="hidden sm:inline">Register Now</span>
              <span className="sm:hidden">Register</span>
            </InteractiveHoverButton>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        {/* Sidebar */}
        <div className={`mobile-menu-container absolute right-0 top-0 h-full w-80 bg-black border-l border-red-900/30 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <img 
                src="/crlogo.png" 
                alt="CODERED 3.0" 
                className="h-8 w-8 object-contain"
              />
              <img 
                src="/bmslogo.png" 
                alt="BMS Institute" 
                className="h-8 w-8 object-contain rounded-full"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-300 hover:text-red-600 transition-colors"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="p-6 space-y-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <a 
              href="/prize-pool" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prizes
            </a>
            <a 
              href="/problem-statements" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Problem Statements
            </a>
            <a 
              href="#team" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="/faq" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#sponsors" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sponsors
            </a>
          </div>
          
          {/* Sidebar Footer */}
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

      {/* Prize Pool Content */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-gray-300 text-xs sm:text-sm tracking-[0.3em] mb-4 sm:mb-6 uppercase font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              ECELL × BMSIT Presents
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6">
              <span className="italic font-light" style={{ fontFamily: 'Riccione, cursive' }}>PRIZE </span>
              <span className="not-italic font-light text-red-600" style={{ fontFamily: 'Robit, sans-serif' }}>POOL</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 tracking-wide italic" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              compete for glory
            </p>
          </div>

          {/* Total Prize Pool Banner */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <div className="inline-block border border-red-600 bg-black/30 backdrop-blur-sm px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10">
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-[0.3em] mb-3 font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>Total Prize Pool</p>
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tabular-nums" style={{ fontFamily: 'Robit, sans-serif' }}>
                <span className="text-red-600">₹1.5</span> <span className="text-white">Lakh</span>
              </p>
            </div>
          </div>

          {/* Prize Structure */}
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            
            {/* Overall Winners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Overall First */}
              <div className="relative border border-red-600 bg-black/20 backdrop-blur-sm p-8 sm:p-10 md:p-12 text-center group hover:border-red-500 transition-colors">
                <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-500 mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="text-sm sm:text-base text-gray-400 mb-2 uppercase tracking-[0.2em] font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>Overall Winner</h3>
                <p className="text-5xl sm:text-6xl md:text-7xl font-light text-red-600 mb-3 tabular-nums" style={{ fontFamily: 'Robit, sans-serif' }}>₹50K</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">1st Place</p>
              </div>

              {/* Overall Second */}
              <div className="relative border border-red-600 bg-black/20 backdrop-blur-sm p-8 sm:p-10 md:p-12 text-center group hover:border-red-500 transition-colors">
                <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="text-sm sm:text-base text-gray-400 mb-2 uppercase tracking-[0.2em] font-semibold" style={{ fontFamily: 'Grotesk, sans-serif' }}>Overall Runner-Up</h3>
                <p className="text-5xl sm:text-6xl md:text-7xl font-light text-red-600 mb-3 tabular-nums" style={{ fontFamily: 'Robit, sans-serif' }}>₹30K</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">2nd Place</p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 max-w-md mx-auto">
              <div className="flex-1 h-px bg-gray-800"></div>
              <span className="text-gray-600 text-xs uppercase tracking-widest" style={{ fontFamily: 'Grotesk, sans-serif' }}>Category Prizes</span>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>

            {/* Category Prizes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Software Category */}
              <div className="relative border border-gray-700 bg-black/10 backdrop-blur-sm p-6 sm:p-8 hover:border-red-600 transition-colors">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 uppercase tracking-wide text-center" style={{ fontFamily: 'Grotesk, sans-serif' }}>Software</h3>
                
                <div className="space-y-6">
                  {/* First Place */}
                  <div className="text-center">
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-3xl sm:text-4xl font-light text-white tabular-nums mb-1" style={{ fontFamily: 'Robit, sans-serif' }}>₹20K</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">1st</p>
                  </div>

                  <div className="h-px bg-gray-800 my-4"></div>

                  {/* Second Place */}
                  <div className="text-center">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-2xl sm:text-3xl font-light text-gray-400 tabular-nums mb-1" style={{ fontFamily: 'Robit, sans-serif' }}>₹15K</p>
                    <p className="text-xs text-gray-600 uppercase tracking-wider">2nd</p>
                  </div>
                </div>
              </div>

              {/* Hardware Category */}
              <div className="relative border border-gray-700 bg-black/10 backdrop-blur-sm p-6 sm:p-8 hover:border-red-600 transition-colors">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 uppercase tracking-wide text-center" style={{ fontFamily: 'Grotesk, sans-serif' }}>Hardware</h3>
                
                <div className="space-y-6">
                  {/* First Place */}
                  <div className="text-center">
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-3xl sm:text-4xl font-light text-white tabular-nums mb-1" style={{ fontFamily: 'Robit, sans-serif' }}>₹20K</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">1st</p>
                  </div>

                  <div className="h-px bg-gray-800 my-4"></div>

                  {/* Second Place */}
                  <div className="text-center">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-2xl sm:text-3xl font-light text-gray-400 tabular-nums mb-1" style={{ fontFamily: 'Robit, sans-serif' }}>₹15K</p>
                    <p className="text-xs text-gray-600 uppercase tracking-wider">2nd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center max-w-3xl mx-auto px-4">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              All prize amounts are cumulative. Winners in category prizes (Software/Hardware) are also eligible for overall prizes.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 italic" style={{ fontFamily: 'Grotesk, sans-serif' }}>
              *Prize distribution subject to participation and quality of submissions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}