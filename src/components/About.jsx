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
      {/* What is CodeRed 3.0 Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            What is CodeRed 3.0?
          </h2>

          <p className="text-gray-400 mb-12 sm:mb-16 max-w-2xl text-base sm:text-lg leading-relaxed">
            CodeRed 3.0 is a national 24-hour hackathon where builders, designers, and makers come together to prototype bold ideas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div 
              className="border border-gray-800 rounded-xl p-6 sm:p-8 relative"
              style={{
                background: "rgba(15, 15, 15, 0.5)",
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            >
              <div className="absolute top-4 right-4 text-red-600 text-lg">+</div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Tracks</h3>
              <div className="space-y-2 text-white text-sm">
                <p>AI + Machine Learning</p>
                <p>Web & Cloud</p>
                <p>Mobile Apps</p>
                <p>Blockchain</p>
                <p>IoT</p>
              </div>
            </div>

            <div 
              className="border border-gray-800 rounded-xl p-6 sm:p-8 relative"
              style={{
                background: "rgba(15, 15, 15, 0.5)",
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            >
              <div className="absolute top-4 right-4 text-red-600 text-lg">+</div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Prizes</h3>
              <div className="space-y-2 text-white text-sm">
                <p>Overall Winner: ₹50,000</p>
                <p>Runner-up: ₹30,000</p>
                <p>Category Winners</p>
                <p>Internship Opportunities</p>
              </div>
            </div>

            <div 
              className="border border-gray-800 rounded-xl p-6 sm:p-8 relative sm:col-span-2 lg:col-span-1"
              style={{
                background: "rgba(15, 15, 15, 0.5)",
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            >
              <div className="absolute top-4 right-4 text-red-600 text-lg">+</div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Details</h3>
              <div className="space-y-2 text-white text-sm">
                <p>Duration: 24 hours</p>
                <p>Team size: 1-4</p>
                <p>Venue: BMSIT</p>
                <p>Date: Dec 20, 2025</p>
              </div>
            </div>
          </div>

          <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-8 py-3 font-medium text-sm">
            Register Now
          </InteractiveHoverButton>
        </div>
      </section>

      {/* Build Bold Section */}
    
    </div>
  );
}