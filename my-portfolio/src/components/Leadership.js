const roles = [
  {
    title: "President",
    organization: "Computer Science Student Society",
    period: "Sep 2023 – Present",
    description:
      "Lead a team of 8 executives to organize workshops, hackathons, and networking events for 200+ CS students.",
  },
  {
    title: "Volunteer Mentor",
    organization: "Youth Coding Bootcamp",
    period: "Jan 2023 – Apr 2023",
    description:
      "Mentored high school students in Python fundamentals, guiding 15 students through their first projects.",
  },
  {
    title: "Hackathon Participant",
    organization: "HackThe6ix / Local Hack Day",
    period: "2022 – 2024",
    description:
      "Competed in multiple hackathons, building full-stack prototypes under 24-hour constraints.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Beyond the code</p>
        <h2 className="section-title">Leadership &amp; Activities</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div key={role.title} className="card" style={{ transition: "all 0.2s ease" }}>
              <h3 className="font-bold mb-1" style={{ color: "var(--text)" }}>
                {role.title}
              </h3>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--accent)" }}>
                {role.organization}
              </p>
              <span className="tag mb-3" style={{ fontSize: "0.65rem" }}>
                {role.period}
              </span>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-muted)" }}>
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
