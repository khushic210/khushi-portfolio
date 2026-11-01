import React from "react";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { EDUCATION } from "../data/content.js";

export default function Education() {
  return (
    <section id="education" className="section">
      <Reveal><Eyebrow>06 · Education</Eyebrow></Reveal>
      <Reveal delay={60}><h2 className="section-title">Academic timeline</h2></Reveal>

      <div className="timeline">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.degree} delay={100 + i * 100} className="timeline-row">
            <div className="timeline-marker">
              <span className="timeline-dot">
                <GraduationCap size={14} />
              </span>
              {i !== EDUCATION.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="glass card timeline-card">
              <span className="timeline-tag">{e.tag}</span>
              <h3>{e.degree}</h3>
              <p className="timeline-place">{e.place}</p>
              <p className="timeline-meta">{e.meta}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
