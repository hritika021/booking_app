import React from "react";

export function Separator({ orientation = "horizontal", className = "" }) {
  return (
    <div
      className={`bg-gray-300 ${
        orientation === "horizontal"
          ? "w-full h-px"
          : "h-full w-px"
      } ${className}`}
    />
  );
}