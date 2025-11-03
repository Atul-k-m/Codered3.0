import { useState, useEffect, useRef } from 'react';

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const observerRef = useRef(null);
  const timelineLineRef = useRef(null);
  const containerRef = useRef(null);
  const lastDateIndexRef = useRef(-1);

  const timelineEvents = [
    {
      time: "30th October 2025",
      title: "Launch",
      description: ""
    },
    {
      time: "11:59 PM, 31st October 2025",
      title: "Release of Problem Statements",
      description: ""
    },
    {
      time: "10:00 AM, 1st November 2025",
      title: "Registrations Open",
      description: ""
    },
    {
      time: "11:59 PM, 17th November 2025",
      title: "Round 1 Ends",
      description: ""
    },
    {
      time: "12:00 AM, 1st December 2025",
      title: "Top 50 Teams Announced",
      description: ""
    },
    {
      time: "7:00 PM, 5th December 2025",
      title: "Round 2 Registration Deadline",
      description: ""
    },
    {
      time: "12th & 13th December 2025",
      title: "Grand Finale",
      description: ""
    }
  ];

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

  // Sort by average position
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

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
          } else {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.dataset.index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-timeline-item]');
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  }, []);

  // Track current date checkpoint based on scroll position
  useEffect(() => {
    let rafId = null;
    
    const updateCurrentDate = () => {
      rafId = null;
      const container = containerRef.current;
      if (!container) return;

      const dateCheckpoints = container.querySelectorAll('[data-date-checkpoint]');
      if (!dateCheckpoints || dateCheckpoints.length === 0) return;

      const viewportCenter = window.innerHeight * 0.5;
      const viewportTop = 0;
      const viewportBottom = window.innerHeight;
      
      // Find which date checkpoint is most prominently in view
      let activeIndex = lastDateIndexRef.current >= 0 ? lastDateIndexRef.current : 0;
      let bestScore = -1;

      dateCheckpoints.forEach((checkpoint, index) => {
        const rect = checkpoint.getBoundingClientRect();
        const checkpointTop = rect.top;
        const checkpointBottom = rect.bottom;
        const checkpointCenter = rect.top + (rect.height / 2);
        
        // Skip if checkpoint is too far below viewport
        if (checkpointTop > viewportBottom + 100) return;
        
        // Calculate visibility: how much of the checkpoint is in viewport
        const visibleTop = Math.max(checkpointTop, viewportTop);
        const visibleBottom = Math.min(checkpointBottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Calculate distance from viewport center (prefer items near center)
        const distanceFromCenter = Math.abs(checkpointCenter - viewportCenter);
        const normalizedDistance = Math.min(distanceFromCenter / window.innerHeight, 1);
        
        // Score: higher visibility and closer to center = better
        // Bias towards checkpoints that have passed the viewport center when scrolling down
        const visibilityScore = visibleHeight / Math.max(rect.height, 1);
        const proximityScore = 1 - normalizedDistance;
        const score = visibilityScore * 0.7 + proximityScore * 0.3;
        
        if (score > bestScore) {
          bestScore = score;
          activeIndex = index;
        }
      });

      // Only update if the index actually changed to prevent glitching
      if (activeIndex !== lastDateIndexRef.current) {
        lastDateIndexRef.current = activeIndex;
        setCurrentDateIndex(activeIndex);
      }
    };

    const scheduleUpdate = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(updateCurrentDate);
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Scroll-driven line growth between dots
  useEffect(() => {
    let rafId = null;
    const updateLine = () => {
      rafId = null;
      const container = containerRef.current;
      const lineEl = timelineLineRef.current;
      if (!container || !lineEl) return;

      const dots = container.querySelectorAll('.timeline-dot');
      if (!dots || dots.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const firstDotRect = dots[0].getBoundingClientRect();
      const lastDotRect = dots[dots.length - 1].getBoundingClientRect();

      const firstCenterY = firstDotRect.top - containerRect.top + (firstDotRect.height / 2);
      const lastCenterY = lastDotRect.top - containerRect.top + (lastDotRect.height / 2);
      const lineLeft = firstDotRect.left - containerRect.left + (firstDotRect.width / 2);

      // Progress position is some band inside viewport; 60% from top feels natural
      const progressViewportY = window.innerHeight * 0.6;
      const progressInContainer = progressViewportY - containerRect.top;

      const clampedEndY = Math.min(Math.max(progressInContainer, firstCenterY), lastCenterY);
      const height = Math.max(0, clampedEndY - firstCenterY);

      lineEl.style.left = `${lineLeft}px`;
      lineEl.style.top = `${firstCenterY}px`;
      lineEl.style.transform = 'translateX(-50%)';
      lineEl.style.setProperty('--line-height', `${height}px`);
    };

    const scheduleUpdate = () => {
      if (rafId === null) rafId = window.requestAnimationFrame(updateLine);
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Get current date group info
  const currentDateGroup = dateGroups[currentDateIndex] || dateGroups[0];
  const currentSvgIndex = currentDateIndex % svgPathData.length;
  const [svgKey, setSvgKey] = useState(0);

  // Update SVG key when date changes to trigger animation
  useEffect(() => {
    setSvgKey(prev => prev + 1);
  }, [currentDateIndex]);

  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: 'Grotesk, sans-serif' }}>
      {/* Header */}
      <section className="px-4 sm:px-6 pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 text-white" style={{ fontFamily: 'Robit, sans-serif' }}>
            <span className="bg-red-600 text-white px-4 py-1 inline-block" style={{ fontFamily: 'Robit, sans-serif' }}>Event Timeline</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            24 hours of hacking, learning, and building.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24 md:pb-32">
        <div ref={containerRef} className="max-w-5xl mx-auto relative">
          <div className="space-y-8 sm:space-y-12 md:space-y-20 lg:space-y-28">
            {/* Dynamic Timeline Line */}
            <div
              ref={timelineLineRef}
              className="absolute w-[2px] bg-red-600 transition-[height,top,left] duration-150 ease-out z-10"
              style={{ height: `var(--line-height, 0px)` }}
              id="timeline-line"
            ></div>
            
            {/* Render events grouped by date */}
            {dateGroups.map((dateGroup, dateGroupIndex) => (
              <div key={dateGroup.date} className="relative">
                {/* Events for this date */}
                {dateGroup.events.map((event, eventIndex) => {
                  const globalIndex = timelineEvents.indexOf(event);
                  const isFirstEvent = eventIndex === 0;
                  return (
                    <div 
                      key={`${dateGroup.date}-${eventIndex}`}
                      {...(isFirstEvent ? { 'data-date-checkpoint': dateGroupIndex } : {})}
                      data-timeline-item
                      data-index={globalIndex}
                      className={`flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-12 lg:gap-16 group transition-all duration-700 ease-out relative ${
                        visibleItems.has(String(globalIndex))
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                      }`}
                    >
                      {/* Animated SVG Display - Positioned next to first event of active date */}
                      {isFirstEvent && currentDateIndex === dateGroupIndex && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-30 -mr-8 xl:-mr-12">
                          <div className="relative w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48">
                            {/* SVG Container with smooth transitions */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg
                                key={svgKey}
                                className="w-full h-full text-red-600 animate-svgFadeIn"
                                viewBox="0 0 24 24"
                                style={{
                                  filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))'
                                }}
                              >
                                <path 
                                  d={svgPathData[currentSvgIndex]} 
                                  stroke="currentColor" 
                                  strokeWidth="2" 
                                  fill="none"
                                  className="animate-svgDraw"
                                />
                              </svg>
                            </div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
                          </div>
                        </div>
                      )}
                      {/* Time */}
                      <div className="w-full sm:w-24 md:w-40 lg:w-48 flex-shrink-0 pt-1">
                        <span className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium block transition-all duration-300 group-hover:text-red-400">
                          {event.time}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8 sm:pb-12 md:pb-20 lg:pb-28 pl-4 sm:pl-6 md:pl-12 lg:pl-16 relative transition-all duration-300">
                        {/* Dot */}
                        <div className={`timeline-dot absolute -left-[4px] sm:-left-[5px] md:-left-[6px] top-2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-red-500 group-hover:shadow-lg group-hover:shadow-red-500/50 ${
                          currentDateIndex === dateGroupIndex ? 'ring-2 ring-red-500/50' : ''
                        }`} />
                        
                        <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1 sm:mb-2 md:mb-3 transition-colors duration-300 group-hover:text-gray-100">
                          {event.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          scroll-behavior: smooth;
        }
        
        @keyframes svgFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes svgDraw {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes svgPulse {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.8));
          }
        }
        
        .animate-svgFadeIn {
          animation: svgFadeIn 0.6s ease-out, svgPulse 3s ease-in-out 0.6s infinite;
        }
        
        .animate-svgDraw {
          animation: svgDraw 0.8s ease-out;
          stroke-dasharray: 1000;
          stroke-dashoffset: 0;
        }
      `}</style>
    </div>
  );
}