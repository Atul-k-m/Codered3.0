import { useState, useEffect } from "react";
import { ChevronDown, ArrowLeft, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is CODERED 3.0?",
        answer:
          "CODERED 3.0 is a National Level 24-hour Hackathon organized by ECELL × BMSIT, bringing together developers, designers, and innovators to build cutting-edge solutions.",
      },
      {
        question: "Who can participate in CODERED 3.0?",
        answer:
          "CODERED 3.0 is open to students and tech enthusiasts from all backgrounds. Whether you're a beginner or an expert, there's a place for you in our hackathon.",
      },
      {
        question: "Do I need to have prior hackathon experience?",
        answer:
          "No prior hackathon experience is required! CODERED 3.0 welcomes participants of all skill levels.",
      },
      {
        question: "What are the tracks available?",
        answer:
          "We have two tracks, Hardware and Software, You can choose any track that interests you.",
      },
    ],
  },
  {
    category: "Registration & Teams",
    questions: [
      {
        question: "How do I register for CODERED 3.0?",
        answer:
          "You can register by clicking the 'Register Now' button on our Website which will redirect you to Unstop. Fill out the registration form with your details and team information.",
      },
      {
        question: "What is the team size limit?",
        answer:
          "Teams can consist of 3-4 members. You can have inter college teams or intra college teams.",
      },
      {
        question: "Can I change my team after registration?",
        answer: "No, you can't modify your team composition.",
      },
      {
        question: "Is there a registration fee?",
        answer:
          "CODERED 3.0 Round 1 is completely free to participate!, upon selection for round 2, the team is required to pay a registration fee of ₹1200.",
      },
    ],
  },
  {
    category: "Event Details",
    questions: [
      {
        question: "When and where will CODERED 3.0 Round 2 be held?",
        answer:
          "CODERED 3.0 Round 2 will be held on December 12-13 2025, for 24 hours at BMS Institute of Technology and Management, Bangalore.",
      },
      {
        question: "What should I bring to the event?",
        answer:
          "Bring your laptop, charger, and any development tools you prefer. We'll provide meals, snacks, and refreshments throughout the event.",
      },
      {
        question: "Will there be mentors available?",
        answer:
          "Yes! We have industry experts and mentors available durin the hackathon to help you with technical challenges and provide guidance.",
      },
      {
        question: "What are the prizes?",
        answer:
          "We have  an  exciting prize pool of 1,50,000 INR along with networking opportunities with best mindes across the country",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @import url('https://fonts.cdnfonts.com/css/riccione');
        
        .riccione {
          font-family: 'Riccione', sans-serif;
        }
      `}</style>

      {/* Navigation Header */}
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
              <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm tracking-wide font-semibold">
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

      {/* FAQ Content */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 riccione">
              <span
                className="block bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent"
                style={{
                  letterSpacing: "0.05em",
                }}
              >
                FREQUENTLY ASKED
              </span>
              <span
                className="block mt-2"
                style={{
                  WebkitTextStroke: "2px white",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.05em",
                }}
              >
                QUESTIONS
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Find answers to the most frequently asked questions about CODERED
              3.0
            </p>
          </div>

          {/* FAQ Content */}
          <div className="max-w-5xl mx-auto">
            {/* FAQ Items */}
            <div className="space-y-8 sm:space-y-10">
              {faqData.map((category, categoryIndex) => (
                <div key={category.category} className="space-y-4 sm:space-y-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 text-center riccione tracking-wide">
                    {category.category}
                  </h3>

                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openItems[key];

                      return (
                        <div
                          key={questionIndex}
                          className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10"
                        >
                          <button
                            onClick={() =>
                              toggleItem(categoryIndex, questionIndex)
                            }
                            className="w-full py-4 sm:py-5 px-4 sm:px-6 flex items-center justify-between group transition-all duration-200"
                          >
                            <span
                              className="text-left text-white text-sm sm:text-xl md:text-xl font-semibold pr-4 group-hover:text-red-500 transition-colors riccione tracking-wide"
                              style={{ fontFamily: "Robit, sans-serif" }}
                            >
                              {item.question}
                            </span>
                            <ChevronDown
                              size={24}
                              className={`text-red-600 transition-all duration-300 flex-shrink-0 group-hover:text-red-500 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              isOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 border-t border-red-900/20">
                              <p className="text-gray-300 text-lg sm:text-lg leading-relaxed mt-3">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gradient-to-br from-red-900/20 to-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 riccione">
                Still Have Questions?
              </h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Feel free to reach out to our team for any additional queries
              </p>
              <a
                href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
                target="_blank"
                rel="noreferrer"
              >
                <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-8 py-3 text-base tracking-wide font-semibold">
                  Contact Us
                </InteractiveHoverButton>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
