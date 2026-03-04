import { useState, useEffect } from "react";

export function Toggle({ pressed = false, onChange, className = "", children }) {
  const [active, setActive] = useState(pressed);

  useEffect(() => {
    setActive(pressed);
  }, [pressed]);

  function handleClick() {
    const newValue = !active;
    setActive(newValue);
    onChange?.(newValue);
  }

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1.5 rounded-md text-sm border transition ${
        active ? "bg-blue-500 text-white" : "bg-gray-100"
      } ${className}`}
    >
      {children}
    </button>
  );
}