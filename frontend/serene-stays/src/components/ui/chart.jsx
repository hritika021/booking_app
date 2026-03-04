import React from "react";

export function Chart({ className = "", children, ...props }) {
  return (
    <div className={`w-full h-full ${className}`} {...props}>
      {children}
    </div>
  );
}

export function ChartTooltip({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-md border bg-white p-2 text-sm shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}