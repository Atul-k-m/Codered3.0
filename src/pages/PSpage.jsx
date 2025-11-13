import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";
import SDG1 from "./sdgLogo/E-WEB-Goal-01.png";
import SDG2 from "./sdgLogo/E-WEB-Goal-02.png";
import SDG3 from "./sdgLogo/E-WEB-Goal-03.png";
import SDG4 from "./sdgLogo/E-WEB-Goal-04.png";
import SDG5 from "./sdgLogo/E-WEB-Goal-05.png";
import SDG6 from "./sdgLogo/E-WEB-Goal-06.png";
import SDG7 from "./sdgLogo/E-WEB-Goal-07.png";
import SDG8 from "./sdgLogo/E-WEB-Goal-08.png";
import SDG9 from "./sdgLogo/E-WEB-Goal-09.png";
import SDG10 from "./sdgLogo/E-WEB-Goal-10.png";
import SDG11 from "./sdgLogo/E-WEB-Goal-11.png";
import SDG12 from "./sdgLogo/E-WEB-Goal-12.png";
import SDG13 from "./sdgLogo/E-WEB-Goal-13.png";
import SDG14 from "./sdgLogo/E-WEB-Goal-14.png";
import SDG15 from "./sdgLogo/E-WEB-Goal-15.png";
import SDG16 from "./sdgLogo/E-WEB-Goal-16.png";
import SDG17 from "./sdgLogo/E-WEB-Goal-17.png";

const sdgImages = {
  SDG1,
  SDG2,
  SDG3,
  SDG4,
  SDG5,
  SDG6,
  SDG7,
  SDG8,
  SDG9,
  SDG10,
  SDG11,
  SDG12,
  SDG13,
  SDG14,
  SDG15,
  SDG16,
  SDG17,
};


