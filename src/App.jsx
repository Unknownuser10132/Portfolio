import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";

import "./assets/styles/index.css";
import "./assets/styles/app.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "achievements", "projects"];
  
  // Detect & update active section based on scroll position
  const handleScroll = () => {
    const scrollContainer = document.getElementById("root");
    if (!scrollContainer) { return; }

    // Get offset positions of each section
    const sectionOffsets = sections.map((section) => {
      const element = document.getElementById(section);
      const rect = element?.getBoundingClientRect();

      return { section, offsetTop: rect?.top || 0 };
    });
    
    // Find closest section to top of viewport
    const closestSection = sectionOffsets.reduce((closest, curr) => {
      if (Math.abs(curr.offsetTop) < Math.abs(closest.offsetTop)) { return curr; }
      else { return closest; }
    }, sectionOffsets[0]);

    // Update activeSection state if it changes
    if (closestSection.section !== activeSection) {
      setActiveSection(closestSection.section);
    }
  };

  // Attach scroll event listener (cleanup when component unmounts)
  useEffect(() => {
    const scrollContainer = document.querySelector("#root");
    if (!scrollContainer) { return; }

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [activeSection, sections]);  // Re-run if activeSection or sections change

  return (
    <>
      <Navbar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      <Home />
      <Achievements />
      <Projects />
    </>
  );
};

export default App;
