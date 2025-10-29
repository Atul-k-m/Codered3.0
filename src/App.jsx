import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footnote from "./components/Footnote";
import Gallery from "./components/Gallery";
import WhyParticipate from "./components/WhyParticipate";
import FAQComponent from "./components/FAQComponent";
import FAQPage from "./pages/FAQPage";
import PSpage from "./pages/PSpage";
import PrizePoolPage from "./pages/PrizePoolPage";

function HomePage() {
  return (
    <div className="min-h-screen text-white font-mono bg-black">
      {/* Hero Section */}
      <Hero />

      {/* About */}
      <section className="relative z-10">
        <About />
      </section>

      {/* Timeline */}
      <section className="relative z-10">
        <Timeline />
      </section>

      {/* Gallery */}
      <section className="relative z-10 w-full min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-12 text-white text-center">
            Gallery
          </h1>
          <div className="w-full h-[600px] sm:h-[700px] lg:h-[800px]">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="relative z-10">
        <WhyParticipate />
      </section>

      {/* FAQ */}
      <section className="relative z-10">
        <FAQComponent />
      </section>

      {/* Footer */}
      <Footnote />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/problem-statements" element={<PSpage />} />
        <Route path="/prize-pool" element={<PrizePoolPage />} />
      </Routes>
    </Router>
  );
}