import React from "react";

export default function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="dot" />
      {children}
    </div>
  );
}
