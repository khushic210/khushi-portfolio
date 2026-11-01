import React from "react";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { SKILL_GROUPS } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal><Eyebrow>02 · Skills</Eyebrow></Reveal>
      <Reveal delay={60}><h2 className="section-title">What I work with</h2></Reveal>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={100 + gi * 70}>
            <div className="glass card skill-card">
              <div className="skill-card-head">
                <span className="skill-icon">
                  <group.icon size={18} strokeWidth={1.8} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <div className="badge-row">
                {group.items.map((item) => (
                  <span key={item} className="mono-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
