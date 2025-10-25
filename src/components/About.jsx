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
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div
          className="max-w-6xl w-full border border-gray-700 rounded-3xl p-8 md:p-12 lg:p-16 relative"
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
          {["top-8 left-8", "top-8 right-8", "bottom-8 left-8", "bottom-8 right-8"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} text-red-600 text-3xl`}>+</div>
          ))}

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">What is CodeRed 26?</h2>

          <p className="text-gray-400 mb-12 max-w-3xl leading-relaxed">
            CodeRed 26 is a 26-hour hackathon where builders, designers, and makers come together to prototype bold ideas. 
            Red and black theme. Clean interface. High energy.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Tracks</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>AI + Agents</p>
                <p>Web & Cloud</p>
                <p>DevTools</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Prizes</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Best Overall</p>
                <p>Best Design</p>
                <p>Community Choice</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Details</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Duration: 26 hours</p>
                <p>Team size: 1-4</p>
                <p>Venue: TBA</p>
              </div>
            </div>
          </div>

          <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-10 py-3 font-bold shadow-lg shadow-red-600/50">
            Register Now
          </InteractiveHoverButton>
        </div>
      </section>

      {/* Build Bold Section */}
    
    </div>
  );
}