import SkullFire from "./SkullFire";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-20 pb-12 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle blue background glow (left side) */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* ── LEFT: Content ── */}
        <div className="flex-1 flex flex-col items-start text-left">

          {/* Badge */}
          <span className="tag mb-6">Open to opportunities</span>

          {/* Name */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
            style={{ color: "var(--text)" }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Avinav</span>
          </h1>

          {/* Role */}
          <p
            className="text-lg md:text-xl font-medium mb-5"
            style={{ color: "var(--text-muted)" }}
          >
            Computer Science Student &amp; QA Developer Co-op
          </p>

          {/* Description */}
          <p
            className="max-w-md text-base leading-relaxed mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            I build reliable software and automated test systems. Passionate about
            quality engineering, full-stack development, and creating meaningful
            digital experiences.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mb-10">
            <a href="#projects" className="btn-primary">View Projects ↓</a>
            <a href="#about" className="btn-outline">About Me</a>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {[
              { label: "GitHub",   href: "https://github.com",       ext: true  },
              { label: "LinkedIn", href: "https://linkedin.com",      ext: true  },
              { label: "Email",    href: "mailto:avinav@example.com", ext: false },
            ].map(({ label, href, ext }) => (
              <a
                key={label}
                href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                className="text-sm font-medium transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Skull with fire ── */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <SkullFire />
        </div>

      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span>↓</span>
      </div>
    </section>
  );
}
