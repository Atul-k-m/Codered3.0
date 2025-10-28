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
       <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="px-4 sm:px-0">
  <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8">
    Gallery
  </h1>
  <div className="w-full h-full">
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
