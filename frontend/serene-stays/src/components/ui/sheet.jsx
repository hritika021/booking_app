import React from "react";
import { X } from "lucide-react";

export function Sheet({ open, onClose, children, side = "right" }) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed z-50 bg-white shadow-lg p-6 transition ${
          side === "right" ? "top-0 right-0 h-full w-80" :
          side === "left" ? "top-0 left-0 h-full w-80" :
          side === "top" ? "top-0 left-0 w-full h-60" :
          "bottom-0 left-0 w-full h-60"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X size={18} />
        </button>

        {children}
      </div>
    </>
  );
}