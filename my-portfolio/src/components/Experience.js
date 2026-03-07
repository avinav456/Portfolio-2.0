const experiences = [
  {
    role: "QA Developer Co-op",
    company: "Company Name",
    period: "May 2024 – Aug 2024",
    points: [
      "Developed and maintained automated test suites using Selenium and Pytest, reducing manual testing time by 40%.",
      "Collaborated with developers to identify, reproduce, and document software defects.",
      "Integrated automated tests into CI/CD pipeline using GitHub Actions.",
      "Reviewed test plans and contributed to sprint planning and retrospectives.",
    ],
  },
  {
    role: "Software Developer Co-op",
    company: "Company Name",
    period: "Sep 2023 – Dec 2023",
    points: [
      "Built RESTful API endpoints using Node.js and Express for a customer-facing application.",
      "Worked on React front-end components and improved UI responsiveness.",
      "Participated in code reviews, improving overall code quality across the team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Where I&apos;ve worked</p>
        <h2 className="section-title">Experience</h2>

        <div
          className="relative ml-4 space-y-10 pl-8"
          style={{ borderLeft: "2px solid var(--border)" }}
        >
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <span
                className="absolute -left-[2.6rem] top-1.5 w-3 h-3 rounded-full ring-4"
                style={{ background: "var(--accent)", ringColor: "var(--bg-alt)" }}
              />

              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "var(--accent)" }}>
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="tag mt-2 sm:mt-0 shrink-0 self-start"
                    style={{ fontSize: "0.68rem" }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm flex gap-2 leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
