import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footnote from "./components/Footnote";
import FAQPage from "./pages/FAQPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Hero />
      <About />
        <Timeline />
      <FAQPage/>
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
