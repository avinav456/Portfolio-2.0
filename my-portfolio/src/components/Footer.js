export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 px-6"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="section-label">Get in touch</p>
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-4"
          style={{ color: "var(--text)" }}
        >
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
          I&apos;m always open to new opportunities, collaborations, or just a
          good conversation about tech.
        </p>

        <a href="mailto:avinav@example.com" className="btn-primary mb-14 mx-auto">
          Say Hello →
        </a>

        <div className="flex justify-center gap-8 mt-14 mb-10">
          {[
            { label: "GitHub",   href: "https://github.com",       ext: true },
            { label: "LinkedIn", href: "https://linkedin.com",      ext: true },
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

        <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
          &copy; {new Date().getFullYear()} Avinav. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
