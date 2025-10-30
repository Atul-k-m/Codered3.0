import { useState, useEffect, useRef } from 'react';

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

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

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
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

  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: 'Grotesk, sans-serif' }}>
      {/* Header */}
      <section className="px-4 sm:px-6 pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 text-white" style={{ fontFamily: 'Grotesk, sans-serif' }}>
            <span className="bg-blue-600 text-white px-4 py-1 rounded-md inline-block" style={{ fontFamily: 'Grotesk, sans-serif' }}>Event Timeline</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            24 hours of hacking, learning, and building.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 sm:space-y-6 md:space-y-12 lg:space-y-16">
            {timelineEvents.map((event, i) => (
              <div 
                key={i}
                data-timeline-item
                data-index={i}
                className={`flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-12 lg:gap-16 group transition-all duration-700 ease-out ${
                  visibleItems.has(String(i))
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Time */}
                <div className="w-full sm:w-24 md:w-40 lg:w-48 flex-shrink-0 pt-1">
                  <span className="text-red-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium block transition-all duration-300 group-hover:text-red-400">
                    {event.time}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-4 sm:pb-6 md:pb-12 lg:pb-16 border-l border-zinc-800 pl-4 sm:pl-6 md:pl-12 lg:pl-16 relative transition-all duration-300 group-hover:border-zinc-700">
                  {/* Dot */}
                  <div className="absolute -left-[4px] sm:-left-[5px] md:-left-[6px] top-2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-red-500 group-hover:shadow-lg group-hover:shadow-red-500/50" />
                  
                  <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1 sm:mb-2 md:mb-3 transition-colors duration-300 group-hover:text-gray-100">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}