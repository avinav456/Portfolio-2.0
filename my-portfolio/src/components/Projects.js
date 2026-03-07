"use client";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Full-Stack Microservices Platform",
    description: "Cloud-native platform built with Node.js, Express, and React. Achieved 85%+ test coverage with Unit and System Integration testing. Implemented CI/CD using GitHub Actions and applied OOP principles with SOLID design patterns.",
    tech: ["Node.js", "Express", "React", "AWS", "Docker", "CI/CD"],
    github: "https://github.com/avinav456/fragments",
    demo: null,
    highlight: "85%+ Test Coverage",
  },
  {
    title: "Art Explore — Web App",
    description: "Full-stack web application built with React, Node.js, and MongoDB. Optimized performance by 20% through debugging and analysis. Applied security coding practices ensuring vulnerability-free code.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
    github: "https://github.com/avinav456/artExplore",
    demo: "https://art-explore.vercel.app",
    highlight: "20% Performance Boost",
  },
  {
    title: "Automated Testing Framework",
    description: "Comprehensive Python + Selenium + PyTest framework achieving 95% test coverage. Performed root cause analysis, managed defects, and worked with SQL for database validation testing.",
    tech: ["Python", "Selenium", "PyTest", "SQL", "Git"],
    github: "https://github.com/avinav456/flask-selenium-automation",
    demo: null,
    highlight: "95% Code Coverage",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Things I&apos;ve built</p>
          <h2 className="section-title">Projects</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className="card flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3"
                    style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                    ✦ {project.highlight}
                  </span>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>{project.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="flex gap-5 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium transition-all duration-200 hover:opacity-60"
                    style={{ color: "var(--accent)" }}>GitHub →</a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium transition-all duration-200 hover:opacity-60"
                      style={{ color: "var(--text-muted)" }}>Live Demo →</a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}