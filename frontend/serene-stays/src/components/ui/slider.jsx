import { useState, useEffect } from "react";

export function Slider({
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  className = "",
  ...props
}) {
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  function handleChange(e) {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    onChange?.(newValue);
  }

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={sliderValue}
      onChange={handleChange}
      className={`w-full h-2 bg-gray-200 rounded-lg cursor-pointer ${className}`}
      {...props}
    />
  );
}