const problemStatements = [
  {
    track: "HARDWARE",
    problems: [
      {
        id: "CR(H)1",
        title: "Non-Intrusive Load Monitoring (NILM) System for Individual Device Energy Tracking",
        description: `Most homes and small businesses have little to no visibility into which appliances consume the most energy. Smart plugs and multi-sensor setups are expensive and complex to deploy at scale, leaving users with only a single, aggregated electricity bill and no actionable insights. This results in energy wastage, higher costs, and poor awareness of appliance efficiency or faults.
        
Opportunity:
Build a Non-Intrusive Load Monitoring (NILM) system that uses just one sensor to break down total power consumption into individual appliance usage using AI-driven signal disaggregation. The solution offers real-time dashboards, cost insights, and anomaly alerts, helping users make smarter energy decisions-all without extra setup hassle.`,
        sdgs: ["SDG7", "SDG11", "SDG12"],
        domain: "Smart Infrastructure",
      },
      {
        id: "CR(H)2",
        title: "Non-GPS Trackers for Swappable Battery**",
        description: `Problem Statement 
As EV battery swapping networks expand, tracking thousands of expensive battery packs across depots and service stations has become a logistical and security nightmare. GPS-based tracking drains power, struggles indoors, and adds unnecessary cost, leaving businesses vulnerable to theft, misplaced assets, and inefficient operations.

Opportunity:
 Create a smart, low-power, non-GPS tracking system that can locate and monitor swappable EV batteries within short-to-medium ranges using technologies like BLE, UWB, or LoRa. The solution should detect tampering, report proximity in real-time, and integrate with a simple dashboard or alert system.`,
        sdgs: ["SDG7", "SDG9", "SDG12", "SDG13"],
        domain: "CleanTech",
      },
      {
        id: "CR(H)3",
        title: "Multi-Sensor Wildlife Corridor Monitoring System for Anti-Poaching Using ESP32 and Raspberry Pi",
        description: `Wildlife reserves and forest corridors face an ongoing threat from poaching, illegal logging, and unauthorized intrusions, yet vast terrains make round-the-clock human surveillance nearly impossible. Existing camera traps and patrols are reactive, expensive, and often detect threats too late resulting in loss of wildlife and ecological damage.

Opportunity:
 Build a multi-sensor, AI-powered wildlife monitoring system using ESP32 and Raspberry Pi that forms a distributed, low-power sensor network to detect suspicious activity in real-time. By combining acoustic, motion, and thermal data through edge ML and LoRa communication, the system can identify gunshots, vehicles, or human presence and instantly alert forest rangers via a central dashboard.`,
        sdgs: ["SDG13", "SDG15"],
        domain: "Envirotech",
      },
      {
        id: "CR(H)4",
        title: "MicroSLAM: Real-Time Mapping & Localization on Tiny Hardware**",
        description: `Most small robots and drones lack the computing power for heavy mapping algorithms or GPS access- making autonomous navigation in unknown environments a major challenge. SLAM (Simultaneous Localization and Mapping) enables real-time environment mapping and self-localization, but traditional systems are too resource-intensive for low-cost hardware.

Opportunity:
Build a lightweight, real-time MicroSLAM module that can map and localize autonomously on small hardware platforms like ESP32, Raspberry Pi, or STM32. The system should fuse multi-sensor data (IMU, distance, or camera) to generate a live 2D occupancy or visual map, while continuously estimating position and orientation.`,
        sdgs: ["SDG9", "SDG11"],
        domain: "Robotics",
      },
      {
        id: "CR(H)5",
        title: "IoT-Powered Dynamic Queue and Wait Time Management System",
        description: `Restaurant customers face significant frustration from long, unpredictable queues and a lack of accurate wait time information for both ordering and food preparation. This uncertainty leads to a poor customer experience, high rates of reneging (customers leaving the line), and inefficient staff allocation.

Opportunity: Develop an IoT-powered system that accurately predicts and communicates real-time food order and queue wait times. The solution should fuse data from multiple hardware inputs such as overhead cameras (using computer vision to count people), manual clickers or pressure mats at counters, and Kitchen Display System (KDS) ticket data to build a dynamic predictive model. This system will display accurate wait times on in-store screens, push notifications via a mobile app, or integrate with existing restaurant management software, optimizing customer flow and enhancing service transparency.`,
        sdgs: ["SDG8", "SDG9"],
        domain: "RetailTech",
      },
      {
        id: "CR(H)6",
        title: "Real-Time Audio-Visual Zooming System with Adaptive Beamforming",
        description: `Problem Statement:
When recording videos with optical zoom, cameras capture omnidirectional audio regardless of the zoom level. This creates a jarring mismatch where the visuals are highly magnified on a distant subject, but the audio is dominated by nearby, off-screen noise.

Opportunity:
Develop a Raspberry Pi-based audio-visual zooming system that dynamically synchronizes audio capture with the camera's visual zoom. Using a custom microphone array (4+ MEMS microphones), the system will perform real-time adaptive beamforming (e.g., MVDR algorithms) to create a "sonic zoom." As the user zooms in visually, the audio beam will proportionally narrow and focus in the same direction, spatially filtering out ambient noise and capturing clear sound from the distant subject. This creates an immersive recording experience for wildlife, sports, or journalism where capturing distant subjects in noisy environments is crucial.`,
        sdgs: ["SDG9", "SDG15"],
        domain: "MediaTech",
      },
    ],
  },
  {
    track: "SOFTWARE",
    problems: [
      {
        id: "CR(S)1",
        title: "No-Code Platform for Interactive Avatar-Driven UX**",
        description: `Problem Statement: Digital creatives and UX designers can mock up sophisticated, avatar-driven user experiences (like virtual assistants, interactive onboarding guides, or personalized web journeys), but they cannot build or test them without deep engineering resources. This gap between design (e.g., in Figma) and implementation is a major bottleneck, causing long development cycles, high costs, and a loss of creative fidelity.

Opportunity: 

Design a no-code platform that empowers UX designers and digital creatives to build, test, and deploy interactive, avatar-driven user experiences. The solution must bridge the gap between design tools and live production, allowing non-technical users to define avatar appearance, personality, and conversational/behavioral logic using a visual, drag-and-drop interface. This enables rapid prototyping and A/B testing of rich UX elements like virtual sales assistants, dynamic help agents, or personalized onboarding guides, transforming static designs into functional applications without coding dependencies.`,
        sdgs: ["SDG9", "SDG8"],
        domain: "Design Tech",
      },
      {
        id: "CR(S)2",
        title: "AI-Based Transport & Road Space Management System",
        description: `The Indian Army manages massive daily vehicle movements for troops, equipment, and supplies, yet current planning often results in inefficient fleet use, route conflicts, and convoy delays due to overlapping military and civil traffic.

Opportunity:
Develop an AI-powered transport and road space management platform that can intelligently plan, prioritize, and optimize convoy movements across terrains. The solution should provide real-time route recommendations, dynamic re-routing, load consolidation, and convoy coordination by integrating data from Army traffic checkpoints and open-source road information.
Such a system will enhance fleet efficiency, reduce delays, and improve operational readiness, ensuring that critical movements, both during peace and operations, are executed with precision, safety, and optimal resource utilization.`,
        sdgs: ["SDG11", "SDG12"],
        domain: "DefenceTech",
      },
      {
        id: "CR(S)3",
        title: "Privacy-Preserving Federated Learning Framework for Healthcare with Differential Privacy",
        description: `Problem Statement: Healthcare institutions cannot share patient data due to HIPAA/GDPR regulations, limiting AI model training to small local datasets that don't generalize well.

Opportunity: Develop a federated learning framework that trains medical diagnosis models (disease detection, treatment prediction) across multiple hospitals without centralizing patient data. This system allows hospitals to collaboratively train where each institution trains on local data, then shares only encrypted model updates, never raw patient records, with a central aggregator. The framework implements differential privacy by adding calibrated noise to gradient updates, guaranteeing individual patient data cannot be reverse-engineered even from model parameters, and handles non-IID (non-independent and identically distributed) data across institutions. Advanced techniques like FedProx and personalized aggregation handle non-IID challenges (e.g., where Hospital A treats mostly elderly patients while Hospital B sees pediatric cases), ensuring the global model performs well across all demographics while enabling each institution to maintain personalized local models.`,
        sdgs: ["SDG3", "SDG9"],
        domain: "HealthTech",
      },
      {
        id: "CR(S)4",
        title: "Lightweight, Real-Time LLM Safety Gateway",
        description: `Problem Statement  The widespread adoption of Large Language Models (LLMs) across consumer and enterprise applications is fundamentally vulnerable to Prompt Injection Attacks. Malicious users exploit these vulnerabilities to bypass an LLM's safety guardrails, steal proprietary context, execute unauthorized actions, or generate harmful content, severely compromising system security, privacy, and integrity.

Opportunity: Design and prototype a Lightweight, Real-Time LLM Safety Gateway. This system must act as a fast, pre-processing layer that analyzes and sanitizes the user's input prompt before it reaches the target LLM. The solution must prioritize CPU-friendly and highly efficient anomaly detection techniques to effectively detect and neutralize both direct and indirect prompt injection attacks, suitable for a rapid development cycle.`,
        sdgs: ["SDG9", "SDG16"],
        domain: "CyberSecurity",
      },
      {
        id: "CR(S)5",
        title: "Intelligent Autonomous Agent in a Virtual 3D World",
        description: `As real-world training for autonomous systems is costly, risky, and complex, there's a growing need for virtual environments where AI agents can safely learn and adapt. Reinforcement learning provides the foundation for creating agents that can perceive, decide, and act autonomously within simulated 3D spaces.

Opportunity: Build an RL-powered autonomous agent that learns to complete a defined task in a virtual 3D world (navigation, survival, or interaction) using Gymnasium-compatible environments. The system should include reproducible training, performance metrics, and a simple dashboard to visualize learning progress and agent behavior in real time.`,
        sdgs: ["SDG4", "SDG11"],
        domain: "AgenticAI",
      },
      {
        id: "CR(S)6",
        title: "Personal Finance Intelligence Platform**",
        description: `

A large segment of India's workforce, including gig workers, small business owners, and individuals without formal credit histories, faces irregular income and cash flow. They often overspend during high-income months and struggle during lean periods due to a lack of structured credit access, savings discipline, and financial guidance. Yet, their SMS and digital transaction data contain valuable insights into income and expense trends that remain largely untapped.

Opportunity

Develop a personal finance intelligence platform that empowers users to make smarter spending and saving decisions, helping them achieve financial stability and confidence. The solution should analyze SMS-based transaction data (income, expenses, and cash flow) to offer meaningful insights and actions.

The platform can, but not necessarily must, include:

● Detection of spending patterns and highlighting of impulsive or wasteful expenses.

● Personalised insights or nudges (e.g., "If you had invested in gold instead of buying new shoes, you'd have ₹1,000 more today.").

● Goal-setting and tracking for savings or spending.

● A gamified Financial Health Score representing the user's overall financial behaviour.

You may build upon the following open source starter code repository, other open source or use your own implementation:

🔗 [PennywiseAI Tracker (Open Source Starter Code)](https://github.com/sarim2000/pennywiseai-tracker?tab=readme-ov-file)

The starter code already includes: SMS extraction, Income and expense categorisation and Basic analytics

While the use of AI is optional, the focus should be on solving real financial pain points through impactful, innovative, and user-friendly design that promotes long-term financial well-being.`,
        sdgs: ["SDG8", "SDG9"],
        domain: "FinTech",
      },
    ],
  },
];

