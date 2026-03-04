import React from "react";

export function Avatar({ src, alt, fallback, className = "" }) {
  return (
    <div
      className={`relative flex h-10 w-10 overflow-hidden rounded-full ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-sm font-medium">
          {fallback}
        </div>
      )}
    </div>
  );
}