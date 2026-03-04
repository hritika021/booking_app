import React, { useState } from "react";

export function NavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <h1 className="text-lg font-semibold">Serene Stays</h1>

      <div className="flex items-center gap-6">
        <a href="/" className="text-sm hover:underline">Home</a>
        <a href="/hotels" className="text-sm hover:underline">Hotels</a>
        <a href="/about" className="text-sm hover:underline">About</a>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="text-sm hover:underline"
          >
            More
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-md">
              <a className="block px-3 py-2 text-sm hover:bg-gray-100">Contact</a>
              <a className="block px-3 py-2 text-sm hover:bg-gray-100">Help</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}