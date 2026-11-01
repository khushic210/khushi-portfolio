import React from "react";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { EXPERIENCE } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal><Eyebrow>03 · Experience</Eyebrow></Reveal>
      <Reveal delay={60}><h2 className="section-title">Where I've worked</h2></Reveal>

      <div className="exp-list">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.role} delay={100 + i * 90}>
            <div className="glass card exp-card">
              <span className="exp-icon"><Briefcase size={18} strokeWidth={1.8} /></span>
              <div className="exp-body">
                <div className="exp-head">
                  <h3>{e.role}</h3>
                  <span className="exp-period">{e.period}</span>
                </div>
                <p className="exp-company">{e.company}</p>
                <ul className="bullet-list">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
