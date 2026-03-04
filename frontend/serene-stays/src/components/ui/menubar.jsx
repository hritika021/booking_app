import React, { useState } from "react";

export function Menubar({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex gap-2 border rounded-md p-2 bg-white">
      {items.map((menu, i) => (
        <div key={i} className="relative">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="px-3 py-1 text-sm font-medium hover:bg-gray-100 rounded"
          >
            {menu.label}
          </button>

          {openIndex === i && (
            <div className="absolute mt-1 w-40 border rounded-md bg-white shadow-md">
              {menu.items.map((item, j) => (
                <div
                  key={j}
                  onClick={item.onClick}
                  className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}