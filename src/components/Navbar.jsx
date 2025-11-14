import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* LOGOS */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="https://bmsit.ac.in" target="_blank" rel="noopener noreferrer">
              <img
                src="/bmslogo.png"
                alt="BMS Institute"
                className="h-10 w-auto sm:h-12 md:h-16 object-contain"
              />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src="/crlogo.png"
              alt="CODERED 3.0"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
            />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
             <a
              href="/"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
            >
             Home
            </a>

            <a
              href="/prize-pool"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
            >
              Prizes
            </a>

            <a
              href="/problem-statements"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
            >
              Problem Statements
            </a>

            <a
              href="/faq"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
            >
              FAQ
            </a>
          </div>

          {/* MOBILE MENU TOGGLE + REGISTER */}
          <div className="flex items-center gap-3 pr-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-red-600 transition-colors shrink-0"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <a
              href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm tracking-wide font-semibold shrink-0">
                <span className="hidden sm:inline">Register Now</span>
                <span className="sm:hidden">Register</span>
              </InteractiveHoverButton>
            </a>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* MOBILE MENU PANEL */}
        <div
          className={`mobile-menu-container absolute right-0 top-0 h-full w-80 bg-black border-l border-red-900/30 transform transition-transform duration-300 ease-in-out z-60 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
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
            >
              <X size={20} />
            </button>
          </div>

          {/* MENU LINKS */}
          <div className="p-6 space-y-6">
          <a
              href="/"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
            >
             Home
            </a>
            <a
              href="/prize-pool"
              className="block text-gray-300 hover:text-red-600 text-lg font-semibold uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prizes
            </a>

            <a
              href="/problem-statements"
              className="block text-gray-300 hover:text-red-600 text-lg font-semibold uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Problem Statements
            </a>

            <a
              href="/faq"
              className="block text-gray-300 hover:text-red-600 text-lg font-semibold uppercase tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
          </div>

          {/* MOBILE REGISTER BUTTON */}
          <div className="absolute bottom-6 left-6 right-6">
            <a
              href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton
                className="w-full bg-red-600 hover:bg-red-700 border-red-600 text-white px-6 py-3 text-sm tracking-wide font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </InteractiveHoverButton>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { Navbar };