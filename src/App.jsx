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
    <div className="min-h-screen text-white font-mono bg-black overflow-x-hidden">
      {/* Hero Section */}
     <section className="relative min-h-screen flex flex-col justify-center items-center">
  <Hero />
</section>

      {/* About */}
      <About />

      {/* Timeline */}
      <Timeline />

      {/* Gallery */}
      <div
        className="w-full flex flex-col items-center justify-center px-4 sm:px-0 py-16"
        style={{
          minHeight: "100vh",
        }}
      >
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-6 text-white"
        >
          Gallery
        </h1>
        <div className="w-full h-full">
          <Gallery />
        </div>
      </div>

      {/* Why Participate */}
      <WhyParticipate />

      {/* FAQ */}
      <FAQComponent />

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
