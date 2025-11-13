import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div
      className="relative"
      style={{
        background: "#0a0a0a",
        backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.35) 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
      }}
    >
      {/* What is CODERED 3.0 Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl w-full">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 inline-block bg-red-600 px-6 py-2"
            style={{ fontFamily: "Robit, sans-serif" }}
          >
            What is CODERED 3.0?
          </h2>

          <p
            className="text-gray-400 mb-12 sm:mb-16 max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "Grotesk, sans-serif" }}
          >
            CODERED 3.0 is a National Level 24-hour Hackathon where builders,
            designers, and makers come together to prototype bold ideas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div
              className="border border-gray-800 rounded-xl p-6 sm:p-8 relative cursor-pointer hover:border-red-600 transition"
              style={{
                background: "rgba(15, 15, 15, 0.5)",
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
              onClick={() => {
                navigate("/problem-statements");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
            >
              <div className="absolute top-4 right-4 text-red-600 text-lg">
                +
              </div>
              <h3
                className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
                style={{ fontFamily: "Grotesk, sans-serif" }}
              >
                Tracks
              </h3>
              <div
                className="space-y-2 text-white text-sm"
                style={{ fontFamily: "Grotesk, sans-serif" }}
              >
                <p>Software</p>
                <p>Hardware</p>
              </div>
            </div>

            <div
              className="border border-gray-800 rounded-xl p-6 sm:p-8 relative cursor-pointer hover:border-red-600 transition"
              style={{
                background: "rgba(15, 15, 15, 0.5)",
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
              onClick={() => {
                navigate("/prize-pool");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
            >
              <div className="absolute top-4 right-4 text-red-600 text-lg">
                +
              </div>
              <h3
                className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
                style={{ fontFamily: "Grotesk, sans-serif" }}
              >
                Prizes
              </h3>
              <div
                className="space-y-2 text-white text-sm"
                style={{ fontFamily: "Grotesk, sans-serif" }}
              >
                <p>Overall Winner: ₹60,000</p>
                <p>Runner-up: ₹30,000</p>
                <p>Category Winners</p>
                <p>Networking Opportunities</p>
              </div>
            </div>

            <div
              className="border border-gray-800 rounded-xl p-6 sm:p-8 relative sm:col-span-2 lg:col-span-1 cursor-pointer hover:border-red-600 transition"
              style={{
                background: "rgba(15, 15, 15, 0.5)",
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
              onClick={() => {
                navigate("/faq");
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
              }}
            >
              <div className="absolute top-4 right-4 text-red-600 text-lg">
                +
              </div>
              <h3
                className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4"
                style={{ fontFamily: "Grotesk, sans-serif" }}
              >
                Details
              </h3>
              <div
                className="space-y-2 text-white text-sm"
                style={{ fontFamily: "Grotesk, sans-serif" }}
              >
                <p>Duration: 24 hours</p>
                <p>Team size: 3-4</p>
                <p>Venue: BMS Institute Of Technology & Management</p>
                <p>Date: Dec 12-13, 2025</p>
              </div>
            </div>
          </div>

          <a
            href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
            target="_blank"
            rel="noreferrer"
          >
            <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-8 py-3 font-medium text-sm">
              Register Now
            </InteractiveHoverButton>
          </a>
        </div>
      </section>

      {/* Build Bold Section */}
    </div>
  );
}
