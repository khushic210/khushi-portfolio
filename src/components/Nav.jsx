import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content.js";

export default function Nav({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">KC</span>
          <span className="brand-name">Khushi Chaurasia</span>
        </button>

        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className="nav-link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          {NAV_LINKS.map((l) => (
            <button key={l.id} className="nav-mobile-link" onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
