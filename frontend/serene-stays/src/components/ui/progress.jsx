import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({ page, totalPages, onChange }) {
  function prev() {
    if (page > 1) onChange(page - 1);
  }

  function next() {
    if (page < totalPages) onChange(page + 1);
  }

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onChange(i)}
        className={`h-9 w-9 rounded border text-sm ${
          page === i ? "bg-black text-white" : "hover:bg-gray-100"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={prev}
        className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-gray-100"
      >
        <ChevronLeft size={16} />
        Prev
      </button>

      {pages}

      <button
        onClick={next}
        className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-gray-100"
      >
        Next
        <ChevronRight size={16} />
      </button>
    </div>
  );
}