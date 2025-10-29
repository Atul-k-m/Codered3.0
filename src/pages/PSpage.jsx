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
      {/* Problem Statements Content */}
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
                PROBLEM STATEMENTS
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Choose your track and build innovative solutions
            </p>
          </div>

          {/* Track Selector */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap px-4">
            {problemStatements.map((track, index) => (
              <button
                key={index}
                onClick={() => setSelectedTrack(index)}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-bold text-sm sm:text-base md:text-lg transition-all duration-300 border-2 ${
                  selectedTrack === index
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-transparent text-white border-red-600 hover:bg-red-600"
                }`}
              >
                {track.track}
              </button>
            ))}
          </div>

          {/* Problem Statements Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {problemStatements[selectedTrack].problems.map(
                (problem, index) => (
                  <div
                    key={index}
                    className="relative border-2 border-gray-800 bg-black hover:border-red-600 transition-all duration-300 p-4 sm:p-6 flex flex-col group overflow-hidden"
                  >
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Problem ID */}
                      <div className="mb-3 sm:mb-4 inline-block border-2 border-red-600 px-2 sm:px-3 py-1">
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 font-mono">
                          {problem.id}
                        </span>
                      </div>

                      {/* Problem Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {problem.title}
                      </h3>

                      {/* Divider */}
                      <div className="w-8 sm:w-12 h-0.5 bg-red-600 mb-3 sm:mb-4 group-hover:w-full transition-all duration-300"></div>

                      {/* Problem Description */}
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                        {problem.description}
                      </p>

                      {/* Separator Line */}
                      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-800 group-hover:border-red-600/50 transition-colors duration-300">
                        <span className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-red-500 transition-colors duration-300">
                          {problemStatements[selectedTrack].track}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 text-center px-4">
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
              Select a problem statement that aligns with your interests and
              expertise. You'll have{" "}
              <span className="text-red-600 font-bold">24 hours</span> to
              develop your solution during CodeRed 3.0.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
