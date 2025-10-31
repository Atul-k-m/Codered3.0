import { useState, useEffect, useRef } from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const reasons = [
  {
    title: "Compete & Win",
    description:
      "Battle for cash prizes, and exclusive internship opportunities.",
  },
  {
    title: "Network & Collaborate",
    description:
      "Connect with industry experts, tech-enthusiasts and potential co-founders. Build lasting relationships in the tech community.",
  },
  {
    title: "Learn & Innovate",
    description: "Push your boundaries and explore new domains.",
  },
  {
    title: "Build Real Solutions",
    description:
      "Transform your ideas into working prototypes. Create impactful projects that solve real-world problems in 24 hours.",
  },
  {
    title: "Boost Your Portfolio",
    description:
      "Showcase your skills and creativity. Add impressive projects to your resume and stand out to employers.",
  },
  {
    title: "Experience the Thrill",
    description:
      "Immerse yourself in a 24-hour coding marathon. Feel the rush of bringing ideas to life under pressure.",
  },
];

export default function WhyParticipate() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.fillStyle = "rgba(220, 38, 38, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(220, 38, 38, ${
              0.2 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative">
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <section
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
              <span
                className="block"
                style={{
                  fontFamily: "Robit, sans-serif",
                }}
              >
                WHY PARTICIPATE
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Join Bengaluru's Premier 24-hour Hackathon and unlock endless
              opportunities
            </p>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
            <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-red-600">
              <img
                src="/gallery/19.webp"
                alt="Hackathon collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group relative border-2 border-red-600 p-4 sm:p-6 md:p-8 hover:bg-red-950/20 transition-all duration-300"
                >
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600"></div>
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600"></div>
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600"></div>
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600"></div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                    {reason.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20">
            <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noreferrer"
            >
              <InteractiveHoverButton className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-6 py-3 text-sm sm:text-base">
                    Register
              </InteractiveHoverButton>
            </a>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
