import React from "react";

export function Checkbox({ checked, onChange, className = "", ...props }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`h-4 w-4 rounded border-gray-300 accent-black ${className}`}
      {...props}
    />
  );
}