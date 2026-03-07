const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Tools",
    skills: ["Node.js", "Express", "REST APIs", "Git", "GitHub", "Linux"],
  },
  {
    category: "Testing & QA",
    skills: ["Selenium", "Pytest", "Jest", "Postman", "JIRA", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="card" style={{ transition: "all 0.2s ease" }}>
              <h3 className="font-semibold mb-4" style={{ color: "var(--text)" }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
