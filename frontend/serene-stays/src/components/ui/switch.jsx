import { useState, useEffect } from "react";

export function Switch({ checked = false, onChange, className = "" }) {
  const [isOn, setIsOn] = useState(checked);

  useEffect(() => {
    setIsOn(checked);
  }, [checked]);

  function toggle() {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  }

  return (
    <button
      onClick={toggle}
      className={`w-11 h-6 flex items-center rounded-full p-1 transition ${
        isOn ? "bg-blue-500" : "bg-gray-300"
      } ${className}`}
    >
      <div
        className={`h-4 w-4 bg-white rounded-full shadow transition ${
          isOn ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

