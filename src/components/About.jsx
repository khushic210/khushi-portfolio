import React from "react";
import { User } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";

const FACTS = [
  { label: "Institute", value: "PSIT, Kanpur" },
  { label: "Affiliation", value: "AKTU" },
  { label: "CGPA", value: "8.06" },
  { label: "Graduation", value: "2028" },
  { label: "Location", value: "Kanpur, India" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal><Eyebrow>01 · About</Eyebrow></Reveal>
      <Reveal delay={60}><h2 className="section-title">A little about me</h2></Reveal>

      <div className="about-grid">
        <Reveal delay={100} className="about-photo-wrap">
          <div className="about-photo">
            {/* Replace with <img src="/profile.jpg" alt="Khushi Chaurasia" /> */}
            <User size={56} strokeWidth={1.2} />
            <span className="about-photo-caption">Profile photo placeholder</span>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="glass card about-card">
            <p className="about-text">
              I'm a B.Tech Computer Science Engineering student at Pranveer Singh Institute of
              Technology (PSIT), Kanpur, affiliated with AKTU, with a CGPA of 8.06 and an expected
              graduation in 2028. I build responsive web applications and REST APIs, and I'm currently
              working on LLM-powered tools using Retrieval-Augmented Generation (RAG), Corrective RAG
              (CRAG), and LangChain, alongside consistent DSA practice.
            </p>
            <div className="fact-grid">
              {FACTS.map((f) => (
                <div key={f.label} className="fact">
                  <span className="fact-label">{f.label}</span>
                  <span className="fact-value">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
