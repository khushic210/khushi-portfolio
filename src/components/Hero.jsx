import React from "react";
import { Download, ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SocialRow from "./SocialRow.jsx";
import HeroGraph from "./HeroGraph.jsx";

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="section hero">
      <HeroGraph />
      <div className="hero-inner">
        <Reveal>
          <div className="eyebrow">
            <span className="dot" /> const student = &#123; open_to: "SDE Internships" &#125;
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="hero-title">
            Khushi <span className="grad-text">Chaurasia</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="hero-role">
            Computer Science Engineering Student <span className="sep">·</span> Frontend Developer{" "}
            <span className="sep">·</span> DSA Enthusiast
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="hero-desc">
            I'm a Computer Science Engineering student passionate about software development, problem
            solving, and building impactful web applications. I enjoy creating modern user interfaces
            and continuously improving my skills through real-world projects and competitive programming.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="hero-actions">
            {/* Replace href with a real hosted resume PDF */}
            <a className="btn btn-primary" href="/resume.pdf" download>
              <Download size={16} /> Download Resume
            </a>
            <button className="btn btn-ghost" onClick={() => go("projects")}>
              View Projects <ArrowRight size={16} />
            </button>
            <button className="btn btn-ghost" onClick={() => go("contact")}>
              Contact Me
            </button>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <SocialRow />
        </Reveal>
      </div>
    </section>
  );
}