// Helper function to render text with line breaks and clickable links
function renderFormattedText(text) {
  if (!text) return null;
  
  // Split by newlines to preserve line breaks
  const lines = text.split('\n');
  
  return lines.map((line, lineIndex) => {
    // Handle empty lines
    if (line.trim() === '') {
      return <div key={lineIndex} className="h-2" />;
    }
    
    // Convert markdown-style links [text](url) to HTML links
    const parts = [];
    let lastIndex = 0;
    
    // Find markdown links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    let hasMarkdownLinks = false;
    
    while ((match = linkRegex.exec(line)) !== null) {
      hasMarkdownLinks = true;
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }
      
      // Add the link
      parts.push(
        <a
          key={`link-${lineIndex}-${match.index}`}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 underline"
        >
          {match[1]}
        </a>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    // Process remaining text (either after markdown links or the entire line if no markdown links)
    const textToProcess = hasMarkdownLinks ? line.substring(lastIndex) : line;
    
    if (textToProcess) {
      // Check for plain URLs in text
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      let urlMatch;
      let urlLastIndex = 0;
      let hasUrls = false;
      
      while ((urlMatch = urlRegex.exec(textToProcess)) !== null) {
        hasUrls = true;
        // Add text before the URL
        if (urlMatch.index > urlLastIndex) {
          parts.push(textToProcess.substring(urlLastIndex, urlMatch.index));
        }
        
        // Add the URL link
        parts.push(
          <a
            key={`url-${lineIndex}-${urlMatch.index}`}
            href={urlMatch[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 underline"
          >
            {urlMatch[0]}
          </a>
        );
        
        urlLastIndex = urlMatch.index + urlMatch[0].length;
      }
      
      // Add final remaining text
      if (urlLastIndex < textToProcess.length) {
        parts.push(textToProcess.substring(urlLastIndex));
      } else if (!hasUrls && !hasMarkdownLinks) {
        // No links found, just add the entire line
        parts.push(textToProcess);
      }
    }
    
    return (
      <div key={lineIndex} className="mb-2">
        {parts.length > 0 ? parts : line}
      </div>
    );
  });
}

export default function ProblemStatementPage() {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Left side - Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
                   <div className="flex items-center gap-2 sm:gap-3">
                      <a href="https://bmsit.ac.in" target="_blank" rel="noopener noreferrer">
             <img
               src="/bmslogo.png"
               alt="BMS Institute"
               className="h-10 w-auto sm:h-12 md:h-16 object-contain"
             />
           </a>
              <img
                src="/crlogo.png"
                alt="CODERED 3.0"
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
              />
                     </div>
                  
            </Link>
          </div>

               {/* Center - Links (match home navbar) */}
               <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                 <a
                   href="/"
                   className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
                   style={{ fontFamily: 'Grotesk, sans-serif' }}
                 >
                   Home
                 </a>
                 <a
                   href="/prize-pool"
                   className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
                   style={{ fontFamily: 'Grotesk, sans-serif' }}
                 >
                   Prizes
                 </a>
                 <a
                   href="/problem-statements"
                   className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
                   style={{ fontFamily: 'Grotesk, sans-serif' }}
                 >
                   Problem Statements
                 </a>
                 <a
                   href="#team"
                   className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
                   style={{ fontFamily: 'Grotesk, sans-serif' }}
                 >
                   Team
                 </a>
                 <a
                   href="/faq"
                   className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
                   style={{ fontFamily: 'Grotesk, sans-serif' }}
                 >
                   FAQ
                 </a>
                 <a
                   href="#sponsors"
                   className="text-gray-300 hover:text-red-600 transition-colors text-sm tracking-wide uppercase font-semibold"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
            >
                   Sponsors
                 </a>
          </div>

          {/* Right side - Mobile Menu Button & Register Button */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-red-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Register Button */}
                 <a
                   href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge"
                   target="_blank"
                   rel="noreferrer"
                 >
                   <InteractiveHoverButton
                     className="bg-red-600 hover:bg-red-700 border-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 text-xs sm:text-sm tracking-wide font-semibold"
                   >
              <span className="hidden sm:inline">Register Now</span>
              <span className="sm:hidden">Register</span>
            </InteractiveHoverButton>
                 </a>
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar */}
           <div className={`fixed inset-0 z-60 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
             <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>

        {/* Sidebar */}
             <div className={`mobile-menu-container absolute right-0 top-0 h-full w-80 bg-black border-l border-red-900/30 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <img
                src="/crlogo.png"
                alt="CODERED 3.0"
                className="h-8 w-8 object-contain"
              />
              <img
                src="/bmslogo.png"
                alt="BMS Institute"
                className="h-8 w-8 object-contain rounded-full"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-300 hover:text-red-600 transition-colors"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-6 space-y-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <a
              href="/prize-pool"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prizes
            </a>
            <a
              href="/problem-statements"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Problem Statements
            </a>
            <a
              href="#team"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="/faq"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#sponsors"
              className="block text-gray-300 hover:text-red-600 transition-colors text-lg font-semibold uppercase tracking-wide py-2"
              style={{ fontFamily: 'Grotesk, sans-serif' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sponsors
            </a>
          </div>

          {/* Sidebar Footer */}
          <div className="absolute bottom-6 left-6 right-6">
                 <a href="https://unstop.com/o/qjIA3CN?utm_medium=Share&utm_source=ecell-bmsitm&utm_campaign=Online_coding_challenge" target="_blank" rel="noreferrer">
            <InteractiveHoverButton
              className="w-full bg-red-600 hover:bg-red-700 border-red-600 text-white px-6 py-3 text-sm tracking-wide font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </InteractiveHoverButton>
                 </a>
          </div>
        </div>
      </div>

      {/* Problem Statements Content */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
              <span
                className="block"
                style={{
                  fontFamily: "Robit, 'Times New Roman', serif",
                  letterSpacing: "0.04em",
                }}
              >
                PROBLEM STATEMENTS
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Choose your domain and explore detailed problem statements
            </p>
          </div>

          {/* Domain Selector */}
          <div className="flex justify-center gap-3 sm:gap-5 mb-8 sm:mb-12 flex-wrap px-4">
            {problemStatements.map((track, index) => (
              <button
                key={index}
                onClick={() => setSelectedTrack(index)}
                className={`px-5 sm:px-7 md:px-9 py-2 sm:py-3 text-sm sm:text-base md:text-lg transition-all duration-300 border-2 tracking-widest ${
                  selectedTrack === index
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-transparent text-white border-red-600 hover:bg-red-600"} `}
                  style={{ fontFamily: "'Robit', sans-serif"} }
        
              >
                {track.track}
              </button>
            ))}
          </div>

     
         {/* Accordion */}
<div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
  {problemStatements[selectedTrack].problems.map((problem, index) => (
    <div
      key={index}
      className="border-2 border-gray-800 bg-black/70 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-600 font-light"
    >
      {/* Accordion Header */}
      <button
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
        className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left focus:outline-none"
      style={{ fontFamily: "'Robit', sans-serif"} }
      >
        <div className="flex items-center gap-4">
          <span className="border-2 border-red-600 px-2 py-1 text-red-600 font-bold text-lg sm:text-xl font-mono">
            {problem.id}  
          </span>
          <h3 className="text-white text-base sm:text-lg md:text-xl">
            {problem.title}
              </h3>
            </div>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 text-red-600 transform transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion Content */}
      {openIndex === index && (
        <div className="px-6 pb-6 text-gray-300 border-t border-red-900/30 animate-fadeIn">
          {/* SDG + Domain */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {problem.sdgs.map((sdg, i) => (
                <img
                  key={i}
                  src={sdgImages[sdg]}
                  alt={sdg}
                  className="w-10 h-10 border border-gray-700 hover:scale-110 transition-transform"
                />
              ))}
            </div>
            <div className="text-sm text-red-600 mb-2"
              style={{ fontFamily: "'Robit', sans-serif"} }>
              <strong>Domain:</strong> {problem.domain}
            </div>
          </div>

          {/* Problem + Opportunity */}
          <div className="space-y-4">
            <div>
              <h4 className="text-red-500 font-semibold mb-2">
                Problem Statement
              </h4>
              <div className="text-sm sm:text-base leading-relaxed">
                {renderFormattedText(problem.description.split("Opportunity:")[0].trim())}
              </div>
            </div>

            {problem.description.includes("Opportunity:") && (
              <div>
                <h4 className="text-red-500 font-semibold mb-2">
                  Opportunity
                </h4>
                <div className="text-sm sm:text-base leading-relaxed">
                  {renderFormattedText(problem.description.split("Opportunity:")[1].trim())}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  ))}
</div>

          {/* Info */}
          <div className="mt-12 sm:mt-16 text-center px-4">
           <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
              {" "}
              <span className="text-red-600 font-bold">**</span> - These problem statements are sponsored by external organizations , refer to terms and conditions on the main website
            </p>
            
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
              Select a problem statement that aligns with your interests and
              expertise. You'll have{" "}
              <span className="text-red-600 font-bold">24 hours</span> to
              develop your solution during CodeRed 3.0 Finale.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
