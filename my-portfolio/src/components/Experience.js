"use client";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "QA Developer Co-op",
    company: "Government of Ontario",
    department: "Ministry of Public and Business Service Delivery and Procurement",
    location: "Toronto, ON",
    period: "Dec 2025 – Present",
    current: true,
    points: [
      "Developed automated test scripts using Python and Selenium achieving 95% code coverage, implemented CI/CD pipelines with GitHub Actions reducing deployment time by 40%.",
      "Performed Unit and System Integration testing across 15+ modules, managed defect tracking through Jira ensuring timely resolution.",
      "Utilized Git for version control, collaborated with development teams on code reviews, and applied security coding practices preventing vulnerabilities.",
      "Applied SDLC and Project Management Methodology completing development tasks and conducting system research, analysis, and problem resolution.",
    ],
    tags: ["Python", "Selenium", "GitHub Actions", "Jira", "PyTest", "Git", "CI/CD"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Where I&apos;ve worked</p>
          <h2 className="section-title">Experience</h2>
        </ScrollReveal>
        <div className="relative ml-4 space-y-10 pl-8" style={{ borderLeft: "2px solid var(--border)" }}>
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative">
                <span
                  className="timeline-dot absolute -left-[2.6rem] top-1.5 w-3 h-3 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                <div className="card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>{exp.role}</h3>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e" }}>
                            ● Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{exp.company}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                        {exp.department} · {exp.location}
                      </p>
                    </div>
                    <span className="tag mt-2 sm:mt-0 shrink-0 self-start" style={{ fontSize: "0.68rem" }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm flex gap-2 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        <span style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}