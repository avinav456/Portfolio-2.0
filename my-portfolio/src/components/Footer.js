"use client";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { label: "GitHub",    href: "https://github.com/avinav456",                 ext: true  },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/avinav-a49142245", ext: true  },
  { label: "Email",     href: "mailto:avinavg456@gmail.com",                   ext: false },
  { label: "Portfolio", href: "https://portfolio-website-58v9.vercel.app/",   ext: true  },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="section-label">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ color: "var(--text)" }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base mb-10 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            I&apos;m actively looking for internship and co-op opportunities. Whether you have a
            question, an offer, or just want to talk tech — I&apos;d love to hear from you.
          </p>
          <a href="mailto:avinavg456@gmail.com" className="btn-primary mb-14 mx-auto">
            Say Hello → avinavg456@gmail.com
          </a>
          <div className="flex justify-center gap-8 mt-14 mb-10 flex-wrap">
            {socials.map(({ label, href, ext }) => (
              <a key={label} href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                className="text-sm font-medium transition-all duration-200 hover:opacity-60 hover:-translate-y-0.5"
                style={{ color: "var(--text-muted)" }}>
                {label}
              </a>
            ))}
          </div>
          <p style={{ color: "var(--text-muted)", opacity: 0.4 }} className="text-xs">
            &copy; {new Date().getFullYear()} Avinav · Toronto, ON · Built with Next.js &amp; Tailwind CSS
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}