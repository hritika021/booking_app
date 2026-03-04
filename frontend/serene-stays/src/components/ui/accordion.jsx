import React, { useState } from "react";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between py-4 font-medium hover:underline"
          >
            {item.title}

            <span
              className={`transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 pb-4" : "max-h-0"
            }`}
          >
            <p className="text-sm">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}