"use client";
import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  { category: "Programming Languages", icon: "⌨️",
    skills: ["Java", "JavaScript", "Python", "TypeScript", "SQL", "Node.js", "C++", "Ruby"] },
  { category: "Web Technologies", icon: "🌐",
    skills: ["React", "Angular", "Next.js", "Express.js", "RESTful APIs", "HTML", "CSS", "JSON"] },
  { category: "Databases", icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "DB2"] },
  { category: "Cloud & DevOps", icon: "☁️",
    skills: ["AWS", "Azure", "Docker", "CI/CD", "GitHub Actions", "Jenkins", "Microservices"] },
  { category: "Testing & QA", icon: "🧪",
    skills: ["Selenium", "Jest", "PyTest", "Unit Testing", "SIT", "TDD", "Test Plans"] },
  { category: "Tools & Methodologies", icon: "🛠️",
    skills: ["Git", "Jira", "Confluence", "Agile", "Scrum", "SDLC", "Code Reviews"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Technical Skills</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 80}>
              <div className="card h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{group.icon}</span>
                  <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}