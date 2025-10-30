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
        answer: "CODERED 3.0 is a national 24-hour hackathon organized by ECELL × BMSIT, bringing together developers, designers, and innovators to build cutting-edge solutions."
      },
      {
        question: "Who can participate in CODERED 3.0?",
        answer: "CODERED 3.0 is open to students, professionals, and tech enthusiasts from all backgrounds. Whether you're a beginner or an expert, there's a place for you in our hackathon."
      },
      {
        question: "Do I need to have prior hackathon experience?",
        answer: "No prior hackathon experience is required! CODERED 3.0 welcomes participants of all skill levels. We provide mentorship and resources to help you succeed."
      },
      {
        question: "What are the tracks available?",
        answer: "We have multiple tracks including AI & Machine Learning, Web Development, Mobile Apps, Blockchain, and IoT. You can choose any track that interests you."
      }
    ]
  },
  {
    category: "Registration & Teams",
    questions: [
      {
        question: "How do I register for CODERED 3.0?",
        answer: "You can register by clicking the 'Register Now' button on our website. Fill out the registration form with your details and team information."
      },
      {
        question: "What is the team size limit?",
        answer: "Teams can consist of 1-4 members. You can participate individually or form a team with friends or colleagues."
      },
      {
        question: "Can I change my team after registration?",
        answer: "Yes, you can modify your team composition until the registration deadline. Contact our support team for any team changes."
      },
      {
        question: "Is there a registration fee?",
        answer: "CODERED 3.0 is completely free to participate! We believe in making technology accessible to everyone."
      }
    ]
  },
  {
    category: "Event Details",
    questions: [
      {
        question: "When and where will CODERED 3.0 be held?",
        answer: "CODERED 3.0 will be held on December 20, 2025, for 24 hours. The venue details will be announced closer to the event date."
      },
      {
        question: "What should I bring to the event?",
        answer: "Bring your laptop, charger, and any development tools you prefer. We'll provide meals, snacks, and refreshments throughout the event."
      },
      {
        question: "Will there be mentors available?",
        answer: "Yes! We have industry experts and mentors available throughout the hackathon to help you with technical challenges and provide guidance."
      },
      {
        question: "What are the prizes?",
        answer: "We have exciting prizes for the top teams, including cash prizes, tech gadgets, and internship opportunities with our partner companies."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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

      {/* FAQ Content */}
      <section 
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 bg-black"
      >
        <div className="max-w-6xl mx-auto">
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
                FAQ
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Find answers to the most frequently asked questions about CODERED 3.0
            </p>
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            {/* FAQ Items */}
            <div className="space-y-8 sm:space-y-12">
              {faqData.map((category, categoryIndex) => (
                <div key={category.category} className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-0">
                    {category.questions.map((item, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openItems[key];
                      
                      return (
                        <div key={questionIndex} className="border-b border-gray-800 last:border-b-0">
                          <button
                            onClick={() => toggleItem(categoryIndex, questionIndex)}
                            className="w-full py-4 sm:py-6 text-center flex items-center justify-between group hover:bg-gray-900/30 transition-colors duration-200 px-2 sm:px-4"
                          >
                            <span className="text-gray-300 text-sm sm:text-base md:text-lg font-medium pr-2 sm:pr-4 group-hover:text-white transition-colors flex-1 text-center">
                              {item.question}
                            </span>
                            <ChevronDown 
                              size={20} 
                              className={`text-gray-400 transition-transform duration-300 flex-shrink-0 sm:w-6 sm:h-6 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          
                          <div 
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="pb-4 sm:pb-6 px-2 sm:px-4">
                              <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
