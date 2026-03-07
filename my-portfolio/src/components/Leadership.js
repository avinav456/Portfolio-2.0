"use client";
import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    title: "President — Cyber Café Club",
    organization: "Seneca Student Federation",
    period: "May 2025 – Present",
    icon: "🏛️",
    description: "Lead a technical organization of 260+ members. Coordinate technology workshops and programming events that enhance knowledge of emerging technologies and development practices.",
  },
  {
    title: "Peer Mentor & Technical Guide",
    organization: "Seneca Works",
    period: "Aug 2025 – Present",
    icon: "🎓",
    description: "Mentor 15+ students on programming languages, data structures, algorithms, and OOP concepts. Provide guidance on coding, debugging, and problem-solving techniques.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Beyond the code</p>
          <h2 className="section-title">Leadership &amp; Activities</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <ScrollReveal key={role.title} delay={i * 120}>
              <div className="card h-full">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl">{role.icon}</span>
                  <div>
                    <h3 className="font-bold" style={{ color: "var(--text)" }}>{role.title}</h3>
                    <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>{role.organization}</p>
                  </div>
                </div>
                <span className="tag mb-4" style={{ fontSize: "0.65rem" }}>{role.period}</span>
                <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-muted)" }}>{role.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}