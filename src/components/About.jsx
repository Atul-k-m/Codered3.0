import { InteractiveHoverButton } from "./ui/interactive-hover-button";

export default function About() {
  return (
    <div 
      className="relative"
      style={{
        background: "#0a0a0a",
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.35) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      {/* What is CodeRed 26 Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div
          className="max-w-6xl w-full border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative"
          style={{
            background: "rgba(20, 20, 20, 0.6)",
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.09) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.09) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          {/* Corner decorations */}
          {["top-4 left-4 sm:top-8 sm:left-8", "top-4 right-4 sm:top-8 sm:right-8", "bottom-4 left-4 sm:bottom-8 sm:left-8", "bottom-4 right-4 sm:bottom-8 sm:right-8"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} text-red-600 text-xl sm:text-2xl md:text-3xl`}>+</div>
          ))}

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">What is CodeRed 3.0?</h2>

          <p className="text-gray-400 mb-8 sm:mb-12 max-w-3xl leading-relaxed text-sm sm:text-base">
            CodeRed 3.0 is a national 24-hour hackathon where builders, designers, and makers come together to prototype bold ideas. 
            Red and black theme. Clean interface. High energy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Tracks</h3>
              <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <p>AI + Machine Learning</p>
                <p>Web & Cloud</p>
                <p>Mobile Apps</p>
                <p>Blockchain</p>
                <p>IoT</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Prizes</h3>
              <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <p>Overall Winner: ₹50,000</p>
                <p>Runner-up: ₹30,000</p>
                <p>Category Winners</p>
                <p>Internship Opportunities</p>
              </div>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Details</h3>
              <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <p>Duration: 24 hours</p>
                <p>Team size: 1-4</p>
                <p>Venue: BMSIT</p>
                <p>Date: Dec 20, 2025</p>
              </div>
            </div>
          </div>

          <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 font-bold shadow-lg shadow-red-600/50 text-sm sm:text-base">
            Register Now
          </InteractiveHoverButton>
        </div>
      </section>

      {/* Build Bold Section */}
    
    </div>
  );
}