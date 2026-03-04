import React from "react";

export function RadioGroup({ name, options, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="h-4 w-4 accent-black"
          />
          <span className="text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
}