import React, { useState } from "react";

export function InputOTP({ length = 6, onChange }) {
  const [values, setValues] = useState(Array(length).fill(""));

  function handleChange(value, index) {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    onChange?.(newValues.join(""));
  }

  return (
    <div className="flex gap-2">
      {values.map((v, i) => (
        <input
          key={i}
          value={v}
          onChange={(e) => handleChange(e.target.value, i)}
          maxLength={1}
          className="w-10 h-10 text-center border rounded-md"
        />
      ))}
    </div>
  );
}