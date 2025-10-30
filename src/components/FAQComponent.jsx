import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is CODERED 3.0?",
        answer: "CODERED 3.0 is a National Level 24-hour Hackathon organized by ECELL × BMSIT, bringing together developers, designers, and innovators to build cutting-edge solutions."
      },
      {
        question: "Who can participate in CODERED 3.0?",
        answer: "CODERED 3.0 is open to students and tech enthusiasts from all backgrounds. Whether you're a beginner or an expert, there's a place for you in our hackathon."
      },
      {
        question: "Do I need to have prior hackathon experience?",
        answer: "No prior hackathon experience is required! CODERED 3.0 welcomes participants of all skill levels."
      },
      {
        question: "What are the tracks available?",
        answer: "We have two tracks, Hardware and Software, You can choose any track that interests you."
      }
    ]
  },
  {
    category: "Registration & Teams",
    questions: [
      {
        question: "How do I register for CODERED 3.0?",
        answer: "You can register by clicking the 'Register Now' button on our Website which will redirect you to Unstop. Fill out the registration form with your details and team information."
      },
      {
        question: "What is the team size limit?",
        answer: "Teams can consist of 3-4 members. You can have inter college teams or intra college teams."
      },
      {
        question: "Can I change my team after registration?",
        answer: "No, you can't modify your team composition."
      },
      {
        question: "Is there a registration fee?",
        answer: "CODERED 3.0 Round 1 is completely free to participate!, upon selection for round 2, the team is required to pay a registration fee of ₹1200."
      }
    ]
  },
  {
    category: "Event Details",
    questions: [
      {
        question: "When and where will CODERED 3.0 Round 2 be held?",
        answer: "CODERED 3.0 Round 2 will be held on December 12-13 2025, for 24 hours at BMS Institute of Technology and Management, Bangalore."
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

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Navigation Header */}
    
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
