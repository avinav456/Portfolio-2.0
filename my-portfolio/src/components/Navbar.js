"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [dark,     setDark]     = useState(() => {
    if (typeof window === "undefined") return true;
    return (localStorage.getItem("theme") || "dark") === "dark";
  });
  const [active,   setActive]   = useState("");
  const [scrolled, setScrolled] = useState(false);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
      let current = "";
      for (const { href } of links) {
        const el = document.getElementById(href.slice(1));
        if (el && window.scrollY >= el.offsetTop - 110) current = href.slice(1);
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        background: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
      className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" style={{ color: "var(--text)" }} className="text-xl font-extrabold">
          Avinav<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-muted)",
                    background: isActive ? "var(--accent-light)" : "transparent",
                  }}
                  className="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 hover:opacity-75"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{ border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-base cursor-pointer hover:opacity-70 transition-opacity"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            className="md:hidden text-lg font-bold cursor-pointer"
            style={{ color: "var(--text)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}
          className="md:hidden px-6 py-4 flex flex-col gap-1"
        >
          {links.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  background: isActive ? "var(--accent-light)" : "transparent",
                }}
                className="px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-150"
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}