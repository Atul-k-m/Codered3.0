import { useState, useEffect, useRef } from 'react';

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  const timelineEvents = [
    {
      time: "Day 1 - 10:00 AM",
      title: "Registration & Check-in",
      description: "Get your badge, meet the team, and settle in."
    },
    {
      time: "11:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and track introductions."
    },
    {
      time: "12:00 PM",
      title: "Hacking Begins",
      description: "Teams assemble. Ideas come to life."
    },
    {
      time: "2:00 PM",
      title: "Lunch Break",
      description: "Fuel up with food and refreshments."
    },
    {
      time: "6:00 PM",
      title: "Workshop: AI & Agents",
      description: "Learn AI integration from industry experts."
    },
    {
      time: "8:00 PM",
      title: "Dinner & Networking",
      description: "Connect with fellow hackers and mentors."
    },
    {
      time: "10:00 PM",
      title: "Late Night Coding",
      description: "The energy peaks as projects take shape."
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
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-3 text-white">
            Event Timeline
          </h1>
          <p className="text-gray-500 text-base md:text-xl lg:text-2xl">
            26 hours of hacking, learning, and building.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 md:space-y-12 lg:space-y-16">
            {timelineEvents.map((event, i) => (
              <div 
                key={i}
                data-timeline-item
                data-index={i}
                className={`flex gap-6 md:gap-12 lg:gap-16 group transition-all duration-700 ease-out ${
                  visibleItems.has(String(i))
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Time */}
                <div className="w-24 md:w-40 lg:w-48 flex-shrink-0 pt-1">
                  <span className="text-red-500 text-sm md:text-lg lg:text-xl font-medium block transition-all duration-300 group-hover:text-red-400">
                    {event.time}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 md:pb-12 lg:pb-16 border-l border-zinc-800 pl-6 md:pl-12 lg:pl-16 relative transition-all duration-300 group-hover:border-zinc-700">
                  {/* Dot */}
                  <div className="absolute -left-[5px] md:-left-[6px] top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-red-500 group-hover:shadow-lg group-hover:shadow-red-500/50" />
                  
                  <h3 className="text-white font-semibold text-lg md:text-2xl lg:text-3xl mb-2 md:mb-3 transition-colors duration-300 group-hover:text-gray-100">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-lg lg:text-xl leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
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