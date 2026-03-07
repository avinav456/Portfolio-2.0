const projects = [
  {
    title: "Automated Test Framework",
    description:
      "Built a scalable Selenium + Pytest framework for end-to-end testing of a web application. Integrated with CI/CD via GitHub Actions.",
    tech: ["Python", "Selenium", "Pytest", "GitHub Actions"],
    github: "#",
    demo: null,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS. Fully responsive, dark-themed, and deployed on Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "Full-stack task manager with user authentication, CRUD operations, and real-time updates using REST APIs.",
    tech: ["Node.js", "Express", "React", "MongoDB"],
    github: "#",
    demo: null,
  },
  {
    title: "Data Analysis Dashboard",
    description:
      "Interactive dashboard for visualizing and analyzing datasets with filtering, sorting, and chart views.",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    github: "#",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Things I&apos;ve built</p>
        <h2 className="section-title">Projects</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card flex flex-col justify-between"
              style={{ transition: "all 0.2s ease" }}
            >
              <div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-5 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <a
                  href={project.github}
                  className="text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                  style={{ color: "var(--accent)" }}
                >
                  GitHub →
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
