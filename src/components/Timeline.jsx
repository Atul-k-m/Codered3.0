import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { events } from "../data/Eventdata";


const Timeline = () => {
  const headingRef = useRef(null);
  const scrollRef = useRef(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(headingRef, { margin: "-100px" });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      const el = scrollRef.current;
      if (el && el.scrollHeight > el.clientHeight) {
        el.scrollTo({ top: 300, behavior: "smooth" });
        setTimeout(() => {
          el.scrollTo({ top: 0, behavior: "smooth" });
        }, 1000);
      }
      hasAnimated.current = true;
    }
  }, [isInView]);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white font-bold">
      {/* Image Section */}
      <div
        className="w-full md:w-2/5 flex items-center justify-center p-6 md:p-0 relative overflow-visible bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/images/timelinebg.svg')" }}
      >
        <div className="w-[80%] h-[400px] md:h-[65%] border-4 rounded-2xl flex items-center justify-center bg-black/40 shadow-[-12px_12px_24px_rgba(0,0,0,0.6)] z-10"
             style={{ borderColor: '#e11d48' }}>
          <img
            src={`images/eventvisual${(hoveredIndex !== null ? hoveredIndex : selectedIndex) + 1}.svg`}
            alt="Event Visual"
            className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full md:w-3/5 flex flex-col px-6 md:px-10 py-8 border-l-4" style={{ borderColor: '#111827' }}>
        <motion.div
          ref={headingRef}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <h2
            className="text-3xl md:text-7xl mb-6 md:mb-10 py-4"
            style={{ fontFamily: 'Riccione, serif', letterSpacing: 1 }}
          >
            <span style={{ color: "#ff2d2d" }}>Here’s</span> What’s Coming!
          </h2>
        </motion.div>

        {/* Scrollable Events List */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-6 md:space-y-8 pl-4 md:pl-8 pr-2 max-h-[50vh] md:max-h-[70vh] overflow-y-auto"
          style={{
            scrollbarWidth: "normal",
            scrollbarColor: "#ff6b6b transparent",
          }}
        >
          {events.map((event, index) => {
            const isSelected = index === selectedIndex;

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="border-b px-4 pl-0 pb-6 hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
                style={{ borderColor: '#2b2b2b' }}
              >
                <div className="flex items-start justify-between gap-4 flex-nowrap w-full">
                  <h3
                    className={`text-xl md:text-4xl ${isSelected ? 'text-white' : 'text-[#ffb3b3] hover:text-[#ffc6c6]'}`}
                    style={{ flex: "1 1 auto", fontFamily: 'Roboto, sans-serif' }}
                  >
                    {event.title}
                  </h3>
                  <span
                    className={`border text-sm md:text-xl px-4 py-2 md:py-3 rounded-full whitespace-nowrap`}
                    style={{
                      flexShrink: 0,
                      borderColor: isSelected ? '#ff2d2d' : 'rgba(255,255,255,0.2)',
                      background: isSelected ? 'rgba(255,45,45,0.12)' : 'rgba(255,255,255,0.03)'
                    }}
                  >
                    {event.date}
                  </span>
                </div>

                <p
                  className={`text-sm md:text-xl mt-2`}
                  style={{ fontFamily: '"Space Grotesk", sans-serif', color: isSelected ? '#ffffff' : '#ffbdbd' }}
                >
                  {event.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
