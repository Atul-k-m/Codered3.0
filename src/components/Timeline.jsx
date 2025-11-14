import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { events } from "../data/Eventdata.jsx";

const Timeline = () => {
  const headingRef = useRef(null);
  const scrollRef = useRef(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(headingRef, { margin: "-100px" });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [autoImageIndex, setAutoImageIndex] = useState(0);

  const totalImages = 3; // 👈 you currently have 3 images (timeline/1.png, timeline/2.png, timeline/3.png)

  // Determine current event based on date
  useEffect(() => {
    const now = new Date();
    let activeIndex = 0;

    for (let i = events.length - 1; i >= 0; i--) {
      const eventDate = new Date(events[i].dateISO);
      if (now >= eventDate) {
        activeIndex = i;
        break;
      }
    }

    setCurrentEventIndex(activeIndex);
    setSelectedIndex(activeIndex);
  }, []);

  // Scroll animation once in view
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

  // 🔁 Auto image change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoImageIndex((prev) => (prev + 1) % totalImages);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  // Determine which image to show
  const displayedImageIndex =
    (hoveredIndex !== null ? hoveredIndex : selectedIndex) % totalImages;

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white font-bold overflow-hidden">
      {/* Image Section */}
      <div
        className="w-full md:w-2/5 flex items-center justify-center p-6 md:p-0 relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/images/timelinebg.svg')" }}
      >
        <div
          className="w-[80%] h-[400px] md:h-[65%] border-4 rounded-2xl flex items-center justify-center bg-black/40 shadow-[-12px_12px_24px_rgba(0,0,0,0.6)] z-10 overflow-hidden"
          style={{ borderColor: "#e11d48" }}
        >
          <img
            src={`timeline/${displayedImageIndex + 1}.png`}
            alt="Event Visual"
            className="w-full h-full object-cover rounded-xl transition-all duration-700 ease-in-out"
            key={autoImageIndex} // forces fade effect when auto changes
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div
        className="w-full md:w-3/5 flex flex-col px-6 md:px-10 py-8 border-l-4 overflow-hidden"
        style={{ borderColor: "#111827" }}
      >
        <h2
          ref={headingRef}
          className="italic text-3xl md:text-7xl mb-6 md:mb-10 py-4"
          style={{ fontFamily: "Riccione, italic", letterSpacing: 1 }}
        >
          <span style={{ color: "#ff2d2d" }}>Here's</span> What's Coming!
        </h2>

        {/* Scrollable Events List */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-6 md:space-y-8 pl-4 md:pl-8 pr-2 md:pr-4 max-h-[50vh] md:max-h-[70vh] overflow-y-auto overflow-x-hidden"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#ff6b6b transparent",
          }}
        >
          {events.map((event, index) => {
            const isCurrentEvent = index === currentEventIndex;
            const isPastEvent = index < currentEventIndex;

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="border-b pb-6 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: "#2b2b2b",
                }}
              >
                <div className="flex items-start justify-between gap-3 md:gap-4 w-full">
                  <h3
                    className={`text-xl md:text-4xl transition-colors duration-300 break-words`}
                    style={{
                      flex: "1 1 0",
                      minWidth: 0,
                      fontFamily: "Robit, sans-serif",
                      color: isCurrentEvent
                        ? "#ff2d2d"
                        : isPastEvent
                        ? "#888888"
                        : "#ffffffff",
                    }}
                  >
                    {event.title}
                  </h3>
                  <span
                    className={`border text-xs md:text-base px-3 md:px-4 py-2 md:py-3 rounded-full transition-all duration-300`}
                    style={{
                      flexShrink: 0,
                      borderColor: isCurrentEvent
                        ? "#ff2d2d"
                        : "rgba(255,255,255,0.2)",
                      background: isCurrentEvent
                        ? "rgba(255,45,45,0.12)"
                        : "rgba(255,255,255,0.03)",
                      color: isCurrentEvent ? "#ff2d2d" : "#ffffffff",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.date}
                  </span>
                </div>

                <p
                  className={`text-sm md:text-xl mt-2 transition-colors duration-300`}
                  style={{
                    fontFamily: '"Grotesk", sans-serif',
                    color: isCurrentEvent
                      ? "#ffcccc"
                      : isPastEvent
                      ? "#555555"
                      : "#6b6b6b",
                  }}
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
