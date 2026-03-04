import React, { useState } from "react";

export function ContextMenu({ children, menu }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleContextMenu(e) {
    e.preventDefault();
    setVisible(true);
    setPosition({ x: e.pageX, y: e.pageY });
  }

  function closeMenu() {
    setVisible(false);
  }

  return (
    <div onContextMenu={handleContextMenu} onClick={closeMenu} className="relative">
      {children}

      {visible && (
        <div
          style={{ top: position.y, left: position.x }}
          className="absolute z-50 w-40 rounded-md border bg-white shadow-md"
        >
          {menu.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}