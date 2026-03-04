import React from "react";

export function Sidebar({ children }) {
  return (
    <aside className="w-64 h-screen bg-white border-r p-4">
      {children}
    </aside>
  );
}

export function SidebarItem({ icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-3 w-full p-2 rounded-md text-sm ${
        active ? "bg-gray-200 font-medium" : "hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}