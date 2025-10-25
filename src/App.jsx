import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footnote from "./components/Footnote";
import Gallery from "./components/Gallery";
import WhyParticipate from "./components/WhyParticipate.jsx";   
import FAQComponent from "./components/FAQComponent.jsx";   
import FAQPage from "./pages/FAQPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Hero />
      <About />
        <Timeline />
       <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
  <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
    Gallery
  </h1>
  <Gallery />
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
      </Routes>
    </Router>
  );
}
