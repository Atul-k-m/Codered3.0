import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const faqData = [
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
    question: "What is the team size limit?",
    answer:
      "Teams can consist of 3-4 members. You can have inter college teams or intra college teams.",
  },
  {
    question: "When and where will CODERED 3.0 Round 2 be held?",
    answer:
      "CODERED 3.0 Round 2 will be held on December 12-13 2025, for 24 hours at BMS Institute of Technology and Management, Bangalore.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "CODERED 3.0 Round 1 is completely free to participate!, upon selection for round 2, the team is required to pay a registration fee of ₹1200.",
  },
  {
    question: "What are the prizes?",
    answer:
      "We have an exciting prize pool of 1,50,000 INR along with networking opportunities with best minds across the country",
  },
];

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span
              className="block bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent"
              style={{
                fontFamily: "Riccione, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              FREQUENTLY ASKED
            </span>
            <span
              className="block bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent"
                style={{
                  fontFamily: "Riccione, sans-serif",
                  WebkitTextFillColor: "white",
                  letterSpacing: "0.08em",
                }}
                >
              QUESTIONS
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Quick answers to common questions about CODERED 3.0
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-4 sm:py-5 px-4 sm:px-6 flex items-center justify-between group transition-all duration-200"
                >
                  <span
                    className="text-left text-white text-xl sm:text-xl md:text-xl font-semibold pr-4 group-hover:text-red-500 transition-colors tracking-wide"
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
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0 border-t border-red-900/20">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-3">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      <div className="flex flex-wrap gap-4 justify-center">
  
          <Link
            to="/faq"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <InteractiveHoverButton className="bg-transparent border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 text-sm sm:text-base">
                View All FAQ's
            </InteractiveHoverButton>
          </Link>
          <a
              href="https://discord.gg/FTSdVUku6Y"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-6 py-3 text-sm sm:text-base">
                Discord
              </InteractiveHoverButton>
            </a>
          </div>
        
      </div>

      <style>{`
        @import url('https://fonts.cdnfonts.com/css/riccione');
      `}</style>
    </section>
  );
}
