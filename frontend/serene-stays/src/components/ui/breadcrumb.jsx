import React from "react";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center text-sm text-gray-500">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index !== 0 && <ChevronRight className="mx-2 h-4 w-4" />}

          {item.href ? (
            <a
              href={item.href}
              className="hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-black font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}