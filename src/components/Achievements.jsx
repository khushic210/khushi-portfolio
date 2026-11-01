import React from "react";
import { Award } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { ACHIEVEMENTS, CERTIFICATIONS } from "../data/content.js";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <Reveal><Eyebrow>05 · Achievements</Eyebrow></Reveal>
      <Reveal delay={60}><h2 className="section-title">Milestones so far</h2></Reveal>

      <div className="achv-grid">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={100 + i * 90}>
            <div className="glass card achv-card">
              <span className="achv-icon">
                <a.icon size={20} strokeWidth={1.8} />
              </span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <h3 className="subsection-title">Certifications</h3>
      </Reveal>
      <div className="cert-grid">
        {CERTIFICATIONS.map((c, i) => (
          <Reveal key={c.title} delay={140 + i * 80}>
            <div className="glass card cert-card">
              <span className="cert-icon">
                <Award size={18} strokeWidth={1.8} />
              </span>
              <div>
                <h4>{c.title}</h4>
                <p>{c.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
