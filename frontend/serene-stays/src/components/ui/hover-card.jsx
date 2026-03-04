import { useState } from "react";

export function HoverCard({ children, content, className }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md">
          {content}
        </div>
      )}
    </div>
  );
}
