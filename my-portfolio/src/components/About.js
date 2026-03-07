"use client";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function CountUp({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 50;
        const increment = target / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(interval); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: "GPA",           value: 3.8, suffix: "/4.0" },
  { label: "Code Coverage", value: 95,  suffix: "%"    },
  { label: "Projects",      value: 10,  suffix: "+"    },
  { label: "Technologies",  value: 20,  suffix: "+"    },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 section-alt">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>
                I&apos;m a third-year Computer Science student at{" "}
                <strong style={{ color: "var(--text)" }}>Seneca College</strong> pursuing an
                Advanced Diploma in Computer Programming and Analysis — currently on the{" "}
                <strong style={{ color: "var(--accent)" }}>President&apos;s Honour List</strong>{" "}
                with a 3.8 GPA.
              </p>
              <p>
                Currently working as a{" "}
                <strong style={{ color: "var(--text)" }}>QA Developer Co-op</strong> at the
                Government of Ontario, where I build automated test scripts with Python &amp;
                Selenium, implement CI/CD pipelines, and collaborate across 15+ modules to
                deliver defect-free software.
              </p>
              <p>
                I have a strong foundation in OOP, data structures, algorithms, and relational
                databases — passionate about writing clean code and exploring emerging technologies.
              </p>
              <div className="pt-4">
                <a href="#contact" className="btn-primary" style={{ width: "fit-content" }}>
                  Get in touch →
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <h3 className="font-semibold text-lg mb-5" style={{ color: "var(--text)" }}>Education</h3>
              <div
                className="rounded-xl p-5 mb-8"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderLeft: "3px solid var(--accent)" }}
              >
                <p className="font-semibold" style={{ color: "var(--text)" }}>
                  Advanced Diploma — Computer Programming &amp; Analysis
                </p>
                <p className="text-sm mt-1 font-medium" style={{ color: "var(--accent)" }}>
                  Seneca College · Toronto, ON
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)", opacity: 0.75 }}>
                  Jan 2024 – Aug 2027 (Expected)
                </p>
                <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                  Relevant: Data Structures &amp; Algorithms · OOP · Database Development · Web Services · Cloud Computing
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="card stat-card text-center">
                    <p className="text-2xl font-extrabold gradient-text">
                      <CountUp target={stat.value} suffix={stat.suffix} duration={1600 + i * 200} />
                    </p>
                    <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}