import { useEffect, useState } from "react";
import { navLinks, profile } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--line-strong)] bg-black/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo / handle */}
        <a href="#top" className="group flex items-center gap-2 font-mono">
          <span className="flex h-8 w-8 items-center justify-center border border-[var(--line-strong)] text-teal transition-colors group-hover:bg-[rgba(47,187,168,0.12)]">
            &gt;_
          </span>
          <span className="text-sm font-bold tracking-widest text-[var(--text)]">
            {profile.handle}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-3 py-2 font-mono text-xs uppercase tracking-widest text-dim transition-colors hover:text-teal-bright"
            >
              <span className="text-teal opacity-0 transition-opacity group-hover:opacity-100">
                [
              </span>
              {l.label}
              <span className="text-teal opacity-0 transition-opacity group-hover:opacity-100">
                ]
              </span>
            </a>
          ))}
        </div>

        {/* Right status */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 font-mono text-[0.65rem] tracking-widest text-dim lg:flex">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[var(--teal-bright)]" />
            SYSTEM_STATUS: ONLINE
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-[var(--line-strong)] md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-4 bg-teal transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`h-px w-4 bg-teal transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-4 bg-teal transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--line)] bg-black/95 px-5 py-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[var(--line)] py-3 font-mono text-sm uppercase tracking-widest text-dim last:border-0 hover:text-teal-bright"
            >
              <span className="text-teal">{"//"}</span> {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
