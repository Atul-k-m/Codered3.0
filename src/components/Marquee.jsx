import React, { useEffect, useRef } from "react";

export default function Marquee({ text = "CODERED 3.0", speed = 60, scrollFactor = 0.2 }) {
  const containerRef = useRef(null);
  const trackLeftRef = useRef(null);
  const trackRightRef = useRef(null);
  const offsetLeft = useRef(0);
  const offsetRight = useRef(0);
  const velocity = useRef(0);
  const raf = useRef(0);

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

  useEffect(() => {
    const onWheel = (e) => {
      const delta = e.deltaY || e.wheelDelta || e.detail || 0;
      velocity.current += (delta / 1000) * speed * scrollFactor;
    };
    window.addEventListener('wheel', onWheel, { passive: true });

    const animate = () => {
      // base movement
      offsetLeft.current -= (speed * 0.05 + velocity.current);
      offsetRight.current += (speed * 0.05 + velocity.current);
      // wrap around for seamless effect
      const wrap = trackLeftRef.current ? trackLeftRef.current.scrollWidth / 2 : 1000;
      if (offsetLeft.current <= -wrap) offsetLeft.current += wrap;
      if (offsetLeft.current >= wrap) offsetLeft.current -= wrap;
      if (offsetRight.current <= -wrap) offsetRight.current += wrap;
      if (offsetRight.current >= wrap) offsetRight.current -= wrap;
      // apply transforms
      if (trackLeftRef.current) trackLeftRef.current.style.transform = `translateX(${offsetLeft.current}px)`;
      if (trackRightRef.current) trackRightRef.current.style.transform = `translateX(${offsetRight.current}px)`;
      // decay velocity
      velocity.current *= 0.92;
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('wheel', onWheel);
    };
  }, [speed, scrollFactor]);

  return (
    <div className="relative w-full overflow-hidden bg-black py-6" ref={containerRef}>
      <div className="space-y-2">
        <div
          ref={trackLeftRef}
          className="marquee-track flex whitespace-nowrap will-change-transform"
        >
          <span
            className="px-8 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-widest"
            style={{ fontFamily: 'Riccione, cursive', color: '#ffffff' }}
          >
            {text} • {text} • {text} • {text} • {text} • {text} • {text} • {text}
          </span>
        </div>
        <div
          ref={trackRightRef}
          className="marquee-track flex whitespace-nowrap will-change-transform"
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

      <style>{``}</style>
    </div>
  );
}


