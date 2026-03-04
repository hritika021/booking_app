import React, { useState } from "react";

export function Collapsible({ title, children, className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`w-full ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-2 font-medium hover:underline"
      >
        {title}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}