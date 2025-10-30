import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";

const problemStatements = [
  {
    track: "Software",
    problems: [
      {
        id: "PS1",
        title: "Distributed Systems Architecture",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: "PS2",
        title: "Real-time Data Processing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend leo.",
      },
      {
        id: "PS3",
        title: "Scalable Microservices",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.",
      },
    ],
  },
  {
    track: "Hardware",
    problems: [
      {
        id: "PS4",
        title: "Intelligent Automation Systems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio nullam varius vel turpis. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum.",
      },
      {
        id: "PS5",
        title: "Predictive Analytics Engine",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est enim ullamcorper augue a nibh vitae mauris commodo quis imperdiet massa tincidunt.",
      },
      {
        id: "PS6",
        title: "Adaptive Learning Platform",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam. Sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris fusce nec tellus sed augue semper porta mauris massa id nisl venenatis lacinia.",
      },
    ],
  },
];

export default function ProblemStatementPage() {
  const [selectedTrack, setSelectedTrack] = useState(0);
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
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Register Button */}
            <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm tracking-wide font-semibold">
              <span className="hidden sm:inline">Register Now</span>
              <span className="sm:hidden">Register</span>
            </InteractiveHoverButton>
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
      {/* Problem Statements Content */}
      {/* Problem Statements Content */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 bg-black">
        <div className="max-w-5xl mx-auto">
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
                PROBLEM STATEMENTS
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Choose your track and build innovative solutions
            </p>
          </div>

          {/* Single Box Container */}
          <div className="flex justify-center">
            <div className="relative border-2 border-gray-800 bg-black hover:border-red-600 transition-all duration-300 flex items-center justify-center group overflow-hidden max-w-3xl w-full h-[400px]">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Centered Text */}
              <h3
                className="text-5xl sm:text-6xl font-bold  text-white text-center tracking-wide"
                style={{ fontFamily: "OffBit" }}
              >
                Coming Soon!
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
