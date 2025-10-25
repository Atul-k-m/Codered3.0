import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const problemStatements = [
  {
    track: "Track 1",
    problems: [
      {
        id: "PS1",
        title: "Distributed Systems Architecture",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
      {
        id: "PS2",
        title: "Real-time Data Processing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est mauris placerat eleifend leo."
      },
      {
        id: "PS3",
        title: "Scalable Microservices",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut."
      }
    ]
  },
  {
    track: "Track 2",
    problems: [
      {
        id: "PS4",
        title: "Intelligent Automation Systems",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio nullam varius vel turpis. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum."
      },
      {
        id: "PS5",
        title: "Predictive Analytics Engine",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est enim ullamcorper augue a nibh vitae mauris commodo quis imperdiet massa tincidunt."
      },
      {
        id: "PS6",
        title: "Adaptive Learning Platform",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam. Sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum praesent mauris fusce nec tellus sed augue semper porta mauris massa id nisl venenatis lacinia."
      }
    ]
  }
];

export default function ProblemStatementPage() {
  const [selectedTrack, setSelectedTrack] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white font-mono">

     <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/crlogo.png" 
                alt="CodeRed 3.0" 
                className="h-20 w-20 object-contain"
              />
            </Link>
          </div>
          
          {/* Center - Back Button */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
          
          {/* Right side - Register Button */}
          <button className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-2 rounded-full flex items-center gap-2 text-sm tracking-wide">
            Register Now
          </button>
        </div>
      </nav>
      {/* Problem Statements Content */}
      <section className="relative py-20 px-6 pt-32 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span 
                className="block"
                style={{
                  WebkitTextStroke: "1.5px #ef4444",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.04em",
                }}
              >
                PROBLEM STATEMENTS
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose your track and build innovative solutions
            </p>
          </div>

          {/* Track Selector */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {problemStatements.map((track, index) => (
              <button
                key={index}
                onClick={() => setSelectedTrack(index)}
                className={`px-8 py-3 font-bold text-lg transition-all duration-300 border-2 ${
                  selectedTrack === index
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-transparent text-white border-red-600 hover:bg-red-600'
                }`}
              >
                {track.track}
              </button>
            ))}
          </div>

          {/* Problem Statements Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemStatements[selectedTrack].problems.map((problem, index) => (
                <div
                  key={index}
                  className="relative border-2 border-gray-800 bg-black hover:border-red-600 transition-all duration-300 p-6 flex flex-col group overflow-hidden"
                >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>



                  {/* Content */}
                  <div className="relative z-10">
                    {/* Problem ID */}
                    <div className="mb-4 inline-block border-2 border-red-600 px-3 py-1">
                      <span className="text-2xl font-bold text-red-600 font-mono">
                        {problem.id}
                      </span>
                    </div>

                    {/* Problem Title */}
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {problem.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-0.5 bg-red-600 mb-4 group-hover:w-full transition-all duration-300"></div>

                    {/* Problem Description */}
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                      {problem.description}
                    </p>

                    {/* Separator Line */}
                    <div className="mt-6 pt-4 border-t border-gray-800 group-hover:border-red-600/50 transition-colors duration-300">
                      <span className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-red-500 transition-colors duration-300">
                        {problemStatements[selectedTrack].track}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-base max-w-3xl mx-auto">
              Select a problem statement that aligns with your interests and expertise. 
              You'll have <span className="text-red-600 font-bold">24 hours</span> to develop your solution during CodeRed 3.0.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}