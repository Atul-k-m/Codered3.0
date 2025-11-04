import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { events } from "../data/Eventdata";


const Timeline = () => {
  const headingRef = useRef(null);
  const scrollRef = useRef(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(headingRef, { margin: "-100px" });

<<<<<<< HEAD
  // Helper function to extract and normalize date from time string
  // Returns an object with both normalized key (for grouping) and display string
  const extractDate = (timeString) => {
    // Handle date formats like "30th October 2025", "11:59 PM, 31st October 2025", "12th & 13th December 2025"
    // First, try to match date ranges (e.g., "12th & 13th December 2025")
    const rangeMatch = timeString.match(/(\d{1,2})(?:st|nd|rd|th)?\s*&\s*(\d{1,2})(?:st|nd|rd|th)?\s+(\w+)\s+(\d{4})/);
    if (rangeMatch) {
      const day = parseInt(rangeMatch[1]);
      const month = rangeMatch[3].trim();
      const year = parseInt(rangeMatch[4]);
      const displayDate = `${day} ${month} ${year}`;
      // Normalized key for grouping (lowercase to avoid duplicates)
      const key = `${day} ${month.toLowerCase()} ${year}`;
      return { key, display: displayDate };
    }
    
    // Match single dates - this will match both "30th October 2025" and "11:59 PM, 31st October 2025"
    const dateMatch = timeString.match(/(\d{1,2})(?:st|nd|rd|th)?\s+(\w+)\s+(\d{4})/);
    if (dateMatch) {
      const day = parseInt(dateMatch[1]);
      const month = dateMatch[2].trim();
      const year = parseInt(dateMatch[3]);
      const displayDate = `${day} ${month} ${year}`;
      // Normalized key for grouping (lowercase to avoid duplicates)
      const key = `${day} ${month.toLowerCase()} ${year}`;
      return { key, display: displayDate };
    }
    // Fallback: return normalized version of the original string
    const normalized = timeString.trim();
    return { key: normalized.toLowerCase(), display: normalized };
  };

  // Group events by date and calculate average position
  const groupedByDate = timelineEvents.reduce((acc, event, index) => {
    const { key, display } = extractDate(event.time);
    if (!acc[key]) {
      acc[key] = {
        date: display, // Use display format for showing to user
        events: [],
        indices: []
      };
    }
    acc[key].events.push(event);
    acc[key].indices.push(index);
    return acc;
  }, {});

  const dateGroups = Object.values(groupedByDate).map(group => ({
    ...group,
    avgPosition: group.indices.reduce((sum, idx) => sum + idx, 0) / group.indices.length,
    eventCount: group.events.length
  }));

  // Sort by average positionn[]
  dateGroups.sort((a, b) => a.avgPosition - b.avgPosition);

  // Placeholder SVG paths - Replace these with your custom SVG path data
  // Each path string corresponds to a date group (one per unique date)
  // To replace: Import your SVG files and extract the 'd' attribute from each <path> element
  // Example: If you have an SVG with <path d="M12 2..."/>, use "M12 2..." as the string value
  // The SVG will automatically animate when scrolling to each new date checkpoint
  const svgPathData = [
    "M12 2L2 7L12 12L22 7L12 2Z",  // Placeholder 1
    "M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z",  // Placeholder 2
    "M12 2L22 12L12 22L2 12L12 2Z",  // Placeholder 3
    "M12 2L17 12L12 22L7 12L12 2Z",  // Placeholder 4
    "M12 2C15.314 2 18 4.686 18 8C18 11.314 15.314 14 12 14C8.686 14 6 11.314 6 8C6 4.686 8.686 2 12 2Z",  // Placeholder 5
    "M12 2L20 20L4 20L12 2Z",  // Placeholder 6
    "M12 2L16 8L12 14L8 8L12 2Z"  // Placeholder 7
  ];
=======
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
>>>>>>> c067f1e99505279fd4fa1c91464b4257a808b31b

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
