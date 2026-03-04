import React, { useState } from "react";

export function Command({ items = [], onSelect }) {
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-md rounded-md border bg-white shadow">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border-b px-3 py-2 text-sm outline-none"
      />

      <div className="max-h-60 overflow-y-auto">
        {filtered.length === 0 && (
          <div className="p-4 text-center text-sm text-gray-500">
            No results found
          </div>
        )}

        {filtered.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelect?.(item)}
            className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}