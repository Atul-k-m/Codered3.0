import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import DotGrid from "../background/Dotgrid.jsx";
import { Particles } from "react-tsparticles";



// Morphing shapes component with connected nodes
function MorphingShapes() {
  const [shapeIndex, setShapeIndex] = useState(0);
  const cellSize = 35;
  const gap = 8;
  
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
  
  // Color palette with gold/orange/red
  const colors = ["#ef4444", "#f59e0b", "#eab308", "#fb923c", "#dc2626"];

  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
  <div className="absolute inset-0 opacity-50">
        <DotGrid
          dotSize={6}
          gap={18}
          baseColor="#9CA3AF"       
          activeColor="#9CA3AF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <svg width="500" height="500" className="relative z-10">
        {/* Connection lines between adjacent nodes */}
        {currentShape.cells.map((cell, i) => {
          const x1 = cell.x * (cellSize + gap) + 80;
          const y1 = cell.y * (cellSize + gap) + 100;
          
          return currentShape.cells.slice(i + 1).map((otherCell, j) => {
            const distance = Math.abs(cell.x - otherCell.x) + Math.abs(cell.y - otherCell.y);
            if (distance === 1) {
              const x2 = otherCell.x * (cellSize + gap) + 80;
              const y2 = otherCell.y * (cellSize + gap) + 100;
              
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

        {/* Gradient definitions for stylish look */}
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

        {/* Nodes/blocks */}
        {currentShape.cells.map((cell, i) => {
          const nodeKey = `${cell.x}-${cell.y}`;
          const x = cell.x * (cellSize + gap) + 80;
          const y = cell.y * (cellSize + gap) + 100;
          const color = colors[i % colors.length];
          
          return (
            <g key={nodeKey}>
              {cell.type === "rect" ? (
                <>
                  {/* Shadow/glow layer */}
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
                  {/* Main block with texture */}
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
                  {/* Highlight */}
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
                  {/* Shadow/glow for circle */}
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
                  {/* Main circle */}
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
                  {/* Highlight on circle */}
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

      {/* Dynamic glow that changes with shape */}
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

  // Countdown timer logic
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



  return (
    <section className="relative min-h-screen bg-black text-white font-mono overflow-hidden">
    

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <img 
              src="/crlogo.png" 
              alt="CodeRed 3.0" 
              className="h-20 w-20 object-contain"
            />
          </div>
          
          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem-statements" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              Problem Statements
            </a>
            <a href="#team" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              Team
            </a>
            <a href="#faq" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              FAQ
            </a>
            <a href="#sponsors" className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase">
              Sponsors
            </a>
          </div>
          
          {/* Right side - Register Button */}
          <button className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-2 rounded-full flex items-center gap-2 text-sm tracking-wide">
            Register Now
            <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#problem-statements" className="text-gray-300 hover:text-red-600 transition-colors text-xs tracking-wide uppercase">
              Problem Statements
            </a>
            <a href="#team" className="text-gray-300 hover:text-red-600 transition-colors text-xs tracking-wide uppercase">
              Team
            </a>
            <a href="#faq" className="text-gray-300 hover:text-red-600 transition-colors text-xs tracking-wide uppercase">
              FAQ
            </a>
            <a href="#sponsors" className="text-gray-300 hover:text-red-600 transition-colors text-xs tracking-wide uppercase">
              Sponsors
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24">
  {/* Left Section */}
  <div className="flex-1 z-10">
    <p className="text-gray-300 text-base md:text-lg tracking-[0.25em] mb-4 uppercase">
      ECELL × BMSIT Presents
    </p>

    <h1
      className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
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

    {/* New line above timer */}
    <p className="text-gray-300 text-sm md:text-base uppercase tracking-widest mb-3">
      National 24-Hour Hackathon
    </p>

    {/* Clean, minimal timer */}
    <div className="flex gap-8 text-center text-base md:text-lg font-semibold">
      {["Days", "Hours", "Mins", "Secs"].map((label, idx) => {
        const val = [timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs][idx];
        return (
          <div key={label} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl text-white font-bold tabular-nums">
              {val.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-gray-500 uppercase">{label}</span>
          </div>
        );
      })}
    </div>
  </div>


        {/* Right Section: Morphing geometric animation */}
        <div className="flex-1 hidden md:flex justify-center items-center relative">
          <MorphingShapes />
        </div>
      </div>
    </section>
  );
}