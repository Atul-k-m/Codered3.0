import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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
              className="block mt-2"
              style={{
                WebkitTextStroke: "2px white",
                WebkitTextFillColor: "transparent",
                fontFamily: "Riccione, sans-serif",
                letterSpacing: "0.05em",
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
                    className="text-left text-white text-sm sm:text-base md:text-lg font-semibold pr-4 group-hover:text-red-500 transition-colors tracking-wide"
                    style={{ fontFamily: "Riccione, sans-serif" }}
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

        <div className="text-center">
          <Link
            to="/faq"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <button className="group relative px-8 py-3 bg-black text-white font-semibold text-sm sm:text-base tracking-wide uppercase rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-900 border-2 border-red-900/80 focus:outline-none focus:ring-2 focus:ring-red-700/50 group-hover:shadow-lg group-hover:shadow-red-900/30">
              <span className="relative z-10">View All FAQs</span>

              {/* Subtle dark-red gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-900/10 to-red-900/20 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-lg pointer-events-none"></div>

              {/* Thin decorative dark red inner border to emphasize the edges */}
              <div className="absolute inset-0 rounded-lg border border-red-900/30 pointer-events-none"></div>
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.cdnfonts.com/css/riccione');
      `}</style>
    </section>
  );
}
