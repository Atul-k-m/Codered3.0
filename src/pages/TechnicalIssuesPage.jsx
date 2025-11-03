import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Menu, X, AlertTriangle } from "lucide-react";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";

export default function TechnicalIssuesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://bmsit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/bmslogo.png"
                    alt="BMS Institute"
                    className="h-10 w-auto sm:h-12 md:h-16 object-contain"
                  />
                </a>
                <img
                  src="/crlogo.png"
                  alt="CODERED 3.0"
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Center - Links (match home navbar) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
              style={{ fontFamily: "Grotesk, sans-serif" }}
            >
              Home
            </a>
            <a
              href="/prize-pool"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
              style={{ fontFamily: "Grotesk, sans-serif" }}
            >
              Prizes
            </a>
            <a
              href="/problem-statements"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
              style={{ fontFamily: "Grotesk, sans-serif" }}
            >
              Problem Statements
            </a>
            <a
              href="#team"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
              style={{ fontFamily: "Grotesk, sans-serif" }}
            >
              Team
            </a>
            <a
              href="/faq"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
              style={{ fontFamily: "Grotesk, sans-serif" }}
            >
              FAQ
            </a>
            <a
              href="#sponsors"
              className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
              style={{ fontFamily: "Grotesk, sans-serif" }}
            >
              Sponsors
            </a>
          </div>

          {/* Right side - Mobile Menu Button & Register Button */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-red-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Register Button */}
            <a
              href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton
                className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm tracking-wide font-semibold"
              >
                <span className="hidden sm:inline">Register Now</span>
                <span className="sm:hidden">Register</span>
              </InteractiveHoverButton>
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`mobile-menu-container absolute right-0 top-0 h-full w-80 bg-black border-l border-red-900/30 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
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
              style={{ fontFamily: "Grotesk, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <a
              href="/prize-pool"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: "Grotesk, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prizes
            </a>
            <a
              href="/problem-statements"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: "Grotesk, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Problem Statements
            </a>
            <a
              href="#team"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: "Grotesk, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="/faq"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: "Grotesk, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#sponsors"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: "Grotesk, sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sponsors
            </a>
          </div>

          {/* Sidebar Footer */}
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

      {/* Technical Issues Content */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 border-red-900/30 rounded-lg p-8 sm:p-12 md:p-16 text-center">
            {/* Alert Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-red-900/20 border-2 border-red-600 rounded-full p-6">
                <AlertTriangle
                  size={64}
                  className="text-red-600"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-red-600"
              style={{
                fontFamily: "Robit, 'Times New Roman', serif",
                letterSpacing: "0.04em",
              }}
            >
              TECHNICAL ISSUES
            </h1>

            {/* Main Message */}
            <div className="space-y-6 mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold">
                We're Currently Undergoing Technical Issues
              </p>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                The problem statements page is temporarily unavailable due to
                technical difficulties. Our team is working diligently to resolve
                the issue and restore full functionality.
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-10 pt-8 border-t border-red-900/30">
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                We apologize for any inconvenience this may cause. Please check
                back soon, or feel free to reach out to us if you have any
                questions.
              </p>

              {/* Back Home Button */}
              <Link to="/">
                <InteractiveHoverButton
                  className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-8 py-3 text-base tracking-wide font-semibold"
                >
                  Return to Home
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>

          {/* Status Message */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

