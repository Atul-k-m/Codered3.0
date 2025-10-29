import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import DotGrid from "../background/Dotgrid.jsx";
import Plasma from "./Plasma";
import { Particles } from "react-tsparticles";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

// Morphing shapes component with connected nodes
function MorphingShapes() {
  const [shapeIndex, setShapeIndex] = useState(0);
  const cellSize = 28;
  const gap = 6;
  
  // Define different shapes/patterns (using grid coordinates)
  const shapes = [
    // Hashtag (#)
    {
      name: "hashtag",
      cells: [
        { x: 1, y: 0, type: "rect" }, { x: 2, y: 0, type: "rect" }, { x: 4, y: 0, type: "rect" }, { x: 5, y: 0, type: "rect" },
        { x: 0, y: 1, type: "rect" }, { x: 1, y: 1, type: "rect" }, { x: 2, y: 1, type: "rect" }, { x: 3, y: 1, type: "rect" }, { x: 4, y: 1, type: "rect" }, { x: 5, y: 1, type: "rect" }, { x: 6, y: 1, type: "rect" },
        { x: 1, y: 2, type: "rect" }, { x: 2, y: 2, type: "rect" }, { x: 4, y: 2, type: "rect" }, { x: 5, y: 2, type: "rect" },
        { x: 0, y: 3, type: "rect" }, { x: 1, y: 3, type: "rect" }, { x: 2, y: 3, type: "rect" }, { x: 3, y: 3, type: "rect" }, { x: 4, y: 3, type: "rect" }, { x: 5, y: 3, type: "rect" }, { x: 6, y: 3, type: "rect" },
        { x: 1, y: 4, type: "rect" }, { x: 2, y: 4, type: "rect" }, { x: 4, y: 4, type: "rect" }, { x: 5, y: 4, type: "rect" },
      ]
    },
    // Laptop
    {
      name: "laptop",
      cells: [
        { x: 1, y: 0, type: "rect" }, { x: 2, y: 0, type: "rect" }, { x: 3, y: 0, type: "rect" }, { x: 4, y: 0, type: "rect" }, { x: 5, y: 0, type: "rect" },
        { x: 1, y: 1, type: "rect" }, { x: 2, y: 1, type: "circle" }, { x: 3, y: 1, type: "circle" }, { x: 4, y: 1, type: "circle" }, { x: 5, y: 1, type: "rect" },
        { x: 1, y: 2, type: "rect" }, { x: 2, y: 2, type: "circle" }, { x: 3, y: 2, type: "circle" }, { x: 4, y: 2, type: "circle" }, { x: 5, y: 2, type: "rect" },
        { x: 1, y: 3, type: "rect" }, { x: 2, y: 3, type: "rect" }, { x: 3, y: 3, type: "rect" }, { x: 4, y: 3, type: "rect" }, { x: 5, y: 3, type: "rect" },
        { x: 0, y: 4, type: "rect" }, { x: 1, y: 4, type: "rect" }, { x: 2, y: 4, type: "rect" }, { x: 3, y: 4, type: "rect" }, { x: 4, y: 4, type: "rect" }, { x: 5, y: 4, type: "rect" }, { x: 6, y: 4, type: "rect" },
      ]
    },
    // Code brackets </>
    {
      name: "brackets",
      cells: [
        { x: 1, y: 0, type: "rect" }, { x: 2, y: 0, type: "rect" }, { x: 4, y: 0, type: "rect" }, { x: 5, y: 0, type: "rect" },
        { x: 0, y: 1, type: "rect" }, { x: 1, y: 1, type: "rect" }, { x: 5, y: 1, type: "rect" }, { x: 6, y: 1, type: "rect" },
        { x: 0, y: 2, type: "rect" }, { x: 2, y: 2, type: "circle" }, { x: 3, y: 2, type: "circle" }, { x: 4, y: 2, type: "circle" }, { x: 6, y: 2, type: "rect" },
        { x: 0, y: 3, type: "rect" }, { x: 1, y: 3, type: "rect" }, { x: 5, y: 3, type: "rect" }, { x: 6, y: 3, type: "rect" },
        { x: 1, y: 4, type: "rect" }, { x: 2, y: 4, type: "rect" }, { x: 4, y: 4, type: "rect" }, { x: 5, y: 4, type: "rect" },
      ]
    },
    // Terminal/Console
    {
      name: "terminal",
      cells: [
        { x: 0, y: 0, type: "rect" }, { x: 1, y: 0, type: "rect" }, { x: 2, y: 0, type: "rect" }, { x: 3, y: 0, type: "rect" }, { x: 4, y: 0, type: "rect" }, { x: 5, y: 0, type: "rect" }, { x: 6, y: 0, type: "rect" },
        { x: 0, y: 1, type: "rect" }, { x: 1, y: 1, type: "circle" }, { x: 6, y: 1, type: "rect" },
        { x: 0, y: 2, type: "rect" }, { x: 1, y: 2, type: "rect" }, { x: 2, y: 2, type: "rect" }, { x: 6, y: 2, type: "rect" },
        { x: 0, y: 3, type: "rect" }, { x: 1, y: 3, type: "rect" }, { x: 2, y: 3, type: "rect" }, { x: 3, y: 3, type: "rect" }, { x: 6, y: 3, type: "rect" },
        { x: 0, y: 4, type: "rect" }, { x: 1, y: 4, type: "rect" }, { x: 2, y: 4, type: "rect" }, { x: 3, y: 4, type: "rect" }, { x: 4, y: 4, type: "rect" }, { x: 5, y: 4, type: "rect" }, { x: 6, y: 4, type: "rect" },
      ]
    },
    // Lightning bolt (energy/power)
    {
      name: "lightning",
      cells: [
        { x: 4, y: 0, type: "rect" }, { x: 5, y: 0, type: "rect" },
        { x: 3, y: 1, type: "rect" }, { x: 4, y: 1, type: "rect" },
        { x: 2, y: 2, type: "rect" }, { x: 3, y: 2, type: "rect" }, { x: 4, y: 2, type: "circle" }, { x: 5, y: 2, type: "circle" },
        { x: 3, y: 3, type: "rect" }, { x: 4, y: 3, type: "rect" },
        { x: 2, y: 4, type: "rect" }, { x: 3, y: 4, type: "rect" },
      ]
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShapeIndex((prev) => (prev + 1) % shapes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentShape = shapes[shapeIndex];
  
  // Calculate the bounds of the current shape to center it
  const minX = Math.min(...currentShape.cells.map(c => c.x));
  const maxX = Math.max(...currentShape.cells.map(c => c.x));
  const minY = Math.min(...currentShape.cells.map(c => c.y));
  const maxY = Math.max(...currentShape.cells.map(c => c.y));
  
  const shapeWidth = (maxX - minX + 1) * (cellSize + gap);
  const shapeHeight = (maxY - minY + 1) * (cellSize + gap);
  
  const offsetX = (300 - shapeWidth) / 2 - minX * (cellSize + gap);
  const offsetY = (300 - shapeHeight) / 2 - minY * (cellSize + gap);
  
  // Color palette with gold/orange/red
  const colors = ["#ef4444", "#f59e0b", "#eab308", "#fb923c", "#dc2626"];

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center mx-auto">
      <div className="absolute inset-0 opacity-50">
        <DotGrid
          dotSize={4}
          gap={12}
          baseColor="#9CA3AF"       
          activeColor="#9CA3AF"
          proximity={80}
          shockRadius={150}
          shockStrength={3}
          resistance={500}
          returnDuration={1.5}
        />
      </div>
      <svg width="100%" height="100%" viewBox="0 0 300 300" className="relative z-10">
        {currentShape.cells.map((cell, i) => {
          const x1 = cell.x * (cellSize + gap) + offsetX;
          const y1 = cell.y * (cellSize + gap) + offsetY;
          
          return currentShape.cells.slice(i + 1).map((otherCell, j) => {
            const distance = Math.abs(cell.x - otherCell.x) + Math.abs(cell.y - otherCell.y);
            if (distance === 1) {
              const x2 = otherCell.x * (cellSize + gap) + offsetX;
              const y2 = otherCell.y * (cellSize + gap) + offsetY;
              
              return (
                <line
                  key={`line-${i}-${j}`}
                  x1={x1 + cellSize/2}
                  y1={y1 + cellSize/2}
                  x2={x2 + cellSize/2}
                  y2={y2 + cellSize/2}
                  stroke="url(#lineGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.3"
                  style={{
                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                />
              );
            }
            return null;
          });
        })}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#eab308" stopOpacity="0.6" />
          </linearGradient>
          
          <filter id="roughTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {currentShape.cells.map((cell, i) => {
          const nodeKey = `${cell.x}-${cell.y}`;
          const x = cell.x * (cellSize + gap) + offsetX;
          const y = cell.y * (cellSize + gap) + offsetY;
          const color = colors[i % colors.length];
          
          return (
            <g key={nodeKey}>
              {cell.type === "rect" ? (
                <>
                  <rect
                    x={x + 2}
                    y={y + 2}
                    width={cellSize}
                    height={cellSize}
                    fill={color}
                    opacity="0.4"
                    rx="6"
                    filter="url(#glow)"
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                  <rect
                    x={x}
                    y={y}
                    width={cellSize}
                    height={cellSize}
                    fill={color}
                    rx="6"
                    filter="url(#roughTexture)"
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      mixBlendMode: "screen",
                    }}
                  />
                  <rect
                    x={x + 4}
                    y={y + 4}
                    width={cellSize - 8}
                    height={6}
                    fill="white"
                    opacity="0.3"
                    rx="3"
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                </>
              ) : (
                <>
                  <circle
                    cx={x + cellSize / 2}
                    cy={y + cellSize / 2}
                    r={cellSize / 2}
                    fill={color}
                    opacity="0.4"
                    filter="url(#glow)"
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                  <circle
                    cx={x + cellSize / 2}
                    cy={y + cellSize / 2}
                    r={cellSize / 2}
                    fill={color}
                    filter="url(#roughTexture)"
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                  <circle
                    cx={x + cellSize / 2 - 4}
                    cy={y + cellSize / 2 - 4}
                    r={cellSize / 5}
                    fill="white"
                    opacity="0.4"
                    style={{
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>

      <div
        className="absolute inset-0 blur-3xl -z-10"
        style={{
          background: "radial-gradient(circle, rgba(239,68,68,0.4) 0%, transparent 70%)",
          animation: "pulse 3s ease-in-out infinite"
        }}
      />
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.5; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-12-20T00:00:00");

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
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <section className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/bmslogo.png" 
              alt="BMS Institute" 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain rounded-full"
            />
            <img 
              src="/crlogo.png" 
              alt="CodeRed 3.0" 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
            />
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="/prize-pool" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              Prizes
            </a>
            <a href="/problem-statements" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              Problem Statements
            </a>
            <a href="#team" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              Team
            </a>
            <a href="/faq" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              FAQ
            </a>
            <a href="#sponsors" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              Sponsors
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-red-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <InteractiveHoverButton 
              className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm tracking-wide font-semibold"
            >
              <span className="hidden sm:inline">Register Now</span>
              <span className="sm:hidden">Register</span>
            </InteractiveHoverButton>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        <div className={`mobile-menu-container absolute right-0 top-0 h-full w-80 bg-black border-l border-red-900/30 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <img src="/crlogo.png" alt="CodeRed 3.0" className="h-8 w-8 object-contain" />
              <img src="/bmslogo.png" alt="BMS Institute" className="h-8 w-8 object-contain rounded-full" />
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
            <a href="/prize-pool" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Prizes
            </a>
            <a href="/problem-statements" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Problem Statements
            </a>
            <a href="#team" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Team
            </a>
            <a href="/faq" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2" onClick={() => setIsMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="#sponsors" className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-medium uppercase tracking-wide py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Sponsors
            </a>
          </div>
          
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

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 pt-20 sm:pt-24">
        <div className="hidden lg:grid lg:grid-cols-2 w-full max-w-7xl items-center gap-12">
          <div className="z-10 text-left">
            <p className="text-gray-300 text-base md:text-lg tracking-[0.25em] mb-4 uppercase">
              ECELL × BMSIT Presents
            </p>

            <h1
              className="text-6xl lg:text-8xl xl:text-9xl font-bold mb-4"
              style={{
                WebkitTextStroke: "1.5px white",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.04em",
              }}
            >
              CODERED 3.0
            </h1>

            <p className="text-lg md:text-xl text-gray-400 tracking-wide mb-8 italic">
              code till you bleed
            </p>

            <p className="text-gray-300 text-sm md:text-base uppercase tracking-widest mb-3">
              National 24-Hour Hackathon
            </p>

            <div className="flex gap-6 md:gap-8 text-center text-base md:text-lg font-semibold">
              {["Days", "Hours", "Mins", "Secs"].map((label, idx) => {
                const val = [timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs][idx];
                return (
                  <div key={label} className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl text-white font-bold tabular-nums">
                      {val.toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 uppercase">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <MorphingShapes />
            
          </div>
        </div>

        <div className="lg:hidden w-full relative min-h-screen flex items-center">
  {/* This container ensures plasma fills the entire hero area from top to bottom */}
  <div className="absolute inset-0 top-0 left-0 right-0 bottom-0 z-0 pointer-events-none">
    <div className="w-full h-full">
      <Plasma
        color="#ff6b35"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.5}
        mouseInteractive={true}
      />
    </div>
  </div>

  {/* Content sits above plasma */}
  <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
    <p className="text-gray-200 text-xs sm:text-sm tracking-[0.3em] mb-4 sm:mb-6 uppercase font-semibold">
      ECELL × BMSIT Presents
    </p>

    <h1
      className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 sm:mb-6"
      style={{
        WebkitTextStroke: "2px white",
        WebkitTextFillColor: "transparent",
        letterSpacing: "0.02em",
        textShadow: "0 0 30px rgba(239, 68, 68, 0.5)",
      }}
    >
      CODERED 3.0
    </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 tracking-wide mb-8 sm:mb-12 italic font-medium">
              code till you bleed
            </p>

            <p className="text-gray-100 text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] mb-6 sm:mb-8 font-bold">
              National 24-Hour Hackathon
            </p>

            <div className="flex gap-6 sm:gap-8 md:gap-12 text-center justify-center mb-8">
              {["Days", "Hours", "Mins", "Secs"].map((label, idx) => {
                const val = [timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs][idx];
                return (
                  <div key={label} className="flex flex-col items-center">
                    <div className="bg-black/60 backdrop-blur-sm border-2 border-red-500/50 rounded-lg px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 mb-2">
                      <span className="text-4xl sm:text-5xl md:text-6xl text-white font-black tabular-nums drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
                        {val.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-200 uppercase tracking-wider font-semibold">{label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}