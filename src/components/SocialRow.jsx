import React from "react";
import { SOCIALS } from "../data/content.js";

export default function SocialRow({ size = "md" }) {
  return (
    <div className={`social-row social-${size}`}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label={s.label}
          title={s.label}
        >
          {s.icon === "LC" ? (
            <span className="lc-badge">LC</span>
          ) : (
            <s.icon size={size === "sm" ? 16 : 18} strokeWidth={1.8} />
          )}
        </a>
      ))}
    </div>
  );
}
