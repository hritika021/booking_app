import React from "react";

export function AspectRatio({ ratio = 1, className = "", children }) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
    >
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}