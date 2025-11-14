import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import DotGrid from "../background/Dotgrid.jsx";
import { Particles } from "react-tsparticles";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import HeroBGDesktop from "../assets/elements/desktop.svg";
import HeroBGMobile from "../assets/elements/mobile.svg";
import Navbar from "./Navbar.jsx";
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
      <Navbar />

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
                className="not-italic font-light text-[#d90a16]"
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
            <span className="italic text-[#d90a16] font-semibold tracking-wide mb-6">Drop</span>
          </p>

          <p
            className="text-[#d90a16] text-sm sm:text-base md:text-lg uppercase tracking-[0.25em] mb-8"
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
                      label === "Secs" ? "text-[#d90a16]" : "text-white"
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
              href="https://drive.google.com/file/d/1CbiJmOo-E1F1OhH4Lvy6i8dYi9kEareX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton className="bg-transparent border border-[#d90a16] text-white-600 hover:bg-[#d90a16] hover:text-white px-8 py-4 text-sm sm:text-base">
                Brochure
              </InteractiveHoverButton>
            </a>
            <a
              href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton className="bg-[#d90a16] hover:bg-[#d90a16] border-#d90a16 text-white px-8 py-4 text-sm sm:text-base">
                Register
              </InteractiveHoverButton>
            </a>
  </div>
      </div>
        
</div>
      
    </section>
  );
  
}
