import React from "react";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import { PROJECTS } from "../data/content.js";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={100 + index * 90}>
      <div className="glass card project-card">
        <div className="project-thumb">
          {/* Replace with <img src="/projects/name.png" alt="Project preview" /> */}
          <ImageIcon size={34} strokeWidth={1.3} />
          <span>Project preview placeholder</span>
        </div>
        <div className="project-body">
          <div className="project-head">
            <h3>{project.title}</h3>
            {project.status && <span className="project-status">{project.status}</span>}
            {project.role && <span className="project-role">{project.role}</span>}
          </div>
          <p className="project-subtitle">{project.subtitle}</p>
          <ul className="bullet-list">
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          {project.stack.length > 0 && (
            <div className="badge-row">
              {project.stack.map((t) => (
                <span key={t} className="mono-badge mono-badge-sm">{t}</span>
              ))}
            </div>
          )}
          <div className="project-actions">
            <a className="btn btn-ghost btn-sm" href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub
            </a>
            {project.demo && (
              <a className="btn btn-primary btn-sm" href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal><Eyebrow>04 · Projects</Eyebrow></Reveal>
      <Reveal delay={60}><h2 className="section-title">Things I've built</h2></Reveal>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
