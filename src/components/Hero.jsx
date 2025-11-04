import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import DotGrid from "../background/Dotgrid.jsx";
import { Particles } from "react-tsparticles";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import HeroBGDesktop from "../assets/elements/desktop.svg";
import HeroBGMobile from "../assets/elements/mobile.svg";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-12-12T10:00:00");

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, mins, secs });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

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
    <section className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Background images for hero */}
      <img
        src={HeroBGDesktop}
        alt=""
        className="hidden sm:block absolute inset-0 w-full h-full object-cover opacity-100 bottom-50px"
      />
      <img
        src={HeroBGMobile}
        alt=""
        className="sm:hidden absolute inset-0 w-full h-full object-cover opacity-100 top-20 margin-top-50px"
      />
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
           <a href="https://bmsit.ac.in" target="_blank" rel="noopener noreferrer">
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

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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

      <div
        className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

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
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 space-y-6">
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

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 pt-20 sm:pt-24">
        <div className="w-full max-w-5xl mx-auto text-center relative">
          <p
            className="text-gray-300 text-xs sm:text-sm md:text-base tracking-[0.3em] mb-4 sm:mb-6 uppercase font-semibold"
            style={{ fontFamily: "Grotesk, sans-serif" }}
          >
            E-CELL × BMSIT&M Presents
          </p>

          <div className="relative">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 sm:mb-6 relative z-10">
              <span
                className="italic font-light"
                style={{  fontFamily: "Riccione , 'Times New Roman', serif" }}
              >
                CODE RED{" "}
              </span>
              <span
                className="not-italic font-light text-red-600"
                style={{ fontFamily: "Robit, sans-serif" }}
              >
                3.0
              </span>
            </h1>
          </div>

          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 tracking-wide mb-6 italic"
            style={{ fontFamily: "Grotesk, sans-serif" }}
          >
            Code Till You{" "}
            <span className="italic text-red-600 font-semibold tracking-wide mb-6">Drop</span>
          </p>

          <p
            className="text-red-600 text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] mb-8"
            style={{ fontFamily: "Grotesk, sans-serif" }}
          >
            National Level 24-Hour Hackathon
          </p>

          <div className={"flex gap-6 sm:gap-10 md:gap-12 justify-center items-end mb-10"}
            style={{ fontFamily: "'Robit', sans-serif"} }>
            {["Days", "Hours", "Mins", "Secs"].map((label, idx) => {
              const val = [
                timeLeft.days,
                timeLeft.hours,
                timeLeft.mins,
                timeLeft.secs,
              ][idx];
              return (
                <div key={label} className="flex flex-col items-center">
                  <span
                    className={`text-5xl sm:text-6xl md:text-7xl font-semibold tabular-nums mb-1 ${
                      label === "Secs" ? "text-red-600" : "text-white"
                    }`}
                  >
                    {val.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="\CR3_Brochure_F1.4.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton className="bg-transparent border border-red-600 text-white-600 hover:bg-red-600 hover:text-white px-8 py-4 text-sm sm:text-base">
                Brochure
              </InteractiveHoverButton>
            </a>
            <a
              href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-8 py-4 text-sm sm:text-base">
                Register
              </InteractiveHoverButton>
            </a>
  </div>
      </div>
        
</div>
      
    </section>
  );
  
}
