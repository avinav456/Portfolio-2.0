"use client";
import { useState, useEffect } from "react";
import SkullFire from "./SkullFire";

const roles = [
  "QA Developer Co-op",
  "Full-Stack Developer",
  "Computer Science Student",
  "Automation Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-20 pb-12 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-start text-left">
          <span className="tag mb-6 float-badge">✦ Open to opportunities</span>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
            style={{ color: "var(--text)" }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Avinav</span>
          </h1>

          <div className="flex items-center mb-5 h-8">
            <p className="text-lg md:text-xl font-semibold" style={{ color: "var(--accent)" }}>
              {displayed}
              <span className="cursor" />
            </p>
          </div>

          <p className="max-w-md text-base leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
            Third-year CS student at Seneca College with a 3.8 GPA. I build reliable software,
            automated test systems, and full-stack applications — passionate about quality
            engineering and clean code.
          </p>

          <div className="flex gap-3 flex-wrap mb-10">
            <a href="#projects" className="btn-primary">View Projects ↓</a>
            <a href="#about" className="btn-outline">About Me</a>
          </div>

          <div className="flex gap-6">
            {[
              { label: "GitHub",   href: "https://github.com/avinav456",                 ext: true  },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/avinav-a49142245", ext: true  },
              { label: "Email",    href: "mailto:avinavg456@gmail.com",                   ext: false },
            ].map(({ label, href, ext }) => (
              <a
                key={label}
                href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                className="text-sm font-medium transition-all duration-200 hover:opacity-60 hover:-translate-y-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center">
          <SkullFire />
        </div>
      </div>

      <div
        className="scroll-indicator absolute bottom-6 left-1/2 flex flex-col items-center gap-1"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span>↓</span>
      </div>
    </section>
  );
}