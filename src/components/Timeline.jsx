// Timeline.jsx
import React from "react";

const eventTimeline = [
  { date: "Jan 2024", title: "Hackathon Kickoff", description: "Codered 3.0 officially launched with our annual hackathon." },
  { date: "Feb 2024", title: "Web Dev Workshop", description: "Hands-on workshop on React, Tailwind & modern web development." },
  { date: "Mar 2024", title: "IoT Workshop", description: "Embedded systems and IoT project challenges." },
  { date: "Apr 2024", title: "AI Meetup", description: "Introduction to AI/ML applications in IoT projects." },
  { date: "May 2024", title: "Cybersecurity Seminar", description: "Understanding intrusion detection and cybersecurity best practices." },
  { date: "Jun 2024", title: "Cloud Computing Session", description: "Explore cloud architecture and deployment strategies." },
  { date: "Aug 2024", title: "AI & ML Meetup", description: "Deep dive into AI/ML applied projects." },
  { date: "Oct 2024", title: "Codered Mini Hack", description: "Small hackathon focusing on problem-solving and coding challenges." },
  { date: "Dec 2024", title: "Year-End Showcase", description: "Showcasing all projects and achievements of Codered 3.0." },
];

const Timeline = () => {
  return (
    <div className="bg-black text-white py-16 px-4 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-red-600 mb-12">Event Timeline</h2>
      <div className="relative w-full max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-600 h-full"></div>

        {eventTimeline.map((event, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center w-full transition-all duration-700
              ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Date */}
            <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
              <div className="bg-red-600 text-black font-bold px-4 py-2 rounded-lg shadow-lg">
                {event.date}
              </div>
            </div>

            {/* Connector */}
            <div className="w-8 h-8 bg-yellow-500 rounded-full z-10 flex-shrink-0 mx-4 md:mx-0"></div>

            {/* Event Content */}
            <div className="md:w-1/2 bg-gray-900 border border-red-600 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-red-500 mb-2">{event.title}</h3>
              <p className="text-yellow-400">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
