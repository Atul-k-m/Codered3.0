import React, { useEffect, useRef } from "react";

export default function Marquee({ text = "CODERED 3.0", speed = 60 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const tracks = el.querySelectorAll(".marquee-track");
    tracks.forEach((track) => {
      if (track.children.length < 2) {
        const clone = track.firstChild.cloneNode(true);
        track.appendChild(clone);
      }
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black py-6" ref={containerRef}>
      <div className="space-y-2">
        <div
          className="marquee-track flex whitespace-nowrap will-change-transform"
          style={{ animation: `marquee-left ${speed}s linear infinite` }}
        >
          <span
            className="px-8 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-widest"
            style={{ fontFamily: 'Riccione, cursive', color: '#ffffff' }}
          >
            {text} • {text} • {text} • {text} • {text} • {text} • {text} • {text}
          </span>
        </div>
        <div
          className="marquee-track flex whitespace-nowrap will-change-transform"
          style={{ animation: `marquee-right ${speed}s linear infinite` }}
        >
          <span
            className="px-8 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-widest"
            style={{ fontFamily: 'Riccione, cursive', color: '#ffffff' }}
          >
            {text} • {text} • {text} • {text} • {text} • {text} • {text} • {text}
          </span>
        </div>
      </div>

      {/* Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5" style={{
        background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5" style={{
        background: "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      }} />

      <style>{`
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </div>
  );
}


