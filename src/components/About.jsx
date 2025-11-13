import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20">
        <div className="max-w-7xl w-full mx-auto">
          {/* Main Heading */}
          <div className="mb-16 sm:mb-24">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight mb-8">
              <span className="text-white">What is</span>
              <br />
              <span className="text-red-600">CODERED</span>
              <br />
              <span className="text-red-600">3.0?</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              A National Level 24-hour Hackathon where builders, designers, and makers come together to prototype bold ideas.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-16">
            {/* Tracks */}
            <div 
              className="group cursor-pointer"
              onClick={() => {
                navigate("/problem-statements");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Tracks
                </h2>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors" />
              </div>
              <div className="space-y-4">
                <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-red-600 transition-colors">
                  Software
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-red-600 transition-colors">
                  Hardware
                </p>
              </div>
            </div>

            {/* Prizes */}
            <div 
              className="group cursor-pointer"
              onClick={() => {
                navigate("/prize-pool");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Prizes
                </h2>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors" />
              </div>
              <div className="space-y-3">
                <p className="text-lg sm:text-xl text-gray-300">
                  <span className="text-red-600 font-bold">₹60,000</span> Winner
                </p>
                <p className="text-lg sm:text-xl text-gray-300">
                  <span className="text-red-600 font-bold">₹30,000</span> Runner-up
                </p>
                <p className="text-lg sm:text-xl text-gray-400">
                  Category Winners
                </p>
                <p className="text-lg sm:text-xl text-gray-400">
                  Networking Opportunities
                </p>
              </div>
            </div>

            {/* Details */}
            <div 
              className="group cursor-pointer"
              onClick={() => {
                navigate("/faq");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Details
                </h2>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors" />
              </div>
              <div className="space-y-3">
                <p className="text-lg sm:text-xl text-gray-300">
                  <span className="text-white font-bold">24 hours</span> Duration
                </p>
                <p className="text-lg sm:text-xl text-gray-300">
                  <span className="text-white font-bold">3-4</span> Team size
                </p>
                <p className="text-lg sm:text-xl text-gray-400">
                  BMS Institute Of Technology & Management
                </p>
                <p className="text-lg sm:text-xl text-gray-400">
                  Dec 12-13, 2025
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-900">
            <a
              href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <span className="text-xl sm:text-2xl font-bold text-red-600 group-hover:text-red-500 transition-colors">
                Register Now
              </span>
              <ArrowRight className="w-6 h-6 text-red-600 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}