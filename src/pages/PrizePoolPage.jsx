import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Award, Menu, X } from "lucide-react";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";

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
                alt="CodeRed 3.0" 
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
              className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase"
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
                alt="CodeRed 3.0" 
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
              className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <a 
              href="/prize-pool" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prizes
            </a>
            <a 
              href="/problem-statements" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Problem Statements
            </a>
            <a 
              href="#team" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="/faq" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#sponsors" 
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2"
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
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
              <span 
                className="block"
                style={{
                  WebkitTextStroke: "1.5px white",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.04em",
                }}
              >
                PRIZE POOL
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Compete for a total prize pool of ₹1.5 Lakh
            </p>
          </div>

          {/* Total Prize Pool Banner */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block border-2 border-red-600 bg-black/50 backdrop-blur-sm px-6 sm:px-8 md:px-12 py-4 sm:py-6 transform hover:scale-105 transition-all duration-300">
              <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest mb-2">Total Prize Pool</p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-600" style={{ fontFamily: 'monospace' }}>
                ₹1.5 Lakh
              </p>
            </div>
          </div>

          {/* Prize Structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            
            {/* Overall First */}
            <div className="relative border-2 border-red-600 bg-black hover:border-red-500 transition-all duration-300 p-6 sm:p-8 flex flex-col items-center group">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-red-600"></div>

              <div className="mb-4 sm:mb-6">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase">Overall Winner</h3>
              <div className="mb-3 sm:mb-4">
                <span className="inline-block border-2 border-red-600 px-3 sm:px-4 py-1 sm:py-2">
                  <span className="text-2xl sm:text-3xl font-bold text-red-600 font-mono">1st</span>
                </span>
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2 font-mono">₹50,000</p>
              <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Champion</p>
            </div>

            {/* Overall Second */}
            <div className="relative border-2 border-red-600 bg-black hover:border-red-500 transition-all duration-300 p-6 sm:p-8 flex flex-col items-center group">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-red-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-red-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-red-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-red-600"></div>

              <div className="mb-4 sm:mb-6">
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase">Overall Runner-Up</h3>
              <div className="mb-3 sm:mb-4">
                <span className="inline-block border-2 border-red-600 px-3 sm:px-4 py-1 sm:py-2">
                  <span className="text-2xl sm:text-3xl font-bold text-red-600 font-mono">2nd</span>
                </span>
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-2 font-mono">₹30,000</p>
              <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Runner-Up</p>
            </div>

            {/* Software Category */}
            <div className="relative border-2 border-gray-800 bg-black hover:border-red-600 transition-all duration-300 p-6 sm:p-8">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-gray-800 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-gray-800 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-gray-800 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-gray-800 group-hover:border-red-600 transition-colors"></div>

              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase">Software</h3>
                
                {/* First Place */}
                <div className="mb-4 sm:mb-6">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mx-auto mb-2 sm:mb-3" strokeWidth={1.5} />
                  <div className="inline-block border-2 border-red-600 px-2 sm:px-3 py-1 mb-2">
                    <span className="text-lg sm:text-xl font-bold text-red-600 font-mono">1st</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white font-mono">₹20,000</p>
                </div>

                {/* Divider */}
                <div className="w-16 sm:w-24 h-0.5 bg-gray-800 mx-auto my-3 sm:my-4"></div>

                {/* Second Place */}
                <div>
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mx-auto mb-2 sm:mb-3" strokeWidth={1.5} />
                  <div className="inline-block border-2 border-gray-600 px-2 sm:px-3 py-1 mb-2">
                    <span className="text-base sm:text-lg font-bold text-gray-600 font-mono">2nd</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-400 font-mono">₹15,000</p>
                </div>
              </div>
            </div>

            {/* Hardware Category */}
            <div className="relative border-2 border-gray-800 bg-black hover:border-red-600 transition-all duration-300 p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-gray-800 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-gray-800 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-gray-800 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-gray-800 group-hover:border-red-600 transition-colors"></div>

              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 uppercase">Hardware</h3>
                
                {/* First Place */}
                <div className="mb-4 sm:mb-6">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mx-auto mb-2 sm:mb-3" strokeWidth={1.5} />
                  <div className="inline-block border-2 border-red-600 px-2 sm:px-3 py-1 mb-2">
                    <span className="text-lg sm:text-xl font-bold text-red-600 font-mono">1st</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white font-mono">₹20,000</p>
                </div>

                {/* Divider */}
                <div className="w-16 sm:w-24 h-0.5 bg-gray-800 mx-auto my-3 sm:my-4"></div>

                {/* Second Place */}
                <div>
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mx-auto mb-2 sm:mb-3" strokeWidth={1.5} />
                  <div className="inline-block border-2 border-gray-600 px-2 sm:px-3 py-1 mb-2">
                    <span className="text-base sm:text-lg font-bold text-gray-600 font-mono">2nd</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-400 font-mono">₹15,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto px-4">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              All prize amounts are cumulative. Winners in category prizes (Software/Hardware) are also eligible for overall prizes.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4 italic">
              *Prize distribution subject to participation and quality of submissions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

