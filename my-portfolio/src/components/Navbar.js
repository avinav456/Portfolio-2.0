"use client";
import { useState } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Leadership", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-white">
          Avinav<span className="text-blue-500">.</span>
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black px-6 pb-4 flex flex-col gap-4">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white text-sm"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
