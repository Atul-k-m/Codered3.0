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
    <div className="min-h-screen bg-black text-white font-mono">
      <Hero />
      <About />
        <Timeline />
       <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-white text-center uppercase tracking-wider">
    Gallery
  </h1>
  <div className="w-full max-w-6xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
    <Gallery />
  </div>
</div>
        <WhyParticipate />
      <FAQComponent/>

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
