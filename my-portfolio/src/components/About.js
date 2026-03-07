export default function About() {
  return (
    <section id="about" className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Get to know me</p>
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            <p>
              I&apos;m a Computer Science student with hands-on experience as a
              QA Developer Co-op. I specialize in building automated test
              frameworks, writing clean code, and ensuring software quality at
              every stage of the development lifecycle.
            </p>
            <p>
              When I&apos;m not writing tests or building projects, I enjoy
              exploring new technologies, contributing to open-source, and
              continuously sharpening my problem-solving skills.
            </p>
            <p>
              I&apos;m actively looking for opportunities where I can apply my
              skills in software development and quality assurance to make a
              real impact.
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn-primary" style={{ width: "fit-content" }}>
                Get in touch →
              </a>
            </div>
          </div>

          {/* Education + Stats */}
          <div>
            <h3 className="font-semibold text-lg mb-5" style={{ color: "var(--text)" }}>
              Education
            </h3>
            <div
              className="rounded-xl p-5 mb-8"
              style={{
                borderLeft: "3px solid var(--accent)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderLeftColor: "var(--accent)",
              }}
            >
              <p className="font-semibold" style={{ color: "var(--text)" }}>
                Bachelor of Science — Computer Science
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>University Name</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)", opacity: 0.6 }}>2021 – Present</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "GPA",          value: "3.8 / 4.0" },
                { label: "Co-op Terms",  value: "2" },
                { label: "Projects",     value: "10+" },
                { label: "Technologies", value: "15+" },
              ].map((stat) => (
                <div key={stat.label} className="card text-center">
                  <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
