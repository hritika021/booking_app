import React from "react";

export function Input({ type = "text", className = "", ...props }) {
  return (
    <input
      type={type}
      className={`w-full h-10 px-3 py-2 text-sm border rounded-md outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
}