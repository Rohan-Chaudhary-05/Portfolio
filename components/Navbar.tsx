"use client";

import { useState, useEffect } from "react";
import { personal } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Single effect: one scroll listener + IntersectionObservers (not scroll-based)
  useEffect(() => {
    // Scroll listener for frosted-glass threshold
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });

    // IntersectionObserver for active section (no scroll listener needed)
    const sectionIds = ["hero", ...navLinks.map((l) => l.id)];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Name */}
        <button
          onClick={() => smoothScrollTo("hero")}
          style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
          className="font-semibold text-base tracking-tight text-text-primary hover:text-accent transition-colors"
        >
          {personal.name}
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => smoothScrollTo(link.id)}
                  className={`text-sm transition-all duration-200 ${
                    isActive
                      ? "text-accent drop-shadow-[0_0_8px_rgba(6,182,212,0.7)]"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => smoothScrollTo("contact")}
              className="text-sm px-4 py-2 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-white hover:shadow-[0_0_16px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              Hire me
            </button>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/rohan-chaudhary-"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-surface/95 backdrop-blur-xl px-6 pb-6 flex flex-col gap-4 border-t border-border">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => { smoothScrollTo(link.id); setMenuOpen(false); }}
                className={`block pt-4 text-sm transition-colors ${
                  activeSection === link.id
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => { smoothScrollTo("contact"); setMenuOpen(false); }}
              className="inline-block text-sm px-5 py-2 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-white transition-all duration-300"
            >
              Hire me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
