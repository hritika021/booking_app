import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ children, className = "" }) {
  const [index, setIndex] = useState(0);
  const slides = React.Children.toArray(children);

  function prev() {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}