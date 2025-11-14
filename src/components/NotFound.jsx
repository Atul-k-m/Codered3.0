import { useState, useEffect } from 'react';
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-#d90a16 relative overflow-hidden pt-24 sm:pt-32 md:pt-50">
      
      <div className="grain-effect"></div>

      {/* Large 404 text in background */}
      
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Left blur edge */}
        <div className="absolute inset-0 noise-texture"></div>
<div className="absolute left-0 top-0 bottom-0 w-[35%] bg-gradient-to-r from-black via-black/60 to-transparent"></div>
<div className="absolute right-0 top-0 bottom-0 w-[35%] bg-gradient-to-l from-black via-black/60 to-transparent"></div>

        <h1 
          className="font-black text-gray-900/30 select-none leading-none whitespace-nowrap transform translate-y-[8vh]"
          style={{
            fontSize: '55vw',
            fontFamily: 'Robit, sans-serif',
            WebkitTextFillColor: 'Black',
          }}
        >
          404
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">

        {/* Header badge */}
        <div className="mb-6 sm:mb-8 animate-slide-up">
          <button className= "inline-flex items-center justify-center h-9 px-6 bg-white/20 rounded-full  font-semibold tracking-wider uppercase">
           <span className="relative top-[2.5px] relative left-[3px]">Lost?</span>
          </button>
        </div>

        {/* Main 404 number */}
        <div className="mb-6 sm:mb-8 animate-slide-up">
          <h2 className="text-7xl sm:text-8xl md:text-9xl font-black text-white drop-shadow-2xl" style={{ fontFamily: "'Times New Roman', serif", fontStyle: "italic" }}>
          404
          </h2>
        </div>

        {/* Error message */}
        <div className="mb-8 sm:mb-12 animate-slide-up-delay">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-2">
          </p>
        </div>

        
      </div>
<div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://codered.vercel.app"
              target=""
              rel="noreferrer"
            >
              <InteractiveHoverButton className="bg-black border border-#d90a16 text-black-500 hover:bg-Black-600 hover:text-white px-6 py-3 text-sm sm:text-base">
                Home
              </InteractiveHoverButton>
            </a>
          </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.5s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.1s both;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
          .grain-effect {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.75;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .noise-texture {
          background-image: 
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,.03) 2px, rgba(255,255,255,.03) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,.03) 2px, rgba(255,255,255,.03) 4px);
          opacity: 0.8;
        }

        .noise-texture::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 1px,
            rgba(0,0,0,.1) 2px,
            rgba(0,0,0,.1) 2px
          );
          opacity: 0.5;
        }

        .noise-texture::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='6'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
          background-size: 100px 100px;
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}