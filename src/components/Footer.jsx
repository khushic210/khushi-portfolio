import React from "react";
import SocialRow from "./SocialRow.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; Developed by <span className="grad-text">Khushi Chaurasia</span>
      </p>
      <SocialRow size="sm" />
    </footer>
  );
}
