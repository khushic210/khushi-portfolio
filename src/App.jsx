import React, { useCallback, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return (
    <div className="portfolio-root" data-theme={theme}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
