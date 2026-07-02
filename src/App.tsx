import { useState } from "react";
import { useReveal } from "./hooks/useReveal";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import StatusBar from "./components/StatusBar";

function App() {
  const [booted, setBooted] = useState(false);

  useReveal();

  return (
    <div className="scanlines vignette relative min-h-screen bg-[var(--bg)]">
      {!booted && <LoadingScreen onDone={() => setBooted(true)} />}

      <Navbar />

      <main className={`transition-opacity duration-700 ${booted ? "opacity-100" : "opacity-0"}`}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <StatusBar />
    </div>
  );
}

export default App;
