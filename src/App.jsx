import Hero from "./components/Hero";
import About from "./components/About";
import Footnote from "./components/Footnote";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Hero />
      <About />
      <Footnote />
    </div>
  );
}
